import React, { useState, useRef } from "react";
import Status from "./Dashboard Components/status";
import Search from "./Dashboard Components/Search";
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

        {/* Upload Area */}
        <div className="mb-8">
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors duration-200 ${
              isDragging
                ? "border-green-400 bg-green-50"
                : "border-gray-300 bg-white hover:border-green-400 hover:bg-green-50"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Upload Files
            </h3>
            <p className="text-gray-600 mb-4">
              Drag and drop curriculum, syllabus, or document files here
            </p>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.xlsx,.xls"
              className="hidden"
              onChange={(e) => handleFileUpload(e.target.files)}
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200"
            >
              <Plus className="w-4 h-4 mr-2" />
              Choose Files
            </button>
          </div>
        </div>

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

        {/* Bulk Actions Bar */}
        {showBulkActions && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Users className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-blue-800 font-medium">
                  {selectedFiles.length} files selected
                </span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={handleBulkDownload}
                  className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm"
                >
                  Download All
                </button>
                <button
                  onClick={handleBulkDelete}
                  className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm"
                >
                  Delete All
                </button>
                <button
                  onClick={() => {
                    setSelectedFiles([]);
                    setShowBulkActions(false);
                  }}
                  className="px-3 py-1 bg-gray-600 text-white rounded-md hover:bg-gray-700 text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Files Display */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {sortedFiles.length === 0 ? (
            <div className="p-12 text-center">
              <File className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No files found
              </h3>
              <p className="text-gray-600">
                Upload some files or adjust your filters
              </p>
            </div>
          ) : viewMode === "grid" ? (
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {sortedFiles.length} files found
                </h3>
                <button
                  onClick={handleSelectAll}
                  className="text-sm text-green-600 hover:text-green-800"
                >
                  {selectedFiles.length === sortedFiles.length
                    ? "Deselect All"
                    : "Select All"}
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {sortedFiles.map((file) => (
                  <div
                    key={file.id}
                    className={`border rounded-lg p-4 hover:shadow-md transition-shadow duration-200 ${
                      selectedFiles.includes(file.id)
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200"
                    }`}
                  >
                    <div className="flex flex-col">
                      <div className="flex items-start justify-between mb-2">
                        <input
                          type="checkbox"
                          checked={selectedFiles.includes(file.id)}
                          onChange={() => handleFileSelect(file.id)}
                          className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                        />
                        <div className="flex items-center">
                          {getStatusIcon(file.status)}
                          <span className="ml-1 text-xs text-gray-500 capitalize">
                            {file.status}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col items-center text-center">
                        {getFileIcon(file.type)}
                        <h3 className="font-medium text-gray-900 mt-3 mb-1 truncate w-full text-sm">
                          {file.name}
                        </h3>
                        <p className="text-xs text-gray-500 mb-1">
                          {file.size}
                        </p>
                        <div className="text-xs text-gray-400 mb-2">
                          <p>
                            {file.college} - {file.program}
                          </p>
                          <p>
                            {file.year} | {file.uploadDate}
                          </p>
                        </div>

                        <div className="flex space-x-1">
                          <button
                            onClick={() => handleDownload(file)}
                            className="p-1.5 text-green-600 hover:bg-green-50 rounded-md transition-colors duration-200"
                            title="Download"
                          >
                            <Download className="w-3 h-3" />
                          </button>
                          <button
                            className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                            title="View"
                          >
                            <Eye className="w-3 h-3" />
                          </button>
                          <button
                            className="p-1.5 text-yellow-600 hover:bg-yellow-50 rounded-md transition-colors duration-200"
                            title="Edit"
                          >
                            <Edit3 className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => handleDelete(file.id)}
                            className="p-1.5 text-red-600 hover:bg-red-50 rounded-md transition-colors duration-200"
                            title="Delete"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left">
                      <input
                        type="checkbox"
                        checked={
                          selectedFiles.length === sortedFiles.length &&
                          sortedFiles.length > 0
                        }
                        onChange={handleSelectAll}
                        className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      File Details
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      College/Program
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sortedFiles.map((file) => (
                    <tr key={file.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="checkbox"
                          checked={selectedFiles.includes(file.id)}
                          onChange={() => handleFileSelect(file.id)}
                          className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {getFileIcon(file.type)}
                          <div className="ml-3">
                            <span className="text-sm font-medium text-gray-900">
                              {file.name}
                            </span>
                            <p className="text-xs text-gray-500">
                              {file.size} • {file.category}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {file.college}
                        </div>
                        <div className="text-xs text-gray-500">
                          {file.program} ({file.year})
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {getStatusIcon(file.status)}
                          <select
                            value={file.status}
                            onChange={(e) =>
                              handleUpdateStatus(file.id, e.target.value)
                            }
                            className="ml-2 text-xs border-none bg-transparent capitalize focus:ring-0"
                          >
                            {statuses.slice(1).map((status) => (
                              <option key={status} value={status}>
                                {status}
                              </option>
                            ))}
                          </select>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div>{file.uploadDate}</div>
                        <div className="text-xs">by {file.uploadedBy}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleDownload(file)}
                            className="text-green-600 hover:text-green-900"
                            title="Download"
                          >
                            <Download className="w-4 h-4" />
                          </button>
                          <button
                            className="text-blue-600 hover:text-blue-900"
                            title="View"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            className="text-yellow-600 hover:text-yellow-900"
                            title="Edit"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(file.id)}
                            className="text-red-600 hover:text-red-900"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
