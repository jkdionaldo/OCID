import React from "react";
import { Clock, Database, Zap, HardDrive } from "lucide-react";

const PerformanceMonitor = ({ cacheInfo, loading, lastFetch }) => {
  if (!cacheInfo && !loading) return null;

  const formatTime = (timestamp) => {
    if (!timestamp) return "Never";
    return new Date(timestamp).toLocaleTimeString();
  };

  const getCacheStatusColor = (source) => {
    switch (source) {
      case "cache":
      case "cache_initial":
        return "text-green-600 bg-green-50 border-green-200";
      case "api":
        return "text-blue-600 bg-blue-50 border-blue-200";
      case "cache_fallback":
        return "text-yellow-600 bg-yellow-50 border-yellow-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getCacheIcon = (source) => {
    switch (source) {
      case "cache":
      case "cache_initial":
        return <Zap className="w-4 h-4" />;
      case "api":
        return <Database className="w-4 h-4" />;
      case "cache_fallback":
        return <HardDrive className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="mb-4 p-3 border rounded-lg bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div
            className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${getCacheStatusColor(
              cacheInfo?.source
            )}`}
          >
            {getCacheIcon(cacheInfo?.source)}
            <span>
              {cacheInfo?.source === "cache" && "Cached Data"}
              {cacheInfo?.source === "cache_initial" && "Cache Loaded"}
              {cacheInfo?.source === "api" && "Fresh Data"}
              {cacheInfo?.source === "cache_fallback" && "Cache Fallback"}
            </span>
          </div>

          {cacheInfo?.size && (
            <span className="text-xs text-gray-500">
              Size: {cacheInfo.size}
            </span>
          )}

          {cacheInfo?.fetchTime && (
            <span className="text-xs text-gray-500">
              Fetch: {cacheInfo.fetchTime}
            </span>
          )}
        </div>

        <span className="text-xs text-gray-500">
          Last update: {formatTime(lastFetch)}
        </span>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
