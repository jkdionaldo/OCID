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

const Downloadables = () => {
  const [forms, setForms] = useState([]);
  const [filteredForms, setFilteredForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

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
            Loading Forms
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
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    placeholder="Search forms by title or form number..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-4 py-3 text-lg border-0 bg-gray-50 focus:bg-white transition-colors rounded-xl"
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
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center justify-start space-x-4 flex-1 min-w-0">
                              {/* Enhanced File Icon */}
                              <div className="relative">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                                  <File className="h-6 w-6 text-white" />
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
