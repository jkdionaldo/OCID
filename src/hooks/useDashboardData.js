import { useState, useEffect, useCallback, useRef } from "react";
import { dashboardApi } from "../services/api/dashboardApi";
import { DashboardCache } from "../utils/dashboardCache";
import { useCollegeManagement } from "./useCollegeManagement";
import { useProgramManagement } from "./useProgramManagement";
import { useFileManagement } from "./useFileManagement";
import { transformFilesData } from "../utils/dataTransformers";

// Global request deduplication with better error handling
const activeRequests = new Map();

export const useDashboardData = () => {
  const [data, setData] = useState({
    campuses: [],
    colleges: [],
    curriculum: [],
    syllabus: [],
    undergrads: [],
    graduates: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastFetch, setLastFetch] = useState(null);
  const [cacheInfo, setCacheInfo] = useState(null);

  // Use ref to prevent multiple simultaneous requests
  const fetchInProgress = useRef(false);
  const abortController = useRef(null);
  const retryCount = useRef(0);
  const maxRetries = 3;

  // Optimistic update helper with debouncing
  const updateDataOptimistically = useCallback((updater) => {
    setData((prevData) => {
      const newData = updater(prevData);
      // Update cache with new data (debounced)
      setTimeout(() => DashboardCache.set(newData), 100);
      return newData;
    });
  }, []);

  const fetchAllData = useCallback(async (forceRefresh = false) => {
    const requestKey = `dashboard_${forceRefresh}`;

    // Check if same request is already in progress
    if (activeRequests.has(requestKey)) {
      return activeRequests.get(requestKey);
    }

    // Cancel any ongoing request
    if (abortController.current) {
      abortController.current.abort();
    }

    // Prevent multiple simultaneous requests
    if (fetchInProgress.current && !forceRefresh) {
      return;
    }

    const requestPromise = (async () => {
      try {
        setError(null);

        // Try to get cached data first (unless force refresh)
        if (!forceRefresh) {
          const cachedData = DashboardCache.get();
          if (cachedData) {
            setData(cachedData);
            setLoading(false);
            setLastFetch(Date.now());
            setCacheInfo({
              source: "cache",
              size: DashboardCache.getCacheSize(),
              timestamp: DashboardCache.getCacheTimestamp(),
            });
            return cachedData;
          }
        }

        setLoading(true);
        fetchInProgress.current = true;
        abortController.current = new AbortController();

        const startTime = performance.now();

        // Use the optimized dashboard endpoint with better error handling
        const response = await dashboardApi.getAll({
          signal: abortController.current.signal,
          headers: {
            "Accept-Encoding": "gzip, deflate",
            "Cache-Control": forceRefresh ? "no-cache" : "max-age=300",
          },
          params: {
            force_refresh: forceRefresh,
          },
        });

        const endTime = performance.now();
        console.log(`Dashboard fetch took ${endTime - startTime} milliseconds`);

        const dashboardData = response.data.data || response.data;

        const normalizedData = {
          campuses: dashboardData.campuses || [],
          colleges: dashboardData.colleges || [],
          curriculum: dashboardData.curriculum || [],
          syllabus: dashboardData.syllabus || [],
          undergrads: dashboardData.undergrads || [],
          graduates: dashboardData.graduates || [],
          forms: dashboardData.forms || [],
        };

        setData(normalizedData);
        setLastFetch(Date.now());
        setCacheInfo({
          source: "api",
          size: DashboardCache.getCacheSize(),
          timestamp: Date.now(),
          fetchTime: `${(endTime - startTime).toFixed(2)}ms`,
        });

        // Cache the normalized data
        DashboardCache.set(normalizedData);

        // Reset retry count on successful fetch
        retryCount.current = 0;

        return normalizedData;
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Request was cancelled");
          return;
        }

        console.error("Error fetching dashboard data:", err);

        // Handle different types of errors
        let errorMessage = "Failed to fetch dashboard data";

        if (err.response?.status === 500) {
          errorMessage = "Server error occurred. Please try again later.";
        } else if (err.response?.status === 401) {
          errorMessage = "Authentication failed. Please log in again.";
        } else if (err.response?.status === 403) {
          errorMessage =
            "Access denied. You don't have permission to view this data.";
        } else if (err.code === "NETWORK_ERROR" || !navigator.onLine) {
          errorMessage = "Network error. Please check your connection.";
        }

        setError(errorMessage);

        // Try to use cached data as fallback
        const cachedData = DashboardCache.get();
        if (cachedData) {
          setData(cachedData);
          setCacheInfo({
            source: "cache_fallback",
            size: DashboardCache.getCacheSize(),
            timestamp: DashboardCache.getCacheTimestamp(),
          });
          console.log("Using cached data as fallback");
        }

        // Implement exponential backoff for retries
        if (retryCount.current < maxRetries && err.response?.status >= 500) {
          retryCount.current++;
          const retryDelay = Math.pow(2, retryCount.current) * 1000; // 2s, 4s, 8s

          console.log(
            `Retrying in ${retryDelay}ms (attempt ${retryCount.current}/${maxRetries})`
          );

          setTimeout(() => {
            fetchAllData(forceRefresh);
          }, retryDelay);
        }
      } finally {
        setLoading(false);
        fetchInProgress.current = false;
        abortController.current = null;
        activeRequests.delete(requestKey);
      }
    })();

    activeRequests.set(requestKey, requestPromise);
    return requestPromise;
  }, []);

  // Use modular management hooks
  const collegeManagement = useCollegeManagement(
    updateDataOptimistically,
    setError
  );
  const programManagement = useProgramManagement(
    updateDataOptimistically,
    setError
  );
  const fileManagement = useFileManagement(updateDataOptimistically, setError);

  // Transform data for easy consumption
  const transformedFiles = transformFilesData(data.curriculum, data.syllabus);

  // Auto-fetch on mount with improved cache strategy
  useEffect(() => {
    const initializeData = async () => {
      if (!DashboardCache.isValid()) {
        await fetchAllData();
      } else {
        // Load from cache immediately
        const cachedData = DashboardCache.get();
        if (cachedData) {
          setData(cachedData);
          setLoading(false);
          setLastFetch(Date.now());
          setCacheInfo({
            source: "cache_initial",
            size: DashboardCache.getCacheSize(),
            timestamp: DashboardCache.getCacheTimestamp(),
          });

          // Fetch fresh data in background if cache is older than 5 minutes
          const cacheAge = Date.now() - DashboardCache.getCacheTimestamp();
          if (cacheAge > 5 * 60 * 1000) {
            fetchAllData(true);
          }
        }
      }
    };

    initializeData();
  }, [fetchAllData]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (abortController.current) {
        abortController.current.abort();
      }
      // Clear active requests for this component
      for (const [key] of activeRequests) {
        if (key.startsWith("dashboard_")) {
          activeRequests.delete(key);
        }
      }
    };
  }, []);

  return {
    data,
    loading,
    error,
    lastFetch,
    cacheInfo,
    refetch: (forceRefresh = false) => fetchAllData(forceRefresh),
    clearCache: () => {
      DashboardCache.clear();
      setCacheInfo(null);
    },
    // Computed/transformed data
    colleges: data.colleges,
    files: transformedFiles,
    // College management functions
    createCollege: collegeManagement.createCollege,
    updateCollege: collegeManagement.updateCollege,
    deleteCollege: collegeManagement.deleteCollege,
    // Program management functions
    createProgram: programManagement.createProgram,
    updateProgram: programManagement.updateProgram,
    deleteProgram: programManagement.deleteProgram,
    // File management functions
    uploadFile: fileManagement.uploadFile,
    deleteFile: fileManagement.deleteFile,
    // Cache utilities
    isCacheValid: () => DashboardCache.isValid(),
    updateDataOptimistically,
  };
};
