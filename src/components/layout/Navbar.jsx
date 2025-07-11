"use client";
import LoginModal from "@/components/modals/auth/LoginModal";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileCollegesOpen, setIsMobileCollegesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setIsMenuOpen(false);
    };
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const isActive = (path) => {
    return location.pathname === path;
  };
  // location.pathname === "/colleges_graduate_cc" ||
  const isCollegeActive = () => {
    return (
      location.pathname === "/colleges_graduate_main" ||
      location.pathname === "/colleges_undergraduate_main" ||
      location.pathname === "/colleges_undergraduate_cc" ||
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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 shadow-md transition-all duration-300 ${
        isScrolled ? "bg-white/50 backdrop-blur-md" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-3 flex items-center ml-2">
        {/* OCID Logo */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <div className="flex items-center justify-center h-[50px] sm:h-[60px] md:h-[70px]">
            <img
              src="/images/ocid_logo.png"
              alt="OCID Logo"
              className="h-[40px] sm:h-[50px] md:h-[70px] lg:h-[80px] object-contain"
            />
            <img
              src="/images/logo_text_2.png"
              alt="OCID Logo"
              className="h-[40px] sm:h-[45px] md:h-[50px] lg:h-[45px] w-auto object-contain"
            />
          </div>
        </Link>

        {/* Mobile menu button */}
        <button
          className="xl:hidden ml-auto p-2 rounded-md text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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

        {/* Desktop navigation */}
        <div className="hidden xl:flex text-center space-x-8 xl:space-x-12 mx-auto">
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
              className={`font-semibold uppercase text-sm xl:text-sm flex cursor-pointer ${
                isCollegeActive()
                  ? "text-green-700 font-bold border-b-2 border-green-700 pb-1"
                  : "text-green-950 hover:text-green-700"
              } transition-colors duration-200`}
            >
              Colleges{" "}
              <ChevronDown
                size={20}
                className={`ml-1 transition-transform duration-300`}
              />
            </div>

            {isMenuOpen && (
              <div
                ref={dropdownRef}
                className="absolute left-0 rounded-xl bg-white shadow-2xl flex flex-col w-48 outline outline-1 outline-gray-400"
                style={{ scrollBehavior: "auto" }}
              >
                <Link
                  to="/colleges_graduate_main"
                  className="block px-6 py-2 text-gray-800 hover:text-green-700 hover:bg-gray-100 rounded-t-xl transition-colors duration-200 text-sm font-medium"
                >
                  CSU-MAIN
                </Link>
                <Link
                  to="/colleges_undergraduate_cc"
                  className="block px-6 py-2 text-gray-800 hover:text-green-700 hover:bg-gray-100 rounded-b-xl transition-colors duration-200 text-sm font-medium"
                >
                  CSU-CC
                </Link>
              </div>
            )}
          </div>

          <a
            href="https://www.carsu.edu.ph/?q=news/csu-introduces-programs-solicits-stakeholders%E2%80%99-input-innovative-curricula"
            className="font-semibold uppercase xl:text-sm text-green-950 hover:text-green-700 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            ABOUT OCID
          </a>
          <Link
            to="/downloadables"
            className={`font-semibold uppercase text-sm xl:text-sm ${
              isActive("/downloadables")
                ? "text-green-700 font-bold border-b-2 border-green-700 pb-1"
                : "text-green-950 hover:text-green-700"
            } transition-colors duration-200`}
          >
            DOWNLOAD
          </Link>
        </div>

        {/* Right side login button */}
        <div className="hidden xl:block flex-shrink-0 w-[240px] sm:w-[210px]">
          <LoginModal />
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 right-0 bg-white shadow-md rounded-b-xl">
            <div className="flex flex-col items-center justify-center my-2">
              <Link
                to="/"
                className={`flex items-center ${
                  isActive("/")
                    ? "font-bold text-green-700 border-l-4 border-green-700 pl-2"
                    : "text-gray-600 hover:text-green-700"
                } transition-colors duration-200`}
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>

              {/* Mobile dropdown for Colleges */}
              <div className="relative">
                <button
                  className={`${
                    isCollegeActive()
                      ? "font-bold text-green-700 border-l-4 border-green-700 pl-2"
                      : "text-gray-600 hover:text-green-700"
                  } transition-colors duration-200`}
                  onClick={() => setIsMobileCollegesOpen(!isMobileCollegesOpen)}
                >
                  COLLEGES <ChevronDown className="inline-block ml-1" />
                </button>
                {isMobileCollegesOpen && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-md rounded-lg flex flex-col w-48 md:w-56 lg:w-64">
                    <Link
                      to="/colleges_graduate_main"
                      className="block px-4 py-2 text-gray-600 hover:text-green-700 hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsMobileCollegesOpen(false);
                      }}
                    >
                      CSU-MAIN
                    </Link>
                    <Link
                      to="/colleges_graduate_cc"
                      className="block px-4 py-2 text-gray-600 hover:text-green-700 hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsMobileCollegesOpen(false);
                      }}
                    >
                      CSU-CC
                    </Link>
                  </div>
                )}
              </div>

              <a
                href="https://www.carsu.edu.ph/?q=news/csu-introduces-programs-solicits-stakeholders%E2%80%99-input-innovative-curricula"
                className="text-gray-600 hover:text-green-700 transition-colors duration-200 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT OCID
              </a>

              <Link
                to="/downloadables"
                className={`flex items-center ${
                  isActive("/downloadables")
                    ? "font-bold text-green-700 border-l-4 border-green-700 pl-2"
                    : "text-gray-600 hover:text-green-700"
                } transition-colors duration-200`}
              >
                DOWNLOAD
              </Link>
              <LoginModal />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
