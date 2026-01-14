import axios from "axios";
import SecureStorage from "@/utils/secureStorage";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request interceptor to add auth token
apiClient.interceptors.request.use(
  async (config) => {
    try {
      const authData = await SecureStorage.getItem("auth_session");
      if (authData?.token) {
        config.headers.Authorization = `Bearer ${authData.token}`;
      }
    } catch (error) {
      console.error("Failed to get auth token:", error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token expiration and errors
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Try to refresh token
        const authData = await SecureStorage.getItem("auth_session");

        if (!authData?.token || !authData?.expires_at) {
          throw new Error("No valid auth data");
        }

        const now = new Date();
        const expiry = new Date(authData.expires_at);
        const timeUntilExpiry = expiry - now;

        // If token is not expired, retry with existing token
        if (timeUntilExpiry > 60 * 60 * 1000) {
          originalRequest.headers.Authorization = `Bearer ${authData.token}`;
          return apiClient(originalRequest);
        }

        // Try to refresh token
        const response = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/auth/refresh`,
          {},
          {
            headers: {
              Authorization: `Bearer ${authData.token}`,
            },
          }
        );

        const { token: newToken, expires_at } = response.data;

        const updatedAuthData = {
          ...authData,
          token: newToken,
          expires_at: expires_at,
        };
        await SecureStorage.setItem("auth_session", updatedAuthData);

        // Retry original request with new token
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);

        // Clear auth data and redirect to login
        try {
          await SecureStorage.removeItem("auth_session");
          localStorage.removeItem("session_active");
        } catch (e) {
          console.error("Failed to clear auth data:", e);
        }

        window.location.href = "/login";
        return Promise.reject(error);
      }
    }

    if (error.response?.status === 422) {
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default apiClient;
