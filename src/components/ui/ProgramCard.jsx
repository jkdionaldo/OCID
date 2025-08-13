import React from "react";
import { BookOpen, GraduationCap, Building, Sparkles } from "lucide-react";

const ProgramCard = ({ program, type, colleges, campuses, onViewDetails }) => {
  // Enhanced getCollegeInfo function to handle embedded college data
  const getCollegeInfo = (collegeId) => {
    // First check if college info is embedded in the program
    if (program.college) {
      const campus = campuses?.find((c) => c.id === program.college.campus_id);
      return {
        name: program.college.name,
        acronym: program.college.acronym,
        campus: campus?.acronym || "Unknown",
      };
    }

    // Fallback to looking up in colleges array
    const college = colleges?.find((c) => c.id === collegeId);
    if (!college) return { name: "Unknown", acronym: "N/A", campus: "Unknown" };

    const campus = campuses?.find((c) => c.id === college.campus_id);
    return {
      name: college.name,
      acronym: college.acronym,
      campus: campus?.acronym || "Unknown",
    };
  };

  const collegeInfo = getCollegeInfo(program.college_id);
  const Icon = type === "graduate" ? GraduationCap : BookOpen;
  const colorScheme = type === "graduate" ? "yellow" : "blue";

  // Dynamic color scheme
  const theme = {
    yellow: {
      primary: "yellow",
      gradient: "from-yellow-500 to-amber-600",
      badge: "bg-yellow-700",
      accent: "bg-yellow-50 border-yellow-100",
      button:
        "from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700",
      border: "border-yellow-200 hover:border-yellow-300",
    },
    blue: {
      primary: "blue",
      gradient: "from-blue-500 to-indigo-600",
      badge: "bg-blue-700",
      accent: "bg-blue-50 border-blue-100",
      button:
        "from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700",
      border: "border-blue-200 hover:border-blue-300",
    },
  };

  const currentTheme = theme[colorScheme];

  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(program, type);
    }
  };

  return (
    <div
      className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border ${currentTheme.border} overflow-hidden transform hover:-translate-y-2 cursor-pointer`}
      onClick={handleViewDetails}
    >
      {/* Program Type Badge */}
      <div className="absolute top-4 right-4 z-10">
        <div
          className={`${currentTheme.badge} text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm bg-opacity-90`}
        >
          {type === "graduate" ? "Graduate" : "Undergraduate"}
        </div>
      </div>

      {/* Header Section with Gradient */}
      <div className="relative">
        <div
          className={`h-36 bg-gradient-to-br ${currentTheme.gradient} flex items-center justify-center p-6 relative overflow-hidden`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm">
            <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-white/5 -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-white/5 translate-x-12 translate-y-12"></div>
          </div>

          {/* Icon Container */}
          <div className="relative z-10">
            <div className="h-20 w-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30 shadow-lg">
              <Icon className="h-10 w-10 text-white" />
            </div>
          </div>

          {/* Sparkle Effect */}
          <Sparkles className="absolute top-6 left-6 h-4 w-4 text-white/60 animate-pulse" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-5">
        {/* Program Info */}
        <div className="text-center space-y-2">
          <h3 className="text-xl font-bold text-gray-900 leading-tight line-clamp-2 group-hover:text-gray-700 transition-colors">
            {program.program_name}
          </h3>

          <div className="flex items-center justify-center gap-2 flex-wrap">
            {program.acronym && (
              <p
                className={`text-sm font-medium text-${colorScheme}-600 bg-${colorScheme}-50 px-3 py-1 border border-${colorScheme}-200 rounded-full inline-block`}
              >
                {program.acronym}
              </p>
            )}

            <p
              className={`text-sm font-medium px-3 py-1 border rounded-full inline-block ${
                collegeInfo.campus === "CSU-MAIN"
                  ? "text-green-600 bg-green-50 border-green-200"
                  : "text-blue-600 bg-blue-50 border-blue-200"
              }`}
            >
              {collegeInfo.campus}
            </p>
          </div>
        </div>
        {/* College Info */}
        <div
          className={`p-4 rounded-xl border-2 ${currentTheme.accent} hover:shadow-md transition-all duration-300`}
        >
          <div className="flex items-center text-left space-x-3">
            {/* Icon Container */}
            <div
              className={`p-2 ${
                type === "graduate" ? "bg-yellow-500" : "bg-blue-500"
              } rounded-lg shadow-sm flex-shrink-0`}
            >
              <Building className="w-5 h-5 text-white" />
            </div>

            <div className="flex-1 text-center">
              <span className="text-sm font-medium text-gray-800 block">
                {collegeInfo.name}
              </span>
            </div>
          </div>
        </div>

        {/* View Details Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleViewDetails();
          }}
          className={`w-full mt-6 bg-gradient-to-r ${
            currentTheme.button
          } text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-opacity-50 ${
            type === "graduate"
              ? "focus:ring-yellow-300"
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
};

export default ProgramCard;
