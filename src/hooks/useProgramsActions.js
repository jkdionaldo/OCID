import { useState, useCallback, useMemo } from "react";

export const useProgramsActions = ({
  programs,
  colleges,
  campuses,
  onAddProgram,
  onUpdateProgram,
  onDeleteProgram,
}) => {
  // View and filter states
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterCollege, setFilterCollege] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [error, setError] = useState(null);

  // Modal states
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  console.log("useProgramsActions input:", { programs, colleges, campuses });

  // Get college info for a program
  const getCollegeInfo = useCallback(
    (collegeId) => {
      const college = colleges?.find((c) => c.id === collegeId);
      if (!college)
        return { name: "Unknown", acronym: "N/A", campus: "Unknown" };

      const campus = campuses?.find((c) => c.id === college.campus_id);
      return {
        name: college.name,
        acronym: college.acronym,
        campus: campus?.acronym || "Unknown",
      };
    },
    [colleges, campuses]
  );

  // Filter programs based on search and filters
  const filterPrograms = useCallback(
    (programsArray, type) => {
      if (!programsArray || !Array.isArray(programsArray)) return [];

      console.log(`Filtering ${type} programs:`, programsArray);

      return programsArray.filter((program) => {
        const collegeInfo = getCollegeInfo(program.college_id);
        const matchesSearch =
          program.program_name
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
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
    },
    [searchTerm, filterType, filterCollege, getCollegeInfo]
  );

  // Filtered programs with safety checks
  const filteredPrograms = useMemo(() => {
    // Programs is now already structured as { undergraduate: [], graduate: [] }
    const undergraduate = programs?.undergraduate || [];
    const graduate = programs?.graduate || [];

    console.log("Raw programs:", { undergraduate, graduate });

    const filteredUndergrads = filterPrograms(undergraduate, "undergraduate");
    const filteredGraduates = filterPrograms(graduate, "graduate");

    console.log("Filtered results:", { filteredUndergrads, filteredGraduates });

    // Sort programs
    const sortPrograms = (programsArray) => {
      return [...programsArray].sort((a, b) => {
        switch (sortBy) {
          case "name":
            return (a.program_name || "").localeCompare(b.program_name || "");
          case "college": {
            const collegeA = getCollegeInfo(a.college_id);
            const collegeB = getCollegeInfo(b.college_id);
            return collegeA.name.localeCompare(collegeB.name);
          }
          case "created":
            return new Date(b.created_at || 0) - new Date(a.created_at || 0);
          default:
            return 0;
        }
      });
    };

    const result = {
      undergraduate: sortPrograms(filteredUndergrads),
      graduate: sortPrograms(filteredGraduates),
    };

    console.log("Final filtered and sorted programs:", result);
    return result;
  }, [programs, filterPrograms, sortBy, getCollegeInfo]);

  // Rest of the actions remain the same...
  const clearFilters = useCallback(() => {
    setSearchTerm("");
    setFilterType("all");
    setFilterCollege("all");
    setSortBy("name");
  }, []);

  const handleAddProgram = useCallback(
    async (programData) => {
      try {
        await onAddProgram(programData);
        setShowAddModal(false);
      } catch (error) {
        console.error("Error adding program:", error);
        setError("Failed to add program");
      }
    },
    [onAddProgram]
  );

  const handleEditProgram = useCallback(
    async (programId, programData, programType) => {
      try {
        await onUpdateProgram(programId, programData, programType);
        setShowEditModal(false);
        setSelectedProgram(null);
      } catch (error) {
        console.error("Error updating program:", error);
        setError("Failed to update program");
      }
    },
    [onUpdateProgram]
  );

  const confirmDeleteProgram = useCallback(async () => {
    if (!selectedProgram || !onDeleteProgram) return;

    setIsDeleting(true);

    try {
      const result = await onDeleteProgram(
        selectedProgram.id,
        selectedProgram.program_type || selectedProgram.type
      );

      if (result?.success !== false) {
        setShowDeleteModal(false);
        setSelectedProgram(null);
      }
    } catch (error) {
      console.error("Error deleting program:", error);
      setError("Failed to delete program");
    } finally {
      setIsDeleting(false);
    }
  }, [selectedProgram, onDeleteProgram]);

  const handleEditClick = useCallback((program, type) => {
    setSelectedProgram({ ...program, program_type: type });
    setShowEditModal(true);
  }, []);

  const handleDeleteClick = useCallback((program, type) => {
    setSelectedProgram({ ...program, program_type: type });
    setShowDeleteModal(true);
  }, []);

  return {
    // State
    viewMode,
    searchTerm,
    filterType,
    filterCollege,
    sortBy,
    error,
    // Modal states
    showAddModal,
    showEditModal,
    showDeleteModal,
    selectedProgram,
    isDeleting,
    filteredPrograms,
    // Actions
    setViewMode,
    setSearchTerm,
    setFilterType,
    setFilterCollege,
    setSortBy,
    setShowAddModal,
    setShowEditModal,
    setShowDeleteModal,
    clearFilters,
    handleAddProgram,
    handleEditProgram,
    handleDeleteProgram: confirmDeleteProgram,
    handleEditClick,
    handleDeleteClick,
    confirmDeleteProgram,
  };
};
