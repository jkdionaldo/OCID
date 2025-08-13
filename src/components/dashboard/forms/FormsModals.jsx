import React from "react";
import AddFormModal from "@/components/modals/dashboard/AddFormModal";
import EditFormModal from "@/components/modals/dashboard/EditFormModal";
import DeleteConfirmationModal from "@/components/modals/dashboard/DeleteConfirmationModal";
import FormDetailsModal from "@/components/modals/dashboard/FormDetailsModal";

const FormsModals = ({
  showAddModal,
  showEditModal,
  showDeleteModal,
  showDetailsModal,
  selectedForm,
  isDeleting,
  onCloseAdd,
  onCloseEdit,
  onCloseDelete,
  onCloseDetails,
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

      <FormDetailsModal
        isOpen={showDetailsModal}
        onClose={onCloseDetails}
        form={selectedForm}
      />
    </>
  );
};

export default FormsModals;
