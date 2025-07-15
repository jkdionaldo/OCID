import React, { useState, useRef } from "react";
import Status from "./Dashboard Components/status";
import Search from "./Dashboard Components/Search";
import FileComponent from "./Dashboard Components/file";
import CollegesAndForms from "./Dashboard Components/collegesAndForms";
import {
  Upload,
  Download,
  File,
  FileText,
  Image,
  Video,
  Music,
  Archive,
  Trash2,
  Eye,
  Plus,
  Edit3,
  Calendar,
  User,
  Building,
  GraduationCap,
  School,
  Users,
  BookOpen,
  FileEdit,
  AlertCircle,
  CheckCircle,
  Clock,
} from "lucide-react";

const Dashboard = () => {
  const [files, setFiles] = useState([
    {
      id: 1,
      name: "BSA_Agronomy_Curriculum_2023.pdf",
      type: "pdf",
      size: "2.4 MB",
      uploadDate: "2024-01-15",
      category: "Curriculum",
      college: "CAA",
      program: "BSA Agronomy",
      year: "2023",
      status: "active",
      lastModified: "2024-01-15",
      uploadedBy: "Admin",
    },
    {
      id: 2,
      name: "BSIT_Syllabus_2023.pdf",
      type: "pdf",
      size: "1.8 MB",
      uploadDate: "2024-01-10",
      category: "Syllabus",
      college: "CCIS",
      program: "BSIT",
      year: "2023",
      status: "active",
      lastModified: "2024-01-10",
      uploadedBy: "Dean CCIS",
    },
    {
      id: 3,
      name: "CED_Building_Photo.jpg",
      type: "jpg",
      size: "5.2 MB",
      uploadDate: "2024-01-08",
      category: "Images",
      college: "CED",
      program: "General",
      year: "2024",
      status: "active",
      lastModified: "2024-01-08",
      uploadedBy: "Photography Team",
    },
    {
      id: 4,
      name: "BSBA_Marketing_Requirements.docx",
      type: "docx",
      size: "856 KB",
      uploadDate: "2024-01-05",
      category: "Documents",
      college: "CBA",
      program: "BSBA Marketing",
      year: "2023",
      status: "draft",
      lastModified: "2024-01-12",
      uploadedBy: "Program Coordinator",
    },
  ]);

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

  const categories = [
    "all",
    "Curriculum",
    "Syllabus",
    "Documents",
    "Images",
    "Videos",
    "Others",
  ];
  const colleges = [
    "all",
    "CAA",
    "CBA",
    "CCIS",
    "CED",
    "CEGS",
    "CEIT",
    "CITTE",
    "CMNS",
    "CHASS",
  ];
  const statuses = ["all", "active", "draft", "archived", "pending"];

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

  const handleFileUpload = (uploadedFiles) => {
    const newFiles = Array.from(uploadedFiles).map((file, index) => ({
      id: files.length + index + 1,
      name: file.name,
      type: file.name.split(".").pop().toLowerCase(),
      size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
      uploadDate: new Date().toISOString().split("T")[0],
      category: determineCategory(file.type),
      college: "General",
      program: "General",
      year: new Date().getFullYear().toString(),
      status: "draft",
      lastModified: new Date().toISOString().split("T")[0],
      uploadedBy: "Current User",
    }));

    setFiles([...files, ...newFiles]);
  };

  const determineCategory = (fileType) => {
    if (fileType.startsWith("image/")) return "Images";
    if (fileType.startsWith("video/")) return "Videos";
    if (fileType.includes("pdf")) return "Documents";
    if (fileType.includes("document")) return "Documents";
    if (fileType.includes("sheet") || fileType.includes("excel"))
      return "Documents";
    return "Others";
  };

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

  const sortedFiles = [...filteredFiles].sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];

    if (sortOrder === "asc") {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const handleDownload = (file) => {
    // Simulate download with actual file URL if available
    const link = document.createElement("a");
    link.href = file.url || "#";
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleBulkDownload = () => {
    selectedFiles.forEach((fileId) => {
      const file = files.find((f) => f.id === fileId);
      if (file) handleDownload(file);
    });
    setSelectedFiles([]);
    setShowBulkActions(false);
  };

  const handleDelete = (fileId) => {
    if (window.confirm("Are you sure you want to delete this file?")) {
      setFiles(files.filter((file) => file.id !== fileId));
    }
  };

  const handleBulkDelete = () => {
    if (
      window.confirm(
        `Are you sure you want to delete ${selectedFiles.length} files?`
      )
    ) {
      setFiles(files.filter((file) => !selectedFiles.includes(file.id)));
      setSelectedFiles([]);
      setShowBulkActions(false);
    }
  };

  const handleUpdateStatus = (fileId, newStatus) => {
    setFiles(
      files.map((file) =>
        file.id === fileId
          ? {
              ...file,
              status: newStatus,
              lastModified: new Date().toISOString().split("T")[0],
            }
          : file
      )
    );
  };

  const handleFileSelect = (fileId) => {
    setSelectedFiles((prev) => {
      const newSelection = prev.includes(fileId)
        ? prev.filter((id) => id !== fileId)
        : [...prev, fileId];
      setShowBulkActions(newSelection.length > 0);
      return newSelection;
    });
  };

  const handleSelectAll = () => {
    if (selectedFiles.length === sortedFiles.length) {
      setSelectedFiles([]);
      setShowBulkActions(false);
    } else {
      setSelectedFiles(sortedFiles.map((file) => file.id));
      setShowBulkActions(true);
    }
  };

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

        {/* Stats Cards - Now using the Status component */}
        <Status files={files} />

        {/* Colleges & Upload Forms */}
        <CollegesAndForms
          files={files}
          isDragging={isDragging}
          setIsDragging={setIsDragging}
          handleFileUpload={handleFileUpload}
          handleDragOver={handleDragOver}
          handleDragLeave={handleDragLeave}
          handleDrop={handleDrop}
        />

        {/* Search Component */}
        <Search
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
          colleges={colleges}
          statuses={statuses}
        />

        {/* File Component */}
        <FileComponent
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
      </div>
    </div>
  );
};

export default Dashboard;
