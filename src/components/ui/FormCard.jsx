import React from "react";
import { FileText, Sparkles, File } from "lucide-react";
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
        return "bg-red-50 text-red-700 border-red-200 hover:bg-red-50 hover:text-red-700";
      case "docx":
      case "doc":
        return "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-50 hover:text-blue-700";
      case "xlsx":
      case "xls":
        return "bg-green-50 text-green-700 border-green-200 hover:bg-green-50 hover:text-green-700";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-50 hover:text-gray-700";
    }
  };
  return (
    <div
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-green-200 hover:border-green-300 overflow-hidden transform hover:-translate-y-2 cursor-pointer"
      onClick={() => onViewDetails?.(form)}
    >
      {/* Form Number Badge */}
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-emerald-700 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm bg-opacity-90">
          {form.form_number}
        </div>
      </div>

      {/* Header Section with Gradient */}
      <div className="relative">
        <div className="h-28 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center p-4 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm">
            <div className="absolute top-0 left-0 w-20 h-20 rounded-full bg-white/5 -translate-x-10 -translate-y-10"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 rounded-full bg-white/5 translate-x-8 translate-y-8"></div>
          </div>

          {/* Icon Container */}
          <div className="relative z-10">
            <div className="h-16 w-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30 shadow-lg">
              <FileText className="h-8 w-8 text-white" />
            </div>
          </div>

          {/* Sparkle Effect */}
          <Sparkles className="absolute top-4 left-4 h-3 w-3 text-white/60 animate-pulse" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-4">
        {/* Form Info */}
        <div className="text-center space-y-2">
          <h3 className="text-lg font-bold text-gray-900 leading-tight line-clamp-2 group-hover:text-gray-700 transition-colors">
            {form.title}
          </h3>

          <div className="flex items-center justify-center gap-2 flex-wrap">
            {form.file_type && (
              <Badge
                className={`text-xs font-medium border ${getFileTypeColor(
                  form.file_type
                )}`}
              >
                <div className="flex items-center gap-1">
                  {getFileIcon(form.file_type)}
                  <span className="hover:text-inherit">
                    {form.file_type.toUpperCase()}
                  </span>
                </div>
              </Badge>
            )}

            {form.revision && (
              <Badge
                variant="outline"
                className="text-xs font-medium text-green-600 bg-green-50 border-green-200"
              >
                {form.revision}
              </Badge>
            )}
          </div>
        </div>

        {/* Brief Purpose */}
        <div className="p-3 rounded-lg bg-green-50 border border-green-100">
          <p className="text-sm text-gray-700 text-center line-clamp-2">
            {form.purpose}
          </p>
        </div>

        {/* View Details Button - Fixed */}
        <button
          onClick={() => onViewDetails?.(form)}
          className="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-50"
        >
          <div className="flex items-center justify-center space-x-2">
            <span>View Details</span>
            <div className="w-1.5 h-1.5 bg-white rounded-full opacity-75"></div>
            <div className="w-1.5 h-1.5 bg-white rounded-full opacity-50"></div>
            <div className="w-1.5 h-1.5 bg-white rounded-full opacity-25"></div>
          </div>
        </button>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
    </div>
  );
};

export default FormCard;
