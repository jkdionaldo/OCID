import { useCallback } from "react";
import { formService } from "../services/formService";

export const useFormManagement = (updateDataOptimistically, setError) => {
  const createForm = useCallback(
    async (formData) => {
      try {
        setError(null);

        // Optimistic update with temporary form
        const tempId = `temp-${Date.now()}`;
        const tempForm = {
          id: tempId,
          form_number: formData.form_number,
          title: formData.title,
          purpose: formData.purpose,
          link: formData.link || null,
          revision: formData.revision || null,
          file_name: formData.file?.name || null,
          file_type: formData.file?.type?.split("/")[1] || null,
          file_size: formData.file?.size || null,
          created_at: new Date().toISOString(),
        };

        updateDataOptimistically((prevData) => ({
          ...prevData,
          forms: [...(prevData.forms || []), tempForm],
        }));

        // Make API call
        const newForm = await formService.createForm(formData);

        // Replace temp form with real one
        updateDataOptimistically((prevData) => ({
          ...prevData,
          forms: prevData.forms.map((form) =>
            form.id === tempId ? newForm : form
          ),
        }));

        return { success: true, data: newForm };
      } catch (err) {
        console.error("Error creating form:", err);

        // Revert optimistic update
        updateDataOptimistically((prevData) => ({
          ...prevData,
          forms: prevData.forms.filter(
            (form) => !form.id.toString().startsWith("temp-")
          ),
        }));

        let message = "Failed to create form";
        if (err.response?.data?.message) {
          message = err.response.data.message;
        } else if (err.response?.data?.errors) {
          const errors = Object.values(err.response.data.errors).flat();
          message = errors.join(", ");
        }

        setError(message);
        return { success: false, error: message };
      }
    },
    [updateDataOptimistically, setError]
  );

  const updateForm = useCallback(
    async (id, formData) => {
      try {
        setError(null);

        // Optimistic update
        updateDataOptimistically((prevData) => ({
          ...prevData,
          forms: prevData.forms.map((form) =>
            form.id.toString() === id.toString()
              ? {
                  ...form,
                  ...formData,
                  file_name: formData.file?.name || form.file_name,
                  file_type:
                    formData.file?.type?.split("/")[1] || form.file_type,
                  file_size: formData.file?.size || form.file_size,
                }
              : form
          ),
        }));

        // Make API call
        const updatedForm = await formService.updateForm(id, formData);

        // Update with server response
        updateDataOptimistically((prevData) => ({
          ...prevData,
          forms: prevData.forms.map((form) =>
            form.id.toString() === id.toString() ? updatedForm : form
          ),
        }));

        return { success: true, data: updatedForm };
      } catch (err) {
        console.error("Error updating form:", err);
        const message = err.response?.data?.message || "Failed to update form";
        setError(message);
        return { success: false, error: message };
      }
    },
    [updateDataOptimistically, setError]
  );

  const deleteForm = useCallback(
    async (id) => {
      let deletedForm;

      try {
        setError(null);

        // Optimistic update
        updateDataOptimistically((prevData) => {
          deletedForm = prevData.forms.find(
            (f) => f.id.toString() === id.toString()
          );
          return {
            ...prevData,
            forms: prevData.forms.filter(
              (form) => form.id.toString() !== id.toString()
            ),
          };
        });

        // Make API call
        await formService.deleteForm(id);

        return { success: true };
      } catch (err) {
        console.error("Error deleting form:", err);

        // Revert optimistic update
        if (deletedForm) {
          updateDataOptimistically((prevData) => ({
            ...prevData,
            forms: [...prevData.forms, deletedForm],
          }));
        }

        const message = err.response?.data?.message || "Failed to delete form";
        setError(message);
        return { success: false, error: message };
      }
    },
    [updateDataOptimistically, setError]
  );

  return {
    createForm,
    updateForm,
    deleteForm,
  };
};
