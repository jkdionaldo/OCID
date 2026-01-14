import React from "react";
import AddProgramModal from "@/components/modals/dashboard/AddProgramModal";
import EditProgramModal from "@/components/modals/dashboard/EditProgramModal";
import DeleteConfirmationModal from "@/components/modals/dashboard/DeleteConfirmationModal";
import ProgramDetailsModal from "@/components/modals/dashboard/ProgramDetailsModal";

const ProgramsModals = ({
  showAddModal,
  showEditModal,
  showDeleteModal,
  showDetailsModal,
  selectedProgram,
  colleges,
  campuses,
  isDeleting,
  onCloseAdd,
  onCloseEdit,
  onCloseDelete,
  onCloseDetails,
  onAddProgram,
  onUpdateProgram,
  onDeleteProgram,
}) => {
  // Get college info for selected program
  const getCollegeInfo = (collegeId) => {
    const college = colleges?.find((c) => c.id === collegeId);
    if (!college) return { name: "Unknown", acronym: "N/A", campus: "Unknown" };

    const campus = campuses?.find((c) => c.id === college.campus_id);
    return {
      name: college.name,
      acronym: college.acronym,
      campus: campus?.acronym || "Unknown",
    };
  };

  return (
    <>
      <AddProgramModal
        isOpen={showAddModal}
        onClose={onCloseAdd}
        onAddProgram={onAddProgram}
      />

      <EditProgramModal
        isOpen={showEditModal}
        onClose={onCloseEdit}
        program={selectedProgram}
        onUpdateProgram={(programId, programData, programType) =>
          onUpdateProgram(programId, programData, programType)
        }
      />

      <DeleteConfirmationModal
        isOpen={showDeleteModal}
        onClose={onCloseDelete}
        onConfirm={onDeleteProgram}
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

      <ProgramDetailsModal
        isOpen={showDetailsModal}
        onClose={onCloseDetails}
        program={selectedProgram}
        colleges={colleges}
        campuses={campuses}
      />
    </>
  );
};

export default ProgramsModals;
