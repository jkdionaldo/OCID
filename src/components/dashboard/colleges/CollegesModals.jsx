import React from "react";
import AddCollegeModal from "@/components/modals/dashboard/AddCollegeModal";
import EditCollegeModal from "@/components/modals/dashboard/EditCollegeModal";
import DeleteConfirmationModal from "@/components/modals/dashboard/DeleteConfirmationModal";

const CollegesModals = ({
  showAddModal,
  showEditModal,
  showDeleteModal,
  selectedCollege,
  campuses,
  isSubmitting,
  onCloseAdd,
  onCloseEdit,
  onCloseDelete,
  onAddCollege,
  onUpdateCollege,
  onDeleteCollege,
}) => {
  // Check if college has associated data that prevents deletion
  const hasAssociatedData =
    selectedCollege &&
    (selectedCollege.programs > 0 ||
      selectedCollege.files > 0 ||
      selectedCollege.undergraduate_programs > 0 ||
      selectedCollege.graduate_programs > 0);

  const canDelete = !hasAssociatedData;

  // Generate blocking message
  const generateBlockingMessage = () => {
    if (!selectedCollege || canDelete) return null;

    const parts = [];

    if (
      selectedCollege.programs > 0 ||
      selectedCollege.undergraduate_programs > 0 ||
      selectedCollege.graduate_programs > 0
    ) {
      const totalPrograms =
        selectedCollege.programs ||
        selectedCollege.undergraduate_programs +
          selectedCollege.graduate_programs;
      parts.push(`${totalPrograms} program${totalPrograms > 1 ? "s" : ""}`);
    }

    if (selectedCollege.files > 0) {
      parts.push(
        `${selectedCollege.files} file${selectedCollege.files > 1 ? "s" : ""}`
      );
    }

    return `This college has ${parts.join(
      " and "
    )} associated with it. Please remove all associated data before attempting to delete this college.`;
  };

  return (
    <>
      <AddCollegeModal
        isOpen={showAddModal}
        onClose={onCloseAdd}
        onAddCollege={onAddCollege}
        campuses={campuses}
        isSubmitting={isSubmitting}
      />

      <EditCollegeModal
        isOpen={showEditModal}
        onClose={onCloseEdit}
        college={selectedCollege}
        campuses={campuses}
        onUpdateCollege={onUpdateCollege}
        isSubmitting={isSubmitting}
      />

      <DeleteConfirmationModal
        isOpen={showDeleteModal}
        onClose={onCloseDelete}
        onConfirm={onDeleteCollege}
        isDeleting={isSubmitting}
        itemType="College"
        itemName={selectedCollege?.name}
        canDelete={canDelete}
        warningMessage={
          canDelete &&
          selectedCollege?.programs === 0 &&
          selectedCollege?.files === 0
            ? "Deleting this college will permanently remove all its information from the system."
            : undefined
        }
        blockingMessage={generateBlockingMessage()}
      />
    </>
  );
};

export default CollegesModals;
