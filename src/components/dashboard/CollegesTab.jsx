import { useState } from "react";
import {
  MapPin,
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Image as ImageIcon,
} from "lucide-react";
import CollegeCard from "@/components/ui/CardDashboard";
import AddCollegeModal from "@/components/modals/dashboard/AddCollegeModal";
import EditCollegeModal from "@/components/modals/dashboard/EditCollegeModal";
import DeleteConfirmationModal from "@/components/modals/dashboard/DeleteConfirmationModal";
import DashboardLoading from "@/components/dashboard/DashboardLoading";
import { showLoadingToast, updateToast } from "@/utils/toast.jsx";

export default function CollegesTab({
  colleges,
  campuses,
  onAddCollege,
  onDeleteCollege,
  loading,
}) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCampus, setFilterCampus] = useState("all");
  const [isDeleting, setIsDeleting] = useState(false);

  if (loading) {
    return <DashboardLoading type="colleges" />;
  }

  const handleEditCollege = (college, campus) => {
    setSelectedCollege({ ...college, campus });
    setShowEditModal(true);
  };

  const handleDeleteCollege = (college, campus) => {
    setSelectedCollege({ ...college, campus });
    setShowDeleteModal(true);
  };

  const confirmDeleteCollege = async () => {
    if (!selectedCollege || !onDeleteCollege) return;

    setIsDeleting(true);
    const loadingToastId = showLoadingToast("Deleting college...");

    try {
      const result = await onDeleteCollege(
        selectedCollege.id,
        selectedCollege.campus
      );

      if (result?.success !== false) {
        updateToast(
          loadingToastId,
          `College "${selectedCollege.name}" has been deleted successfully!`,
          "success"
        );
        setShowDeleteModal(false);
        setSelectedCollege(null);
      } else {
        updateToast(
          loadingToastId,
          `Failed to delete college: ${result?.error || "Unknown error"}`,
          "error"
        );
      }
    } catch (error) {
      updateToast(
        loadingToastId,
        `An unexpected error occurred: ${error.message}`,
        "error"
      );
      console.error("Error deleting college:", error);
    } finally {
      setIsDeleting(false);
    }
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
    <div className="space-y-6">
      {/* Header and Search */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Academic Colleges</h2>
          <p className="text-gray-600">
            Total colleges: {allColleges.length} | Filtered:{" "}
            {filteredColleges.length}
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <Plus className="h-5 w-5" />
          <span>Add College</span>
        </button>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-gray-50 rounded-lg p-4 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search colleges..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              value={filterCampus}
              onChange={(e) => setFilterCampus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Campuses</option>
              <option value="CSU-MAIN">CSU-MAIN Campus</option>
              <option value="CSU-CC">CSU-CC Campus</option>
            </select>
          </div>
        </div>
      </div>

      {/* College Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredColleges.map((college) => (
          <div
            key={`${college.campus}-${college.id}`}
            className="relative group"
          >
            <CollegeCard
              college={college}
              campus={college.campus}
              onViewDetails={() => handleEditCollege(college, college.campus)}
            />

            {/* Edit/Delete Actions Overlay */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => handleEditCollege(college, college.campus)}
                  className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
                  title="Edit College"
                >
                  <Edit className="w-4 h-4 text-blue-600" />
                </button>
                <button
                  onClick={() => handleDeleteCollege(college, college.campus)}
                  className="p-2 bg-white rounded-full shadow-lg hover:bg-red-50 transition-colors group/delete"
                  title="Delete College"
                >
                  <Trash2 className="w-4 h-4 text-red-600 group-hover/delete:text-red-700" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredColleges.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg border-2 border-dashed border-gray-300">
          <div className="text-gray-400 mb-4">
            <MapPin className="w-16 h-16 mx-auto" />
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
            className="text-blue-600 hover:text-blue-800 font-medium"
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
      <AddCollegeModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAddCollege={onAddCollege}
        campuses={campuses}
      />

      <EditCollegeModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        college={selectedCollege}
        campuses={campuses}
        onUpdateCollege={(updatedCollege) => {
          // Handle college update
          console.log("Update college:", updatedCollege);
        }}
      />

      <DeleteConfirmationModal
        isOpen={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
          setSelectedCollege(null);
        }}
        onConfirm={confirmDeleteCollege}
        isDeleting={isDeleting}
        title="Delete College"
        description="This will permanently remove the college and all its associated data."
        itemName={
          selectedCollege?.name ||
          selectedCollege?.shortName ||
          selectedCollege?.acronym ||
          ""
        }
        itemType="College"
        warningMessage="Deleting this college will also remove all associated programs, files, and other data."
        additionalInfo={`Campus: ${
          selectedCollege?.campus || "Unknown"
        } | Programs: ${
          (selectedCollege?.undergraduate_programs || 0) +
          (selectedCollege?.graduate_programs || 0)
        } | Files: ${selectedCollege?.files || 0}`}
      />
    </div>
  );
}
