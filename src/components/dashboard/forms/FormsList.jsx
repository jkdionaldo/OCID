import React from "react";
import {
  Edit,
  Trash2,
  Download,
  ExternalLink,
  FileText,
  File,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FormsList = ({ forms, onEdit, onDelete, onViewDetails }) => {
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

  const handleQuickDownload = (form, e) => {
    e.stopPropagation();
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

  const handleQuickLink = (link, e) => {
    e.stopPropagation();
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="space-y-4">
      {forms.map((form) => (
        <div
          key={form.id}
          className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-green-300 overflow-hidden cursor-pointer"
          onClick={() => onViewDetails?.(form)}
        >
          <div className="p-6">
            <div className="flex items-start justify-between">
              {/* Left Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-3 mb-3">
                  {/* Form Number Badge */}
                  <div className="bg-green-700 text-white px-3 py-1.5 rounded-full text-xs font-semibold">
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

                  {form.revision && (
                    <Badge
                      variant="outline"
                      className="text-green-600 bg-green-50 border-green-200"
                    >
                      {form.revision}
                    </Badge>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1 group-hover:text-green-600 transition-colors">
                  {form.title}
                </h3>

                {/* Brief Purpose */}
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {form.purpose}
                </p>

                {/* Quick Action Links */}
                <div className="flex items-center gap-3">
                  <Button
                    onClick={() => onViewDetails?.(form)}
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    View Details
                  </Button>

                  {(form.file_url || form.file_path) && (
                    <Button
                      onClick={(e) => handleQuickDownload(form, e)}
                      size="sm"
                      variant="outline"
                      className="text-green-600 border-green-200 hover:bg-green-50 hover:border-green-300"
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  )}

                  {form.link && (
                    <Button
                      onClick={(e) => handleQuickLink(form.link, e)}
                      size="sm"
                      variant="outline"
                      className="text-blue-600 border-blue-200 hover:bg-blue-50 hover:border-blue-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Link
                    </Button>
                  )}
                </div>
              </div>

              {/* Right Actions */}
              <div className="flex items-center space-x-2 ml-4">
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    onEdit(form);
                  }}
                  size="sm"
                  variant="ghost"
                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                  title="Edit Form"
                >
                  <Edit className="h-4 w-4" />
                </Button>

                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(form);
                  }}
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
