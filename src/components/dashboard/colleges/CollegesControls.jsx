import React from "react";
import { Search, Grid, List, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";

const CollegesControls = ({
  searchTerm,
  selectedCampus,
  sortBy,
  viewMode,
  campuses,
  onSearchChange,
  onCampusChange,
  onSortChange,
  onViewModeChange,
  onClearFilters,
  hasActiveFilters,
  error,
  onRetryError,
}) => {
  return (
    <>
      {/* Search and Filters */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 flex-1">
          {/* Enhanced Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-600 z-10 pointer-events-none" />
            <Input
              placeholder="Search colleges by name or acronym..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="
                h-12 pl-12 pr-4 
                border-2 border-gray-200 
                rounded-xl
                bg-white/90 backdrop-blur-sm
                text-gray-900 placeholder:text-gray-500
                shadow-sm hover:shadow-md
                focus:border-green-400 focus:ring-4 focus:ring-green-100 focus:bg-white
                focus-visible:outline-none focus-visible:ring-green-400 focus-visible:ring-offset-0
                transition-all duration-300
                font-medium
              "
            />
            {searchTerm && (
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 z-10">
                <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                </div>
              </div>
            )}
          </div>
          {/* Enhanced Campus Filter */}
          <Select value={selectedCampus} onValueChange={onCampusChange}>
            <SelectTrigger
              className="
              w-full sm:w-52 h-12
              border-2 border-gray-200 
              rounded-xl
              bg-white/70 backdrop-blur-sm
              shadow-sm hover:shadow-md
              focus:border-green-400 focus:ring-4 focus:ring-green-100 focus:bg-white
              transition-all duration-300
              font-medium text-gray-900
            "
            >
              <SelectValue placeholder="Filter by campus" />
            </SelectTrigger>
            <SelectContent className="rounded-lg border-gray-200 shadow-lg">
              <SelectItem
                value="all"
                className="rounded-md hover:bg-green-50 focus:bg-green-50"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  All Campuses
                </div>
              </SelectItem>
              {campuses?.map((campus) => (
                <SelectItem
                  key={campus.id}
                  value={campus.acronym}
                  className="rounded-md hover:bg-green-50 focus:bg-green-50"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        campus.acronym === "CSU-MAIN"
                          ? "bg-green-500"
                          : "bg-blue-500"
                      }`}
                    ></div>
                    {campus.acronym}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Enhanced Sort Filter */}
          <Select value={sortBy} onValueChange={onSortChange}>
            <SelectTrigger
              className="
              w-full sm:w-44 h-12
              border-2 border-gray-200 
              rounded-xl
              bg-white/70 backdrop-blur-sm
              shadow-sm hover:shadow-md
              focus:border-green-400 focus:ring-4 focus:ring-green-100 focus:bg-white
              transition-all duration-300
              font-medium text-gray-900
            "
            >
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="rounded-lg border-gray-200 shadow-lg">
              <SelectItem
                value="name"
                className="rounded-md hover:bg-green-50 focus:bg-green-50"
              >
                Name
              </SelectItem>
              <SelectItem
                value="programs"
                className="rounded-md hover:bg-emerald-50 focus:bg-emerald-50"
              >
                Programs
              </SelectItem>
              <SelectItem
                value="files"
                className="rounded-md hover:bg-emerald-50 focus:bg-emerald-50"
              >
                Files
              </SelectItem>
              <SelectItem
                value="created"
                className="rounded-md hover:bg-emerald-50 focus:bg-emerald-50"
              >
                Created Date
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-3">
          {/* Enhanced Clear Filters Button */}
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="
                h-10 px-4
                text-gray-600 hover:text-emerald-700
                bg-gray-100/70 hover:bg-emerald-50
                border border-gray-200 hover:border-emerald-200
                rounded-lg
                font-medium
                transition-all duration-200
                backdrop-blur-sm
              "
            >
              Clear Filters
            </Button>
          )}

          {/* Enhanced View Mode Toggle */}
          <div className="flex items-center border-2 border-gray-200 rounded-xl p-1 bg-white/70 backdrop-blur-sm shadow-sm">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => onViewModeChange("grid")}
              className={`
                h-9 w-9 p-0 rounded-lg transition-all duration-200
                ${
                  viewMode === "grid"
                    ? "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                    : "text-gray-600 hover:text-emerald-700 hover:bg-emerald-50"
                }
              `}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => onViewModeChange("list")}
              className={`
                h-9 w-9 p-0 rounded-lg transition-all duration-200
                ${
                  viewMode === "list"
                    ? "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                    : "text-gray-600 hover:text-emerald-700 hover:bg-emerald-50"
                }
              `}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Error State */}
      {error && (
        <Alert
          variant="destructive"
          className="mb-6 border-red-200 bg-red-50/80 backdrop-blur-sm rounded-xl"
        >
          <AlertCircle className="h-5 w-5" />
          <AlertDescription className="text-red-800">
            {error}
            <Button
              variant="link"
              onClick={onRetryError}
              className="p-0 ml-2 h-auto text-red-700 hover:text-red-900 font-medium"
            >
              Try again
            </Button>
          </AlertDescription>
        </Alert>
      )}
    </>
  );
};

export default CollegesControls;
