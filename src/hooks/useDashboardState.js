import { useState } from "react";

export const useDashboardState = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [showBulkActions, setShowBulkActions] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCollege, setSelectedCollege] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [sortBy, setSortBy] = useState("uploadDate");
  const [sortOrder, setSortOrder] = useState("desc");
  const [viewMode, setViewMode] = useState("grid");

  // Define filter options
  const statuses = ["all", "active", "draft", "archived", "pending"];
  const categories = ["all", "Curriculum", "Syllabus", "Documents", "Images"];

  const state = {
    selectedFiles,
    showBulkActions,
    searchTerm,
    selectedCategory,
    selectedCollege,
    selectedStatus,
    sortBy,
    sortOrder,
    viewMode,
    statuses,
    categories,
  };

  const setters = {
    setSelectedFiles,
    setShowBulkActions,
    setSearchTerm,
    setSelectedCategory,
    setSelectedCollege,
    setSelectedStatus,
    setSortBy,
    setSortOrder,
    setViewMode,
  };

  return { state, setters };
};
