import { useState } from "react";
import { MapPin, Plus, Search, Filter } from "lucide-react";
import CollegeCard from "@/components/ui/CardDashboard";
import ProgramModal from "@/components/modals/dashboard/DashboardProgramModal";
import AddProgramModal from "@/components/modals/dashboard/AddProgramModal";

export default function CollegesSection({ files, colleges, onAddProgram }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [selectedCampus, setSelectedCampus] = useState("");
  const [showAddProgramModal, setShowAddProgramModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCampus, setFilterCampus] = useState("all");

  const handleViewDetails = (college, campus) => {
    setSelectedCollege(college);
    setSelectedCampus(campus);
    setShowModal(true);
  };

  // Safely combine all colleges for unified display
  const allColleges = [
    ...(Array.isArray(colleges?.["CSU-MAIN"]) ? colleges["CSU-MAIN"] : []).map(
      (college) => ({
        ...college,
        campus: "CSU-MAIN",
      })
    ),
    ...(Array.isArray(colleges?.["CSU-CC"]) ? colleges["CSU-CC"] : []).map(
      (college) => ({
        ...college,
        campus: "CSU-CC",
      })
    ),
  ];

  // Filter colleges
  const filteredColleges = allColleges.filter((college) => {
    const matchesSearch =
      college.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (college.shortName || college.acronym || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    const matchesCampus =
      filterCampus === "all" || college.campus === filterCampus;

    return matchesSearch && matchesCampus;
  });

  return (
    <div className="mb-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Academic Colleges
          </h2>
          <p className="text-gray-600">
            Explore programs and resources across all campuses
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Total colleges: {allColleges.length} | Filtered:{" "}
            {filteredColleges.length}
          </p>
        </div>

        <button
          onClick={() => setShowAddProgramModal(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <Plus className="h-5 w-5" />
          <span>Add Program</span>
        </button>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search colleges..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-400" />
          <select
            value={filterCampus}
            onChange={(e) => setFilterCampus(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="all">All Campuses</option>
            <option value="CSU-MAIN">CSU-MAIN Campus</option>
            <option value="CSU-CC">CSU-CC Campus</option>
          </select>
        </div>
      </div>

      {/* College Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {filteredColleges.map((college) => (
          <CollegeCard
            key={`${college.campus}-${college.id}`}
            college={college}
            campus={college.campus}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>

      {/* No Results Message */}
      {filteredColleges.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg
              className="w-16 h-16 mx-auto"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0h8v12H6V4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No colleges found
          </h3>
          <p className="text-gray-600 mb-4">
            {allColleges.length === 0
              ? "No colleges available in the system"
              : "Try adjusting your search or filter criteria"}
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setFilterCampus("all");
            }}
            className="text-green-600 hover:text-green-800 font-medium"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Campus Summary Statistics */}
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Campus Overview
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CSU-MAIN Stats */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 shadow-md border border-green-100">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-green-800">CSU-MAIN Campus</h4>
              <MapPin className="w-5 h-5 text-green-600" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white bg-opacity-60 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-green-900">
                  {
                    filteredColleges.filter((c) => c.campus === "CSU-MAIN")
                      .length
                  }
                </div>
                <div className="text-xs text-green-700">Colleges</div>
              </div>
              <div className="bg-white bg-opacity-60 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-green-900">
                  {filteredColleges
                    .filter((c) => c.campus === "CSU-MAIN")
                    .reduce(
                      (sum, c) =>
                        sum +
                        (c.undergraduate_programs || 0) +
                        (c.graduate_programs || 0),
                      0
                    )}
                </div>
                <div className="text-xs text-green-700">Programs</div>
              </div>
              <div className="bg-white bg-opacity-60 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-green-900">
                  {filteredColleges
                    .filter((c) => c.campus === "CSU-MAIN")
                    .reduce((sum, c) => sum + (c.files || 0), 0)}
                </div>
                <div className="text-xs text-green-700">Files</div>
              </div>
            </div>
          </div>

          {/* CSU-CC Stats */}
          <div className="bg-gradient-to-br from-blue-50 to-sky-100 rounded-xl p-6 shadow-md border border-blue-100">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-blue-800">CSU-CC Campus</h4>
              <MapPin className="w-5 h-5 text-blue-600" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white bg-opacity-60 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-blue-900">
                  {filteredColleges.filter((c) => c.campus === "CSU-CC").length}
                </div>
                <div className="text-xs text-blue-700">Colleges</div>
              </div>
              <div className="bg-white bg-opacity-60 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-blue-900">
                  {filteredColleges
                    .filter((c) => c.campus === "CSU-CC")
                    .reduce(
                      (sum, c) =>
                        sum +
                        (c.undergraduate_programs || 0) +
                        (c.graduate_programs || 0),
                      0
                    )}
                </div>
                <div className="text-xs text-blue-700">Programs</div>
              </div>
              <div className="bg-white bg-opacity-60 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-blue-900">
                  {filteredColleges
                    .filter((c) => c.campus === "CSU-CC")
                    .reduce((sum, c) => sum + (c.files || 0), 0)}
                </div>
                <div className="text-xs text-blue-700">Files</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <ProgramModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        college={selectedCollege}
        campus={selectedCampus}
      />

      <AddProgramModal
        isOpen={showAddProgramModal}
        onClose={() => setShowAddProgramModal(false)}
        onAddProgram={onAddProgram}
      />
    </div>
  );
}
