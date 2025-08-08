import React from "react";
import { FileText } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import FormsHeader from "./forms/FormsHeader";
import FormsControls from "./forms/FormsControls";
import FormsGrid from "./forms/FormsGrid";
import FormsList from "./forms/FormsList";
import FormsModals from "./forms/FormsModals";
import FormsStats from "./forms/FormsStats";
import DashboardLoading from "./DashboardLoading";

import { useFormsData } from "@/hooks/useFormsData";
import { useFormsActions } from "@/hooks/useFormsActions";

export default function FormsTab({
  forms,
  onAddForm,
  onUpdateForm,
  onDeleteForm,
  loading: parentLoading,
}) {
  // Custom hooks for data and actions
  const { stats } = useFormsData(forms);

  const {
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
    handleDeleteForm,
    handleEditClick,
    handleDeleteClick,
    confirmDeleteForm,
  } = useFormsActions({
    forms,
    onAddForm,
    onUpdateForm,
    onDeleteForm,
  });

  // Safety check for filteredForms
  const safeFilteredForms = filteredForms || [];

  if (parentLoading && (!forms || forms.length === 0)) {
    return <DashboardLoading type="forms" />;
  }

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <FormsStats stats={stats} />

      {/* Main Controls Card */}
      <Card>
        <FormsHeader
          filteredForms={safeFilteredForms}
          onAddForm={() => setShowAddModal(true)}
        />

        <CardContent className="pt-0">
          <FormsControls
            searchTerm={searchTerm}
            filterType={filterType}
            sortBy={sortBy}
            viewMode={viewMode}
            onSearchChange={setSearchTerm}
            onTypeChange={setFilterType}
            onSortChange={setSortBy}
            onViewModeChange={setViewMode}
            onClearFilters={clearFilters}
            hasActiveFilters={
              searchTerm || filterType !== "all" || sortBy !== "form_number"
            }
            error={error}
            filteredForms={safeFilteredForms}
          />

          {/* Forms Display */}
          {safeFilteredForms.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {searchTerm || filterType !== "all"
                  ? "No forms found"
                  : "No forms yet"}
              </h3>
              <p className="text-gray-500 mb-4">
                {searchTerm || filterType !== "all"
                  ? "Try adjusting your search criteria"
                  : "Start by adding your first form to the system"}
              </p>
            </div>
          ) : viewMode === "grid" ? (
            <FormsGrid
              forms={safeFilteredForms}
              onEdit={handleEditClick}
              onDelete={handleDeleteClick}
            />
          ) : (
            <FormsList
              forms={safeFilteredForms}
              onEdit={handleEditClick}
              onDelete={handleDeleteClick}
            />
          )}
        </CardContent>
      </Card>

      {/* Modals */}
      <FormsModals
        showAddModal={showAddModal}
        showEditModal={showEditModal}
        showDeleteModal={showDeleteModal}
        selectedForm={selectedForm}
        isDeleting={isDeleting}
        onCloseAdd={() => setShowAddModal(false)}
        onCloseEdit={() => setShowEditModal(false)}
        onCloseDelete={() => {
          setShowDeleteModal(false);
        }}
        onAddForm={handleAddForm}
        onUpdateForm={handleEditForm}
        onDeleteForm={confirmDeleteForm}
      />
    </div>
  );
}
