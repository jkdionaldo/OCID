import { useEffect, useState, useMemo } from "react";
import { useDashboardData } from "@/hooks/useDashboardData";
import { useDashboardState } from "@/hooks/useDashboardState";
import { useFileOperations } from "@/hooks/useFileOperations";
import { useCollegeOperations } from "@/hooks/useCollegeOperations";
import { useFileActions } from "@/hooks/useFileActions";
import { useDashboardFilters } from "@/hooks/useDashboardFilters";

import StatusCards from "@/components/dashboard/StatusCards";
import FilesTab from "@/components/dashboard/FilesTab";
import CollegesTab from "@/components/dashboard/CollegesTab";
import ProgramsTab from "@/components/dashboard/ProgramsTab";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardLoading from "@/components/dashboard/DashboardLoading";
import DashboardError from "@/components/dashboard/DashboardError";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showLoadingToast, updateToast } from "@/utils/toast";
import { Search, Building, BookOpen, GraduationCap } from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("files");

  // Data hooks
  const {
    data: dashboardData,
    loading: dashboardLoading,
    error: dashboardError,
    colleges,
    files,
    createCollege,
    createProgram,
    updateProgram,
    deleteProgram,
  } = useDashboardData();

  const memoizedFiles = useMemo(() => files, [files.length]);

  const { state, setters } = useDashboardState();

  // File operations
  const {
    getFileIcon,
    getStatusIcon,
    handleFileUpload,
    handleDownload,
    handleDelete,
  } = useFileOperations();

  // College operations
  const { collegesData, setCollegesData, handleAddCollege } =
    useCollegeOperations(dashboardData, createCollege);

  // Handle adding a new program
  const handleAddProgram = async (newProgram) => {
    const loadingToastId = showLoadingToast("Creating new program...");

    try {
      const result = await createProgram(newProgram);

      if (result.success) {
        updateToast(
          loadingToastId,
          `Program "${newProgram.program_name}" has been added successfully!`,
          "success"
        );
      } else {
        updateToast(
          loadingToastId,
          `Failed to add program: ${result.error}`,
          "error"
        );
      }
    } catch (error) {
      updateToast(
        loadingToastId,
        `An unexpected error occurred: ${error.message}`,
        "error"
      );
      console.error("Error adding program:", error);
    }
  };

  // Handle updating a program
  const handleUpdateProgram = async (programId, programData, programType) => {
    const loadingToastId = showLoadingToast("Updating program...");

    try {
      const result = await updateProgram(programId, programData, programType);

      if (result.success) {
        updateToast(loadingToastId, `Program updated successfully!`, "success");
      } else {
        updateToast(
          loadingToastId,
          `Failed to update program: ${result.error}`,
          "error"
        );
      }
    } catch (error) {
      updateToast(
        loadingToastId,
        `An unexpected error occurred: ${error.message}`,
        "error"
      );
      console.error("Error updating program:", error);
    }
  };

  // Handle deleting a program
  const handleDeleteProgram = async (programId, programType) => {
    const loadingToastId = showLoadingToast("Deleting program...");

    try {
      const result = await deleteProgram(programId, programType);

      if (result.success) {
        updateToast(loadingToastId, `Program deleted successfully!`, "success");
      } else {
        updateToast(
          loadingToastId,
          `Failed to delete program: ${result.error}`,
          "error"
        );
      }
    } catch (error) {
      updateToast(
        loadingToastId,
        `An unexpected error occurred: ${error.message}`,
        "error"
      );
      console.error("Error deleting program:", error);
    }
  };

  // File actions
  const {
    handleBulkDownload,
    handleBulkDelete,
    handleUpdateStatus,
    handleFileSelect,
    handleSelectAll,
  } = useFileActions(files, handleDelete, handleDownload);

  // Filter operations
  const { filteredFiles, sortedFiles } = useDashboardFilters(files, state);

  // College filter options
  const collegeFilterOptions = [
    "all",
    ...Array.from(new Set(colleges.map((college) => college.acronym))),
  ];

  // Update colleges data when real data is loaded
  useEffect(() => {
    if (colleges.length > 0 && dashboardData.campuses.length > 0) {
      const transformedData = {
        "CSU-MAIN": [],
        "CSU-CC": [],
      };

      const csuMainCampus = dashboardData.campuses.find(
        (campus) => campus.acronym === "CSU-MAIN"
      );
      const csuCcCampus = dashboardData.campuses.find(
        (campus) => campus.acronym === "CSU-CC"
      );

      colleges.forEach((college) => {
        const undergradPrograms = dashboardData.undergrads.filter(
          (p) => p.college_id === college.id
        );
        const graduatePrograms = dashboardData.graduates.filter(
          (p) => p.college_id === college.id
        );
        const collegeFiles = memoizedFiles.filter(
          (f) => f.college === college.acronym
        );

        const collegeInfo = {
          id: college.id,
          name: college.name,
          shortName: college.acronym,
          undergraduate_programs: undergradPrograms.length,
          graduate_programs: graduatePrograms.length,
          programs: undergradPrograms.length + graduatePrograms.length,
          files: collegeFiles.length,
          logo_url: college.logo_url,
          campus_id: college.campus_id,
        };

        if (college.campus_id === csuMainCampus?.id) {
          transformedData["CSU-MAIN"].push(collegeInfo);
        } else if (college.campus_id === csuCcCampus?.id) {
          transformedData["CSU-CC"].push(collegeInfo);
        }
      });

      setCollegesData(transformedData);
    }
  }, [
    colleges,
    dashboardData.campuses,
    dashboardData.undergrads,
    dashboardData.graduates,
    memoizedFiles,
    setCollegesData,
  ]);

  // Show error state
  if (dashboardError) {
    return <DashboardError error={dashboardError} />;
  }

  const tabs = [
    {
      id: "files",
      label: "Files & Documents",
      icon: Search,
      description: "Manage all files, curricula, and documents",
    },
    {
      id: "colleges",
      label: "Colleges",
      icon: Building,
      description: "Manage colleges and their information",
    },
    {
      id: "programs",
      label: "Programs",
      icon: BookOpen,
      description: "Manage undergraduate and graduate programs",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <DashboardHeader />

        {/* Stats Cards */}
        {dashboardLoading ? (
          <DashboardLoading type="stats" />
        ) : (
          <StatusCards files={files} />
        )}

        {/* Modern Tab Switcher */}
        <div className="mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6" aria-label="Tabs">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm transition-all duration-200 ${
                        activeTab === tab.id
                          ? "border-blue-500 text-blue-600 bg-blue-50/50"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <Icon className="w-5 h-5" />
                        <span>{tab.label}</span>
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Tab Description */}
            <div className="px-6 py-3 bg-gray-50/50 border-b border-gray-100">
              <p className="text-sm text-gray-600">
                {tabs.find((tab) => tab.id === activeTab)?.description}
              </p>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === "files" && (
                <FilesTab
                  files={files}
                  sortedFiles={sortedFiles}
                  selectedFiles={state.selectedFiles}
                  showBulkActions={state.showBulkActions}
                  viewMode={state.viewMode}
                  statuses={state.statuses}
                  categories={state.categories}
                  colleges={collegeFilterOptions}
                  searchTerm={state.searchTerm}
                  selectedCategory={state.selectedCategory}
                  selectedCollege={state.selectedCollege}
                  selectedStatus={state.selectedStatus}
                  sortBy={state.sortBy}
                  sortOrder={state.sortOrder}
                  setSearchTerm={setters.setSearchTerm}
                  setSelectedCategory={setters.setSelectedCategory}
                  setSelectedCollege={setters.setSelectedCollege}
                  setSelectedStatus={setters.setSelectedStatus}
                  setSortBy={setters.setSortBy}
                  setSortOrder={setters.setSortOrder}
                  setViewMode={setters.setViewMode}
                  handleDownload={handleDownload}
                  handleBulkDownload={() =>
                    handleBulkDownload(state.selectedFiles)
                  }
                  handleBulkDelete={() => handleBulkDelete(state.selectedFiles)}
                  handleDelete={(fileId) => handleDelete(fileId, files)}
                  handleUpdateStatus={handleUpdateStatus}
                  handleFileSelect={(fileId) =>
                    handleFileSelect(
                      fileId,
                      state.selectedFiles,
                      setters.setSelectedFiles,
                      setters.setShowBulkActions
                    )
                  }
                  handleSelectAll={() =>
                    handleSelectAll(
                      sortedFiles,
                      state.selectedFiles,
                      setters.setSelectedFiles,
                      setters.setShowBulkActions
                    )
                  }
                  setSelectedFiles={setters.setSelectedFiles}
                  setShowBulkActions={setters.setShowBulkActions}
                  getFileIcon={getFileIcon}
                  getStatusIcon={getStatusIcon}
                  loading={dashboardLoading}
                />
              )}

              {activeTab === "colleges" && (
                <CollegesTab
                  colleges={collegesData}
                  campuses={dashboardData.campuses}
                  onAddCollege={handleAddCollege}
                  loading={dashboardLoading}
                />
              )}

              {activeTab === "programs" && (
                <ProgramsTab
                  undergrads={dashboardData.undergrads}
                  graduates={dashboardData.graduates}
                  colleges={colleges}
                  campuses={dashboardData.campuses}
                  onAddProgram={handleAddProgram}
                  onUpdateProgram={handleUpdateProgram}
                  onDeleteProgram={handleDeleteProgram}
                  loading={dashboardLoading}
                />
              )}
            </div>
          </div>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Dashboard;
