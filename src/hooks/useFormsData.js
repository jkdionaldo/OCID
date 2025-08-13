import { useMemo } from "react";

export const useFormsData = (forms = []) => {
  // Calculate statistics
  const stats = useMemo(() => {
    const total = forms.length;
    const withFiles = forms.filter(
      (form) => form.file_url || form.file_path || form.file_name
    ).length;
    const downloads = forms.filter(
      (form) => form.file_url || form.file_path
    ).length;

    return {
      total,
      withFiles,
      downloads,
    };
  }, [forms]);

  return { stats };
};
