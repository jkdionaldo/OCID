import { useState, useCallback, useMemo } from "react";

export const useFormsActions = ({
  forms,
  onAddForm,
  onUpdateForm,
  onDeleteForm,
}) => {
  // View and filter states
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [sortBy, setSortBy] = useState("form_number");
  const [error, setError] = useState(null);

  // Modal states
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Filter and sort forms
  const filteredForms = useMemo(() => {
    if (!forms || !Array.isArray(forms)) return [];

    let filtered = forms.filter((form) => {
      if (!form) return false;

      const matchesSearch =
        (form.form_number &&
          form.form_number.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (form.title &&
          form.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (form.purpose &&
          form.purpose.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesType = (() => {
        switch (filterType) {
          case "pdf":
            return form.file_type?.toLowerCase() === "pdf";
          case "docx":
            return ["doc", "docx"].includes(form.file_type?.toLowerCase());
          case "xlsx":
            return ["xls", "xlsx"].includes(form.file_type?.toLowerCase());
          case "no-file":
            return !form.file_url && !form.file_path && !form.file_name;
          default:
            return true;
        }
      })();

      return matchesSearch && matchesType;
    });

    // Sort forms
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "form_number":
          return (a.form_number || "").localeCompare(b.form_number || "");
        case "title":
          return (a.title || "").localeCompare(b.title || "");
        case "revision":
          return (a.revision || "").localeCompare(b.revision || "");
        case "created":
          return new Date(b.created_at || 0) - new Date(a.created_at || 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [forms, searchTerm, filterType, sortBy]);

  // Actions
  const clearFilters = useCallback(() => {
    setSearchTerm("");
    setFilterType("all");
    setSortBy("form_number");
  }, []);

  const handleAddForm = useCallback(
    async (formData) => {
      try {
        setError(null);
        const result = await onAddForm(formData);

        if (result?.success !== false) {
          setShowAddModal(false);
        }

        return result;
      } catch (error) {
        console.error("Error adding form:", error);
        setError("Failed to add form");
        return { success: false, error: "Failed to add form" };
      }
    },
    [onAddForm]
  );

  const handleEditForm = useCallback(
    async (formId, formData) => {
      try {
        setError(null);
        const result = await onUpdateForm(formId, formData);

        if (result?.success !== false) {
          setShowEditModal(false);
          setSelectedForm(null);
        }

        return result;
      } catch (error) {
        console.error("Error updating form:", error);
        setError("Failed to update form");
        return { success: false, error: "Failed to update form" };
      }
    },
    [onUpdateForm]
  );

  const confirmDeleteForm = useCallback(async () => {
    if (!selectedForm || !onDeleteForm) return;

    setIsDeleting(true);

    try {
      const result = await onDeleteForm(selectedForm.id);

      if (result?.success !== false) {
        setShowDeleteModal(false);
        setSelectedForm(null);
      }

      return result;
    } catch (error) {
      console.error("Error deleting form:", error);
      setError("Failed to delete form");
      return { success: false, error: "Failed to delete form" };
    } finally {
      setIsDeleting(false);
    }
  }, [selectedForm, onDeleteForm]);

  const handleEditClick = useCallback((form) => {
    setSelectedForm(form);
    setShowEditModal(true);
  }, []);

  const handleDeleteClick = useCallback((form) => {
    setSelectedForm(form);
    setShowDeleteModal(true);
  }, []);

  return {
    // State
    viewMode,
    searchTerm,
    filterType,
    sortBy,
    error,
    // Modal states
    showAddModal,
    showEditModal,
    showDeleteModal,
    selectedForm,
    isDeleting,
    filteredForms,
    // Actions
    setViewMode,
    setSearchTerm,
    setFilterType,
    setSortBy,
    setShowAddModal,
    setShowEditModal,
    setShowDeleteModal,
    clearFilters,
    handleAddForm,
    handleEditForm,
    handleDeleteForm: confirmDeleteForm,
    handleEditClick,
    handleDeleteClick,
    confirmDeleteForm,
  };
};
