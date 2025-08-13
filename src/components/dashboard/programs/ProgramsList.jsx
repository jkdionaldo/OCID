import React from "react";
import {
  Building,
  Edit,
  Trash2,
  GraduationCap,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProgramsList = ({ programs, colleges, campuses, onEdit, onDelete }) => {
  const allPrograms = [
    ...programs.undergraduate.map((p) => ({ ...p, type: "undergraduate" })),
    ...programs.graduate.map((p) => ({ ...p, type: "graduate" })),
  ];

  // Enhanced getCollegeInfo function to handle embedded college data
  const getCollegeInfo = (program) => {
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
    const college = colleges?.find((c) => c.id === program.college_id);
    if (!college) return { name: "Unknown", acronym: "N/A", campus: "Unknown" };

    const campus = campuses?.find((c) => c.id === college.campus_id);
    return {
      name: college.name,
      acronym: college.acronym,
      campus: campus?.acronym || "Unknown",
    };
  };

  return (
    <div className="space-y-4">
      {allPrograms.map((program) => {
        const collegeInfo = getCollegeInfo(program);
        const Icon = program.type === "graduate" ? GraduationCap : BookOpen;
        const colorScheme = program.type === "graduate" ? "yellow" : "blue";

        // Dynamic theme based on type
        const programTheme = {
          undergraduate: {
            gradient: "from-blue-500/10 to-indigo-500/5",
            border: "border-blue-200",
            badge: "bg-blue-600",
            accent: "group-hover:text-blue-600",
            hover: "hover:border-blue-300 hover:shadow-blue-100/50",
          },
          graduate: {
            gradient: "from-yellow-500/10 to-amber-500/5",
            border: "border-yellow-200",
            badge: "bg-yellow-600",
            accent: "group-hover:text-yellow-600",
            hover: "hover:border-yellow-300 hover:shadow-yellow-100/50",
          },
        };

        const theme = programTheme[program.type];

        return (
          <Card
            key={`${program.type}-${program.id}`}
            className={`group relative overflow-hidden border-2 ${theme.border} ${theme.hover} transition-all duration-300 hover:shadow-lg bg-gradient-to-r ${theme.gradient} backdrop-blur-sm`}
          >
            <CardContent className="p-0">
              {/* Type Badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge
                  className={`${theme.badge} text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm`}
                >
                  {program.type === "graduate" ? "Graduate" : "Undergraduate"}
                </Badge>
              </div>

              {/* Sparkle Effect */}
              <Sparkles className="absolute top-6 left-6 h-4 w-4 text-gray-300 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-center p-6 relative">
                {/* Icon Section */}
                <div className="flex-shrink-0 mr-6">
                  <div
                    className={`h-20 w-20 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center border-2 ${theme.border} shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <Icon className={`h-10 w-10 text-${colorScheme}-600`} />
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    {/* Program Info */}
                    <div className="flex-1 mr-4">
                      <div className="flex items-center gap-3 mb-2">
                        <h3
                          className={`text-xl font-bold text-gray-900 ${theme.accent} transition-colors duration-300 line-clamp-1`}
                        >
                          {program.program_name}
                        </h3>
                      </div>

                      <div className="flex items-center gap-4 mb-3">
                        {program.acronym && (
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-2 h-2 rounded-full ${
                                program.type === "graduate"
                                  ? "bg-yellow-500"
                                  : "bg-blue-500"
                              }`}
                            ></div>
                            <span className="text-sm font-medium text-gray-600">
                              {program.acronym}
                            </span>
                          </div>
                        )}
                        <span className="text-gray-300">•</span>
                        <span className="text-sm text-gray-600">
                          {collegeInfo.name}
                        </span>
                      </div>

                      {/* College and Campus Info */}
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-100">
                          <Building className="w-4 h-4 text-gray-600" />
                          <span className="text-sm font-medium text-gray-800">
                            {collegeInfo.acronym}
                          </span>
                        </div>
                        <div
                          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border ${
                            collegeInfo.campus === "CSU-MAIN"
                              ? "bg-green-50 border-green-100"
                              : "bg-blue-50 border-blue-100"
                          }`}
                        >
                          <span
                            className={`text-sm font-medium ${
                              collegeInfo.campus === "CSU-MAIN"
                                ? "text-green-800"
                                : "text-blue-800"
                            }`}
                          >
                            {collegeInfo.campus}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Program Type Summary */}
                    <div className="flex-shrink-0 mt-4 lg:mt-0">
                      <div className="bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 shadow-sm p-4">
                        <div className="text-center">
                          <div
                            className={`text-lg font-bold ${
                              program.type === "graduate"
                                ? "text-yellow-700"
                                : "text-blue-700"
                            } mb-1`}
                          >
                            {program.type === "graduate" ? "GRAD" : "UNDERGRAD"}
                          </div>
                          <div className="text-xs font-medium text-gray-600">
                            Program
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="absolute top-1/2 right-20 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-4 flex items-center space-x-3 z-20">
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onEdit(program, program.type);
                  }}
                  size="sm"
                  className={`h-11 w-11 rounded-full p-0 bg-white/95 backdrop-blur-sm border-2 ${theme.border} ${theme.accent} shadow-lg hover:shadow-xl hover:bg-white hover:scale-110 transition-all duration-200`}
                  title="Edit Program"
                >
                  <Edit className="h-5 w-5" />
                </Button>

                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onDelete(program, program.type);
                  }}
                  size="sm"
                  className="h-11 w-11 rounded-full p-0 bg-white/95 backdrop-blur-sm border-2 border-red-200 text-red-600 shadow-lg hover:shadow-xl hover:bg-red-50 hover:border-red-300 hover:scale-110 transition-all duration-200"
                  title="Delete Program"
                >
                  <Trash2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Gradient Shadow Overlay */}
              <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-black/30 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10"></div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ProgramsList;
