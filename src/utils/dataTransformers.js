export const transformFilesData = (curriculum, syllabus) => {
  return [
    ...curriculum.map((item) => ({
      id: `curriculum-${item.id}`,
      name: item.file_name || "No file",
      type: item.file_type?.split("/")[1] || "unknown",
      size: item.file_size
        ? `${(item.file_size / (1024 * 1024)).toFixed(1)} MB`
        : "0 MB",
      uploadDate:
        item.created_at?.split("T")[0] ||
        new Date().toISOString().split("T")[0],
      category: "Curriculum",
      college:
        item.undergrad_program?.college?.acronym ||
        item.graduate_program?.college?.acronym ||
        "Unknown",
      program:
        item.undergrad_program?.program_name ||
        item.graduate_program?.program_name ||
        "Unknown",
      year: new Date(item.created_at).getFullYear().toString(),
      status: "active",
      lastModified:
        item.updated_at?.split("T")[0] || item.created_at?.split("T")[0],
      uploadedBy: "System",
      url: item.file_url,
      originalId: item.id,
      programType: item.program_type,
    })),
    ...syllabus.map((item) => ({
      id: `syllabus-${item.id}`,
      name: item.file_name || "No file",
      type: item.file_type?.split("/")[1] || "unknown",
      size: item.file_size
        ? `${(item.file_size / (1024 * 1024)).toFixed(1)} MB`
        : "0 MB",
      uploadDate:
        item.created_at?.split("T")[0] ||
        new Date().toISOString().split("T")[0],
      category: "Syllabus",
      college:
        item.undergrad_program?.college?.acronym ||
        item.graduate_program?.college?.acronym ||
        "Unknown",
      program:
        item.undergrad_program?.program_name ||
        item.graduate_program?.program_name ||
        "Unknown",
      year: new Date(item.created_at).getFullYear().toString(),
      status: "active",
      lastModified:
        item.updated_at?.split("T")[0] || item.created_at?.split("T")[0],
      uploadedBy: "System",
      url: item.file_url,
      originalId: item.id,
      programType: item.program_type,
    })),
  ];
};
