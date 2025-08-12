import React from "react";
import {
  BookOpen,
  GraduationCap,
  Building,
  Hash,
  Target,
  Calendar,
  Clock,
  Edit3,
  AlertCircle,
  X,
  ExternalLink,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ProgramDetailsModal = ({
  isOpen,
  onClose,
  program,
  colleges,
  campuses,
}) => {
  if (!program) return null;

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Enhanced getCollegeInfo function to handle embedded college data
  const getCollegeInfo = () => {
    // First check if college info is embedded in the program
    if (program.college) {
      const campus = campuses?.find((c) => c.id === program.college.campus_id);
      return {
        name: program.college.name,
        acronym: program.college.acronym,
        campus: campus?.acronym || "Unknown",
        campusName: campus?.name || "Unknown Campus",
      };
    }

    // Fallback to looking up in colleges array
    const college = colleges?.find((c) => c.id === program.college_id);
    if (!college)
      return {
        name: "Unknown",
        acronym: "N/A",
        campus: "Unknown",
        campusName: "Unknown Campus",
      };

    const campus = campuses?.find((c) => c.id === college.campus_id);
    return {
      name: college.name,
      acronym: college.acronym,
      campus: campus?.acronym || "Unknown",
      campusName: campus?.name || "Unknown Campus",
    };
  };

  const collegeInfo = getCollegeInfo();
  const isGraduate =
    program.program_type === "graduate" || program.type === "graduate";
  const Icon = isGraduate ? GraduationCap : BookOpen;

  // Dynamic color scheme
  const theme = {
    graduate: {
      primary: "yellow",
      gradient: "from-yellow-500 to-amber-600",
      accent: "yellow",
      headerGradient: "from-yellow-600 to-yellow-700",
    },
    undergraduate: {
      primary: "blue",
      gradient: "from-blue-500 to-indigo-600",
      accent: "blue",
      headerGradient: "from-blue-600 to-blue-700",
    },
  };

  const currentTheme = theme[isGraduate ? "graduate" : "undergraduate"];

  const handleViewCollege = () => {
    // This could navigate to college details or open college modal
    console.log("View college details:", collegeInfo);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] flex flex-col p-0 gap-0">
        {/* Fixed Header */}
        <div
          className={`flex-shrink-0 bg-gradient-to-r ${currentTheme.headerGradient} px-6 py-4 rounded-t-lg`}
        >
          <DialogHeader className="space-y-0">
            <DialogTitle className="flex items-center gap-3 text-white text-lg font-semibold">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <Icon className="h-4 w-4" />
              </div>
              Program Details
            </DialogTitle>
            <DialogDescription
              className={`${
                isGraduate ? "text-yellow-50" : "text-blue-50"
              } text-sm pt-1`}
            >
              Complete information about this{" "}
              {isGraduate ? "graduate" : "undergraduate"} program including
              college details and metadata.
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 bg-gradient-to-br from-slate-50 to-gray-100">
          {/* Program Header Info */}
          <div className="space-y-4">
            {/* Title */}
            <div className="bg-white rounded-2xl p-5 shadow-xl border border-white/20 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-900 leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                {program.program_name}
              </h3>
              {program.acronym && (
                <p
                  className={`text-sm font-medium mt-2 px-3 py-1 rounded-full inline-block ${
                    isGraduate
                      ? "text-yellow-700 bg-yellow-50 border border-yellow-200"
                      : "text-blue-700 bg-blue-50 border border-blue-200"
                  }`}
                >
                  {program.acronym}
                </p>
              )}
            </div>
          </div>

          {/* Program Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Basic Information */}
            <Card className="group border-0 shadow-xl bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
              <CardContent className="p-6 space-y-5">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`p-2.5 bg-gradient-to-br ${currentTheme.gradient} rounded-xl shadow-lg`}
                  >
                    <Hash className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Program Information
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Program Type
                    </label>
                    <div className="bg-gradient-to-r from-gray-50 to-white px-3 py-2.5 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center justify-center gap-2">
                        <Icon
                          className={`w-4 h-4 ${
                            isGraduate ? "text-yellow-600" : "text-blue-600"
                          }`}
                        />
                        <p className="text-gray-900 text-sm font-medium">
                          {isGraduate
                            ? "Graduate Program"
                            : "Undergraduate Program"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {program.acronym && (
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Program Acronym
                      </label>
                      <div className="bg-gradient-to-r from-gray-50 to-white px-3 py-2.5 rounded-xl border border-gray-200 shadow-sm">
                        <p className="text-gray-900 font-mono text-sm">
                          {program.acronym}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* College Information */}
            <Card className="group border-0 shadow-xl bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
              <CardContent className="p-6 space-y-5">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`p-2.5 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl shadow-lg`}
                  >
                    <Building className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    College Information
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      College Name
                    </label>
                    <div className="bg-gradient-to-r from-gray-50 to-white px-3 py-2.5 rounded-xl border border-gray-200 shadow-sm">
                      <p className="text-gray-900 text-sm leading-relaxed">
                        {collegeInfo.name}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Acronym
                      </label>
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-3 py-2.5 rounded-xl border border-green-200 shadow-sm">
                        <p className="text-green-900 text-sm font-medium">
                          {collegeInfo.acronym}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Campus
                      </label>
                      <div
                        className={`px-3 py-2.5 rounded-xl border shadow-sm ${
                          collegeInfo.campus === "CSU-MAIN"
                            ? "bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200"
                            : "bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200"
                        }`}
                      >
                        <p
                          className={`text-sm font-medium ${
                            collegeInfo.campus === "CSU-MAIN"
                              ? "text-emerald-900"
                              : "text-blue-900"
                          }`}
                        >
                          {collegeInfo.campus}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Metadata - Full Width */}
          <Card className="group border-0 shadow-xl bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
            <CardContent className="p-6 space-y-5">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl shadow-lg">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  Timeline & Metadata
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    Created Date
                  </label>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-3 py-2.5 rounded-xl border border-green-200 shadow-sm">
                    <p className="text-green-900 text-sm font-medium">
                      {formatDate(program.created_at)}
                    </p>
                  </div>
                </div>

                {program.updated_at &&
                  program.updated_at !== program.created_at && (
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider flex items-center gap-2">
                        <Edit3 className="w-3 h-3" />
                        Last Updated
                      </label>
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-3 py-2.5 rounded-xl border border-blue-200 shadow-sm">
                        <p className="text-blue-900 text-sm font-medium">
                          {formatDate(program.updated_at)}
                        </p>
                      </div>
                    </div>
                  )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Fixed Footer */}
        <div className="flex-shrink-0 bg-gray-50 border-t border-gray-200 px-6 py-4 rounded-b-lg">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Button
                onClick={handleViewCollege}
                className={`bg-gradient-to-r ${currentTheme.gradient} hover:shadow-md text-white shadow-sm transition-all duration-200 text-sm`}
              >
                <Building className="h-4 w-4 mr-2" />
                View College Details
              </Button>
            </div>

            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-gray-300 hover:bg-gray-100 text-sm"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProgramDetailsModal;
