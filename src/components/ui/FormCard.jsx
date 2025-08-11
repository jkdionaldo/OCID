import React from "react";
import { FileText, Download, ExternalLink, Sparkles, File } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FormCard = ({ form, onViewDetails }) => {
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

  const handleDownload = () => {
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

  const handleOpenLink = () => {
    window.open(form.link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-200 hover:border-purple-300 overflow-hidden transform hover:-translate-y-2">
      {/* Form Number Badge */}
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-purple-700 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm bg-opacity-90">
          {form.form_number}
        </div>
      </div>

      {/* Header Section with Gradient */}
      <div className="relative">
        <div className="h-36 bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center p-6 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm">
            <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-white/5 -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-white/5 translate-x-12 translate-y-12"></div>
          </div>

          {/* Icon Container */}
          <div className="relative z-10">
            <div className="h-20 w-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30 shadow-lg">
              <FileText className="h-10 w-10 text-white" />
            </div>
          </div>

          {/* Sparkle Effect */}
          <Sparkles className="absolute top-6 left-6 h-4 w-4 text-white/60 animate-pulse" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-5">
        {/* Form Info */}
        <div className="text-center space-y-2">
          <h3 className="text-xl font-bold text-gray-900 leading-tight line-clamp-2 group-hover:text-gray-700 transition-colors">
            {form.title}
          </h3>

          <div className="flex items-center justify-center gap-2 flex-wrap">
            {form.file_type && (
              <Badge
                className={`text-sm font-medium border ${getFileTypeColor(
                  form.file_type
                )}`}
              >
                <div className="flex items-center gap-1">
                  {getFileIcon(form.file_type)}
                  {form.file_type.toUpperCase()}
                </div>
              </Badge>
            )}

            {form.revision && (
              <Badge
                variant="outline"
                className="text-sm font-medium text-purple-600 bg-purple-50 border-purple-200"
              >
                {form.revision}
              </Badge>
            )}
          </div>
        </div>

        {/* Purpose */}
        <div className="p-4 rounded-xl border-2 bg-purple-50 border-purple-100 hover:shadow-md transition-all duration-300">
          <p className="text-sm text-gray-700 text-center line-clamp-3">
            {form.purpose}
          </p>
        </div>

        {/* File Info */}
        {(form.file_name || form.file_size) && (
          <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
            <div className="text-center space-y-1">
              {form.file_name && (
                <p
                  className="text-sm font-medium text-gray-800 truncate"
                  title={form.file_name}
                >
                  {form.file_name}
                </p>
              )}
              {form.file_size && (
                <p className="text-xs text-gray-500">
                  Size: {formatFileSize(form.file_size)}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3">
          {(form.file_url || form.file_path) && (
            <Button
              onClick={handleDownload}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Form
            </Button>
          )}

          {form.link && (
            <Button
              onClick={handleOpenLink}
              variant="outline"
              className="w-full border-2 border-purple-200 text-purple-600 hover:bg-purple-50 hover:border-purple-300 font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Open Link
            </Button>
          )}
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
    </div>
  );
};

export default FormCard;
