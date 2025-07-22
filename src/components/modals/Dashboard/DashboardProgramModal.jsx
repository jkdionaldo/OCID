import React, { useState } from "react";
import {
  X,
  BookOpen,
  GraduationCap,
  FileText,
  Download,
  Upload,
  Search,
} from "lucide-react";

const ProgramModal = ({ isOpen, onClose, college, campus }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProgramType, setSelectedProgramType] = useState("all");

  if (!isOpen || !college) return null;

  // Mock data - replace with actual data from your API
  const programs = {
    undergraduate: [
      {
        id: 1,
        name: "Bachelor of Science in Computer Science",
        acronym: "BSCS",
        files: 15,
      },
      {
        id: 2,
        name: "Bachelor of Science in Information Technology",
        acronym: "BSIT",
        files: 12,
      },
      {
        id: 3,
        name: "Bachelor of Science in Information Systems",
        acronym: "BSIS",
        files: 8,
      },
    ],
    graduate: [
      {
        id: 4,
        name: "Master of Science in Information Technology",
        acronym: "MSIT",
        files: 6,
      },
      {
        id: 5,
        name: "Master of Science in Computer Science",
        acronym: "MSCS",
        files: 4,
      },
    ],
  };

  const filteredPrograms = () => {
    let allPrograms = [];

    if (
      selectedProgramType === "all" ||
      selectedProgramType === "undergraduate"
    ) {
      allPrograms = [
        ...allPrograms,
        ...programs.undergraduate.map((p) => ({ ...p, type: "undergraduate" })),
      ];
    }

    if (selectedProgramType === "all" || selectedProgramType === "graduate") {
      allPrograms = [
        ...allPrograms,
        ...programs.graduate.map((p) => ({ ...p, type: "graduate" })),
      ];
    }

    return allPrograms.filter(
      (program) =>
        program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        program.acronym.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div
          className={`p-6 ${
            campus === "CSU-MAIN"
              ? "bg-gradient-to-r from-green-600 to-green-700"
              : "bg-gradient-to-r from-blue-600 to-blue-700"
          }`}
        >
          <div className="flex justify-between items-start">
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-2">{college.name}</h2>
              <div className="flex items-center space-x-4 text-green-100">
                <span className="text-sm">
                  {college.shortName || college.acronym}
                </span>
                <span className="text-sm">•</span>
                <span className="text-sm">{campus} Campus</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors p-2 hover:bg-white/10 rounded-full"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab("overview")}
              className={`py-4 px-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "overview"
                  ? "border-green-600 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("programs")}
              className={`py-4 px-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "programs"
                  ? "border-green-600 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Programs & Files
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto max-h-[60vh]">
          {activeTab === "overview" && (
            <div className="p-6">
              {/* College Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <BookOpen className="w-8 h-8 text-blue-600 mb-2" />
                      <div className="text-2xl font-bold text-blue-900">
                        {programs.undergraduate.length}
                      </div>
                      <div className="text-blue-700 text-sm font-medium">
                        Undergraduate Programs
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <GraduationCap className="w-8 h-8 text-purple-600 mb-2" />
                      <div className="text-2xl font-bold text-purple-900">
                        {programs.graduate.length}
                      </div>
                      <div className="text-purple-700 text-sm font-medium">
                        Graduate Programs
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <FileText className="w-8 h-8 text-gray-600 mb-2" />
                      <div className="text-2xl font-bold text-gray-900">
                        {college.files || 0}
                      </div>
                      <div className="text-gray-700 text-sm font-medium">
                        Total Files
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Program Categories */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Program Categories
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                        <h4 className="font-semibold text-blue-900">
                          Undergraduate Programs
                        </h4>
                      </div>
                      <div className="space-y-2">
                        {programs.undergraduate.map((program) => (
                          <div
                            key={program.id}
                            className="text-sm text-gray-600"
                          >
                            • {program.name} ({program.acronym})
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border border-purple-200 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <GraduationCap className="w-5 h-5 text-purple-600 mr-2" />
                        <h4 className="font-semibold text-purple-900">
                          Graduate Programs
                        </h4>
                      </div>
                      <div className="space-y-2">
                        {programs.graduate.map((program) => (
                          <div
                            key={program.id}
                            className="text-sm text-gray-600"
                          >
                            • {program.name} ({program.acronym})
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "programs" && (
            <div className="p-6">
              {/* Search and Filter */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search programs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={selectedProgramType}
                  onChange={(e) => setSelectedProgramType(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="all">All Programs</option>
                  <option value="undergraduate">Undergraduate</option>
                  <option value="graduate">Graduate</option>
                </select>
              </div>

              {/* Programs List */}
              <div className="space-y-3">
                {filteredPrograms().map((program) => (
                  <div
                    key={program.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {program.type === "undergraduate" ? (
                          <BookOpen className="w-5 h-5 text-blue-600 mr-3" />
                        ) : (
                          <GraduationCap className="w-5 h-5 text-purple-600 mr-3" />
                        )}
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {program.name}
                          </h4>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium mr-2 ${
                                program.type === "undergraduate"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-purple-100 text-purple-800"
                              }`}
                            >
                              {program.type === "undergraduate"
                                ? "Undergraduate"
                                : "Graduate"}
                            </span>
                            <span>{program.acronym}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-center">
                          <div className="text-lg font-bold text-gray-900">
                            {program.files}
                          </div>
                          <div className="text-xs text-gray-500">Files</div>
                        </div>
                        <div className="flex space-x-1">
                          <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                            <Download className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                            <Upload className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredPrograms().length === 0 && (
                <div className="text-center py-8">
                  <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No programs found
                  </h3>
                  <p className="text-gray-600">
                    Try adjusting your search or filter criteria
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Close
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Manage Files
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramModal;
