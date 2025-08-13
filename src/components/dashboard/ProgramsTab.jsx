import { useState } from "react";
import {
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  BookOpen,
  GraduationCap,
  Building,
} from "lucide-react";
import AddProgramModal from "@/components/modals/dashboard/AddProgramModal";
import EditProgramModal from "@/components/modals/dashboard/EditProgramModal";
import DeleteConfirmationModal from "@/components/modals/dashboard/DeleteConfirmationModal";
import DashboardLoading from "@/components/dashboard/DashboardLoading";

export default function ProgramsTab({
  undergrads,
  graduates,
  colleges,
  campuses,
  onAddProgram,
  onUpdateProgram,
  onDeleteProgram,
  loading,
}) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterCollege, setFilterCollege] = useState("all");
  const [activeTab, setActiveTab] = useState("undergraduate");
  const [isDeleting, setIsDeleting] = useState(false);

  if (loading) {
    return <DashboardLoading type="files" />;
  }

  const handleEditProgram = (program, type) => {
    setSelectedProgram({ ...program, program_type: type });
    setShowEditModal(true);
  };

  const handleDeleteProgram = (program, type) => {
    setSelectedProgram({ ...program, program_type: type });
    setShowDeleteModal(true);
  };

  const confirmDeleteProgram = async () => {
    if (!selectedProgram || !onDeleteProgram) return;

    setIsDeleting(true);

    try {
      const result = await onDeleteProgram(
        selectedProgram.id,
        selectedProgram.program_type
      );

      // Only handle UI state - let Dashboard handle toasts
      if (result?.success !== false) {
        setShowDeleteModal(false);
        setSelectedProgram(null);
      }
    } catch (error) {
      console.error("Error deleting program:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  // Get college info for a program
  const getCollegeInfo = (collegeId) => {
    const college = colleges.find((c) => c.id === collegeId);
    if (!college) return { name: "Unknown", acronym: "N/A", campus: "Unknown" };

    const campus = campuses.find((c) => c.id === college.campus_id);
    return {
      name: college.name,
      acronym: college.acronym,
      campus: campus?.acronym || "Unknown",
    };
  };

  // Filter programs based on search and filters
  const filterPrograms = (programs, type) => {
    return programs.filter((program) => {
      const collegeInfo = getCollegeInfo(program.college_id);
      const matchesSearch =
        program.program_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (program.acronym || "")
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        collegeInfo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        collegeInfo.acronym.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = filterType === "all" || filterType === type;
      const matchesCollege =
        filterCollege === "all" || collegeInfo.acronym === filterCollege;

      return matchesSearch && matchesType && matchesCollege;
    });
  };

  const filteredUndergrads = filterPrograms(undergrads, "undergraduate");
  const filteredGraduates = filterPrograms(graduates, "graduate");

  const ProgramCard = ({ program, type }) => {
    const collegeInfo = getCollegeInfo(program.college_id);
    const Icon = type === "graduate" ? GraduationCap : BookOpen;
    const colorScheme = type === "graduate" ? "purple" : "blue";

    return (
      <div
        className={`bg-white rounded-lg border-2 border-${colorScheme}-100 hover:border-${colorScheme}-300 transition-all duration-200 shadow-sm hover:shadow-md group`}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className={`p-3 bg-${colorScheme}-100 rounded-lg`}>
              <Icon className={`w-6 h-6 text-${colorScheme}-600`} />
            </div>
            <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <button
                onClick={() => handleEditProgram(program, type)}
                className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                title="Edit Program"
              >
                <Edit className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleDeleteProgram(program, type)}
                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                title="Delete Program"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Program Info */}
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-gray-900 text-lg line-clamp-2">
                {program.program_name}
              </h3>
              {program.acronym && (
                <p
                  className={`text-sm font-medium text-${colorScheme}-600 mt-1`}
                >
                  {program.acronym}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <Building className="w-4 h-4 mr-2" />
                <span>{collegeInfo.name}</span>
              </div>
              <div className="flex items-center justify-between">
                <span
                  className={`px-2 py-1 text-xs font-medium bg-${colorScheme}-100 text-${colorScheme}-800 rounded-full`}
                >
                  {type === "graduate" ? "Graduate" : "Undergraduate"}
                </span>
                <span
                  className={`px-2 py-1 text-xs font-medium ${
                    collegeInfo.campus === "CSU-MAIN"
                      ? "bg-green-100 text-green-800"
                      : "bg-blue-100 text-blue-800"
                  } rounded-full`}
                >
                  {collegeInfo.campus}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const collegeOptions = [
    "all",
    ...Array.from(new Set(colleges.map((college) => college.acronym))),
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Academic Programs</h2>
          <p className="text-gray-600">
            Total: {undergrads.length + graduates.length} programs (
            {undergrads.length} undergraduate, {graduates.length} graduate)
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <Plus className="h-5 w-5" />
          <span>Add Program</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-gray-50 rounded-lg p-4 space-y-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search programs, colleges..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="undergraduate">Undergraduate</option>
                <option value="graduate">Graduate</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <Building className="w-4 h-4 text-gray-400" />
              <select
                value={filterCollege}
                onChange={(e) => setFilterCollege(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {collegeOptions.map((college) => (
                  <option key={college} value={college}>
                    {college === "all" ? "All Colleges" : college}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Program Type Tabs */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            <button
              onClick={() => setActiveTab("undergraduate")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-all duration-200 ${
                activeTab === "undergraduate"
                  ? "border-blue-500 text-blue-600 bg-blue-50/50"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span>Undergraduate ({filteredUndergrads.length})</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab("graduate")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-all duration-200 ${
                activeTab === "graduate"
                  ? "border-purple-500 text-purple-600 bg-purple-50/50"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-5 h-5" />
                <span>Graduate ({filteredGraduates.length})</span>
              </div>
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === "undergraduate" ? (
            filteredUndergrads.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUndergrads.map((program) => (
                  <ProgramCard
                    key={`undergrad-${program.id}`}
                    program={program}
                    type="undergraduate"
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No undergraduate programs found
                </h3>
                <p className="text-gray-600 mb-4">
                  {undergrads.length === 0
                    ? "No undergraduate programs available"
                    : "Try adjusting your search criteria"}
                </p>
              </div>
            )
          ) : filteredGraduates.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGraduates.map((program) => (
                <ProgramCard
                  key={`graduate-${program.id}`}
                  program={program}
                  type="graduate"
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <GraduationCap className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No graduate programs found
              </h3>
              <p className="text-gray-600 mb-4">
                {graduates.length === 0
                  ? "No graduate programs available"
                  : "Try adjusting your search criteria"}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-md border border-blue-100">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-blue-800">Undergraduate Programs</h4>
            <BookOpen className="w-6 h-6 text-blue-600" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white bg-opacity-60 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-blue-900">
                {filteredUndergrads.length}
              </div>
              <div className="text-xs text-blue-700">Programs</div>
            </div>
            <div className="bg-white bg-opacity-60 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-blue-900">
                {new Set(filteredUndergrads.map((p) => p.college_id)).size}
              </div>
              <div className="text-xs text-blue-700">Colleges</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 shadow-md border border-purple-100">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-purple-800">Graduate Programs</h4>
            <GraduationCap className="w-6 h-6 text-purple-600" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white bg-opacity-60 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-purple-900">
                {filteredGraduates.length}
              </div>
              <div className="text-xs text-purple-700">Programs</div>
            </div>
            <div className="bg-white bg-opacity-60 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-purple-900">
                {new Set(filteredGraduates.map((p) => p.college_id)).size}
              </div>
              <div className="text-xs text-purple-700">Colleges</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <AddProgramModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAddProgram={onAddProgram}
      />

      <EditProgramModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        program={selectedProgram}
        onUpdateProgram={(programId, programData, programType) =>
          onUpdateProgram(programId, programData, programType)
        }
      />

      <DeleteConfirmationModal
        isOpen={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
          setSelectedProgram(null);
        }}
        onConfirm={confirmDeleteProgram}
        isDeleting={isDeleting}
        title="Delete Program"
        description="This will permanently remove the program and all its associated data."
        itemName={selectedProgram?.program_name || ""}
        itemType={
          selectedProgram?.program_type === "graduate"
            ? "Graduate Program"
            : "Undergraduate Program"
        }
        warningMessage="Deleting this program will also remove all associated curriculum files, syllabi, and other data."
        additionalInfo={`College: ${
          selectedProgram ? getCollegeInfo(selectedProgram.college_id).name : ""
        } | Acronym: ${selectedProgram?.acronym || "N/A"}`}
      />
    </div>
  );
}
