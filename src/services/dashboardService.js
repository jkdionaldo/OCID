import apiClient from "./apiClient";

export const dashboardService = {
  // Get dashboard data
  getDashboardData: async (forceRefresh = false) => {
    const params = forceRefresh ? { force_refresh: true } : {};
    const response = await apiClient.get("/dashboard", { params });
    return response.data.data;
  },

  // Get dashboard summary
  getDashboardSummary: async () => {
    const response = await apiClient.get("/dashboard/summary");
    return response.data.data;
  },

  // Clear dashboard cache
  clearCache: async (pattern = null) => {
    const data = pattern ? { pattern } : {};
    const response = await apiClient.post("/dashboard/clear-cache", data);
    return response.data;
  },

  // Health check
  healthCheck: async () => {
    const response = await apiClient.get("/dashboard/health");
    return response.data;
  },
};
