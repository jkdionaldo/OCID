import { useState, useMemo } from "react";

export const useDashboardFilters = (files) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCollege, setSelectedCollege] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [sortBy, setSortBy] = useState("uploadDate");
  const [sortOrder, setSortOrder] = useState("desc");
  const [viewMode, setViewMode] = useState("grid");

  const filteredFiles = useMemo(() => {
    return files.filter((file) => {
      const matchesSearch =
        file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        file.program.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || file.category === selectedCategory;
      const matchesCollege =
        selectedCollege === "all" || file.college === selectedCollege;
      const matchesStatus =
        selectedStatus === "all" || file.status === selectedStatus;

      return (
        matchesSearch && matchesCategory && matchesCollege && matchesStatus
      );
    });
  }, [files, searchTerm, selectedCategory, selectedCollege, selectedStatus]);

  const sortedFiles = useMemo(() => {
    return [...filteredFiles].sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];

      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  }, [filteredFiles, sortBy, sortOrder]);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedCollege("all");
    setSelectedStatus("all");
  };

  return {
    filters: {
      searchTerm,
      selectedCategory,
      selectedCollege,
      selectedStatus,
      sortBy,
      sortOrder,
      viewMode,
    },
    setters: {
      setSearchTerm,
      setSelectedCategory,
      setSelectedCollege,
      setSelectedStatus,
      setSortBy,
      setSortOrder,
      setViewMode,
      resetFilters,
    },
    filteredFiles,
    sortedFiles,
  };
};
