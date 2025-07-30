export const useFileActions = (files, handleDelete, handleDownload) => {
  // Handle bulk download
  const handleBulkDownload = (selectedFiles) => {
    selectedFiles.forEach((fileId) => {
      const file = files.find((f) => f.id === fileId);
      if (file) handleDownload(file);
    });
  };

  // Handle bulk deletion
  const handleBulkDelete = async (selectedFiles) => {
    if (
      window.confirm(
        `Are you sure you want to delete ${selectedFiles.length} files?`
      )
    ) {
      for (const fileId of selectedFiles) {
        await handleDelete(fileId, files);
      }
    }
  };

  // Handle status update
  const handleUpdateStatus = (fileId, newStatus) => {
    console.log(`Update status for ${fileId} to ${newStatus}`);
  };

  // Handle file selection
  const handleFileSelect = (
    fileId,
    selectedFiles,
    setSelectedFiles,
    setShowBulkActions
  ) => {
    setSelectedFiles((prev) => {
      const newSelection = prev.includes(fileId)
        ? prev.filter((id) => id !== fileId)
        : [...prev, fileId];
      setShowBulkActions(newSelection.length > 0);
      return newSelection;
    });
  };

  // Handle select all files
  const handleSelectAll = (
    sortedFiles,
    selectedFiles,
    setSelectedFiles,
    setShowBulkActions
  ) => {
    if (selectedFiles.length === sortedFiles.length) {
      setSelectedFiles([]);
      setShowBulkActions(false);
    } else {
      setSelectedFiles(sortedFiles.map((file) => file.id));
      setShowBulkActions(true);
    }
  };

  return {
    handleBulkDownload,
    handleBulkDelete,
    handleUpdateStatus,
    handleFileSelect,
    handleSelectAll,
  };
};
