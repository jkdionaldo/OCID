import { useState, useRef, useEffect } from "react";
import StatusCards from "@/components/dashboard/StatusCards";
import SearchFilters from "@/components/dashboard/SearchFilters";
import FileSection from "@/components/dashboard/FileSection";
import CollegesSection from "@/components/dashboard/CollegesSection";
import { useDashboardData } from "@/hooks/useDashboardData";
import {
  File,
  FileText,
  Image,
  Video,
  Archive,
  Edit3,
  FileEdit,
  AlertCircle,
  CheckCircle,
  Clock,
} from "lucide-react";
import { showLoadingToast, updateToast } from "@/utils/toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  // Use ONLY useDashboardData - it has everything we need
  const {
    data: dashboardData,
    loading: dashboardLoading,
    error: dashboardError,
    refetch: refetchDashboard,
    colleges,
    files,
    createCollege,
    uploadFile,
    deleteFile,
  } = useDashboardData();

  // Loading states are now unified
  const filesLoading = dashboardLoading;
  const collegesLoading = dashboardLoading;

  const canShowBasicLayout =
    dashboardData.campuses.length > 0 && dashboardData.colleges.length > 0;
  const isFullyLoaded =
    canShowBasicLayout && dashboardData.undergrads.length > 0;

  // Transform colleges data for the UI
  const [collegesData, setCollegesData] = useState({
    "CSU-MAIN": {
      undergraduate: [],
      graduate: [],
    },
    "CSU-CC": [],
  });

  // Update colleges data when real data is loaded
  useEffect(() => {
    if (
      colleges.length > 0 &&
      dashboardData.campuses.length > 0 &&
      dashboardData.undergrads.length > 0 &&
      dashboardData.graduates.length > 0
    ) {
      const transformedData = {
        "CSU-MAIN": {
          undergraduate: [],
          graduate: [],
        },
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
        // Count programs for this college
        const undergradPrograms = dashboardData.undergrads.filter(
          (p) => p.college_id === college.id
        );
        const graduatePrograms = dashboardData.graduates.filter(
          (p) => p.college_id === college.id
        );

        // Count files for this college
        const collegeFiles = files.filter((f) => f.college === college.acronym);

        const collegeInfo = {
          id: college.id,
          name: college.name,
          shortName: college.acronym,
          programs: 0,
          files: collegeFiles.length,
          logo_url: college.logo_url, // Include logo from database
        };

        if (college.campus_id === csuMainCampus?.id) {
          // Add to both undergraduate and graduate for CSU-MAIN
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
  }, [colleges, dashboardData, files]);

  // UI state
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCollege, setSelectedCollege] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [showBulkActions, setShowBulkActions] = useState(false);
  const [sortBy, setSortBy] = useState("uploadDate");
  const [sortOrder, setSortOrder] = useState("desc");
  const fileInputRef = useRef(null);

  // Options for filters
  const categories = [
    "all",
    "Curriculum",
    "Syllabus",
    "Documents",
    "Images",
    "Videos",
    "Others",
  ];

  const collegeFilterOptions = [
    "all",
    ...Array.from(new Set(colleges.map((college) => college.acronym))),
  ];

  const statuses = ["all", "active", "draft", "archived", "pending"];

  // Function to get appropriate icon for file type
  const getFileIcon = (type) => {
    switch (type) {
      case "pdf":
        return <FileText className="w-8 h-8 text-red-500" />;
      case "doc":
      case "docx":
        return <FileEdit className="w-8 h-8 text-blue-500" />;
      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
        return <Image className="w-8 h-8 text-green-500" />;
      case "mp4":
      case "avi":
      case "mov":
        return <Video className="w-8 h-8 text-purple-500" />;
      case "xlsx":
      case "xls":
        return <File className="w-8 h-8 text-green-600" />;
      default:
        return <File className="w-8 h-8 text-gray-500" />;
    }
  };

  // Function to get appropriate icon for status
  const getStatusIcon = (status) => {
    switch (status) {
      case "active":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "draft":
        return <Edit3 className="w-4 h-4 text-yellow-500" />;
      case "archived":
        return <Archive className="w-4 h-4 text-gray-500" />;
      case "pending":
        return <Clock className="w-4 h-4 text-blue-500" />;
      default:
        return <AlertCircle className="w-4 h-4 text-red-500" />;
    }
  };

  // Function to handle file upload
  const handleFileUpload = async (uploadedFiles) => {
    // For now, we'll create curriculum files by default
    // In a real app, you'd want to show a modal to select program and type
    const firstProgram = dashboardData.undergrads[0];
    if (!firstProgram) {
      alert("No programs available for file upload");
      return;
    }

    for (const file of uploadedFiles) {
      const result = await uploadFile(
        file,
        "curriculum",
        firstProgram.id,
        "undergrad"
      );
      if (!result.success) {
        console.error("Upload failed:", result.error);
        alert(`Failed to upload ${file.name}: ${result.error}`);
      }
    }
  };

  // Function to determine category based on file type
  const determineCategory = (fileType) => {
    if (fileType.startsWith("image/")) return "Images";
    if (fileType.startsWith("video/")) return "Videos";
    if (fileType.includes("pdf")) return "Documents";
    if (fileType.includes("document")) return "Documents";
    if (fileType.includes("sheet") || fileType.includes("excel"))
      return "Documents";
    return "Others";
  };

  // Drag and drop handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = e.dataTransfer.files;
    handleFileUpload(droppedFiles);
  };

  // Filter files based on search and filter criteria
  const filteredFiles = files.filter((file) => {
    const matchesSearch =
      file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      file.program.toLowerCase().includes(searchTerm.toLowerCase()) ||
      file.college.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || file.category === selectedCategory;
    const matchesCollege =
      selectedCollege === "all" || file.college === selectedCollege;
    const matchesStatus =
      selectedStatus === "all" || file.status === selectedStatus;
    return matchesSearch && matchesCategory && matchesCollege && matchesStatus;
  });

  // Sort files based on sort criteria
  const sortedFiles = [...filteredFiles].sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];

    if (sortOrder === "asc") {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  // Handle file download
  const handleDownload = (file) => {
    if (file.url) {
      const link = document.createElement("a");
      link.href = file.url;
      link.download = file.name;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("File URL not available");
    }
  };

  // Handle bulk download
  const handleBulkDownload = () => {
    selectedFiles.forEach((fileId) => {
      const file = files.find((f) => f.id === fileId);
      if (file) handleDownload(file);
    });
    setSelectedFiles([]);
    setShowBulkActions(false);
  };

  // Handle file deletion
  const handleDelete = async (fileId) => {
    if (window.confirm("Are you sure you want to delete this file?")) {
      const file = files.find((f) => f.id === fileId);
      if (file) {
        const result = await deleteFile(fileId, file.category);
        if (!result.success) {
          alert(`Failed to delete file: ${result.error}`);
        }
      }
    }
  };

  // Handle bulk deletion
  const handleBulkDelete = async () => {
    if (
      window.confirm(
        `Are you sure you want to delete ${selectedFiles.length} files?`
      )
    ) {
      for (const fileId of selectedFiles) {
        const file = files.find((f) => f.id === fileId);
        if (file) {
          await deleteFile(fileId, file.category);
        }
      }
      setSelectedFiles([]);
      setShowBulkActions(false);
    }
  };

  // Handle status update (this would need a new API endpoint)
  const handleUpdateStatus = (fileId, newStatus) => {
    // For now, just update local state
    // In a real app, you'd make an API call to update the status
    console.log(`Update status for ${fileId} to ${newStatus}`);
  };

  // Handle file selection
  const handleFileSelect = (fileId) => {
    setSelectedFiles((prev) => {
      const newSelection = prev.includes(fileId)
        ? prev.filter((id) => id !== fileId)
        : [...prev, fileId];
      setShowBulkActions(newSelection.length > 0);
      return newSelection;
    });
  };

  // Handle select all files
  const handleSelectAll = () => {
    if (selectedFiles.length === sortedFiles.length) {
      setSelectedFiles([]);
      setShowBulkActions(false);
    } else {
      setSelectedFiles(sortedFiles.map((file) => file.id));
      setShowBulkActions(true);
    }
  };

  // Handle adding a new college
  const handleAddCollege = async (newCollege) => {
    const loadingToastId = showLoadingToast("Creating new college...");

    try {
      // Optimistic update - immediately add to UI
      const tempCollegeId = `temp-${Date.now()}`;
      const tempCollege = {
        id: tempCollegeId,
        name: newCollege.name,
        shortName: newCollege.shortName,
        programs: 0,
        files: 0,
        logo_url: newCollege.logoPreview, // Use the preview for immediate display
      };

      // Find the campus and update UI immediately
      const selectedCampus = dashboardData.campuses.find(
        (campus) =>
          campus.acronym === newCollege.campus ||
          campus.name === newCollege.campus
      );

      // Optimistically update the colleges data
      setCollegesData((prevData) => {
        const updatedData = { ...prevData };

        if (
          selectedCampus?.name.includes("MAIN") ||
          selectedCampus?.acronym === "CSU-MAIN"
        ) {
          // Add to both undergraduate and graduate for CSU-MAIN
          updatedData["CSU-MAIN"] = {
            undergraduate: [
              ...(updatedData["CSU-MAIN"]?.undergraduate || []),
              tempCollege,
            ],
            graduate: [
              ...(updatedData["CSU-MAIN"]?.graduate || []),
              { ...tempCollege, id: `${tempCollegeId}-grad` },
            ],
          };
        } else if (
          selectedCampus?.name.includes("CC") ||
          selectedCampus?.acronym === "CSU-CC"
        ) {
          updatedData["CSU-CC"] = [
            ...(updatedData["CSU-CC"] || []),
            tempCollege,
          ];
        }

        return updatedData;
      });

      // Create FormData for the college creation
      const formData = new FormData();
      formData.append("name", newCollege.name);
      formData.append("acronym", newCollege.shortName);

      if (selectedCampus) {
        formData.append("campus_id", selectedCampus.id);
      }

      // Add logo if provided
      if (newCollege.logo) {
        formData.append("logo", newCollege.logo);
      }

      const result = await createCollege(formData);

      if (result.success) {
        updateToast(
          loadingToastId,
          `College "${newCollege.name}" has been added successfully!`,
          "success"
        );

        // No need to call refetchColleges() since we're using one hook
        // Data will be automatically refreshed by createCollege
      } else {
        // Revert optimistic update on failure
        setCollegesData((prevData) => {
          const updatedData = { ...prevData };

          if (
            selectedCampus?.name.includes("MAIN") ||
            selectedCampus?.acronym === "CSU-MAIN"
          ) {
            updatedData["CSU-MAIN"] = {
              undergraduate:
                updatedData["CSU-MAIN"]?.undergraduate?.filter(
                  (c) => c.id !== tempCollegeId
                ) || [],
              graduate:
                updatedData["CSU-MAIN"]?.graduate?.filter(
                  (c) => c.id !== `${tempCollegeId}-grad`
                ) || [],
            };
          } else if (
            selectedCampus?.name.includes("CC") ||
            selectedCampus?.acronym === "CSU-CC"
          ) {
            updatedData["CSU-CC"] =
              updatedData["CSU-CC"]?.filter((c) => c.id !== tempCollegeId) ||
              [];
          }

          return updatedData;
        });

        updateToast(
          loadingToastId,
          `Failed to add college: ${result.error}`,
          "error"
        );
      }
    } catch (error) {
      // Revert optimistic update on error
      setCollegesData((prevData) => {
        const updatedData = { ...prevData };

        const selectedCampus = dashboardData.campuses.find(
          (campus) =>
            campus.acronym === newCollege.campus ||
            campus.name === newCollege.campus
        );

        if (
          selectedCampus?.name.includes("MAIN") ||
          selectedCampus?.acronym === "CSU-MAIN"
        ) {
          updatedData["CSU-MAIN"] = {
            undergraduate:
              updatedData["CSU-MAIN"]?.undergraduate?.filter(
                (c) => !c.id.toString().startsWith("temp-")
              ) || [],
            graduate:
              updatedData["CSU-MAIN"]?.graduate?.filter(
                (c) => !c.id.toString().startsWith("temp-")
              ) || [],
          };
        } else if (
          selectedCampus?.name.includes("CC") ||
          selectedCampus?.acronym === "CSU-CC"
        ) {
          updatedData["CSU-CC"] =
            updatedData["CSU-CC"]?.filter(
              (c) => !c.id.toString().startsWith("temp-")
            ) || [];
        }

        return updatedData;
      });

      updateToast(
        loadingToastId,
        `An unexpected error occurred: ${error.message}`,
        "error"
      );
      console.error("Error adding college:", error);
    }
  };

  // Show error state
  if (dashboardError) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-2">
              Error Loading Dashboard
            </h1>
            <p className="text-gray-600">{dashboardError}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            File Management Dashboard
          </h1>
          <p className="text-gray-600">
            Manage all college files, curricula, syllabi, and documents
          </p>
        </div>

        {/* Stats Cards - Show loading skeleton if data isn't ready */}
        {filesLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
              >
                <div className="animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                  <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <StatusCards files={files} />
        )}

        {/* Colleges & Upload Forms - Show loading skeleton if data isn't ready */}
        {collegesLoading || dashboardLoading ? (
          <div className="mb-8">
            <div className="animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl shadow-lg border border-gray-100 h-64"
                  >
                    <div className="h-32 bg-gray-200 rounded-t-xl"></div>
                    <div className="p-4">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <CollegesSection
            files={files}
            colleges={collegesData}
            onAddCollege={handleAddCollege}
            isDragging={isDragging}
            setIsDragging={setIsDragging}
            handleFileUpload={handleFileUpload}
            handleDragOver={handleDragOver}
            handleDragLeave={handleDragLeave}
            handleDrop={handleDrop}
          />
        )}

        {/* Search Component */}
        <SearchFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedCollege={selectedCollege}
          setSelectedCollege={setSelectedCollege}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          sortBy={sortBy}
          setSortBy={setSortBy}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          viewMode={viewMode}
          setViewMode={setViewMode}
          categories={categories}
          colleges={collegeFilterOptions}
          statuses={statuses}
        />

        {/* File Component - Show loading skeleton if data isn't ready */}
        {filesLoading ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="h-16 bg-gray-200 rounded mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <FileSection
            files={files}
            sortedFiles={sortedFiles}
            selectedFiles={selectedFiles}
            showBulkActions={showBulkActions}
            viewMode={viewMode}
            statuses={statuses}
            handleDownload={handleDownload}
            handleBulkDownload={handleBulkDownload}
            handleBulkDelete={handleBulkDelete}
            handleDelete={handleDelete}
            handleUpdateStatus={handleUpdateStatus}
            handleFileSelect={handleFileSelect}
            handleSelectAll={handleSelectAll}
            setSelectedFiles={setSelectedFiles}
            setShowBulkActions={setShowBulkActions}
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
