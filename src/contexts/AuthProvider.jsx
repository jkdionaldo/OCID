import { useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

// Configure axios defaults
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;

// Request interceptor to add auth token
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor to handle token expiration
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user_data");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Initialize CSRF token
  const initializeCsrf = async () => {
    try {
      await axios.get("/sanctum/csrf-cookie");
    } catch (error) {
      console.error("CSRF initialization failed:", error);
    }
  };

  // Check if user is authenticated on app load
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("auth_token");
      const userData = localStorage.getItem("user_data");

      if (token && userData) {
        try {
          // Verify token is still valid
          const response = await axios.get("/auth/user");
          setUser(response.data.user);
          setIsAuthenticated(true);
        } catch (error) {
          // Token is invalid, clear storage
          localStorage.removeItem("auth_token");
          localStorage.removeItem("user_data");
        }
      }
      setIsLoading(false);
    };

    initializeCsrf().then(() => checkAuth());
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

      const { user: userData, token } = response.data;

      // Store auth data
      localStorage.setItem("auth_token", token);
      localStorage.setItem("user_data", JSON.stringify(userData));

      setUser(userData);
      setIsAuthenticated(true);

      return { success: true, user: userData };
    } catch (error) {
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

      const { user: newUser, token } = response.data;

      // Store auth data
      localStorage.setItem("auth_token", token);
      localStorage.setItem("user_data", JSON.stringify(newUser));

      setUser(newUser);
      setIsAuthenticated(true);

      return { success: true, user: newUser, message: response.data.message };
    } catch (error) {
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
      // Clear local storage regardless of API call success
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user_data");
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
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user_data");
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
    logoutAll,
    updateProfile,
    changePassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
