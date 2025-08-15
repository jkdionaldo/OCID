import React from "react";
import { Building, AlertCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useProgramFiles } from "@/hooks/useProgramFiles";
import { useProgramData } from "@/hooks/useProgramData";
import { useProgramFileOperations } from "@/hooks/useProgramFileOperations";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import ProgramInfoCard from "@/components/dashboard/programs/ProgramInfoCard";
import CollegeInfoCard from "@/components/dashboard/programs/CollegeInfoCard";
import MetadataCard from "@/components/dashboard/programs/MetadataCard";
import FileCard from "@/components/dashboard/programs/FileCard";

// Modern loading skeleton component for file cards
const FileCardSkeleton = ({ type }) => {
  const isGraduate = type === "graduate";

  return (
    <div
      className={`group border-0 shadow-xl bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden animate-pulse border-2 ${
        isGraduate ? "border-yellow-100" : "border-blue-100"
      }`}
    >
      <div className="p-6 space-y-5">
        {/* Header with icon and title skeleton */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className={`p-2.5 rounded-xl shadow-lg ${
              isGraduate ? "bg-yellow-200" : "bg-blue-200"
            } animate-pulse`}
          >
            <div className="w-4 h-4 bg-white/60 rounded"></div>
          </div>
          <div className="h-5 bg-gray-200 rounded-lg w-24 animate-pulse"></div>
        </div>

        {/* File status skeleton */}
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl border-2 border-gray-100 bg-gray-50/50">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
                <div className="h-3 bg-gray-200 rounded w-24 animate-pulse"></div>
              </div>
            </div>
            <div className="w-6 h-6 bg-gray-200 rounded animate-pulse"></div>
          </div>

          {/* Action buttons skeleton */}
          <div className="flex gap-2 pt-2">
            <div className="flex-1 h-9 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="flex-1 h-9 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
        </div>

        {/* Shimmer effect overlay */}
        <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
      </div>
    </div>
  );
};

// Enhanced loading state component
const FilesLoadingState = ({ isGraduate }) => {
  return (
    <div className="space-y-6">
      {/* Pulsing dots indicator */}
      <div className="text-center py-6">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-md">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          </div>
          <span className="text-blue-700 text-sm font-medium ml-2">
            Loading program files...
          </span>
        </div>
      </div>

      {/* Modern skeleton cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <FileCardSkeleton type={isGraduate ? "graduate" : "undergraduate"} />
        <FileCardSkeleton type={isGraduate ? "graduate" : "undergraduate"} />
      </div>
    </div>
  );
};

const ProgramDetailsModal = ({
  isOpen,
  onClose,
  program,
  colleges,
  campuses,
}) => {
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

  const {
    formatDate,
    formatFileSize,
    collegeInfo,
    isGraduate,
    Icon,
    currentTheme,
    handleViewCollege,
  } = useProgramData(program, colleges, campuses);

  const {
    fileOperationLoading,
    deleteConfirmation,
    handleFileUpload,
    handleFileUpdate,
    handleFileDelete,
    handleDeleteConfirmation,
    handleCancelDelete,
    handleFileDownload,
  } = useProgramFileOperations(
    program,
    uploadFile,
    updateFile,
    deleteFile,
    refetch
  );

  if (!program) {
    return null;
  }

  return (
    <>
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
              <ProgramInfoCard
                program={program}
                isGraduate={isGraduate}
                currentTheme={currentTheme}
              />
              <CollegeInfoCard collegeInfo={collegeInfo} />
            </div>

            {/* Enhanced Files Loading State */}
            {filesLoading ? (
              <FilesLoadingState isGraduate={isGraduate} />
            ) : (
              <>
                {/* Program Files Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  <FileCard
                    fileType="curriculum"
                    fileData={curriculum}
                    displayName="Curriculum"
                    fileOperationLoading={fileOperationLoading}
                    formatFileSize={formatFileSize}
                    formatDate={formatDate}
                    handleFileDownload={handleFileDownload}
                    handleDeleteConfirmation={handleDeleteConfirmation}
                    handleFileUpdate={handleFileUpdate}
                    handleFileUpload={handleFileUpload}
                  />
                  <FileCard
                    fileType="syllabus"
                    fileData={syllabus}
                    displayName="Syllabus"
                    fileOperationLoading={fileOperationLoading}
                    formatFileSize={formatFileSize}
                    formatDate={formatDate}
                    handleFileDownload={handleFileDownload}
                    handleDeleteConfirmation={handleDeleteConfirmation}
                    handleFileUpdate={handleFileUpdate}
                    handleFileUpload={handleFileUpload}
                  />
                </div>

                {/* Error State */}
                {filesError && (
                  <div className="text-center py-4">
                    <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-lg border border-red-200">
                      <AlertCircle className="h-4 w-4 text-red-600 mr-2" />
                      <span className="text-red-700 text-sm">{filesError}</span>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Metadata Card - Always show */}
            <MetadataCard program={program} formatDate={formatDate} />
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

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        isOpen={deleteConfirmation.isOpen}
        onClose={handleCancelDelete}
        onConfirm={() => handleFileDelete(deleteConfirmation.fileType)}
        isDeleting={fileOperationLoading[deleteConfirmation.fileType]?.deleting}
        itemType={`${deleteConfirmation.fileType} file`}
        warningMessage={`This will permanently remove the ${deleteConfirmation.fileType} file from the system. This action cannot be undone.`}
        canDelete={true}
      />
    </>
  );
};

export default ProgramDetailsModal;
