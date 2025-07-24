import { RefreshCw } from "lucide-react";

const DashboardHeader = ({ onRefresh, lastFetch, loading }) => {
  const formatLastFetch = (timestamp) => {
    if (!timestamp) return "Never";
    const date = new Date(timestamp);
    return date.toLocaleTimeString();
  };

  return (
    <div className="mb-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            File Management Dashboard
          </h1>
          <p className="text-gray-600">
            Manage all college files, curricula, syllabi, and documents
          </p>
          {lastFetch && (
            <p className="text-sm text-gray-500 mt-1">
              Last updated: {formatLastFetch(lastFetch)}
            </p>
          )}
        </div>

        <button
          onClick={() => onRefresh?.(true)}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title="Refresh data"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          {loading ? "Refreshing..." : "Refresh"}
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
