import React, { useEffect } from "react";
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
  // Debug: Log forms data when it changes
  useEffect(() => {
    console.log("FormsTab received forms:", forms);
    console.log("Forms length:", forms?.length);
    console.log("Sample form:", forms?.[0]);
  }, [forms]);

  // Ensure forms is always an array
  const safeForms = Array.isArray(forms) ? forms : [];

  // Custom hooks for data and actions
  const { stats } = useFormsData(safeForms);

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
    showDetailsModal,
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
    setShowDetailsModal,
    setSelectedForm,
    clearFilters,
    handleAddForm,
    handleEditForm,
    handleDeleteForm,
    handleEditClick,
    handleDeleteClick,
    handleViewDetails,
    confirmDeleteForm,
  } = useFormsActions({
    forms: safeForms,
    onAddForm,
    onUpdateForm,
    onDeleteForm,
  });

  // Safety check for filteredForms
  const safeFilteredForms = filteredForms || [];

  // Debug: Log filtered forms
  useEffect(() => {
    console.log("Filtered forms:", safeFilteredForms);
  }, [safeFilteredForms]);

  if (parentLoading && (!safeForms || safeForms.length === 0)) {
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
              {/* Debug info for empty state */}
              {process.env.NODE_ENV === "development" && (
                <div className="mt-4 text-xs text-gray-400">
                  Raw forms count: {safeForms.length}
                </div>
              )}
            </div>
          ) : viewMode === "grid" ? (
            <FormsGrid
              forms={safeFilteredForms}
              onEdit={handleEditClick}
              onDelete={handleDeleteClick}
              onViewDetails={handleViewDetails}
            />
          ) : (
            <FormsList
              forms={safeFilteredForms}
              onEdit={handleEditClick}
              onDelete={handleDeleteClick}
              onViewDetails={handleViewDetails}
            />
          )}
        </CardContent>
      </Card>

      {/* Modals */}
      <FormsModals
        showAddModal={showAddModal}
        showEditModal={showEditModal}
        showDeleteModal={showDeleteModal}
        showDetailsModal={showDetailsModal}
        selectedForm={selectedForm}
        isDeleting={isDeleting}
        onCloseAdd={() => setShowAddModal(false)}
        onCloseEdit={() => setShowEditModal(false)}
        onCloseDelete={() => {
          setShowDeleteModal(false);
        }}
        onCloseDetails={() => {
          setShowDetailsModal(false);
          setSelectedForm?.(null);
        }}
        onAddForm={handleAddForm}
        onUpdateForm={handleEditForm}
        onDeleteForm={confirmDeleteForm}
      />
    </div>
  );
}
