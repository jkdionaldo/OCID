import React, { useCallback, useMemo } from "react";
import {
  BookOpen,
  GraduationCap,
  Building,
  Hash,
  Calendar,
  Clock,
  Edit3,
  AlertCircle,
  FileText,
  Download,
  Trash2,
  Plus,
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
import { useProgramFiles } from "@/hooks/useProgramFiles";
import { toast } from "sonner";

const ProgramDetailsModal = ({
  isOpen,
  onClose,
  program,
  colleges,
  campuses,
}) => {
  // Always call hooks unconditionally - pass null when no program
  const {
    curriculum,
    syllabus,
    loading: filesLoading,
    error: filesError,
    uploadFile,
    updateFile,
    deleteFile,
    refetch,
  } = useProgramFiles(program || null);

  const formatDate = useCallback((dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }, []);

  const formatFileSize = useCallback((bytes) => {
    if (!bytes) return "N/A";
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }, []);

  // Memoize college info to prevent unnecessary recalculations
  const collegeInfo = useMemo(() => {
    if (!program) {
      return {
        name: "Unknown",
        acronym: "N/A",
        campus: "Unknown",
        campusName: "Unknown Campus",
      };
    }

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
  }, [program, colleges, campuses]);

  const isGraduate = useMemo(() => {
    if (!program) return false;
    return program.program_type === "graduate" || program.type === "graduate";
  }, [program]);

  const Icon = isGraduate ? GraduationCap : BookOpen;

  // Memoize theme object
  const currentTheme = useMemo(() => {
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
    return theme[isGraduate ? "graduate" : "undergraduate"];
  }, [isGraduate]);

  const handleViewCollege = useCallback(() => {
    console.log("View college details:", collegeInfo);
  }, [collegeInfo]);

  const handleFileUpload = useCallback(
    async (fileType, file) => {
      if (!program) return { success: false };

      try {
        const result = await uploadFile(file, fileType);
        if (result.success) {
          toast.success(`${fileType} uploaded successfully`);
          await refetch();
        }
      } catch (error) {
        console.error(`Error uploading ${fileType}:`, error);
        toast.error(`Failed to upload ${fileType}`);
      }
    },
    [program, uploadFile, refetch]
  );

  const handleFileUpdate = useCallback(
    async (fileType, file) => {
      if (!program) return { success: false };

      try {
        const result = await updateFile(file, fileType);
        if (result.success) {
          toast.success(`${fileType} updated successfully`);
          await refetch();
        }
      } catch (error) {
        console.error(`Error updating ${fileType}:`, error);
        toast.error(`Failed to update ${fileType}`);
      }
    },
    [program, updateFile, refetch]
  );

  const handleFileDelete = useCallback(
    async (fileType) => {
      if (!program) return { success: false };

      try {
        const result = await deleteFile(fileType);
        if (result.success) {
          toast.success(`${fileType} deleted successfully`);
          await refetch();
        }
      } catch (error) {
        console.error(`Error deleting ${fileType}:`, error);
        toast.error(`Failed to delete ${fileType}`);
      }
    },
    [program, deleteFile, refetch]
  );

  const handleFileDownload = useCallback((fileUrl, fileName) => {
    if (fileUrl) {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = fileName || "download";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, []);

  // Move component definitions outside render but inside component
  const FileUploadInput = useCallback(
    ({ fileType, onFileSelect }) => (
      <input
        key={`${fileType}-upload-input`}
        type="file"
        id={`${fileType}-upload`}
        className="hidden"
        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            onFileSelect(file);
          }
        }}
      />
    ),
    []
  );

  const FileCard = useCallback(
    ({ fileType, fileData, displayName }) => {
      const hasFile = fileData && (fileData.file_url || fileData.file_path);

      return (
        <Card
          key={`file-card-${fileType}`}
          className="group border-0 shadow-xl bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
        >
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`p-2.5 bg-gradient-to-br ${
                  fileType === "curriculum"
                    ? "from-purple-500 to-purple-600"
                    : "from-indigo-500 to-indigo-600"
                } rounded-xl shadow-lg`}
              >
                <FileText className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{displayName}</h3>
            </div>

            {hasFile ? (
              <div className="space-y-4">
                {/* File Info */}
                <div className="space-y-3">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      File Name
                    </label>
                    <div className="bg-gradient-to-r from-gray-50 to-white px-3 py-2.5 rounded-xl border border-gray-200 shadow-sm">
                      <p className="text-gray-900 text-sm font-medium">
                        {fileData.file_name ||
                          fileData.original_name ||
                          "Unknown"}
                      </p>
                    </div>
                  </div>

                  {fileData.file_size && (
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        File Size
                      </label>
                      <div className="bg-gradient-to-r from-gray-50 to-white px-3 py-2.5 rounded-xl border border-gray-200 shadow-sm">
                        <p className="text-gray-900 text-sm">
                          {formatFileSize(fileData.file_size)}
                        </p>
                      </div>
                    </div>
                  )}

                  {fileData.created_at && (
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Uploaded Date
                      </label>
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-3 py-2.5 rounded-xl border border-green-200 shadow-sm">
                        <p className="text-green-900 text-sm">
                          {formatDate(fileData.created_at)}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* File Actions */}
                <div className="flex gap-2 pt-2">
                  <Button
                    onClick={() =>
                      handleFileDownload(
                        fileData.file_url || fileData.file_path,
                        fileData.file_name || fileData.original_name
                      )
                    }
                    size="sm"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>

                  <Button
                    onClick={() =>
                      document.getElementById(`${fileType}-upload`).click()
                    }
                    size="sm"
                    variant="outline"
                    className="flex-1 border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                  >
                    <Edit3 className="w-4 h-4 mr-2" />
                    Update
                  </Button>

                  <Button
                    onClick={() => handleFileDelete(fileType)}
                    size="sm"
                    variant="outline"
                    className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                <FileUploadInput
                  fileType={fileType}
                  onFileSelect={(file) => handleFileUpdate(fileType, file)}
                />
              </div>
            ) : (
              <div className="space-y-4">
                {/* Empty State */}
                <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                  <FileText className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600 text-sm mb-2">
                    No {fileType} file uploaded
                  </p>
                  <p className="text-gray-500 text-xs">
                    Upload a {fileType} file for this program
                  </p>
                </div>

                {/* Upload Button */}
                <Button
                  onClick={() =>
                    document.getElementById(`${fileType}-upload`).click()
                  }
                  className={`w-full bg-gradient-to-r ${
                    fileType === "curriculum"
                      ? "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
                      : "from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700"
                  } text-white`}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Upload {displayName}
                </Button>

                <FileUploadInput
                  fileType={fileType}
                  onFileSelect={(file) => handleFileUpload(fileType, file)}
                />
              </div>
            )}
          </CardContent>
        </Card>
      );
    },
    [
      formatFileSize,
      formatDate,
      handleFileDownload,
      handleFileDelete,
      handleFileUpdate,
      handleFileUpload,
    ]
  );

  // Early return after all hooks are called
  if (!program) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[850px] max-h-[90vh] flex flex-col p-0 gap-0">
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
              college details, files, and metadata.
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

          {/* Program Files Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <FileCard
              fileType="curriculum"
              fileData={curriculum}
              displayName="Curriculum"
            />
            <FileCard
              fileType="syllabus"
              fileData={syllabus}
              displayName="Syllabus"
            />
          </div>

          {/* Show loading/error states for files */}
          {filesLoading && (
            <div className="text-center py-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-lg">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                <span className="text-blue-700 text-sm">Loading files...</span>
              </div>
            </div>
          )}

          {filesError && (
            <div className="text-center py-4">
              <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-lg border border-red-200">
                <AlertCircle className="h-4 w-4 text-red-600 mr-2" />
                <span className="text-red-700 text-sm">{filesError}</span>
              </div>
            </div>
          )}

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
