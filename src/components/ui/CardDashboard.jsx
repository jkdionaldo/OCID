import React from "react";
import { Link } from "react-router-dom";

export default function CardDashboard({ college, campus, onViewDetails }) {
  // Use database logo or show default placeholder
  const logoSrc =
    college.logo_url || college.logo || "/images/default-college-logo.png";

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
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
                <span className="text-gray-500 text-xs font-medium">
                  {college.shortName || college.acronym || "No Logo"}
                </span>
              </div>
            )}
          </div>

          {/* Status indicator */}
          <div className="absolute top-3 right-3">
            <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-sm">
              Active
            </div>
          </div>
        </div>

        {/* Rest of the card content remains the same */}
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">
              {college.name}
            </h3>
            <p className="text-sm text-gray-600 font-medium">
              {college.shortName || college.acronym}
            </p>
            <p className="text-xs text-gray-500 mt-1">{campus}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">
                {college.programs || 0}
              </div>
              <div className="text-xs text-blue-700 font-medium">Programs</div>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">
                {college.files || 0}
              </div>
              <div className="text-xs text-purple-700 font-medium">Files</div>
            </div>
          </div>

          <button
            onClick={() => onViewDetails(college, campus)}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md"
          >
            View Details
          </button>
        </div>
      </div>
    </>
  );
}
