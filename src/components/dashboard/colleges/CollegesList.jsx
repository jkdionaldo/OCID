import React from "react";
import {
  Building,
  Edit,
  Trash2,
  GraduationCap,
  BookOpen,
  FileText,
  Eye,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CollegesList = ({
  colleges,
  campuses,
  onViewDetails,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="space-y-4">
      {colleges.map((college) => {
        const undergradCount = college.undergraduate_programs || 0;
        const graduateCount = college.graduate_programs || 0;
        const totalPrograms = undergradCount + graduateCount;
        const campusAcronym =
          college.campus?.acronym ||
          college.campus_acronym ||
          campuses?.find((c) => c.id === college.campus_id)?.acronym ||
          "Unknown";

        // Dynamic theme based on campus
        const campusTheme = {
          "CSU-MAIN": {
            gradient: "from-emerald-500/10 to-green-500/5",
            border: "border-emerald-200",
            badge: "bg-emerald-600",
            accent: "group-hover:text-emerald-600",
            hover: "hover:border-emerald-300 hover:shadow-emerald-100/50",
          },
          "CSU-CC": {
            gradient: "from-blue-500/10 to-indigo-500/5",
            border: "border-blue-200",
            badge: "bg-blue-600",
            accent: "group-hover:text-blue-600",
            hover: "hover:border-blue-300 hover:shadow-blue-100/50",
          },
        };

        const theme = campusTheme[campusAcronym] || campusTheme["CSU-MAIN"];

        return (
          <Card
            key={college.id}
            className={`group relative overflow-hidden border-2 ${theme.border} ${theme.hover} transition-all duration-300 hover:shadow-lg bg-gradient-to-r ${theme.gradient} backdrop-blur-sm`}
          >
            <CardContent className="p-0">
              {/* Campus Badge - Floating */}
              <div className="absolute top-4 right-4 z-10">
                <Badge
                  className={`${theme.badge} text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm`}
                >
                  {campusAcronym}
                </Badge>
              </div>

              {/* Sparkle Effect */}
              <Sparkles className="absolute top-6 left-6 h-4 w-4 text-gray-300 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

              <div
                className="flex items-center p-6 cursor-pointer relative"
                onClick={() => onViewDetails(college, campusAcronym)}
              >
                {/* Logo Section */}
                <div className="flex-shrink-0 mr-6">
                  {college.logo_url ? (
                    <div
                      className={`h-20 w-20 bg-white/80 backdrop-blur-sm rounded-2xl p-3 shadow-lg border-2 ${theme.border} group-hover:shadow-xl transition-all duration-300`}
                    >
                      <img
                        src={college.logo_url}
                        alt={`${college.name} logo`}
                        className="h-full w-full object-contain"
                        onError={(e) => {
                          e.target.src = "/images/default-college-logo.png";
                        }}
                      />
                    </div>
                  ) : (
                    <div
                      className={`h-20 w-20 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center border-2 ${theme.border} shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      <Building className="h-10 w-10 text-gray-400" />
                    </div>
                  )}
                </div>

                {/* Main Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    {/* College Info */}
                    <div className="flex-1 mr-4">
                      <div className="flex items-center gap-3 mb-2">
                        <h3
                          className={`text-xl font-bold text-gray-900 ${theme.accent} transition-colors duration-300 line-clamp-1`}
                        >
                          {college.name}
                        </h3>
                      </div>

                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              campusAcronym === "CSU-MAIN"
                                ? "bg-emerald-500"
                                : "bg-blue-500"
                            }`}
                          ></div>
                          <span className="text-sm font-medium text-gray-600">
                            {college.acronym || college.shortName}
                          </span>
                        </div>
                        <span className="text-gray-300">•</span>
                        <span className="text-sm text-gray-600">
                          {college.campus?.name ||
                            college.campus_name ||
                            campuses?.find((c) => c.id === college.campus_id)
                              ?.name ||
                            "Unknown Campus"}
                        </span>
                      </div>

                      {/* Programs Stats - Enhanced */}
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-lg border border-blue-100">
                          <BookOpen className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-medium text-blue-800">
                            {undergradCount} Undergrad
                          </span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-yellow-50 rounded-lg border border-purple-100">
                          <GraduationCap className="w-4 h-4 text-yellow-600" />
                          <span className="text-sm font-medium text-yellow-800">
                            {graduateCount} Graduate
                          </span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-100">
                          <FileText className="w-4 h-4 text-gray-600" />
                          <span className="text-sm font-medium text-gray-800">
                            {college.files || 0} Files
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Stats Summary - Right Side */}
                    <div className="flex-shrink-0 mt-4 lg:mt-8">
                      <div className="bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 shadow-sm">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900 mb-1">
                            {totalPrograms}
                          </div>
                          <div className="text-xs font-medium text-gray-600">
                            Total Programs
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons - Enhanced Design */}
              <div className="absolute top-1/2 right-20 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-4 flex items-center space-x-3 z-20">
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onViewDetails(college, campusAcronym);
                  }}
                  size="sm"
                  className="h-11 w-11 rounded-full p-0 bg-white/95 backdrop-blur-sm border-2 border-amber-200 text-amber-600 shadow-lg hover:shadow-xl hover:bg-amber-50 hover:border-amber-300 hover:scale-110 transition-all duration-200 focus:ring-2 focus:ring-amber-300 focus:ring-opacity-50"
                  title="View Details"
                >
                  <Eye className="h-5 w-5" />
                </Button>

                {/* Edit Button */}
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onEdit(college);
                  }}
                  size="sm"
                  className={`h-11 w-11 rounded-full p-0 bg-white/95 backdrop-blur-sm border-2 ${theme.border} ${theme.accent} shadow-lg hover:shadow-xl hover:bg-white hover:scale-110 transition-all duration-200 focus:ring-2 focus:ring-opacity-50`}
                  title="Edit College"
                >
                  <Edit className="h-5 w-5" />
                </Button>

                {/* Delete Button */}
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onDelete(college);
                  }}
                  size="sm"
                  className="h-11 w-11 rounded-full p-0 bg-white/95 backdrop-blur-sm border-2 border-red-200 text-red-600 shadow-lg hover:shadow-xl hover:bg-red-50 hover:border-red-300 hover:scale-110 transition-all duration-200 focus:ring-2 focus:ring-red-300 focus:ring-opacity-50"
                  title="Delete College"
                >
                  <Trash2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Enhanced Gradient Shadow Overlay for Action Buttons Area */}
              <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-black/30 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10"></div>

              {/* Original Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default CollegesList;
