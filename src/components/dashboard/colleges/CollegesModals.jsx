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
        warningMessage={
          selectedCollege?.programs > 0
            ? `This college has ${selectedCollege.programs} associated programs. Deleting it will also remove all associated data.`
            : undefined
        }
      />
    </>
  );
};

export default CollegesModals;
