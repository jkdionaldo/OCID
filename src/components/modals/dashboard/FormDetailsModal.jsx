import React from "react";
import {
  FileText,
  Download,
  ExternalLink,
  X,
  Calendar,
  Hash,
  Target,
  Link,
  FileCheck,
  AlertCircle,
  Clock,
  Edit3,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const FormDetailsModal = ({ isOpen, onClose, form }) => {
  if (!form) return null;

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatFileSize = (bytes) => {
    if (!bytes) return "N/A";
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round((bytes / Math.pow(1024, i)) * 100) / 100 + " " + sizes[i];
  };

  const getFileIcon = (fileType) => {
    switch (fileType?.toLowerCase()) {
      case "pdf":
        return <FileText className="w-10 h-10 text-red-500" />;
      case "docx":
      case "doc":
        return <FileText className="w-10 h-10 text-blue-500" />;
      case "xlsx":
      case "xls":
        return <FileText className="w-10 h-10 text-green-500" />;
      default:
        return <FileText className="w-10 h-10 text-gray-500" />;
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
    if (form.link) {
      window.open(form.link, "_blank", "noopener,noreferrer");
    }
  };

  const hasFile = form.file_url || form.file_path || form.file_name;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] flex flex-col p-0 gap-0">
        {/* Fixed Header */}
        <div className="flex-shrink-0 bg-gradient-to-r from-green-600 to-green-700 px-6 py-4 rounded-t-lg">
          <DialogHeader className="space-y-0">
            <DialogTitle className="flex items-center gap-3 text-white text-lg font-semibold">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <FileText className="h-4 w-4" />
              </div>
              Form Details
            </DialogTitle>
            <DialogDescription className="text-green-50 text-sm pt-1">
              Complete information about this form including file details and
              metadata.
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 bg-gradient-to-br from-slate-50 to-gray-100">
          {/* Form Header Info */}
          <div className="space-y-4">
            {/* Title */}
            <div className="bg-white rounded-2xl p-5 shadow-xl border border-white/20 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-900 leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                {form.title}
              </h3>
            </div>
          </div>

          {/* Form Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Basic Information */}
            <Card className="group border-0 shadow-xl bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
              <CardContent className="p-6 space-y-5">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl shadow-lg">
                    <Hash className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Form Details
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Form Number
                    </label>
                    <div className="bg-gradient-to-r from-gray-50 to-white px-3 py-2.5 rounded-xl border border-gray-200 shadow-sm">
                      <p className="text-gray-900 font-mono text-sm">
                        {form.form_number}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Purpose
                    </label>
                    <div className="bg-gradient-to-r from-gray-50 to-white px-3 py-2.5 rounded-xl border border-gray-200 shadow-sm">
                      <p className="text-gray-900 text-sm leading-relaxed">
                        {form.purpose}
                      </p>
                    </div>
                  </div>

                  {form.revision && (
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Revision
                      </label>
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-3 py-2.5 rounded-xl border border-blue-200 shadow-sm">
                        <p className="text-blue-900 text-sm font-medium">
                          {form.revision}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* File Information */}
            <Card className="group border-0 shadow-xl bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
              <CardContent className="p-6 space-y-5">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg">
                    <FileCheck className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    File Information
                  </h3>
                </div>

                {hasFile ? (
                  <div className="space-y-4">
                    {form.file_name && (
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          File Name
                        </label>
                        <div className="bg-gradient-to-r from-gray-50 to-white px-3 py-2.5 rounded-xl border border-gray-200 shadow-sm flex items-center gap-2">
                          {getFileIcon(form.file_type)}
                          <p className="text-gray-900 text-sm font-medium truncate">
                            {form.file_name}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-3">
                      {form.file_type && (
                        <div className="space-y-2">
                          <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Type
                          </label>
                          <div
                            className={`px-2.5 py-2 rounded-lg border-2 shadow-sm ${getFileTypeColor(
                              form.file_type
                            )}`}
                          >
                            <p className="text-xs font-bold">
                              {form.file_type.toUpperCase()}
                            </p>
                          </div>
                        </div>
                      )}

                      {form.file_size && (
                        <div className="space-y-2">
                          <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Size
                          </label>
                          <div className="bg-gradient-to-r from-gray-50 to-white px-2.5 py-2 rounded-lg border border-gray-200 shadow-sm">
                            <p className="text-gray-900 text-xs font-medium">
                              {formatFileSize(form.file_size)}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200 shadow-sm">
                    <div className="p-2 bg-amber-100 rounded-lg">
                      <AlertCircle className="w-4 h-4 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-amber-800 font-medium text-sm">
                        No file attached
                      </p>
                      <p className="text-amber-600 text-xs">
                        This form doesn't have an associated file
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Metadata - Full Width */}
          <Card className="group border-0 shadow-xl bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
            <CardContent className="p-6 space-y-5">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl shadow-lg">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  Timeline & Metadata
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    Created Date
                  </label>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-3 py-2.5 rounded-xl border border-green-200 shadow-sm">
                    <p className="text-green-900 text-sm font-medium">
                      {formatDate(form.created_at)}
                    </p>
                  </div>
                </div>

                {form.updated_at && form.updated_at !== form.created_at && (
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider flex items-center gap-2">
                      <Edit3 className="w-3 h-3" />
                      Last Updated
                    </label>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-3 py-2.5 rounded-xl border border-blue-200 shadow-sm">
                      <p className="text-blue-900 text-sm font-medium">
                        {formatDate(form.updated_at)}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Fixed Footer */}
        <div className="flex-shrink-0 bg-gray-50 border-t border-gray-200 px-6 py-4 rounded-b-lg">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              {hasFile && (
                <Button
                  onClick={handleDownload}
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-sm hover:shadow-md transition-all duration-200 text-sm"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download File
                </Button>
              )}

              {form.link && (
                <Button
                  onClick={handleOpenLink}
                  variant="outline"
                  className="border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-400 text-sm"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open Link
                </Button>
              )}
            </div>

            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-gray-300 hover:bg-gray-100 text-sm"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FormDetailsModal;
