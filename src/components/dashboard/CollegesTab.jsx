import React from "react";
import { Building } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import CollegesHeader from "./colleges/CollegesHeader";
import CollegesControls from "./colleges/CollegesControls";
import CollegesGrid from "./colleges/CollegesGrid";
import CollegesList from "./colleges/CollegesList";
import CollegesModals from "./colleges/CollegesModals";
import CollegesStats from "./colleges/CollegesStats";
import DashboardLoading from "./DashboardLoading";

import { useCollegesData } from "@/hooks/useCollegesData";
import { useCollegesActions } from "@/hooks/useCollegesActions";

const CollegesTab = ({
  colleges: collegesData,
  campuses,
  onAddCollege,
  onUpdateCollege,
  onDeleteCollege,
  loading: parentLoading,
}) => {
  // Custom hooks for data and actions with error boundaries
  const { colleges, stats } = useCollegesData(collegesData);

  const {
    // State
    viewMode,
    searchTerm,
    selectedCampus,
    sortBy,
    error,
    // Modal states
    showAddModal,
    showEditModal,
    showDeleteModal,
    selectedCollege,
    isSubmitting,
    filteredColleges, // This should now be properly defined
    // Actions
    setViewMode,
    setSearchTerm,
    setSelectedCampus,
    setSortBy,
    setShowAddModal,
    setShowEditModal,
    setShowDeleteModal,
    clearFilters,
    handleAddCollege,
    handleEditCollege,
    handleDeleteCollege,
    handleEditClick,
    handleDeleteClick,
    handleViewDetails,
  } = useCollegesActions({
    colleges,
    campuses,
    onAddCollege,
    onUpdateCollege,
    onDeleteCollege,
  });

  // Safety check for filteredColleges
  const safeFilteredColleges = filteredColleges || [];

  if (parentLoading && colleges.length === 0) {
    return <DashboardLoading type="colleges" />;
  }

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <CollegesStats stats={stats} />

      {/* Main Controls Card */}
      <Card>
        <CollegesHeader
          filteredColleges={safeFilteredColleges}
          onAddCollege={() => setShowAddModal(true)}
        />

        <CardContent className="pt-0">
          <CollegesControls
            searchTerm={searchTerm}
            selectedCampus={selectedCampus}
            sortBy={sortBy}
            viewMode={viewMode}
            campuses={campuses}
            onSearchChange={setSearchTerm}
            onCampusChange={setSelectedCampus}
            onSortChange={setSortBy}
            onViewModeChange={setViewMode}
            onClearFilters={clearFilters}
            hasActiveFilters={
              searchTerm || selectedCampus !== "all" || sortBy !== "name"
            }
            error={error}
          />

          {/* Colleges Display */}
          {safeFilteredColleges.length === 0 ? (
            <div className="text-center py-12">
              <Building className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {searchTerm || selectedCampus !== "all"
                  ? "No colleges found"
                  : "No colleges yet"}
              </h3>
              <p className="text-gray-500 mb-4">
                {searchTerm || selectedCampus !== "all"
                  ? "Try adjusting your search criteria"
                  : "Start by adding your first college to the system"}
              </p>
            </div>
          ) : viewMode === "grid" ? (
            <CollegesGrid
              colleges={safeFilteredColleges}
              campuses={campuses}
              onViewDetails={handleViewDetails}
              onEdit={handleEditClick}
              onDelete={handleDeleteClick}
            />
          ) : (
            <CollegesList
              colleges={safeFilteredColleges}
              campuses={campuses}
              onViewDetails={handleViewDetails}
              onEdit={handleEditClick}
              onDelete={handleDeleteClick}
            />
          )}
        </CardContent>
      </Card>

      {/* Modals */}
      <CollegesModals
        showAddModal={showAddModal}
        showEditModal={showEditModal}
        showDeleteModal={showDeleteModal}
        selectedCollege={selectedCollege}
        campuses={campuses}
        isSubmitting={isSubmitting}
        onCloseAdd={() => setShowAddModal(false)}
        onCloseEdit={() => setShowEditModal(false)}
        onCloseDelete={() => setShowDeleteModal(false)}
        onAddCollege={handleAddCollege}
        onUpdateCollege={handleEditCollege}
        onDeleteCollege={handleDeleteCollege}
      />
    </div>
  );
};

export default CollegesTab;
