import { useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import SecureStorage from "@/utils/secureStorage";

// Axios configuration
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

// Request interceptor to add auth token
axios.interceptors.request.use(async (config) => {
  try {
    const authData = await SecureStorage.getItem("auth_session");
    if (authData?.token) {
      config.headers.Authorization = `Bearer ${authData.token}`;
    }
  } catch (error) {
    console.error("Failed to get auth token:", error);
  }
  return config;
});

// Response interceptor to handle token expiration and errors
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshResult = await tryRefreshToken();
      if (refreshResult.success) {
        try {
          const authData = await SecureStorage.getItem("auth_session");
          originalRequest.headers.Authorization = `Bearer ${authData.token}`;
          return axios(originalRequest);
        } catch (encryptionError) {
          console.error("Failed to get refreshed token:", encryptionError);
          clearAuthData();
          window.location.href = "/login";
        }
      } else {
        clearAuthData();
        window.location.href = "/login";
      }
    }

    if (error.response?.status === 422) {
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

// Function to try refreshing the token
const tryRefreshToken = async () => {
  try {
    const authData = await SecureStorage.getItem("auth_session");

    if (!authData?.token || !authData?.expires_at) return { success: false };

    const now = new Date();
    const expiry = new Date(authData.expires_at);
    const timeUntilExpiry = expiry - now;

    if (timeUntilExpiry > 60 * 60 * 1000) {
      return { success: true };
    }

    const response = await axios.post("/auth/refresh");
    const { token: newToken, expires_at } = response.data;

    const updatedAuthData = {
      ...authData,
      token: newToken,
      expires_at: expires_at,
    };
    await SecureStorage.setItem("auth_session", updatedAuthData);

    return { success: true };
  } catch (error) {
    console.error("Token refresh failed:", error);
    return { success: false };
  }
};

// Function to clear authentication data
const clearAuthData = async () => {
  try {
    await SecureStorage.removeItem("auth_session");
    localStorage.removeItem("session_active");
  } catch (error) {
    console.error("Failed to clear auth data:", error);
    // Fallback to clearing localStorage directly
    localStorage.removeItem("auth_session");
    localStorage.removeItem("session_active");
  }
};

// Function to store authentication data securely
const storeAuthData = async (token, userData, expiresAt) => {
  try {
    // Store only essential, non-sensitive user info
    const safeUserData = {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      avatar: userData.avatar,
      email_verified_at: userData.email_verified_at,
    };

    // Use secure storage with AES encryption
    await SecureStorage.setItem("auth_session", {
      token: token,
      user: safeUserData,
      expires_at: expiresAt,
      stored_at: new Date().toISOString(),
      checksum: await generateChecksum(token + userData.id), // Integrity check
    });

    // Set a simple flag for quick session check
    localStorage.setItem("session_active", "true");
  } catch (error) {
    console.error("Failed to store auth data:", error);
    throw new Error("Failed to store authentication data securely");
  }
};

// Generate checksum for integrity verification
const generateChecksum = async (data) => {
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);
  const hashBuffer = await crypto.subtle.digest("SHA-256", dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
};

// Function to retrieve stored authentication data
const getStoredAuthData = async () => {
  try {
    const sessionActive = localStorage.getItem("session_active");
    if (!sessionActive) return null;

    const authData = await SecureStorage.getItem("auth_session");

    // Verify data integrity
    if (authData && authData.checksum) {
      const expectedChecksum = await generateChecksum(
        authData.token + authData.user.id
      );
      if (expectedChecksum !== authData.checksum) {
        console.warn("Auth data integrity check failed");
        await clearAuthData();
        return null;
      }
    }

    return authData;
  } catch (error) {
    console.error("Failed to get stored auth data:", error);
    return null;
  }
};

// AuthProvider component to manage authentication state
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is authenticated on app load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authData = await getStoredAuthData();

        if (authData?.token && authData?.user) {
          // Check if token is expired
          const now = new Date();
          const expiry = new Date(authData.expires_at);

          if (now >= expiry) {
            // Token expired, try refresh
            const refreshResult = await tryRefreshToken();
            if (!refreshResult.success) {
              await clearAuthData();
              setIsLoading(false);
              return;
            }
          }

          // Use stored user data first (faster loading)
          setUser(authData.user);
          setIsAuthenticated(true);

          // Verify token is still valid in background
          try {
            const response = await axios.get("/auth/user");
            const freshUser = response.data.user;

            // Update if user data changed (but only store safe data)
            if (JSON.stringify(authData.user) !== JSON.stringify(freshUser)) {
              const updatedAuthData = {
                ...authData,
                user: {
                  id: freshUser.id,
                  name: freshUser.name,
                  email: freshUser.email,
                  avatar: freshUser.avatar,
                  email_verified_at: freshUser.email_verified_at,
                },
                checksum: await generateChecksum(authData.token + freshUser.id),
              };
              await SecureStorage.setItem("auth_session", updatedAuthData);
              setUser(updatedAuthData.user);
            }
          } catch (error) {
            // Token invalid, clear storage
            await clearAuthData();
            setUser(null);
            setIsAuthenticated(false);
          }
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        await clearAuthData();
      }
      setIsLoading(false);
    };

    checkAuth();

    // Set up token refresh timer
    const refreshInterval = setInterval(async () => {
      try {
        const authData = await getStoredAuthData();
        if (authData?.token) {
          await tryRefreshToken();
        }
      } catch (error) {
        console.error("Token refresh timer failed:", error);
      }
    }, 5 * 60 * 1000); // Check every 5 minutes

    return () => clearInterval(refreshInterval);
  }, []);

  const login = async (credentials) => {
    try {
      setIsLoading(true);

      console.log("Login payload:", {
        email: credentials.email,
        password: credentials.password,
        remember_me: credentials.rememberMe || false,
        device_name: navigator.userAgent || "Unknown Device",
        recaptcha_token: credentials.recaptcha_token,
      });

      const response = await axios.post("/auth/login", {
        email: credentials.email,
        password: credentials.password,
        remember_me: credentials.rememberMe || false,
        device_name: navigator.userAgent || "Unknown Device",
        recaptcha_token: credentials.recaptcha_token,
      });

      const { user: userData, token, expires_at } = response.data;

      await storeAuthData(token, userData, expires_at);

      setUser({
        id: userData.id,
        name: userData.name,
        email: userData.email,
        avatar: userData.avatar,
        email_verified_at: userData.email_verified_at,
      });
      setIsAuthenticated(true);

      return { success: true, user: userData };
    } catch (error) {
      console.error("Login error details:", error.response?.data);
      console.error("Login error status:", error.response?.status);

      if (error.response?.status === 422) {
        const errors = error.response.data.errors;
        const message =
          errors?.email?.[0] ||
          errors?.password?.[0] ||
          errors?.recaptcha_token?.[0] ||
          "Invalid credentials";
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

      await storeAuthData(token, newUser, expires_at);

      setUser({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        avatar: newUser.avatar,
        email_verified_at: newUser.email_verified_at,
      });
      setIsAuthenticated(true);

      return { success: true, user: newUser, message: response.data.message };
    } catch (error) {
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
      await clearAuthData();
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  const updateProfile = async (profileData) => {
    try {
      const response = await axios.put("/auth/profile", profileData);
      const updatedUser = response.data.user;

      // Update both state and secure storage
      const safeUserData = {
        id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        avatar: updatedUser.avatar,
        email_verified_at: updatedUser.email_verified_at,
      };

      setUser(safeUserData);

      // Update stored data
      const authData = await getStoredAuthData();
      if (authData) {
        const updatedAuthData = {
          ...authData,
          user: safeUserData,
          checksum: await generateChecksum(authData.token + safeUserData.id),
        };
        await SecureStorage.setItem("auth_session", updatedAuthData);
      }

      return {
        success: true,
        user: updatedUser,
        message: response.data.message,
      };
    } catch (error) {
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

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
    updateProfile,
    changePassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
