import { useState } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function useProfile() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [profile, setProfile] = useState(null);

  // Fetch current user profile
  const fetchProfile = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`http://127.0.0.1:8000/user`, {
        withCredentials: true,
      });
      setProfile(response.data.user);
      return response.data.user;
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch profile");
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Update user profile (name, preferences)
  const updateProfile = async (profileData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/user/profile`,
        profileData,
        { withCredentials: true }
      );
      setSuccess(true);
      setProfile(response.data.user); // update local profile state
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update profile");
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Change password (password, password_confirmation)
  const changePassword = async (passwordData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/user/change-password`,
        passwordData,
        { withCredentials: true }
      );
      setSuccess(true);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || "Failed to change password");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    profile,
    fetchProfile,
    updateProfile,
    changePassword,
    loading,
    error,
    success,
  };
}
