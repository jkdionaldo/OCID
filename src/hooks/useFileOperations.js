import { useDashboardData } from "./useDashboardData";
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

export const useFileOperations = () => {
  const { dashboardData, uploadFile, deleteFile } = useDashboardData();

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

  // Handle file deletion
  const handleDelete = async (fileId, files) => {
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

  return {
    getFileIcon,
    getStatusIcon,
    handleFileUpload,
    handleDownload,
    handleDelete,
  };
};
