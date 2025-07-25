import LoginModal from "@/components/modals/auth/LoginModal";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  LogOut,
  Settings,
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileCollegesOpen, setIsMobileCollegesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const userDropdownRef = useRef(null);

  const { isAuthenticated, logout, user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setIsMenuOpen(false);
    };
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target)
      ) {
        setShowUserDropdown(false);
      }
    };
    if (showUserDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showUserDropdown]);

  const isActive = (path) => location.pathname === path;

  const isCollegeActive = () => {
    return (
      location.pathname.includes("/colleges") ||
      location.pathname.includes("/ccis") ||
      location.pathname.includes("/caa") ||
      location.pathname.includes("/ced") ||
      location.pathname.includes("/cofes") ||
      location.pathname.includes("/cmns") ||
      location.pathname.includes("/cegs") ||
      location.pathname.includes("/chass") ||
      location.pathname.includes("/cba") ||
      location.pathname.includes("/citte") ||
      location.pathname.includes("/ceit") ||
      location.pathname.includes("/cthm")
    );
  };

  const getUserInitials = (name) => {
    if (!name) return "U";
    const nameParts = name.trim().split(" ");
    if (nameParts.length >= 2) {
      return (nameParts[0][0] + nameParts[1][0]).toUpperCase();
    }
    return nameParts[0][0].toUpperCase();
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 shadow-md transition-all duration-300 ${
        isScrolled ? "bg-white/50 backdrop-blur-md" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-2 sm:py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <div className="flex items-center justify-center h-[50px] sm:h-[60px] md:h-[70px]">
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
          </div>
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          className="xl:hidden p-2 rounded-md text-gray-700"
          onClick={() => setIsMenuOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center justify-center space-x-8 xl:space-x-12">
          <Link
            to="/"
            className={`font-semibold uppercase xl:text-sm ${
              isActive("/")
                ? "text-green-700 font-bold border-b-2 border-green-700 pb-1"
                : "text-green-950 hover:text-green-700"
            } transition-colors duration-200`}
          >
            HOME
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => setIsMenuOpen(false)}
          >
            <div
              className={`font-semibold uppercase text-sm flex cursor-pointer ${
                isCollegeActive()
                  ? "text-green-700 font-bold border-b-2 border-green-700 pb-1"
                  : "text-green-950 hover:text-green-700"
              } transition-colors duration-200`}
            >
              Colleges <ChevronDown size={20} className="ml-1" />
            </div>

            {isMenuOpen && (
              <div
                ref={dropdownRef}
                className="absolute left-0 rounded-xl bg-white shadow-2xl flex flex-col w-48 outline outline-1 outline-gray-400"
              >
                <Link
                  to="/colleges_graduate_main"
                  className="block px-6 py-2 text-gray-800 hover:text-green-700 hover:bg-gray-100 text-sm font-medium rounded-t-xl"
                >
                  CSU-MAIN
                </Link>
                <Link
                  to="/colleges_undergraduate_cc"
                  className="block px-6 py-2 text-gray-800 hover:text-green-700 hover:bg-gray-100 text-sm font-medium rounded-b-xl"
                >
                  CSU-CC
                </Link>
              </div>
            )}
          </div>

          <a
            href="https://www.carsu.edu.ph/?q=news/csu-introduces-programs-solicits-stakeholders%E2%80%99-input-innovative-curricula"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold uppercase xl:text-sm text-green-950 hover:text-green-700 transition-colors duration-200"
          >
            ABOUT OCID
          </a>

          <Link
            to="/downloadables"
            className={`font-semibold uppercase xl:text-sm ${
              isActive("/downloadables")
                ? "text-green-700 font-bold border-b-2 border-green-700 pb-1"
                : "text-green-950 hover:text-green-700"
            } transition-colors duration-200`}
          >
            DOWNLOAD
          </Link>
          
          <Link
            to="/procedurals"
            className={`font-semibold uppercase xl:text-sm ${
              isActive("/procedurals")
                ? "text-green-700 font-bold border-b-2 border-green-700 pb-1"
                : "text-green-950 hover:text-green-700"
            } transition-colors duration-200`}
          >
            PROCEDURALS
          </Link>
        </div>


        {/* Desktop User */}
        <div className="hidden xl:block">
          {isAuthenticated ? (
            <div className="relative" ref={userDropdownRef}>
              <button
                onClick={() => setShowUserDropdown(!showUserDropdown)}
                className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100"
              >
                <div className="w-9 h-9 bg-gradient-to-br from-green-600 to-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  {getUserInitials(user?.name)}
                </div>
                <span className="text-sm font-medium text-gray-800 max-w-[120px] truncate">
                  {user?.name}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
                    showUserDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showUserDropdown && (
                <div className="absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-lg border border-gray-200 py-2">
                  <div className="px-4 py-3 border-b bg-gradient-to-r from-green-50 to-emerald-50">
                    <p className="text-sm font-medium text-gray-900">
                      {user?.name}
                    </p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>

                  <Link
                    to="/dashboard"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-green-50"
                    onClick={() => setShowUserDropdown(false)}
                  >
                    <LayoutDashboard className="h-4 w-4 mr-2" />
                    Dashboard
                  </Link>

                  <Link
                    to="/profile-settings"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-green-50"
                    onClick={() => setShowUserDropdown(false)}
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Profile Settings
                  </Link>

                  <button
                    onClick={() => {
                      logout();
                      setShowUserDropdown(false);
                    }}
                    className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <LoginModal />
          )}
        </div>
      </div>

      {/* BACKDROP */}
      {isMenuOpen && (
        <div
          className="xl:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* MOBILE SIDEBAR */}
      <div
        className={`xl:hidden fixed top-0 left-0 h-full w-[80%] max-w-xs bg-white z-50 shadow-md transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)}>
            <svg
              className="w-6 h-6 text-green-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col px-6 space-y-4">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="flex justify-between items-center py-2 font-semibold text-green-800 border-b"
          >
            Home
            <ChevronRight className="w-4 h-4 text-green-600" />
          </Link>

          <button
            onClick={() => setIsMobileCollegesOpen(!isMobileCollegesOpen)}
            className="flex justify-between items-center py-2 font-semibold text-green-800 border-b"
          >
            Colleges
            <ChevronRight
              className={`w-4 h-4 text-green-600 transition-transform ${
                isMobileCollegesOpen ? "rotate-90" : ""
              }`}
            />
          </button>

          {isMobileCollegesOpen && (
            <div className="flex flex-col space-y-2 pl-4 text-sm text-gray-700">
              <Link
                to="/colleges_graduate_main"
                onClick={() => setIsMenuOpen(false)}
                className="flex justify-between items-center"
              >
                CSU-MAIN <ChevronRight className="w-4 h-4 text-green-500" />
              </Link>
              <Link
                to="/colleges_undergraduate_cc"
                onClick={() => setIsMenuOpen(false)}
                className="flex justify-between items-center"
              >
                CSU-CC <ChevronRight className="w-4 h-4 text-green-500" />
              </Link>
            </div>
          )}

          <a
            href="https://www.carsu.edu.ph/?q=news/csu-introduces-programs-solicits-stakeholders%E2%80%99-input-innovative-curricula"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center py-2 font-semibold text-green-800 border-b"
          >
            About OCID
            <ChevronRight className="w-4 h-4 text-green-600" />
          </a>

          <Link
            to="/downloadables"
            onClick={() => setIsMenuOpen(false)}
            className="flex justify-between items-center py-2 font-semibold text-green-800 border-b"
          >
            Download
            <ChevronRight className="w-4 h-4 text-green-600" />
          </Link>
        </nav>

        {/* User Section */}
        <div className="px-6 py-4 border-t mt-4">
          {isAuthenticated ? (
            <div className="space-y-3">
              <p className="text-sm font-medium">{user?.name}</p>
              <Link
                to="/dashboard"
                onClick={() => setIsMenuOpen(false)}
                className="flex justify-between items-center text-green-700"
              >
                Dashboard <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                to="/profile"
                onClick={() => setIsMenuOpen(false)}
                className="flex justify-between items-center text-green-700"
              >
                Profile Settings <ChevronRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => {
                  logout();
                  setIsMenuOpen(false);
                }}
                className="flex justify-between items-center text-red-600 w-full"
              >
                Logout <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <LoginModal />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
