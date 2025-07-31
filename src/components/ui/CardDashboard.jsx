import React from "react";
import {
  GraduationCap,
  BookOpen,
  Users,
  FileText,
  ChevronDown,
  ChevronUp,
  Building2,
  Sparkles,
} from "lucide-react";

export default function CollegeCard({ college, campus, onViewDetails }) {
  const logoSrc =
    college.logo_url || college.logo || "/images/default-logo.png";

  // Calculate program counts
  const undergradCount = college.undergraduate_programs || 0;
  const graduateCount = college.graduate_programs || 0;
  const totalPrograms = undergradCount + graduateCount;

  // Dynamic color scheme based on campus
  const campusTheme = {
    "CSU-MAIN": {
      primary: "emerald",
      gradient: "from-emerald-500 to-green-600", // Enhanced green gradient
      badge: "bg-emerald-700",
      accent: "bg-emerald-50 border-emerald-100",
      button:
        "from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700",
    },
    "CSU-CC": {
      primary: "blue",
      gradient: "from-blue-500 to-indigo-600", // Enhanced blue gradient
      badge: "bg-blue-700",
      accent: "bg-blue-50 border-blue-100",
      button:
        "from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700",
    },
  };

  const theme = campusTheme[campus] || campusTheme["CSU-MAIN"];

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-2">
      {/* Floating Campus Badge */}
      <div className="absolute top-4 right-4 z-10">
        <div
          className={`${theme.badge} text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm bg-opacity-90`}
        >
          {campus}
        </div>
      </div>

      {/* Header Section with Gradient */}
      <div className="relative">
        <div
          className={`h-36 bg-gradient-to-br ${theme.gradient} flex items-center justify-center p-6 relative overflow-hidden`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm">
            <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-white/5 -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-white/5 translate-x-12 translate-y-12"></div>
          </div>

          {/* Logo Container */}
          <div className="relative z-10">
            {college.logo_url || college.logo ? (
              <div className="h-20 w-20 bg-white/20 backdrop-blur-sm rounded-2xl p-3 shadow-lg border border-white/30">
                <img
                  src={logoSrc}
                  alt={`${college.name} logo`}
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    e.target.src = "/images/default-college-logo.png";
                  }}
                />
              </div>
            ) : (
              <div className="h-20 w-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                <Building2 className="h-10 w-10 text-white" />
              </div>
            )}
          </div>

          {/* Sparkle Effect */}
          <Sparkles className="absolute top-6 left-6 h-4 w-4 text-white/60 animate-pulse" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-5">
        {/* College Info */}
        <div className="text-center space-y-2">
          <h3 className="text-xl font-bold text-gray-900 leading-tight line-clamp-2 group-hover:text-gray-700 transition-colors">
            {college.name}
          </h3>
          <p className="text-sm font-medium text-gray-500 bg-gray-50 px-3 py-1 rounded-full inline-block">
            {college.shortName || college.acronym}
          </p>
        </div>

        {/* Program Stats Cards */}
        <div className="grid grid-cols-2 gap-3">
          {/* Undergraduate Programs */}
          <div
            className={`relative p-4 rounded-xl border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-blue-100/50 hover:shadow-md transition-all duration-300 hover:scale-105`}
          >
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-2 bg-blue-500 rounded-lg shadow-sm">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold text-blue-900">
                  {undergradCount}
                </div>
                <div className="text-xs font-medium text-blue-700">
                  Undergraduate
                </div>
              </div>
            </div>
          </div>

          {/* Graduate Programs */}
          <div
            className={`relative p-4 rounded-xl border-2 border-yellow-100 bg-gradient-to-br from-purple-50 to-purple-100/50 hover:shadow-md transition-all duration-300 hover:scale-105`}
          >
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-2 bg-yellow-500 rounded-lg shadow-sm">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold text-yellow-900">
                  {graduateCount}
                </div>
                <div className="text-xs font-medium text-yellow-700">
                  Graduate
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Overview Stats */}
        <div className="flex items-center justify-around p-4 bg-gray-50 rounded-xl border border-gray-100">
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900">
              {totalPrograms}
            </div>
            <div className="text-xs text-gray-600 font-medium">
              Total Programs
            </div>
          </div>
          <div className="w-px h-8 bg-gray-300"></div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900">
              {college.files || 0}
            </div>
            <div className="text-xs text-gray-600 font-medium">Files</div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onViewDetails(college, campus)}
          className={`w-full mt-6 bg-gradient-to-r ${
            theme.button
          } text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-opacity-50 ${
            campus === "CSU-MAIN"
              ? "focus:ring-emerald-300"
              : "focus:ring-blue-300"
          }`}
        >
          <div className="flex items-center justify-center space-x-2">
            <span>View Details</span>
            <div className="w-1.5 h-1.5 bg-white rounded-full opacity-75"></div>
            <div className="w-1.5 h-1.5 bg-white rounded-full opacity-50"></div>
            <div className="w-1.5 h-1.5 bg-white rounded-full opacity-25"></div>
          </div>
        </button>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
    </div>
  );
}
