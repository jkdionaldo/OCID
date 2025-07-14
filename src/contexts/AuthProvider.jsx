import { useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

// Configure axios defaults
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

// Request interceptor to add auth token
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor to handle token expiration and errors
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Handle 401 Unauthorized (token expired/invalid)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Try to refresh token first
      const refreshResult = await tryRefreshToken();
      if (refreshResult.success) {
        // Retry original request with new token
        originalRequest.headers.Authorization = `Bearer ${localStorage.getItem(
          "auth_token"
        )}`;
        return axios(originalRequest);
      } else {
        // Refresh failed, logout user
        clearAuthData();
        window.location.href = "/login";
      }
    }

    // Handle other errors
    if (error.response?.status === 422) {
      // Validation errors - return for handling in components
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

// Helper function to try token refresh
const tryRefreshToken = async () => {
  try {
    const token = localStorage.getItem("auth_token");
    const expiresAt = localStorage.getItem("token_expires_at");

    if (!token || !expiresAt) return { success: false };

    // Check if token is close to expiring (within 1 hour)
    const now = new Date();
    const expiry = new Date(expiresAt);
    const timeUntilExpiry = expiry - now;

    if (timeUntilExpiry > 60 * 60 * 1000) {
      return { success: true }; // Token still valid
    }

    // Attempt refresh
    const response = await axios.post("/auth/refresh");
    const { token: newToken, expires_at } = response.data;

    localStorage.setItem("auth_token", newToken);
    localStorage.setItem("token_expires_at", expires_at);

    return { success: true };
  } catch (error) {
    console.error("Token refresh failed:", error);
    return { success: false };
  }
};

// Helper function to clear auth data
const clearAuthData = () => {
  localStorage.removeItem("auth_token");
  localStorage.removeItem("user_data");
  localStorage.removeItem("token_expires_at");
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is authenticated on app load
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("auth_token");
      const userData = localStorage.getItem("user_data");
      const expiresAt = localStorage.getItem("token_expires_at");

      if (token && userData && expiresAt) {
        try {
          // Check if token is expired
          const now = new Date();
          const expiry = new Date(expiresAt);

          if (now >= expiry) {
            // Token expired, try refresh
            const refreshResult = await tryRefreshToken();
            if (!refreshResult.success) {
              clearAuthData();
              setIsLoading(false);
              return;
            }
          }

          // Use stored user data first (faster loading)
          const parsedUser = JSON.parse(userData);
          setUser(parsedUser);
          setIsAuthenticated(true);

          // Verify token is still valid in background
          try {
            const response = await axios.get("/auth/user");
            const freshUser = response.data.user;

            // Update if user data changed
            if (JSON.stringify(parsedUser) !== JSON.stringify(freshUser)) {
              setUser(freshUser);
              localStorage.setItem("user_data", JSON.stringify(freshUser));
            }
          } catch (error) {
            // Token invalid, clear storage
            clearAuthData();
            setUser(null);
            setIsAuthenticated(false);
          }
        } catch (error) {
          clearAuthData();
        }
      }
      setIsLoading(false);
    };

    checkAuth();

    // Set up token refresh timer
    const refreshInterval = setInterval(() => {
      if (localStorage.getItem("auth_token")) {
        tryRefreshToken();
      }
    }, 5 * 60 * 1000); // Check every 5 minutes

    return () => clearInterval(refreshInterval);
  }, []);

  const login = async (credentials) => {
    try {
      setIsLoading(true);

      const response = await axios.post("/auth/login", {
        email: credentials.email,
        password: credentials.password,
        remember_me: credentials.rememberMe || false,
        device_name: navigator.userAgent || "Unknown Device",
      });

      const { user: userData, token, expires_at } = response.data;

      // Store auth data with expiration
      localStorage.setItem("auth_token", token);
      localStorage.setItem("user_data", JSON.stringify(userData));
      localStorage.setItem("token_expires_at", expires_at);

      setUser(userData);
      setIsAuthenticated(true);

      return { success: true, user: userData };
    } catch (error) {
      // Handle validation errors
      if (error.response?.status === 422) {
        const errors = error.response.data.errors;
        const message =
          errors?.email?.[0] || errors?.password?.[0] || "Invalid credentials";
        return { success: false, error: message, errors };
      }

      const message = error.response?.data?.message || "Login failed";
      return { success: false, error: message };
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData) => {
    try {
      setIsLoading(true);

      const response = await axios.post("/auth/register", {
        name: userData.name,
        email: userData.email,
        password: userData.password,
        password_confirmation: userData.passwordConfirmation,
        device_name: navigator.userAgent || "Unknown Device",
      });

      const { user: newUser, token, expires_at } = response.data;

      // Store auth data with expiration
      localStorage.setItem("auth_token", token);
      localStorage.setItem("user_data", JSON.stringify(newUser));
      localStorage.setItem("token_expires_at", expires_at);

      setUser(newUser);
      setIsAuthenticated(true);

      return { success: true, user: newUser, message: response.data.message };
    } catch (error) {
      // Handle validation errors
      if (error.response?.status === 422) {
        const errors = error.response.data.errors;
        return { success: false, error: "Validation failed", errors };
      }

      const message = error.response?.data?.message || "Registration failed";
      return { success: false, error: message };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await axios.post("/auth/logout");
    } catch (error) {
      console.error("Logout API call failed:", error);
    } finally {
      clearAuthData();
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  const logoutAll = async () => {
    try {
      await axios.post("/auth/logout-all");
    } catch (error) {
      console.error("Logout all API call failed:", error);
    } finally {
      clearAuthData();
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  const updateProfile = async (profileData) => {
    try {
      const response = await axios.put("/auth/profile", profileData);
      const updatedUser = response.data.user;

      setUser(updatedUser);
      localStorage.setItem("user_data", JSON.stringify(updatedUser));

      return {
        success: true,
        user: updatedUser,
        message: response.data.message,
      };
    } catch (error) {
      // Handle validation errors
      if (error.response?.status === 422) {
        const errors = error.response.data.errors;
        return { success: false, error: "Validation failed", errors };
      }

      const message = error.response?.data?.message || "Profile update failed";
      return { success: false, error: message };
    }
  };

  const changePassword = async (passwordData) => {
    try {
      const response = await axios.put("/auth/change-password", {
        current_password: passwordData.currentPassword,
        password: passwordData.newPassword,
        password_confirmation: passwordData.passwordConfirmation,
      });

      return { success: true, message: response.data.message };
    } catch (error) {
      // Handle validation errors
      if (error.response?.status === 422) {
        const errors = error.response.data.errors;
        const message =
          errors?.current_password?.[0] ||
          errors?.password?.[0] ||
          "Password change failed";
        return { success: false, error: message, errors };
      }

      const message = error.response?.data?.message || "Password change failed";
      return { success: false, error: message };
    }
  };

  // New method to get user tokens
  const getUserTokens = async () => {
    try {
      const response = await axios.get("/auth/tokens");
      return { success: true, tokens: response.data.tokens };
    } catch (error) {
      const message = error.response?.data?.message || "Failed to fetch tokens";
      return { success: false, error: message };
    }
  };

  // New method to revoke specific token
  const revokeToken = async (tokenId) => {
    try {
      const response = await axios.delete(`/auth/tokens/${tokenId}`);
      return { success: true, message: response.data.message };
    } catch (error) {
      const message = error.response?.data?.message || "Failed to revoke token";
      return { success: false, error: message };
    }
  };

  // New method to cleanup expired tokens
  const cleanupTokens = async () => {
    try {
      const response = await axios.post("/auth/cleanup-tokens");
      return { success: true, message: response.data.message };
    } catch (error) {
      const message =
        error.response?.data?.message || "Failed to cleanup tokens";
      return { success: false, error: message };
    }
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
    logoutAll,
    updateProfile,
    changePassword,
    getUserTokens,
    revokeToken,
    cleanupTokens,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
