import React from "react";
import {
  Edit,
  Trash2,
  Download,
  ExternalLink,
  FileText,
  File,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FormsList = ({ forms, onEdit, onDelete }) => {
  const getFileIcon = (fileType) => {
    switch (fileType?.toLowerCase()) {
      case "pdf":
        return <File className="w-4 h-4 text-red-500" />;
      case "docx":
      case "doc":
        return <File className="w-4 h-4 text-blue-500" />;
      case "xlsx":
      case "xls":
        return <File className="w-4 h-4 text-green-500" />;
      default:
        return <FileText className="w-4 h-4 text-gray-500" />;
    }
  };

  const getFileTypeColor = (fileType) => {
    switch (fileType?.toLowerCase()) {
      case "pdf":
        return "bg-red-50 text-red-700 border-red-200";
      case "docx":
      case "doc":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "xlsx":
      case "xls":
        return "bg-green-50 text-green-700 border-green-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const formatFileSize = (bytes) => {
    if (!bytes) return "N/A";
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round((bytes / Math.pow(1024, i)) * 100) / 100 + " " + sizes[i];
  };

  const handleDownload = (form) => {
    if (form.file_url || form.file_path) {
      const downloadUrl = form.file_url || form.file_path;
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = form.file_name || `${form.title}.${form.file_type}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleOpenLink = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="space-y-4">
      {forms.map((form) => (
        <div
          key={form.id}
          className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-purple-200 hover:border-purple-300 overflow-hidden"
        >
          <div className="p-6">
            <div className="flex items-start justify-between">
              {/* Left Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-3 mb-3">
                  {/* Form Number Badge */}
                  <div className="bg-purple-700 text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                    {form.form_number}
                  </div>

                  {/* File Type Badge */}
                  {form.file_type && (
                    <Badge
                      className={`border ${getFileTypeColor(form.file_type)}`}
                    >
                      <div className="flex items-center gap-1">
                        {getFileIcon(form.file_type)}
                        {form.file_type.toUpperCase()}
                      </div>
                    </Badge>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1 group-hover:text-purple-600 transition-colors">
                  {form.title}
                </h3>

                {/* Purpose */}
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {form.purpose}
                </p>

                {/* File Info and Links */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  {form.file_name && (
                    <div className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      <span>{form.file_name}</span>
                    </div>
                  )}

                  {form.file_size && (
                    <div className="flex items-center gap-1">
                      <span>Size: {formatFileSize(form.file_size)}</span>
                    </div>
                  )}

                  {form.revision && (
                    <div className="flex items-center gap-1">
                      <span>Rev: {form.revision}</span>
                    </div>
                  )}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-3 mt-4">
                  {(form.file_url || form.file_path) && (
                    <Button
                      onClick={() => handleDownload(form)}
                      size="sm"
                      variant="outline"
                      className="text-purple-600 border-purple-200 hover:bg-purple-50 hover:border-purple-300"
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  )}

                  {form.link && (
                    <Button
                      onClick={() => handleOpenLink(form.link)}
                      size="sm"
                      variant="outline"
                      className="text-blue-600 border-blue-200 hover:bg-blue-50 hover:border-blue-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Open Link
                    </Button>
                  )}
                </div>
              </div>

              {/* Right Actions */}
              <div className="flex items-center space-x-2 ml-4">
                <Button
                  onClick={() => onEdit(form)}
                  size="sm"
                  variant="ghost"
                  className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                  title="Edit Form"
                >
                  <Edit className="h-4 w-4" />
                </Button>

                <Button
                  onClick={() => onDelete(form)}
                  size="sm"
                  variant="ghost"
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  title="Delete Form"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FormsList;
