import React, { useState, useEffect } from "react";
import {
  FileText,
  Download,
  Search,
  Filter,
  ExternalLink,
  File,
  AlertCircle,
  Loader2,
  Sparkles,
  Calendar,
  Tag,
  FolderOpen,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { formService } from "@/services/formService";

// Custom SVG Icons for different file types
const PdfIcon = ({ className = "h-6 w-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    className={className}
    fill="currentColor"
  >
    <path d="M 7 2 L 7 48 L 43 48 L 43 15.410156 L 29.183594 2 Z M 9 4 L 28 4 L 28 17 L 41 17 L 41 46 L 9 46 Z M 30 5.578125 L 39.707031 15 L 30 15 Z M 23.769531 19.875 C 23.019531 19.875 22.242188 20.300781 21.902344 20.933594 C 21.558594 21.5625 21.535156 22.238281 21.621094 22.941406 C 21.753906 24.050781 22.257813 25.304688 22.910156 26.589844 C 22.585938 27.683594 22.429688 28.636719 21.941406 29.804688 C 21.320313 31.292969 20.558594 32.472656 19.828125 33.710938 C 18.875 34.15625 17.671875 34.554688 16.96875 35.015625 C 16.179688 35.535156 15.554688 36 15.1875 36.738281 C 15.007813 37.105469 14.914063 37.628906 15.09375 38.101563 C 15.273438 38.574219 15.648438 38.882813 16.035156 39.082031 C 16.855469 39.515625 17.800781 39.246094 18.484375 38.785156 C 19.167969 38.324219 19.777344 37.648438 20.390625 36.824219 C 20.699219 36.40625 20.945313 35.730469 21.25 35.242188 C 22.230469 34.808594 22.925781 34.359375 24.039063 33.976563 C 25.542969 33.457031 26.882813 33.238281 28.289063 32.933594 C 29.464844 33.726563 30.714844 34.34375 32.082031 34.34375 C 32.855469 34.34375 33.453125 34.308594 34.035156 33.992188 C 34.621094 33.675781 34.972656 32.914063 34.972656 32.332031 C 34.972656 31.859375 34.765625 31.355469 34.4375 31.03125 C 34.105469 30.707031 33.714844 30.535156 33.3125 30.425781 C 32.515625 30.210938 31.609375 30.226563 30.566406 30.332031 C 30.015625 30.390625 29.277344 30.683594 28.664063 30.796875 C 28.582031 30.734375 28.503906 30.707031 28.421875 30.636719 C 27.175781 29.5625 26.007813 28.078125 25.140625 26.601563 C 25.089844 26.511719 25.097656 26.449219 25.046875 26.359375 C 25.257813 25.570313 25.671875 24.652344 25.765625 23.960938 C 25.894531 23.003906 25.921875 22.167969 25.691406 21.402344 C 25.574219 21.019531 25.378906 20.632813 25.039063 20.335938 C 24.699219 20.039063 24.21875 19.875 23.769531 19.875 Z M 23.6875 21.867188 C 23.699219 21.867188 23.71875 21.875 23.734375 21.878906 C 23.738281 21.886719 23.746094 21.882813 23.777344 21.980469 C 23.832031 22.164063 23.800781 22.683594 23.78125 23.144531 C 23.757813 23.027344 23.621094 22.808594 23.609375 22.703125 C 23.550781 22.238281 23.625 21.941406 23.65625 21.890625 C 23.664063 21.871094 23.675781 21.867188 23.6875 21.867188 Z M 24.292969 28.882813 C 24.910156 29.769531 25.59375 30.597656 26.359375 31.359375 C 25.335938 31.632813 24.417969 31.730469 23.386719 32.085938 C 23.167969 32.160156 23.042969 32.265625 22.828125 32.34375 C 23.132813 31.707031 23.511719 31.234375 23.785156 30.578125 C 24.035156 29.980469 24.078125 29.476563 24.292969 28.882813 Z" />
  </svg>
);

const DocxIcon = ({ className = "h-6 w-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 50 50"
    className={className}
    fill="currentColor"
  >
    <path d="M 12 4 C 10.35 4 9 5.35 9 7 L 9 11 L 11 11 L 11 7 C 11 6.45 11.45 6 12 6 L 43 6 C 43.55 6 44 6.45 44 7 L 44 14 L 26.509766 14 C 26.799766 14.61 26.970234 15.28 26.990234 16 L 44 16 L 44 24 L 27 24 L 27 26 L 44 26 L 44 34 L 26.990234 34 C 26.970234 34.72 26.799766 35.39 26.509766 36 L 44 36 L 44 43 C 44 43.55 43.55 44 43 44 L 12 44 C 11.45 44 11 43.55 11 43 L 11 39 L 9 39 L 9 43 C 9 44.65 10.35 46 12 46 L 43 46 C 44.65 46 46 44.65 46 43 L 46 7 C 46 5.35 44.65 4 43 4 L 12 4 z M 4.1992188 13 C 2.4437524 13 1 14.443752 1 16.199219 L 1 33.800781 C 1 35.556248 2.4437524 37 4.1992188 37 L 21.800781 37 C 23.556248 37 25 35.556248 25 33.800781 L 25 16.199219 C 25 14.443752 23.556248 13 21.800781 13 L 4.1992188 13 z M 4.1992188 15 L 21.800781 15 C 22.475315 15 23 15.524685 23 16.199219 L 23 33.800781 C 23 34.475315 22.475315 35 21.800781 35 L 4.1992188 35 C 3.5246851 35 3 34.475315 3 33.800781 L 3 16.199219 C 3 15.524685 3.5246851 15 4.1992188 15 z M 6.0058594 19.5 L 8.5820312 30.5 L 11.169922 30.5 L 13.054688 22.042969 L 14.939453 30.5 L 17.416016 30.5 L 19.994141 19.5 L 17.84375 19.5 L 16.142578 27.490234 L 14.257812 19.5 L 11.851562 19.5 L 9.9082031 27.738281 L 8.15625 19.5 L 6.0058594 19.5 z" />
  </svg>
);

const ExcelIcon = ({ className = "h-6 w-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 50 50"
    className={className}
    fill="currentColor"
  >
    <path d="M 16 4 C 14.35 4 13 5.35 13 7 L 13 11 L 15 11 L 15 7 C 15 6.45 15.45 6 16 6 L 30 6 L 30 14 L 26.509766 14 C 26.799766 14.61 26.970234 15.28 26.990234 16 L 30 16 L 30 24 L 27 24 L 27 26 L 30 26 L 30 34 L 26.990234 34 C 26.970234 34.72 26.799766 35.39 26.509766 36 L 30 36 L 30 44 L 16 44 C 15.45 44 15 43.55 15 43 L 15 39 L 13 39 L 13 43 C 13 44.65 14.35 46 16 46 L 46 46 C 47.65 46 49 44.65 49 43 L 49 7 C 49 5.35 47.65 4 46 4 L 16 4 z M 32 6 L 46 6 C 46.55 6 47 6.45 47 7 L 47 14 L 32 14 L 32 6 z M 4.1992188 13 C 2.4437524 13 1 14.443752 1 16.199219 L 1 33.800781 C 1 35.556248 2.4437524 37 4.1992188 37 L 21.800781 37 C 23.556248 37 25 35.556248 25 33.800781 L 25 16.199219 C 25 14.443752 23.556248 13 21.800781 13 L 4.1992188 13 z M 4.1992188 15 L 21.800781 15 C 22.475315 15 23 15.524685 23 16.199219 L 23 33.800781 C 23 34.475315 22.475315 35 21.800781 35 L 4.1992188 35 C 3.5246851 35 3 34.475315 3 33.800781 L 3 16.199219 C 3 15.524685 3.5246851 15 4.1992188 15 z M 32 16 L 47 16 L 47 24 L 32 24 L 32 16 z M 7.96875 19 L 11.462891 24.978516 L 7.6308594 31 L 10.494141 31 L 13.015625 26.283203 L 15.548828 31 L 18.369141 31 L 14.599609 25 L 18.285156 19 L 15.609375 19 L 13.154297 23.505859 L 10.830078 19 L 7.96875 19 z M 32 26 L 47 26 L 47 34 L 32 34 L 32 26 z M 32 36 L 47 36 L 47 43 C 47 43.55 46.55 44 46 44 L 32 44 L 32 36 z" />
  </svg>
);

const PowerPointIcon = ({ className = "h-6 w-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    className={className}
    fill="currentColor"
  >
    <path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 29.40625 2 Z M 9 4 L 28 4 L 28 16 L 41 16 L 41 46 L 9 46 Z M 30 5.40625 L 39.59375 14 L 30 14 Z M 18 22 C 16.894531 22 16 22.894531 16 24 L 16 36 C 16 37.105469 16.894531 38 18 38 L 32 38 C 33.105469 38 34 37.105469 34 36 L 34 24 C 34 22.894531 33.105469 22 32 22 Z M 18 24 L 32 24 L 32 36 L 18 36 Z M 20 26 L 20 34 L 22 34 L 22 31 L 25 31 C 26.105469 31 27 30.105469 27 29 L 27 28 C 27 26.894531 26.105469 26 25 26 Z M 22 28 L 25 28 L 25 29 L 22 29 Z" />
  </svg>
);

const DefaultFileIcon = ({ className = "h-6 w-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    className={className}
    fill="currentColor"
  >
    <path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 29.40625 2 Z M 9 4 L 28 4 L 28 16 L 41 16 L 41 46 L 9 46 Z M 30 5.40625 L 39.59375 14 L 30 14 Z" />
  </svg>
);

const Downloadables = () => {
  const [forms, setForms] = useState([]);
  const [filteredForms, setFilteredForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Function to get the appropriate icon based on file type
  const getFileIcon = (form) => {
    const fileType =
      form.file_type?.toLowerCase() ||
      form.file_name?.split(".").pop()?.toLowerCase() ||
      form.file_url?.split(".").pop()?.toLowerCase() ||
      "";

    const iconProps = { className: "h-6 w-6 text-white" };

    switch (fileType) {
      case "pdf":
        return <PdfIcon {...iconProps} />;
      case "doc":
      case "docx":
        return <DocxIcon {...iconProps} />;
      case "xls":
      case "xlsx":
        return <ExcelIcon {...iconProps} />;
      case "ppt":
      case "pptx":
        return <PowerPointIcon {...iconProps} />;
      default:
        return <DefaultFileIcon {...iconProps} />;
    }
  };

  // Function to get background color based on file type
  const getFileTypeColor = (form) => {
    const fileType =
      form.file_type?.toLowerCase() ||
      form.file_name?.split(".").pop()?.toLowerCase() ||
      form.file_url?.split(".").pop()?.toLowerCase() ||
      "";

    switch (fileType) {
      case "pdf":
        return "from-red-500 to-red-600"; // Red for PDF
      case "doc":
      case "docx":
        return "from-blue-500 to-blue-600"; // Blue for Word documents
      case "xls":
      case "xlsx":
        return "from-green-500 to-green-600"; // Green for Excel
      case "ppt":
      case "pptx":
        return "from-orange-500 to-orange-600"; // Orange for PowerPoint
      default:
        return "from-gray-500 to-gray-600"; // Gray for unknown types
    }
  };

  useEffect(() => {
    fetchForms();
  }, []);

  useEffect(() => {
    filterForms();
  }, [forms, searchTerm]);

  const fetchForms = async () => {
    try {
      setLoading(true);
      const data = await formService.getForms();

      // Filter forms that have files (file_url, file_path, or file_name)
      const formsWithFiles = data.filter(
        (form) => form.file_url || form.file_path || form.file_name
      );

      setForms(formsWithFiles);
    } catch (err) {
      console.error("Error fetching forms:", err);
      setError("Failed to load forms. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const filterForms = () => {
    let filtered = forms;

    if (searchTerm) {
      filtered = filtered.filter(
        (form) =>
          form.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          form.form_number.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredForms(filtered);
  };

  const groupFormsByCategory = (forms) => {
    // Group all forms under "Curriculum and Instruction Development"
    const grouped = {
      "Curriculum & Instruction Development": [],
    };

    // Add all forms to the single category
    forms.forEach((form) => {
      grouped["Curriculum & Instruction Development"].push(form);
    });

    // Remove empty categories (though there shouldn't be any)
    return Object.fromEntries(
      Object.entries(grouped).filter(([key, value]) => value.length > 0)
    );
  };

  const handleDownload = (form) => {
    const downloadUrl = form.file_url || form.file_path;
    if (downloadUrl) {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = form.file_name || `${form.title}.${form.file_type}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <div className="relative mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <Loader2 className="h-8 w-8 animate-spin text-white" />
            </div>
            <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-400 animate-pulse" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Loading Downloadables
          </h3>
          <p className="text-gray-600">
            Please wait while we fetch the latest forms...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-2xl shadow-xl border border-red-100">
          <div className="relative mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <AlertCircle className="h-8 w-8 text-white" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Error Loading Forms
          </h3>
          <p className="text-gray-600 mb-6">{error}</p>
          <Button
            onClick={fetchForms}
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  const groupedForms = groupFormsByCategory(filteredForms);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Enhanced Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-600 to-green-700"></div>
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/10 -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-white/10 translate-x-24 translate-y-24"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full bg-white/5 -translate-x-16 -translate-y-16"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="h-16 w-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30 shadow-lg mr-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <Sparkles className="h-6 w-6 text-white/80 animate-pulse" />
            </div>
            <h1 className="text-5xl font-bold mb-4 text-white">
              Downloadables
            </h1>
            <p className="text-green-100 text-lg mb-6">
              Access official forms and documents for curriculum and instruction
              development
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Enhanced Search Section */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300">
              <CardContent className="p-6">
                <div className="relative ">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                    <Search className="h-5 w-5 text-green-600" />
                  </div>
                  <Input
                    placeholder="Search forms by title or form number..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="
                h-12 pl-12 pr-4 
                border-2 border-gray-200 
                rounded-xl
                bg-white/90 backdrop-blur-sm
                text-gray-900 placeholder:text-gray-500
                shadow-sm hover:shadow-md
                focus:border-green-400 focus:ring-4 focus:ring-green-100 focus:bg-white
                focus-visible:outline-none focus-visible:ring-green-400 focus-visible:ring-offset-0
                transition-all duration-300
                font-medium
              "
                  />
                  {searchTerm && (
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800"
                      >
                        {filteredForms.length} results
                      </Badge>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enhanced Forms Display */}
        {Object.keys(groupedForms).length === 0 ? (
          <div className="text-center py-16">
            <Card className="max-w-md mx-auto border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FileText className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  No Forms Found
                </h3>
                <p className="text-gray-600">
                  {searchTerm
                    ? "Try adjusting your search criteria to find what you're looking for"
                    : "There are currently no forms available for download"}
                </p>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="space-y-8">
            {Object.entries(groupedForms).map(([category, categoryForms]) => (
              <Card
                key={category}
                className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-500 overflow-hidden"
              >
                {/* Enhanced Category Header */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-emerald-50"></div>
                  <div className="relative z-10 px-8 py-6 border-b border-green-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg mr-4">
                          <FolderOpen className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-1">
                            {category}
                          </h2>
                        </div>
                      </div>
                      <Sparkles className="h-5 w-5 text-green-400 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Enhanced Forms Grid */}
                <CardContent className="px-8 py-4">
                  <div className="grid gap-4">
                    {categoryForms.map((form, index) => (
                      <Card
                        key={form.id}
                        className="group border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg bg-gradient-to-r from-white to-gray-50/50 overflow-hidden"
                      >
                        <CardContent className="px-6 py-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center justify-start space-x-4 flex-1 min-w-0">
                              {/* Enhanced File Icon with dynamic colors */}
                              <div className="relative">
                                <div
                                  className={`w-12 h-12 bg-gradient-to-br ${getFileTypeColor(
                                    form
                                  )} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                                >
                                  {getFileIcon(form)}
                                </div>
                              </div>

                              {/* Enhanced Form Details - Centered and Organized */}
                              <div className="flex items-center justify-start space-x-6 flex-1 min-w-0">
                                {/* Form Number - First */}
                                <div className="flex-shrink-0">
                                  <Badge className="bg-green-100 text-green-700 border border-green-300 text-md font-medium shadow-sm hover:bg-green-100 hover:text-green-700">
                                    {form.form_number}
                                  </Badge>
                                </div>
                                {/* Title - Second */}
                                <div className="flex-shrink-0 min-w-0">
                                  <h3 className="text-lg font-semibold text-gray-900 transition-colors truncate">
                                    {form.title}
                                  </h3>
                                </div>

                                {/* Revision - Third */}
                                <div>
                                  {form.revision && (
                                    <Badge
                                      variant="outline"
                                      className="text-xs border-gray-200 text-gray-500 bg-gray-50"
                                    >
                                      {form.revision}
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </div>

                            {/* Enhanced Action Buttons - Right Aligned */}
                            <div className="flex items-center justify-end space-x-3 flex-shrink-0">
                              {form.link && (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() =>
                                    window.open(form.link, "_blank")
                                  }
                                  className="border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md"
                                >
                                  <ExternalLink className="h-4 w-4 mr-2" />
                                  Open Link
                                </Button>
                              )}

                              <Button
                                size="sm"
                                onClick={() => handleDownload(form)}
                                disabled={!form.file_url && !form.file_path}
                                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Downloadables;
