class SecureStorage {
  // Generate a key from password using PBKDF2
  static async generateKey(password, salt) {
    const encoder = new TextEncoder();
    const keyMaterial = await window.crypto.subtle.importKey(
      "raw",
      encoder.encode(password),
      { name: "PBKDF2" },
      false,
      ["deriveBits", "deriveKey"]
    );

    return window.crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: salt,
        iterations: 100000,
        hash: "SHA-256",
      },
      keyMaterial,
      { name: "AES-GCM", length: 256 },
      true,
      ["encrypt", "decrypt"]
    );
  }

  // Get or create encryption key
  static async getEncryptionKey() {
    const password = await this.getStableDeviceFingerprint();
    const salt = await this.getSalt();
    return this.generateKey(password, salt);
  }

  // Get stable device fingerprint using only stable characteristics
  static async getStableDeviceFingerprint() {
    // Use only stable characteristics that don't change with DevTools
    const stableFingerprint = [
      // Core browser info (stable)
      navigator.userAgent.split(" ")[0], // Just the main browser identifier
      navigator.language,
      navigator.platform,
      new Date().getTimezoneOffset(),
      navigator.cookieEnabled.toString(),

      // Use a stored device ID instead of volatile characteristics
      await this.getOrCreateDeviceId(),

      // Optional: Add domain as part of fingerprint for isolation
      window.location.hostname,
    ].join("|");

    return stableFingerprint;
  }

  // Get or create a unique device ID
  static async getOrCreateDeviceId() {
    let deviceId = localStorage.getItem("_device_id");

    if (!deviceId) {
      // Generate a unique device ID
      const array = new Uint8Array(16);
      window.crypto.getRandomValues(array);
      deviceId = Array.from(array, (byte) =>
        byte.toString(16).padStart(2, "0")
      ).join("");

      localStorage.setItem("_device_id", deviceId);
    }

    return deviceId;
  }

  // Fallback fingerprints for backward compatibility
  static getBackwardCompatibleFingerprints() {
    return [
      // Original implementation for existing users
      [
        navigator.userAgent,
        navigator.language,
        this.getStableScreenDimensions(),
        new Date().getTimezoneOffset(),
        navigator.hardwareConcurrency || "unknown",
        this.getPlatformInfo(),
        navigator.cookieEnabled.toString(),
      ].join("|"),

      // Legacy implementation
      [
        navigator.userAgent,
        navigator.language,
        screen.width + "x" + screen.height,
        new Date().getTimezoneOffset(),
        navigator.hardwareConcurrency || "unknown",
        navigator.deviceMemory || "unknown",
        navigator.platform,
        navigator.cookieEnabled.toString(),
      ].join("|"),
    ];
  }

  // Get platform information using modern API with fallbacks
  static getPlatformInfo() {
    if (navigator.userAgentData && navigator.userAgentData.platform) {
      return navigator.userAgentData.platform;
    }

    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("win")) return "Windows";
    if (userAgent.includes("mac")) return "macOS";
    if (userAgent.includes("linux")) return "Linux";
    if (userAgent.includes("android")) return "Android";
    if (userAgent.includes("iphone") || userAgent.includes("ipad"))
      return "iOS";

    return "Unknown";
  }

  // Get stable screen dimensions (not affected by DevTools)
  static getStableScreenDimensions() {
    // Use the maximum available screen space
    const width = Math.max(
      screen.width,
      screen.availWidth,
      window.screen?.width || 0
    );
    const height = Math.max(
      screen.height,
      screen.availHeight,
      window.screen?.height || 0
    );
    return `${width}x${height}`;
  }

  // Generate device fingerprint for encryption key
  static async getDeviceFingerprint() {
    const fingerprint = [
      navigator.userAgent,
      navigator.language,
      this.getStableScreenDimensions(),
      new Date().getTimezoneOffset(),
      navigator.hardwareConcurrency || "unknown",
      // Remove deviceMemory as it can be unreliable
      this.getPlatformInfo(),
      navigator.cookieEnabled.toString(),
    ].join("|");

    return fingerprint;
  }

  // Generate legacy fingerprint for backward compatibility
  static getLegacyDeviceFingerprint() {
    const fingerprint = [
      navigator.userAgent,
      navigator.language,
      screen.width + "x" + screen.height,
      new Date().getTimezoneOffset(),
      navigator.hardwareConcurrency || "unknown",
      navigator.deviceMemory || "unknown",
      navigator.platform,
      navigator.cookieEnabled.toString(),
    ].join("|");

    return fingerprint;
  }

  // Generate alternative fingerprint variations for fallback
  static getAlternativeFingerprints() {
    const base = [
      navigator.userAgent,
      navigator.language,
      new Date().getTimezoneOffset(),
      navigator.hardwareConcurrency || "unknown",
      this.getPlatformInfo(),
      navigator.cookieEnabled.toString(),
    ];

    return [
      // Variation 1: with deviceMemory
      [
        ...base,
        navigator.deviceMemory || "unknown",
        screen.width + "x" + screen.height,
      ].join("|"),
      // Variation 2: with stable dimensions
      [...base, this.getStableScreenDimensions()].join("|"),
      // Variation 3: with original screen dimensions
      [...base, screen.width + "x" + screen.height].join("|"),
      // Variation 4: legacy with navigator.platform
      [
        navigator.userAgent,
        navigator.language,
        screen.width + "x" + screen.height,
        new Date().getTimezoneOffset(),
        navigator.hardwareConcurrency || "unknown",
        navigator.deviceMemory || "unknown",
        navigator.platform,
        navigator.cookieEnabled.toString(),
      ].join("|"),
    ];
  }

  // Get or generate salt for key derivation
  static async getSalt() {
    let salt = localStorage.getItem("_sec_salt");
    if (!salt) {
      const saltArray = window.crypto.getRandomValues(new Uint8Array(16));
      salt = Array.from(saltArray, (byte) =>
        byte.toString(16).padStart(2, "0")
      ).join("");
      localStorage.setItem("_sec_salt", salt);
    }
    return new Uint8Array(
      salt.match(/.{1,2}/g).map((byte) => parseInt(byte, 16))
    );
  }

  // Validate encrypted data format
  static isValidEncryptedData(encryptedData) {
    if (!encryptedData || typeof encryptedData !== "string") {
      return false;
    }

    try {
      // Check if it's valid base64
      const decoded = atob(encryptedData);
      // Should have at least 12 bytes for IV + some encrypted data
      return decoded.length > 12;
    } catch {
      return false;
    }
  }

  // Encrypt data using AES-GCM
  static async encrypt(data) {
    try {
      const key = await this.getEncryptionKey();
      const encoder = new TextEncoder();
      const dataBuffer = encoder.encode(JSON.stringify(data));

      // Generate random IV for each encryption
      const iv = window.crypto.getRandomValues(new Uint8Array(12));

      const encrypted = await window.crypto.subtle.encrypt(
        { name: "AES-GCM", iv: iv },
        key,
        dataBuffer
      );

      // Combine IV and encrypted data
      const combined = new Uint8Array(iv.length + encrypted.byteLength);
      combined.set(iv);
      combined.set(new Uint8Array(encrypted), iv.length);

      // Convert to base64 for storage
      return btoa(String.fromCharCode.apply(null, combined));
    } catch (error) {
      console.error("Encryption failed:", error);
      throw new Error("Failed to encrypt data");
    }
  }

  // Try to decrypt with alternative fingerprint variations
  static async decryptWithAlternativeKeys(encryptedData) {
    const alternatives = this.getAlternativeFingerprints();
    const salt = await this.getSalt();

    for (let i = 0; i < alternatives.length; i++) {
      try {
        const alternativeKey = await this.generateKey(alternatives[i], salt);

        // Convert from base64
        const combined = new Uint8Array(
          atob(encryptedData)
            .split("")
            .map((char) => char.charCodeAt(0))
        );

        // Validate minimum length
        if (combined.length < 13) {
          continue;
        }

        // Extract IV and encrypted data
        const iv = combined.slice(0, 12);
        const encrypted = combined.slice(12);

        const decrypted = await window.crypto.subtle.decrypt(
          { name: "AES-GCM", iv: iv },
          alternativeKey,
          encrypted
        );

        const decoder = new TextDecoder();
        const decryptedText = decoder.decode(decrypted);
        console.log(
          `Successfully decrypted with alternative fingerprint ${i + 1}`
        );
        return JSON.parse(decryptedText);
      } catch (error) {
        // Continue to next alternative
        continue;
      }
    }

    return null;
  }

  // Try to decrypt with legacy fingerprint
  static async decryptWithLegacyKey(encryptedData) {
    try {
      if (!this.isValidEncryptedData(encryptedData)) {
        console.warn("Invalid encrypted data format for legacy decryption");
        return null;
      }

      const legacyPassword = this.getLegacyDeviceFingerprint();
      const salt = await this.getSalt();
      const legacyKey = await this.generateKey(legacyPassword, salt);

      // Convert from base64
      const combined = new Uint8Array(
        atob(encryptedData)
          .split("")
          .map((char) => char.charCodeAt(0))
      );

      // Validate minimum length
      if (combined.length < 13) {
        console.warn("Encrypted data too short for legacy decryption");
        return null;
      }

      // Extract IV and encrypted data
      const iv = combined.slice(0, 12);
      const encrypted = combined.slice(12);

      const decrypted = await window.crypto.subtle.decrypt(
        { name: "AES-GCM", iv: iv },
        legacyKey,
        encrypted
      );

      const decoder = new TextDecoder();
      const decryptedText = decoder.decode(decrypted);
      return JSON.parse(decryptedText);
    } catch (error) {
      console.error("Legacy decryption failed:", error.name, error.message);
      return null;
    }
  }

  // Clean up corrupted storage entry
  static cleanupCorruptedEntry(key) {
    console.warn(`Removing corrupted storage entry: ${key}`);
    localStorage.removeItem(key);

    // Don't remove salt immediately for auth entries - try alternatives first
    if (key.startsWith("auth_")) {
      console.warn(
        "Auth entry failed - will try alternative keys before cleanup"
      );
    }
  }

  // Decrypt data using AES-GCM with multiple fallback strategies
  static async decrypt(encryptedData) {
    try {
      if (!this.isValidEncryptedData(encryptedData)) {
        console.warn("Invalid encrypted data format");
        return null;
      }

      // Try with current stable fingerprint first
      const key = await this.getEncryptionKey();
      const result = await this.attemptDecryption(encryptedData, key);
      if (result !== null) return result;

      console.log("Trying backward compatible fingerprints...");

      // Try backward compatible fingerprints
      const backwardFingerprints = this.getBackwardCompatibleFingerprints();
      const salt = await this.getSalt();

      for (let i = 0; i < backwardFingerprints.length; i++) {
        try {
          const backwardKey = await this.generateKey(
            backwardFingerprints[i],
            salt
          );
          const result = await this.attemptDecryption(
            encryptedData,
            backwardKey
          );

          if (result !== null) {
            console.log(
              `Successfully decrypted with backward compatible key ${i + 1}`
            );
            // Re-encrypt with new stable key for future use
            try {
              const _reEncrypted = await this.encrypt(result);
              return result;
            } catch (reEncryptError) {
              console.warn(
                "Could not re-encrypt with new key:",
                reEncryptError
              );
              return result;
            }
          }
        } catch (error) {
          continue;
        }
      }

      return null;
    } catch (error) {
      console.error("Decryption failed:", error.name, error.message);
      return null;
    }
  }

  static async attemptDecryption(encryptedData, key) {
    try {
      const combined = new Uint8Array(
        atob(encryptedData)
          .split("")
          .map((char) => char.charCodeAt(0))
      );

      if (combined.length < 13) return null;

      const iv = combined.slice(0, 12);
      const encrypted = combined.slice(12);

      const decrypted = await window.crypto.subtle.decrypt(
        { name: "AES-GCM", iv: iv },
        key,
        encrypted
      );

      const decoder = new TextDecoder();
      const decryptedText = decoder.decode(decrypted);
      return JSON.parse(decryptedText);
    } catch (error) {
      return null;
    }
  }

  // Store encrypted data
  static async setItem(key, data) {
    try {
      const encrypted = await this.encrypt(data);
      localStorage.setItem(key, encrypted);
    } catch (error) {
      console.error("Failed to store encrypted data:", error);
      throw new Error("Failed to store data securely");
    }
  }

  // Retrieve and decrypt data
  static async getItem(key) {
    try {
      const encrypted = localStorage.getItem(key);
      if (!encrypted) return null;

      const decryptedData = await this.decrypt(encrypted);

      if (decryptedData === null) {
        console.warn(`Failed to decrypt ${key}, treating as corrupted`);
        return null;
      }

      return decryptedData;
    } catch (error) {
      console.error("Failed to retrieve encrypted data:", error);
      return null;
    }
  }

  // Remove encrypted data
  static removeItem(key) {
    localStorage.removeItem(key);
  }

  // Clear all secure storage data
  static clear() {
    const keys = Object.keys(localStorage);
    keys.forEach((key) => {
      if (
        key.startsWith("auth_") ||
        key === "_sec_salt" ||
        key === "session_active" ||
        key === "_device_id"
      ) {
        localStorage.removeItem(key);
      }
    });
  }

  // Validate data integrity
  static async validateIntegrity(key) {
    try {
      const data = await this.getItem(key);
      return data !== null;
    } catch {
      return false;
    }
  }

  // Force regenerate encryption key (for recovery)
  static async regenerateKey() {
    console.log("Regenerating encryption key...");
    localStorage.removeItem("_sec_salt");
    // Next encryption/decryption will use new salt and key
  }
}

export default SecureStorage;
