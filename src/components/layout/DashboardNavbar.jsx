import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Home, LayoutDashboard, Settings, LogOut, ChevronDown } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const DashboardNavbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const userDropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userDropdownRef.current && !userDropdownRef.current.contains(e.target)) {
        setShowUserDropdown(false);
      }
    };
    if (showUserDropdown) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showUserDropdown]);

  const getUserInitials = (name) => {
    if (!name) return "U";
    const parts = name.trim().split(" ");
    return parts.length >= 2
      ? (parts[0][0] + parts[1][0]).toUpperCase()
      : parts[0][0].toUpperCase();
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">

        {/* Left: Logo + Dashboard label */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/images/ocid_logo.png"
              alt="OCID Logo"
              className="h-[40px] sm:h-[50px] md:h-[70px] lg:h-[80px] object-contain"
            />

            <img
              src="/images/logo_text_2.png"
              alt="OCID Text Logo"
              className="h-[40px] sm:h-[45px] md:h-[50px] lg:h-[45px] w-auto object-contain"
            />
          </Link>

        </div>

        {/* Right: Home icon + User dropdown */}
        <div className="flex items-center gap-3">

          {/* Home button — goes back to public site */}
            <Link
            to="/"
            title="Back to Home"
            className="
              flex items-center gap-1.5 px-3 py-2
              text-sm font-medium text-gray-600 font-poppins
              hover:text-green-700 hover:bg-green-50
              rounded-lg transition-all duration-200
            "
          >
            <Home className="w-6 h-6" />
          </Link>
          

          {/* User dropdown */}
          <div className="relative" ref={userDropdownRef}>
            <button
              onClick={() => setShowUserDropdown(!showUserDropdown)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
            >
              {/* Avatar */}
              <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-emerald-500 text-white rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">
                {getUserInitials(user?.name)}
              </div>
              {/* Name */}
              <span className="hidden sm:block text-sm font-medium text-gray-800 max-w-[120px] truncate font-poppins">
                {user?.name}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                  showUserDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown menu */}
            {showUserDropdown && (
              <div className="absolute right-0 mt-2 w-60 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                {/* User info header */}
                <div className="px-4 py-3 border-b bg-gradient-to-r from-green-50 to-emerald-50">
                  <p className="text-sm font-semibold text-gray-900 font-poppins truncate">
                    {user?.name}
                  </p>
                  <p className="text-xs text-gray-500 font-poppins truncate">
                    {user?.email}
                  </p>
                </div>

                {/* Profile Settings */}
                <Link
                  to="/profile-settings"
                  onClick={() => setShowUserDropdown(false)}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors font-poppins"
                >
                  <Settings className="w-4 h-4" />
                  Profile Settings
                </Link>

                {/* Logout */}
                <button
                  onClick={() => {
                    logout();
                    setShowUserDropdown(false);
                    navigate("/");
                  }}
                  className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors font-poppins"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;