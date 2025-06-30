"use client";

import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { use } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  //navbar blur component logic
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isCollegeActive = () => {
    return (
      location.pathname === "/colleges" ||
      location.pathname === "/graduate" ||
      location.pathname === "/undergrad" ||
      location.pathname.includes("/ccis") ||
      location.pathname.includes("/caa") ||
      location.pathname.includes("/ced") ||
      location.pathname.includes("/cofes") ||
      location.pathname.includes("/cmns") ||
      location.pathname.includes("/cegs") ||
      location.pathname.includes("/chass")
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 shadow-md transition-all duration-300 ${
        isScrolled ? "bg-white/50 backdrop-blur-md" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-6 sm:px-12 py-2 sm:py-3 flex items-center ml-2">
        {/* OCID Logo */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <div className="flex items-center justify-center h-[50px] sm:h-[60px]">
            <img
              src="/images/ocid_logo.png"
              alt="OCID Logo"
              className="h-[40px] sm:h-[80px] object-contain"
            />
            <img
              src="/images/logo_text_2.png"
              alt="OCID Logo"
              className="h-[40px] sm:h-[45px] w-auto object-contain"
            />
          </div>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden ml-auto p-2 rounded-md text-gray-700"
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
        <div className="hidden md:flex text-center space-x-8 lg:space-x-12 mx-auto">
          <Link
            to="/home"
            className={`font-medium uppercase text-sm lg:text-base ${
              isActive("/home") || isActive("/")
                ? "text-green-700 font-bold border-b-2 border-green-700 pb-1"
                : "text-green-950 hover:text-green-700"
            } transition-colors duration-200`}
          >
            HOME
          </Link>
          <Link
            to="/colleges"
            className={`font-medium uppercase text-sm lg:text-base ${
              isCollegeActive()
                ? "text-green-700 font-bold border-b-2 border-green-700 pb-1"
                : "text-green-950 hover:text-green-700"
            } transition-colors duration-200`}
          >
            COLLEGES
          </Link>
          <a
            href="https://www.carsu.edu.ph/?q=news/csu-introduces-programs-solicits-stakeholders%E2%80%99-input-innovative-curricula"
            className="font-medium uppercase text-sm lg:text-base text-green-950 hover:text-green-700 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            ABOUT OCID
          </a>
        </div>

        {/* Right side - Space for future login button */}
        <div className="hidden md:block flex-shrink-0 w-[240px] sm:w-[210px]">
          {/* This space is reserved for the login button */}
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md rounded-b-xl">
            <div className="flex flex-col p-4 space-y-4">
              <Link
                to="/home"
                className={`${
                  isActive("/home") || isActive("/")
                    ? "font-bold text-green-700 border-l-4 border-green-700 pl-2"
                    : "text-gray-600 hover:text-green-700"
                } transition-colors duration-200`}
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                to="/colleges"
                className={`${
                  isCollegeActive()
                    ? "font-bold text-green-700 border-l-4 border-green-700 pl-2"
                    : "text-gray-600 hover:text-green-700"
                } transition-colors duration-200`}
                onClick={() => setIsMenuOpen(false)}
              >
                COLLEGES
              </Link>
              <a
                href="https://www.carsu.edu.ph/?q=news/csu-introduces-programs-solicits-stakeholders%E2%80%99-input-innovative-curricula"
                className="text-gray-600 hover:text-green-700 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT OCID
              </a>
            </div>
          </div>
        )}

        {/* OCID Logo 
        <div id="ocidlogo" className="hidden md:block">
          <Link to="/">
            <div className="h-[50px] sm:h-[60px] w-[100px] sm:w-[120px] flex items-center justify-center">
              <img
                src="/images/ocid-logo.png"
                alt="OCID Logo"
                className="h-full object-contain"
              />
            </div>
          </Link>
        </div>
        */}
      </div>
    </nav>
  );
};

export default Navbar;
