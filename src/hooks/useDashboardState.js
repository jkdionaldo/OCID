import { useState, useRef } from "react";

export const useDashboardState = () => {
  // UI state
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCollege, setSelectedCollege] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [showBulkActions, setShowBulkActions] = useState(false);
  const [sortBy, setSortBy] = useState("uploadDate");
  const [sortOrder, setSortOrder] = useState("desc");
  const fileInputRef = useRef(null);

  // Options for filters
  const categories = [
    "all",
    "Curriculum",
    "Syllabus",
    "Documents",
    "Images",
    "Videos",
    "Others",
  ];

  const statuses = ["all", "active", "draft", "archived", "pending"];

  return {
    state: {
      viewMode,
      searchTerm,
      selectedCategory,
      selectedCollege,
      selectedStatus,
      isDragging,
      selectedFiles,
      showBulkActions,
      sortBy,
      sortOrder,
      fileInputRef,
      categories,
      statuses,
    },
    setters: {
      setViewMode,
      setSearchTerm,
      setSelectedCategory,
      setSelectedCollege,
      setSelectedStatus,
      setIsDragging,
      setSelectedFiles,
      setShowBulkActions,
      setSortBy,
      setSortOrder,
    },
  };
};
