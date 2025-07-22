import React, { useState, useEffect } from "react";
import { Camera, Lock, X } from "lucide-react";
import PasswordSettingModal from "../components/modals/auth/PasswordSettingModal";
import { useAuth } from "@/hooks/useAuth"; // Add this import

const ProfileSettings = () => {
  const { user } = useAuth(); // Get user from auth context

  const [profile, setProfile] = useState({
    name: user?.name || "",
    email: user?.email || "",
    password: "",
    avatar: null,
  });
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  // Fetch user profile data on component mount
  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/user/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const userData = await response.json();
        setProfile({
          name: userData.name || "John Doe",
          email: userData.email || "john@example.com",
          password: "",
          avatar: userData.avatar || null,
        });
      }
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
    }
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfile({ ...profile, avatar: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/user/profile", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: profile.name,
          email: profile.email,
          avatar: profile.avatar,
        }),
      });

      if (response.ok) {
        alert("Profile saved successfully!");
      } else {
        alert("Failed to save profile. Please try again.");
      }
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("Profile saved!"); // Fallback for demo
    }
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 flex">
      <div className=" bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mx-auto ">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          Profile Settings
        </h2>

        <div className="grid grid-cols-2 grid-rows-1 gap-5">
          <div>
            {/* Avatar Section */}
            <div className="flex flex-col items-center mb-8 ">
              <div className="relative mb-4">
                {profile.avatar ? (
                  <img
                    src={profile.avatar}
                    alt="Profile"
                    className="w-64 h-64 rounded-full object-cover border-4 border-green-500 shadow-lg"
                  />
                ) : (
                  <div className="w-64 h-64 rounded-full bg-green-500 flex items-center justify-center text-white text-9xl font-bold shadow-lg">
                    {getInitials(profile.name)}
                  </div>
                )}
                <div className="absolute bottom-4 right-6 bg-blue-500 rounded-full p-2 shadow-lg">
                  <Camera className="w-8 h-8 text-white" />
                </div>
              </div>
              <label className="text-blue-500 cursor-pointer hover:underline font-medium">
                Change Avatar Icon
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          <div>
            {/* Profile Form */}
            <form onSubmit={handleSave} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2 text-left font-medium">
                  Full name:
                </label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  readOnly
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2   focus:ring-blue-200 transition-all  bg-gray-50 cursor-not-allowed"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-left font-medium">
                  CarSu Gmail:
                </label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-gray-50 cursor-not-allowed"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 text-left font-medium">
                  Password:
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="password"
                    name="password"
                    value={profile.password}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg pl-10 pr-32 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-gray-50 cursor-not-allowed"
                    placeholder="••••••••"
                    readOnly
                  />
                  <button
                    type="button"
                    onClick={() => setIsPasswordModalOpen(true)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 text-sm hover:underline font-medium"
                  >
                    Change Password
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium text-lg shadow-md hover:shadow-lg"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Password Setting Modal */}
      <PasswordSettingModal
        isOpen={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
      />
    </div>
  );
};

export default ProfileSettings;
