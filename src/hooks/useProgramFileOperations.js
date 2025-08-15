import { useState, useCallback } from "react";
import { showLoadingToast, updateToast } from "@/utils/toast";

export const useProgramFileOperations = (
  program,
  uploadFile,
  updateFile,
  deleteFile,
  refetch
) => {
  const [fileOperationLoading, setFileOperationLoading] = useState({
    curriculum: {
      uploading: false,
      updating: false,
      deleting: false,
      downloading: false,
    },
    syllabus: {
      uploading: false,
      updating: false,
      deleting: false,
      downloading: false,
    },
  });

  const [deleteConfirmation, setDeleteConfirmation] = useState({
    isOpen: false,
    fileType: null,
  });

  const setFileLoading = useCallback((fileType, operation, loading) => {
    setFileOperationLoading((prev) => ({
      ...prev,
      [fileType]: {
        ...prev[fileType],
        [operation]: loading,
      },
    }));
  }, []);

  const handleFileUpload = useCallback(
    async (fileType, file) => {
      if (!program) return { success: false };

      const toastId = showLoadingToast(`Uploading ${fileType}...`);
      setFileLoading(fileType, "uploading", true);

      try {
        const result = await uploadFile(file, fileType);
        if (result.success) {
          updateToast(
            toastId,
            `${
              fileType.charAt(0).toUpperCase() + fileType.slice(1)
            } uploaded successfully!`,
            "success"
          );
          await refetch();
        } else {
          updateToast(
            toastId,
            result.error || `Failed to upload ${fileType}`,
            "error"
          );
        }
      } catch (error) {
        console.error(`Error uploading ${fileType}:`, error);
        updateToast(toastId, `Failed to upload ${fileType}`, "error");
      } finally {
        setFileLoading(fileType, "uploading", false);
      }
    },
    [program, uploadFile, refetch, setFileLoading]
  );

  const handleFileUpdate = useCallback(
    async (fileType, file) => {
      if (!program || !file) return;

      const toastId = showLoadingToast(`Updating ${fileType}...`);

      try {
        const result = await updateFile(file, fileType);

        if (result.success) {
          updateToast(
            toastId,
            `${
              fileType.charAt(0).toUpperCase() + fileType.slice(1)
            } updated successfully!`,
            "success"
          );
          await refetch();
        } else {
          updateToast(
            toastId,
            result.error || `Failed to update ${fileType}`,
            "error"
          );
        }
      } catch (error) {
        console.error(`Error updating ${fileType}:`, error);
        updateToast(toastId, `Failed to update ${fileType}`, "error");
      }
    },
    [program, updateFile, refetch]
  );

  const handleFileDelete = useCallback(
    async (fileType) => {
      if (!program) return;

      setDeleteConfirmation({ isOpen: false, fileType: null });

      const toastId = showLoadingToast(`Deleting ${fileType}...`);

      try {
        const result = await deleteFile(fileType);

        if (result.success) {
          updateToast(
            toastId,
            `${
              fileType.charAt(0).toUpperCase() + fileType.slice(1)
            } deleted successfully!`,
            "success"
          );
          await refetch();
        } else {
          updateToast(
            toastId,
            result.error || `Failed to delete ${fileType}`,
            "error"
          );
        }
      } catch (error) {
        console.error(`Error deleting ${fileType}:`, error);
        updateToast(toastId, `Failed to delete ${fileType}`, "error");
      }
    },
    [program, deleteFile, refetch]
  );

  const handleDeleteConfirmation = useCallback((fileType) => {
    setDeleteConfirmation({ isOpen: true, fileType });
  }, []);

  const handleCancelDelete = useCallback(() => {
    setDeleteConfirmation({ isOpen: false, fileType: null });
  }, []);

  const handleFileDownload = useCallback(
    (fileUrl, fileName, fileType) => {
      if (fileUrl) {
        setFileLoading(fileType, "downloading", true);
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = fileName || "download";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setTimeout(() => {
          setFileLoading(fileType, "downloading", false);
        }, 1000);
      }
    },
    [setFileLoading]
  );

  return {
    fileOperationLoading,
    deleteConfirmation,
    handleFileUpload,
    handleFileUpdate,
    handleFileDelete,
    handleDeleteConfirmation,
    handleCancelDelete,
    handleFileDownload,
  };
};
