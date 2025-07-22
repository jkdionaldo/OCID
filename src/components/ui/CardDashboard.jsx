import React, { useState } from "react";
import {
  GraduationCap,
  BookOpen,
  Users,
  FileText,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function CollegeCard({ college, campus, onViewDetails }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const logoSrc =
    college.logo_url || college.logo || "/images/default-college-logo.png";

  // Calculate program counts
  const undergradCount = college.undergraduate_programs || 0;
  const graduateCount = college.graduate_programs || 0;
  const totalPrograms = undergradCount + graduateCount;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
      {/* Header Section */}
      <div className="relative">
        <div className="h-32 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4">
          {college.logo_url || college.logo ? (
            <img
              src={logoSrc}
              alt={`${college.name} logo`}
              className="h-20 w-20 object-contain"
              onError={(e) => {
                e.target.src = "/images/default-college-logo.png";
              }}
            />
          ) : (
            <div className="h-20 w-20 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-xs font-medium text-center">
                {college.shortName || college.acronym || "No Logo"}
              </span>
            </div>
          )}
        </div>

        {/* Campus Badge */}
        <div className="absolute top-3 right-3">
          <div
            className={`px-2 py-1 rounded-full text-xs font-medium shadow-sm ${
              campus === "CSU-MAIN"
                ? "bg-green-500 text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            {campus}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* College Info */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">
            {college.name}
          </h3>
          <p className="text-sm text-gray-600 font-medium">
            {college.shortName || college.acronym}
          </p>
        </div>

        {/* Program Type Cards */}
        <div className="space-y-3 mb-4">
          {/* Undergraduate Programs */}
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-100">
            <div className="flex items-center">
              <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
              <div>
                <div className="text-sm font-semibold text-blue-900">
                  Undergraduate
                </div>
                <div className="text-xs text-blue-700">
                  {undergradCount} programs
                </div>
              </div>
            </div>
            <div className="text-xl font-bold text-blue-600">
              {undergradCount}
            </div>
          </div>

          {/* Graduate Programs */}
          <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-100">
            <div className="flex items-center">
              <GraduationCap className="w-5 h-5 text-purple-600 mr-2" />
              <div>
                <div className="text-sm font-semibold text-purple-900">
                  Graduate
                </div>
                <div className="text-xs text-purple-700">
                  {graduateCount} programs
                </div>
              </div>
            </div>
            <div className="text-xl font-bold text-purple-600">
              {graduateCount}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <div className="text-lg font-bold text-gray-900">
              {totalPrograms}
            </div>
            <div className="text-xs text-gray-600">Total Programs</div>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <div className="text-lg font-bold text-gray-900">
              {college.files || 0}
            </div>
            <div className="text-xs text-gray-600">Files</div>
          </div>
        </div>

        {/* Expandable Program Details */}
        {(undergradCount > 0 || graduateCount > 0) && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between p-2 text-sm text-gray-600 hover:text-gray-800 transition-colors border-t border-gray-100"
          >
            <span>Program Details</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        )}

        {/* Expanded Program List */}
        {isExpanded && (
          <div className="mt-3 space-y-2 border-t border-gray-100 pt-3">
            {undergradCount > 0 && (
              <div className="text-xs">
                <div className="font-semibold text-blue-700 mb-1">
                  Undergraduate Programs:
                </div>
                <div className="text-gray-600 pl-2">
                  {/* You can list specific programs here if available */}
                  {undergradCount} program{undergradCount !== 1 ? "s" : ""}{" "}
                  available
                </div>
              </div>
            )}
            {graduateCount > 0 && (
              <div className="text-xs">
                <div className="font-semibold text-purple-700 mb-1">
                  Graduate Programs:
                </div>
                <div className="text-gray-600 pl-2">
                  {/* You can list specific programs here if available */}
                  {graduateCount} program{graduateCount !== 1 ? "s" : ""}{" "}
                  available
                </div>
              </div>
            )}
          </div>
        )}

        {/* Action Button */}
        <button
          onClick={() => onViewDetails(college, campus)}
          className="w-full mt-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md"
        >
          Explore Programs
        </button>
      </div>
    </div>
  );
}
