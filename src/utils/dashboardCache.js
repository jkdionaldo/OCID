import { compress, decompress } from "lz-string";

const CACHE_KEY = "dashboard_data_cache";
const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes
const CACHE_VERSION = "v6_force_refresh"; // Updated version

export class DashboardCache {
  static compress(data) {
    try {
      const jsonString = JSON.stringify(data);
      return compress(jsonString);
    } catch (error) {
      console.error("Compression failed:", error);
      return JSON.stringify(data);
    }
  }

  static decompress(data) {
    try {
      const decompressed = decompress(data);
      return decompressed ? JSON.parse(decompressed) : JSON.parse(data);
    } catch (error) {
      console.error("Decompression failed:", error);
      return JSON.parse(data);
    }
  }

  static get(bypassCache = false) {
    if (bypassCache) return null; // Force bypass cache

    try {
      const cached =
        sessionStorage.getItem(CACHE_KEY) || localStorage.getItem(CACHE_KEY);
      if (!cached) return null;

      const data = this.decompress(cached);
      const now = Date.now();

      if (data.expires < now || data.version !== CACHE_VERSION || !data.data) {
        this.clear();
        return null;
      }

      return data.data;
    } catch (error) {
      console.error("Cache read error:", error);
      this.clear();
      return null;
    }
  }

  static set(data) {
    try {
      const cacheData = {
        data,
        expires: Date.now() + CACHE_DURATION,
        version: CACHE_VERSION,
        timestamp: Date.now(),
      };

      const compressed = this.compress(cacheData);

      // Try sessionStorage first (faster), fallback to localStorage
      try {
        sessionStorage.setItem(CACHE_KEY, compressed);
      } catch (sessionError) {
        localStorage.setItem(CACHE_KEY, compressed);
      }
    } catch (error) {
      console.error("Cache write error:", error);
      if (error.name === "QuotaExceededError") {
        this.clear();
        try {
          const compressed = this.compress(cacheData);
          localStorage.setItem(CACHE_KEY, compressed);
        } catch (retryError) {
          console.error("Cache retry failed:", retryError);
        }
      }
    }
  }

  static clear() {
    try {
      sessionStorage.removeItem(CACHE_KEY);
      localStorage.removeItem(CACHE_KEY);
      // Also clear any related cache keys
      const keysToRemove = [];
      for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        if (key && key.startsWith("dashboard_")) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach((key) => {
        sessionStorage.removeItem(key);
        localStorage.removeItem(key);
      });
    } catch (error) {
      console.error("Cache clear error:", error);
    }
  }

  static forceRefresh() {
    this.clear();
    // Add a timestamp to force backend cache bypass
    return Date.now();
  }

  static isValid() {
    const cached = this.get();
    return cached !== null;
  }

  static getCacheTimestamp() {
    try {
      const cached =
        sessionStorage.getItem(CACHE_KEY) || localStorage.getItem(CACHE_KEY);
      if (!cached) return 0;
      const data = this.decompress(cached);
      return data.timestamp || 0;
    } catch {
      return 0;
    }
  }

  static getCacheSize() {
    try {
      const cached =
        sessionStorage.getItem(CACHE_KEY) || localStorage.getItem(CACHE_KEY);
      return cached ? (cached.length / 1024).toFixed(2) + " KB" : "0 KB";
    } catch {
      return "0 KB";
    }
  }
}
