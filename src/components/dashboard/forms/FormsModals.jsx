import React from "react";
import AddFormModal from "@/components/modals/dashboard/AddFormModal";
import EditFormModal from "@/components/modals/dashboard/EditFormModal";
import DeleteConfirmationModal from "@/components/modals/dashboard/DeleteConfirmationModal";

const FormsModals = ({
  showAddModal,
  showEditModal,
  showDeleteModal,
  selectedForm,
  isDeleting,
  onCloseAdd,
  onCloseEdit,
  onCloseDelete,
  onAddForm,
  onUpdateForm,
  onDeleteForm,
}) => {
  return (
    <>
      <AddFormModal
        isOpen={showAddModal}
        onClose={onCloseAdd}
        onAddForm={onAddForm}
      />

      <EditFormModal
        isOpen={showEditModal}
        onClose={onCloseEdit}
        form={selectedForm}
        onUpdateForm={(formId, formData) => onUpdateForm(formId, formData)}
      />

      <DeleteConfirmationModal
        isOpen={showDeleteModal}
        onClose={onCloseDelete}
        onConfirm={onDeleteForm}
        isDeleting={isDeleting}
        title="Delete Form"
        description="This will permanently remove the form and all its associated data."
        itemName={selectedForm?.title || ""}
        itemType="Form"
        warningMessage="Deleting this form will permanently remove it from the system."
        additionalInfo={
          selectedForm ? `Form Number: ${selectedForm.form_number}` : ""
        }
      />
    </>
  );
};

export default FormsModals;
