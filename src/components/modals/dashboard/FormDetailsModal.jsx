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
        return <FileText className="w-5 h-5 text-red-500" />;
      case "docx":
      case "doc":
        return <FileText className="w-5 h-5 text-blue-500" />;
      case "xlsx":
      case "xls":
        return <FileText className="w-5 h-5 text-green-500" />;
      default:
        return <FileText className="w-5 h-5 text-gray-500" />;
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
            <DialogTitle className="flex items-center gap-3 text-white text-xl font-semibold">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <FileText className="h-5 w-5" />
              </div>
              Form Details
            </DialogTitle>
            <DialogDescription className="text-green-50 pt-2">
              Complete information about this form including file details and
              metadata.
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {/* Form Header Info */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="bg-green-700 text-white px-3 py-1.5">
                {form.form_number}
              </Badge>

              {form.file_type && (
                <Badge className={`border ${getFileTypeColor(form.file_type)}`}>
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

            <h2 className="text-2xl font-bold text-gray-900 leading-tight">
              {form.title}
            </h2>
          </div>

          {/* Form Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Information */}
            <Card className="border-2 border-green-100 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-5 space-y-4">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Hash className="w-4 h-4 text-green-600" />
                  Basic Information
                </h3>

                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Form Number
                    </label>
                    <p className="text-gray-900 font-mono bg-white px-3 py-2 rounded-md border">
                      {form.form_number}
                    </p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <p className="text-gray-900 bg-white px-3 py-2 rounded-md border">
                      {form.title}
                    </p>
                  </div>

                  {form.revision && (
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Revision
                      </label>
                      <p className="text-gray-900 bg-white px-3 py-2 rounded-md border">
                        {form.revision}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* File Information */}
            <Card className="border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-sky-50">
              <CardContent className="p-5 space-y-4">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-blue-600" />
                  File Information
                </h3>

                {hasFile ? (
                  <div className="space-y-3">
                    {form.file_name && (
                      <div>
                        <label className="text-sm font-medium text-gray-700">
                          File Name
                        </label>
                        <p className="text-gray-900 bg-white px-3 py-2 rounded-md border flex items-center gap-2">
                          {getFileIcon(form.file_type)}
                          {form.file_name}
                        </p>
                      </div>
                    )}

                    {form.file_type && (
                      <div>
                        <label className="text-sm font-medium text-gray-700">
                          File Type
                        </label>
                        <p className="text-gray-900 bg-white px-3 py-2 rounded-md border">
                          {form.file_type.toUpperCase()}
                        </p>
                      </div>
                    )}

                    {form.file_size && (
                      <div>
                        <label className="text-sm font-medium text-gray-700">
                          File Size
                        </label>
                        <p className="text-gray-900 bg-white px-3 py-2 rounded-md border">
                          {formatFileSize(form.file_size)}
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <AlertCircle className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      No file attached to this form
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Purpose Section */}
          <Card className="border-2 border-purple-100 bg-gradient-to-br from-purple-50 to-violet-50">
            <CardContent className="p-5 space-y-4">
              <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                <Target className="w-4 h-4 text-purple-600" />
                Purpose & Description
              </h3>
              <div className="bg-white p-4 rounded-lg border">
                <p className="text-gray-900 leading-relaxed whitespace-pre-wrap">
                  {form.purpose}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* External Link */}
          {form.link && (
            <Card className="border-2 border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50">
              <CardContent className="p-5 space-y-4">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Link className="w-4 h-4 text-orange-600" />
                  External Link
                </h3>
                <div className="bg-white p-4 rounded-lg border">
                  <p className="text-blue-600 hover:text-blue-700 break-all font-mono text-sm">
                    {form.link}
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Metadata */}
          <Card className="border-2 border-gray-100 bg-gradient-to-br from-gray-50 to-slate-50">
            <CardContent className="p-5 space-y-4">
              <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-600" />
                Metadata
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Created
                  </label>
                  <p className="text-gray-900 bg-white px-3 py-2 rounded-md border text-sm">
                    {formatDate(form.created_at)}
                  </p>
                </div>

                {form.updated_at && form.updated_at !== form.created_at && (
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Last Updated
                    </label>
                    <p className="text-gray-900 bg-white px-3 py-2 rounded-md border text-sm">
                      {formatDate(form.updated_at)}
                    </p>
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
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download File
                </Button>
              )}

              {form.link && (
                <Button
                  onClick={handleOpenLink}
                  variant="outline"
                  className="border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-400"
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
              className="border-gray-300 hover:bg-gray-100"
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
