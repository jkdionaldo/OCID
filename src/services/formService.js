import apiClient from "./apiClient";

export const formService = {
  // Get all forms
  getForms: async () => {
    const response = await apiClient.get("/forms");
    return response.data.data;
  },

  // Get single form
  getForm: async (id) => {
    const response = await apiClient.get(`/forms/${id}`);
    return response.data.data;
  },

  // Create new form
  createForm: async (formData) => {
    const response = await apiClient.post("/forms", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data.data;
  },

  // Update form
  updateForm: async (id, formData) => {
    const response = await apiClient.put(`/forms/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data.data;
  },

  // Delete form
  deleteForm: async (id) => {
    const response = await apiClient.delete(`/forms/${id}`);
    return response.data;
  },

  // Upload file to existing form
  uploadFile: async (id, file) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await apiClient.post(`/forms/${id}/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data.data;
  },

  // Remove file from form
  removeFile: async (id) => {
    const response = await apiClient.delete(`/forms/${id}/file`);
    return response.data;
  },
};
