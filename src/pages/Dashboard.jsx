import React, { useState, useRef } from "react";
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
  Search,
  Filter,
  Grid,
  List,
  Plus,
  FolderPlus,
  Calendar,
  User,
} from "lucide-react";

const Dashboard = () => {
  const [files, setFiles] = useState([
    {
      id: 1,
      name: "Program_Curriculum_2024.pdf",
      type: "pdf",
      size: "2.4 MB",
      uploadDate: "2024-01-15",
      category: "Documents",
    },
    {
      id: 2,
      name: "Student_Records.xlsx",
      type: "excel",
      size: "1.8 MB",
      uploadDate: "2024-01-10",
      category: "Data",
    },
    {
      id: 3,
      name: "Campus_Photo.jpg",
      type: "image",
      size: "5.2 MB",
      uploadDate: "2024-01-08",
      category: "Images",
    },
  ]);

  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const categories = ["all", "Documents", "Images", "Data", "Videos", "Others"];

  const getFileIcon = (type) => {
    switch (type) {
      case "pdf":
      case "doc":
      case "docx":
        return <FileText className="w-8 h-8 text-red-500" />;
      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
        return <Image className="w-8 h-8 text-blue-500" />;
      case "mp4":
      case "avi":
      case "mov":
        return <Video className="w-8 h-8 text-purple-500" />;
      case "mp3":
      case "wav":
        return <Music className="w-8 h-8 text-green-500" />;
      case "zip":
      case "rar":
        return <Archive className="w-8 h-8 text-yellow-500" />;
      default:
        return <File className="w-8 h-8 text-gray-500" />;
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
    }));

    setFiles([...files, ...newFiles]);
  };

  const determineCategory = (fileType) => {
    if (fileType.startsWith("image/")) return "Images";
    if (fileType.startsWith("video/")) return "Videos";
    if (fileType.includes("pdf") || fileType.includes("document"))
      return "Documents";
    if (fileType.includes("sheet") || fileType.includes("excel")) return "Data";
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
    const matchesSearch = file.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || file.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDownload = (file) => {
    // Simulate download
    const link = document.createElement("a");
    link.href = "#";
    link.download = file.name;
    link.click();
  };

  const handleDelete = (fileId) => {
    setFiles(files.filter((file) => file.id !== fileId));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Manage your files and documents</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Files</p>
                <p className="text-2xl font-bold text-gray-900">
                  {files.length}
                </p>
              </div>
              <File className="w-8 h-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Documents</p>
                <p className="text-2xl font-bold text-gray-900">
                  {files.filter((f) => f.category === "Documents").length}
                </p>
              </div>
              <FileText className="w-8 h-8 text-red-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Images</p>
                <p className="text-2xl font-bold text-gray-900">
                  {files.filter((f) => f.category === "Images").length}
                </p>
              </div>
              <Image className="w-8 h-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Storage Used
                </p>
                <p className="text-2xl font-bold text-gray-900">24.8 MB</p>
              </div>
              <Archive className="w-8 h-8 text-purple-500" />
            </div>
          </div>
        </div>

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
              Drag and drop files here, or click to browse
            </p>
            <input
              ref={fileInputRef}
              type="file"
              multiple
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

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search files..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-center gap-4">
              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-md overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${
                    viewMode === "grid"
                      ? "bg-green-600 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${
                    viewMode === "list"
                      ? "bg-green-600 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Files Display */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {filteredFiles.length === 0 ? (
            <div className="p-12 text-center">
              <File className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No files found
              </h3>
              <p className="text-gray-600">Upload some files to get started</p>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-6">
              {filteredFiles.map((file) => (
                <div
                  key={file.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex flex-col items-center text-center">
                    {getFileIcon(file.type)}
                    <h3 className="font-medium text-gray-900 mt-3 mb-1 truncate w-full">
                      {file.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-1">{file.size}</p>
                    <p className="text-xs text-gray-400 mb-3">
                      {file.uploadDate}
                    </p>

                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleDownload(file)}
                        className="p-2 text-green-600 hover:bg-green-50 rounded-md transition-colors duration-200"
                        title="Download"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                      <button
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                        title="View"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(file.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors duration-200"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Size
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
                  {filteredFiles.map((file) => (
                    <tr key={file.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {getFileIcon(file.type)}
                          <span className="ml-3 text-sm font-medium text-gray-900">
                            {file.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {file.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {file.size}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {file.uploadDate}
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
