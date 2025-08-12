import React from "react";
import { BookOpen, GraduationCap } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import ProgramsHeader from "./programs/ProgramsHeader";
import ProgramsControls from "./programs/ProgramsControls";
import ProgramsGrid from "./programs/ProgramsGrid";
import ProgramsList from "./programs/ProgramsList";
import ProgramsModals from "./programs/ProgramsModals";
import ProgramsStats from "./programs/ProgramsStats";
import DashboardLoading from "./DashboardLoading";

import { useProgramsData } from "@/hooks/useProgramsData";
import { useProgramsActions } from "@/hooks/useProgramsActions";

export default function ProgramsTab({
  undergrads,
  graduates,
  colleges,
  campuses,
  onAddProgram,
  onUpdateProgram,
  onDeleteProgram,
  loading: parentLoading,
}) {
  // Custom hooks for data and actions
  const { programs, stats } = useProgramsData(undergrads, graduates);

  const {
    // State
    viewMode,
    searchTerm,
    filterType,
    filterCollege,
    sortBy,
    error,
    // Modal states
    showAddModal,
    showEditModal,
    showDeleteModal,
    showDetailsModal,
    selectedProgram,
    isDeleting,
    filteredPrograms,
    // Actions
    setViewMode,
    setSearchTerm,
    setFilterType,
    setFilterCollege,
    setSortBy,
    setShowAddModal,
    setShowEditModal,
    setShowDeleteModal,
    setShowDetailsModal,
    clearFilters,
    handleAddProgram,
    handleEditProgram,
    handleDeleteProgram,
    handleEditClick,
    handleDeleteClick,
    handleViewDetails,
    confirmDeleteProgram,
  } = useProgramsActions({
    programs,
    colleges,
    campuses,
    onAddProgram,
    onUpdateProgram,
    onDeleteProgram,
  });

  // Safety check for filteredPrograms
  const safeFilteredPrograms = filteredPrograms || {
    undergraduate: [],
    graduate: [],
  };

  if (parentLoading && programs.length === 0) {
    return <DashboardLoading type="files" />;
  }

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <ProgramsStats stats={stats} />

      {/* Main Controls Card */}
      <Card>
        <ProgramsHeader
          filteredPrograms={safeFilteredPrograms}
          onAddProgram={() => setShowAddModal(true)}
        />

        <CardContent className="pt-0">
          <ProgramsControls
            searchTerm={searchTerm}
            filterType={filterType}
            filterCollege={filterCollege}
            sortBy={sortBy}
            viewMode={viewMode}
            colleges={colleges}
            onSearchChange={setSearchTerm}
            onTypeChange={setFilterType}
            onCollegeChange={setFilterCollege}
            onSortChange={setSortBy}
            onViewModeChange={setViewMode}
            onClearFilters={clearFilters}
            hasActiveFilters={
              searchTerm ||
              filterType !== "all" ||
              filterCollege !== "all" ||
              sortBy !== "name"
            }
            error={error}
            filteredPrograms={safeFilteredPrograms}
          />

          {/* Programs Display */}
          {safeFilteredPrograms.undergraduate.length === 0 &&
          safeFilteredPrograms.graduate.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {searchTerm || filterType !== "all" || filterCollege !== "all"
                  ? "No programs found"
                  : "No programs yet"}
              </h3>
              <p className="text-gray-500 mb-4">
                {searchTerm || filterType !== "all" || filterCollege !== "all"
                  ? "Try adjusting your search criteria"
                  : "Start by adding your first program to the system"}
              </p>
            </div>
          ) : viewMode === "grid" ? (
            <ProgramsGrid
              programs={safeFilteredPrograms}
              colleges={colleges}
              campuses={campuses}
              onEdit={handleEditClick}
              onDelete={handleDeleteClick}
              onViewDetails={handleViewDetails}
            />
          ) : (
            <ProgramsList
              programs={safeFilteredPrograms}
              colleges={colleges}
              campuses={campuses}
              onEdit={handleEditClick}
              onDelete={handleDeleteClick}
              onViewDetails={handleViewDetails}
            />
          )}
        </CardContent>
      </Card>

      {/* Modals */}
      <ProgramsModals
        showAddModal={showAddModal}
        showEditModal={showEditModal}
        showDeleteModal={showDeleteModal}
        showDetailsModal={showDetailsModal}
        selectedProgram={selectedProgram}
        colleges={colleges}
        campuses={campuses}
        isDeleting={isDeleting}
        onCloseAdd={() => setShowAddModal(false)}
        onCloseEdit={() => setShowEditModal(false)}
        onCloseDelete={() => {
          setShowDeleteModal(false);
        }}
        onCloseDetails={() => {
          setShowDetailsModal(false);
          setSelectedProgram(null);
        }}
        onAddProgram={handleAddProgram}
        onUpdateProgram={handleEditProgram}
        onDeleteProgram={confirmDeleteProgram}
      />
    </div>
  );
}
