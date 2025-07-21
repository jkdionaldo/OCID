import { useEffect } from "react";
import { useDashboardData } from "@/hooks/useDashboardData";
import { useDashboardState } from "@/hooks/useDashboardState";
import { useFileOperations } from "@/hooks/useFileOperations";
import { useCollegeOperations } from "@/hooks/useCollegeOperations";
import { useFileActions } from "@/hooks/useFileActions";
import { useDashboardFilters } from "@/hooks/useDashboardFilters";

import StatusCards from "@/components/dashboard/StatusCards";
import SearchFilters from "@/components/dashboard/SearchFilters";
import FileSection from "@/components/dashboard/FileSection";
import CollegesSection from "@/components/dashboard/CollegesSection";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardLoading from "@/components/dashboard/DashboardLoading";
import DashboardError from "@/components/dashboard/DashboardError";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  // Data hooks
  const {
    data: dashboardData,
    loading: dashboardLoading,
    error: dashboardError,
    colleges,
    files,
    createCollege,
  } = useDashboardData();

  // State management
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
    if (
      colleges.length > 0 &&
      dashboardData.campuses.length > 0 &&
      dashboardData.undergrads.length > 0 &&
      dashboardData.graduates.length > 0
    ) {
      const transformedData = {
        "CSU-MAIN": { undergraduate: [], graduate: [] },
        "CSU-CC": [],
      };

      // Find campus IDs
      const csuMainCampus = dashboardData.campuses.find(
        (campus) =>
          campus.name.includes("MAIN") || campus.acronym === "CSU-MAIN"
      );
      const csuCcCampus = dashboardData.campuses.find(
        (campus) => campus.name.includes("CC") || campus.acronym === "CSU-CC"
      );

      colleges.forEach((college) => {
        const undergradPrograms = dashboardData.undergrads.filter(
          (p) => p.college_id === college.id
        );
        const graduatePrograms = dashboardData.graduates.filter(
          (p) => p.college_id === college.id
        );
        const collegeFiles = files.filter((f) => f.college === college.acronym);

        const collegeInfo = {
          id: college.id,
          name: college.name,
          shortName: college.acronym,
          programs: 0,
          files: collegeFiles.length,
          logo_url: college.logo_url,
        };

        if (college.campus_id === csuMainCampus?.id) {
          if (undergradPrograms.length > 0) {
            transformedData["CSU-MAIN"].undergraduate.push({
              ...collegeInfo,
              programs: undergradPrograms.length,
            });
          }
          if (graduatePrograms.length > 0) {
            transformedData["CSU-MAIN"].graduate.push({
              ...collegeInfo,
              id: `${college.id}-grad`,
              programs: graduatePrograms.length,
            });
          }
        } else if (college.campus_id === csuCcCampus?.id) {
          transformedData["CSU-CC"].push({
            ...collegeInfo,
            programs: undergradPrograms.length + graduatePrograms.length,
          });
        }
      });

      setCollegesData(transformedData);
    }
  }, [colleges, dashboardData, files, setCollegesData]);

  // Drag and drop handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    setters.setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setters.setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setters.setIsDragging(false);
    const droppedFiles = e.dataTransfer.files;
    handleFileUpload(droppedFiles);
  };

  // Show error state
  if (dashboardError) {
    return <DashboardError error={dashboardError} />;
  }

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

        {/* Colleges Section */}
        {dashboardLoading ? (
          <DashboardLoading type="colleges" />
        ) : (
          <CollegesSection
            files={files}
            colleges={collegesData}
            onAddCollege={handleAddCollege}
            isDragging={state.isDragging}
            setIsDragging={setters.setIsDragging}
            handleFileUpload={handleFileUpload}
            handleDragOver={handleDragOver}
            handleDragLeave={handleDragLeave}
            handleDrop={handleDrop}
          />
        )}

        {/* Search Component */}
        <SearchFilters
          searchTerm={state.searchTerm}
          setSearchTerm={setters.setSearchTerm}
          selectedCategory={state.selectedCategory}
          setSelectedCategory={setters.setSelectedCategory}
          selectedCollege={state.selectedCollege}
          setSelectedCollege={setters.setSelectedCollege}
          selectedStatus={state.selectedStatus}
          setSelectedStatus={setters.setSelectedStatus}
          sortBy={state.sortBy}
          setSortBy={setters.setSortBy}
          sortOrder={state.sortOrder}
          setSortOrder={setters.setSortOrder}
          viewMode={state.viewMode}
          setViewMode={setters.setViewMode}
          categories={state.categories}
          colleges={collegeFilterOptions}
          statuses={state.statuses}
        />

        {/* File Section */}
        {dashboardLoading ? (
          <DashboardLoading type="files" />
        ) : (
          <FileSection
            files={files}
            sortedFiles={sortedFiles}
            selectedFiles={state.selectedFiles}
            showBulkActions={state.showBulkActions}
            viewMode={state.viewMode}
            statuses={state.statuses}
            handleDownload={handleDownload}
            handleBulkDownload={() => handleBulkDownload(state.selectedFiles)}
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
          />
        )}

        <ToastContainer />
      </div>
    </div>
  );
};

export default Dashboard;
