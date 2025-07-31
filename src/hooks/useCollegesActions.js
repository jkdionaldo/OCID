import { useState, useCallback, useMemo } from "react";
import { toast } from "sonner";

export const useCollegesActions = ({
  colleges,
  campuses,
  onAddCollege,
  onUpdateCollege,
  onDeleteCollege,
}) => {
  // View and filter states
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCampus, setSelectedCampus] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [error, setError] = useState(null);

  // Modal states
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Filtered colleges with safety checks
  const filteredColleges = useMemo(() => {
    // Safety check: ensure colleges is an array
    if (!colleges || !Array.isArray(colleges)) {
      return [];
    }

    let filtered = colleges.filter((college) => {
      // Safety checks for college properties
      if (!college) return false;

      const matchesSearch =
        (college.name &&
          college.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (college.acronym &&
          college.acronym.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (college.shortName &&
          college.shortName.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCampus =
        selectedCampus === "all" ||
        college.campus?.acronym === selectedCampus ||
        college.campus_acronym === selectedCampus;

      return matchesSearch && matchesCampus;
    });

    // Sort colleges with safety checks
    filtered.sort((a, b) => {
      if (!a || !b) return 0;

      switch (sortBy) {
        case "name":
          return (a.name || "").localeCompare(b.name || "");
        case "programs":
          return (b.programs || 0) - (a.programs || 0);
        case "files":
          return (b.files || 0) - (a.files || 0);
        case "created":
          return new Date(b.created_at || 0) - new Date(a.created_at || 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [colleges, searchTerm, selectedCampus, sortBy]);

  // Actions
  const clearFilters = useCallback(() => {
    setSearchTerm("");
    setSelectedCampus("all");
    setSortBy("name");
  }, []);

  const handleAddCollege = useCallback(
    async (collegeData) => {
      setIsSubmitting(true);
      try {
        await onAddCollege(collegeData);
        setShowAddModal(false);
      } catch (error) {
        console.error("Error adding college:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [onAddCollege]
  );

  const handleEditCollege = useCallback(
    async (collegeData) => {
      setIsSubmitting(true);
      try {
        await onUpdateCollege(collegeData.id, collegeData);
        setShowEditModal(false);
        setSelectedCollege(null);
      } catch (error) {
        console.error("Error updating college:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [onUpdateCollege]
  );

  const handleDeleteCollege = useCallback(async () => {
    if (!selectedCollege) return;

    // Check if college has associated data
    const hasAssociatedData =
      selectedCollege.programs > 0 ||
      selectedCollege.files > 0 ||
      selectedCollege.undergraduate_programs > 0 ||
      selectedCollege.graduate_programs > 0;

    if (hasAssociatedData) {
      toast.error("Cannot delete college", {
        description:
          "This college has associated programs or files. Please remove them first.",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await onDeleteCollege(selectedCollege.id, selectedCollege.campus);
      setShowDeleteModal(false);
      setSelectedCollege(null);
    } catch (error) {
      console.error("Error deleting college:", error);
    } finally {
      setIsSubmitting(false);
    }
  }, [selectedCollege, onDeleteCollege]);

  const handleEditClick = useCallback(
    (college) => {
      const transformedCollege = {
        ...college,
        campus:
          college.campus?.acronym ||
          campuses?.find((c) => c.id === college.campus_id)?.acronym ||
          "Unknown",
      };
      setSelectedCollege(transformedCollege);
      setShowEditModal(true);
    },
    [campuses]
  );

  const handleDeleteClick = useCallback((college) => {
    setSelectedCollege(college);
    setShowDeleteModal(true);
  }, []);

  const handleViewDetails = useCallback((college, campus) => {
    console.log("Viewing details for:", college, campus);
  }, []);

  return {
    // State
    viewMode,
    searchTerm,
    selectedCampus,
    sortBy,
    error,
    // Modal states
    showAddModal,
    showEditModal,
    showDeleteModal,
    selectedCollege,
    isSubmitting,
    filteredColleges,
    // Actions
    setViewMode,
    setSearchTerm,
    setSelectedCampus,
    setSortBy,
    setShowAddModal,
    setShowEditModal,
    setShowDeleteModal,
    clearFilters,
    handleAddCollege,
    handleEditCollege,
    handleDeleteCollege,
    handleEditClick,
    handleDeleteClick,
    handleViewDetails,
  };
};
