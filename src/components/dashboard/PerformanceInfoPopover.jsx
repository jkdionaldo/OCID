import React from "react";
import {
  Info,
  Clock,
  Database,
  Zap,
  HardDrive,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PerformanceInfoPopover = ({
  cacheInfo,
  loading,
  lastFetch,
  isCacheValid,
}) => {
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

  const getCacheStatusText = (source) => {
    switch (source) {
      case "cache":
        return "Cached Data";
      case "cache_initial":
        return "Cache Loaded";
      case "api":
        return "Fresh Data";
      case "cache_fallback":
        return "Cache Fallback";
      default:
        return "Unknown";
    }
  };

  const showCacheValid = isCacheValid && isCacheValid() && !loading;

  // Don't show if no info available
  if (!cacheInfo && !loading && !lastFetch && !showCacheValid) {
    return null;
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-9 w-9 p-0 text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          title="Performance & Cache Information"
        >
          <Info className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <Info className="h-4 w-4 text-blue-600" />
            <h3 className="font-semibold text-gray-900">Performance Info</h3>
          </div>
        </div>

        <div className="p-4 space-y-4">
          {/* Cache Status */}
          {cacheInfo && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Cache Status
                </span>
                <Badge
                  variant="outline"
                  className={`text-xs ${getCacheStatusColor(cacheInfo.source)}`}
                >
                  <div className="flex items-center gap-1">
                    {getCacheIcon(cacheInfo.source)}
                    {getCacheStatusText(cacheInfo.source)}
                  </div>
                </Badge>
              </div>

              {/* Cache Details */}
              <div className="space-y-1 text-xs text-gray-500">
                {cacheInfo.size && (
                  <div className="flex justify-between">
                    <span>Cache Size:</span>
                    <span className="font-mono">{cacheInfo.size}</span>
                  </div>
                )}
                {cacheInfo.fetchTime && (
                  <div className="flex justify-between">
                    <span>Fetch Time:</span>
                    <span className="font-mono">{cacheInfo.fetchTime}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Cache Valid Indicator */}
          {showCacheValid && (
            <div className="flex items-center justify-between p-2 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-800">
                  Fast Cache Load
                </span>
              </div>
              <Zap className="h-4 w-4 text-green-600" />
            </div>
          )}

          {/* Last Update */}
          {lastFetch && (
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Last Updated
                </span>
                <Clock className="h-4 w-4 text-gray-400" />
              </div>
              <div className="text-xs text-gray-500 font-mono">
                {formatTime(lastFetch)}
              </div>
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-600 border-t-transparent"></div>
                <span className="text-sm font-medium text-blue-800">
                  Refreshing Data
                </span>
              </div>
            </div>
          )}

          {/* Performance Tips */}
          <div className="pt-2 border-t border-gray-100">
            <div className="text-xs text-gray-500 space-y-1">
              <div className="font-medium text-gray-700 mb-1">
                Performance Tips:
              </div>
              <div className="flex items-start gap-1">
                <Zap className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Cached data loads instantly</span>
              </div>
              <div className="flex items-start gap-1">
                <Database className="h-3 w-3 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Fresh data ensures accuracy</span>
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PerformanceInfoPopover;
