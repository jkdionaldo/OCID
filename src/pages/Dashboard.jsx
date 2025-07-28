import React, { useState, useEffect, useMemo } from "react";
import { Search, Building, BookOpen } from "lucide-react";

// Import hooks and components
import { useDashboardData } from "@/hooks/useDashboardData";
import { useFileOperations } from "@/hooks/useFileOperations";
import { useFileActions } from "@/hooks/useFileActions";
import { useDashboardState } from "@/hooks/useDashboardState";
import { useDashboardFilters } from "@/hooks/useDashboardFilters";
import { useCollegeOperations } from "@/hooks/useCollegeOperations";

// Import components
import StatusCards from "@/components/dashboard/StatusCards";
import SearchFilters from "@/components/dashboard/SearchFilters";
import FilesTab from "@/components/dashboard/FilesTab";
import CollegesTab from "@/components/dashboard/CollegesTab";
import ProgramsTab from "@/components/dashboard/ProgramsTab";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardError from "@/components/dashboard/DashboardError";
import DashboardLoading from "@/components/dashboard/DashboardLoading";
import PerformanceMonitor from "@/components/dashboard/PerformanceMonitor";

// Import toast utilities
import { showLoadingToast, updateToast } from "@/utils/toast.jsx";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("files");

  // Data hooks with optimized caching
  const {
    data: dashboardData,
    loading: dashboardLoading,
    error: dashboardError,
    lastFetch,
    cacheInfo,
    colleges,
    files,
    createCollege,
    updateCollege,
    deleteCollege,
    createProgram,
    updateProgram,
    deleteProgram,
    refetch,
    isCacheValid,
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

  // Handle updating a college
  const handleUpdateCollege = async (collegeId, updatedData) => {
    const loadingToastId = showLoadingToast("Updating college...");

    try {
      let formData;

      if (updatedData.logo) {
        // If there's a logo, use FormData
        formData = new FormData();
        formData.append("name", updatedData.name);
        formData.append("acronym", updatedData.shortName);
        formData.append("campus_id", updatedData.campus_id);
        formData.append("logo", updatedData.logo);
      } else {
        // If no logo, use regular object
        formData = {
          name: updatedData.name,
          acronym: updatedData.shortName,
          campus_id: updatedData.campus_id,
        };
      }

      const result = await updateCollege(collegeId, formData);

      if (result.success) {
        updateToast(
          loadingToastId,
          `College "${updatedData.name}" has been updated successfully!`,
          "success"
        );
        return result;
      } else {
        updateToast(
          loadingToastId,
          `Failed to update college: ${result.error}`,
          "error"
        );
        return result;
      }
    } catch (error) {
      updateToast(
        loadingToastId,
        `An unexpected error occurred: ${error.message}`,
        "error"
      );
      console.error("Error updating college:", error);
      return { success: false, error: error.message };
    }
  };

  // Handle deleting a college
  const handleDeleteCollege = async (collegeId, campus) => {
    const loadingToastId = showLoadingToast("Deleting college...");

    try {
      const result = await deleteCollege(collegeId);

      if (result.success) {
        updateToast(loadingToastId, `College deleted successfully!`, "success");
        return { success: true };
      } else {
        updateToast(
          loadingToastId,
          `Failed to delete college: ${result.error}`,
          "error"
        );
        return { success: false, error: result.error };
      }
    } catch (error) {
      updateToast(
        loadingToastId,
        `An unexpected error occurred: ${error.message}`,
        "error"
      );
      console.error("Error deleting college:", error);
      return { success: false, error: error.message };
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

  // Transform college data for the colleges tab - using live data
  const transformedCollegesData = useMemo(() => {
    console.log("Transforming college data:", {
      collegesCount: colleges.length,
      campusesCount: dashboardData.campuses.length,
    });

    if (colleges.length === 0 || dashboardData.campuses.length === 0) {
      return {
        "CSU-MAIN": [],
        "CSU-CC": [],
      };
    }

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
      // Handle temporary colleges during optimistic updates
      if (college.id.toString().startsWith("temp-")) {
        // For temp colleges, find campus by campus_id instead of acronym
        const tempCampus = dashboardData.campuses.find(
          (campus) => campus.id === college.campus_id
        );

        if (tempCampus) {
          const transformedCollege = {
            ...college,
            shortName: college.acronym,
            undergraduate_programs: college.undergraduate_programs || 0,
            graduate_programs: college.graduate_programs || 0,
            programs: college.programs || 0,
            files: college.files || 0,
          };

          if (tempCampus.acronym === "CSU-MAIN") {
            transformedData["CSU-MAIN"].push(transformedCollege);
          } else if (tempCampus.acronym === "CSU-CC") {
            transformedData["CSU-CC"].push(transformedCollege);
          }
        }
        return; // Continue to next college
      }

      // Count programs for this college
      const undergradCount = dashboardData.undergrads.filter(
        (program) => program.college_id === college.id
      ).length;

      const graduateCount = dashboardData.graduates.filter(
        (program) => program.college_id === college.id
      ).length;

      // Count files for this college
      const collegeFiles = memoizedFiles.filter(
        (file) => file.college === college.acronym
      ).length;

      const transformedCollege = {
        ...college,
        shortName: college.acronym,
        undergraduate_programs: undergradCount,
        graduate_programs: graduateCount,
        programs: undergradCount + graduateCount,
        files: collegeFiles,
      };

      // Add to appropriate campus
      if (csuMainCampus && college.campus_id === csuMainCampus.id) {
        transformedData["CSU-MAIN"].push(transformedCollege);
      } else if (csuCcCampus && college.campus_id === csuCcCampus.id) {
        transformedData["CSU-CC"].push(transformedCollege);
      }
    });

    console.log("Transformed college data:", transformedData);
    return transformedData;
  }, [
    colleges,
    dashboardData.campuses,
    dashboardData.undergrads,
    dashboardData.graduates,
    memoizedFiles,
  ]);

  // Update colleges data when transformed data changes
  useEffect(() => {
    console.log("Setting colleges data:", transformedCollegesData);
    setCollegesData(transformedCollegesData);
  }, [transformedCollegesData, setCollegesData]);

  // Show error state
  if (dashboardError) {
    return (
      <DashboardError error={dashboardError} onRetry={() => refetch(true)} />
    );
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
        <DashboardHeader
          onRefresh={refetch}
          lastFetch={lastFetch}
          loading={dashboardLoading}
        />

        <PerformanceMonitor
          cacheInfo={cacheInfo}
          loading={dashboardLoading}
          lastFetch={lastFetch}
        />

        {/* Cache Status Indicator */}
        {isCacheValid && isCacheValid() && !dashboardLoading && (
          <div className="mb-4 p-2 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-700">
              ⚡ Data loaded from cache for faster performance
            </p>
          </div>
        )}

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
                          ? "border-green-500 text-green-600 bg-green-50/50"
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
                  colleges={transformedCollegesData}
                  campuses={dashboardData.campuses}
                  onAddCollege={handleAddCollege}
                  onUpdateCollege={handleUpdateCollege}
                  onDeleteCollege={handleDeleteCollege}
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
      </div>
    </div>
  );
};

export default Dashboard;
