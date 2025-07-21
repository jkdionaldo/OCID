import React from "react";
import {
  Download,
  Eye,
  Edit3,
  Trash2,
  File,
  Users,
  FileText,
  Image,
  Video,
  Archive,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react";

export default function FileComponent({
  files,
  sortedFiles,
  selectedFiles,
  showBulkActions,
  viewMode,
  statuses,
  handleDownload,
  handleBulkDownload,
  handleBulkDelete,
  handleDelete,
  handleUpdateStatus,
  handleFileSelect,
  handleSelectAll,
  setSelectedFiles,
  setShowBulkActions,
  getFileIcon,
  getStatusIcon,
}) {
  return (
    <div>
      {/* Bulk Actions Bar */}
      {showBulkActions && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Users className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-800 font-medium">
                {selectedFiles.length} files selected
              </span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={handleBulkDownload}
                className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm"
              >
                Download All
              </button>
              <button
                onClick={handleBulkDelete}
                className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm"
              >
                Delete All
              </button>
              <button
                onClick={() => {
                  setSelectedFiles([]);
                  setShowBulkActions(false);
                }}
                className="px-3 py-1 bg-gray-600 text-white rounded-md hover:bg-gray-700 text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Files Display */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {sortedFiles.length === 0 ? (
          <div className="p-12 text-center">
            <File className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No files found
            </h3>
            <p className="text-gray-600">
              Upload some files or adjust your filters
            </p>
          </div>
        ) : viewMode === "grid" ? (
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {sortedFiles.length} files found
              </h3>
              <button
                onClick={handleSelectAll}
                className="text-sm text-green-600 hover:text-green-800"
              >
                {selectedFiles.length === sortedFiles.length
                  ? "Deselect All"
                  : "Select All"}
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {sortedFiles.map((file) => (
                <div
                  key={file.id}
                  className={`border rounded-lg p-4 hover:shadow-md transition-shadow duration-200 ${
                    selectedFiles.includes(file.id)
                      ? "border-green-500 bg-green-50"
                      : "border-gray-200"
                  }`}
                >
                  <div className="flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <input
                        type="checkbox"
                        checked={selectedFiles.includes(file.id)}
                        onChange={() => handleFileSelect(file.id)}
                        className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <div className="flex items-center">
                        {getStatusIcon(file.status)}
                        <span className="ml-1 text-xs text-gray-500 capitalize">
                          {file.status}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-center text-center">
                      {getFileIcon(file.type)}
                      <h3 className="font-medium text-gray-900 mt-3 mb-1 truncate w-full text-sm">
                        {file.name}
                      </h3>
                      <p className="text-xs text-gray-500 mb-1">{file.size}</p>
                      <div className="text-xs text-gray-400 mb-2">
                        <p>
                          {file.college} - {file.program}
                        </p>
                        <p>
                          {file.year} | {file.uploadDate}
                        </p>
                      </div>

                      <div className="flex space-x-1">
                        <button
                          onClick={() => handleDownload(file)}
                          className="p-1.5 text-green-600 hover:bg-green-50 rounded-md transition-colors duration-200"
                          title="Download"
                        >
                          <Download className="w-3 h-3" />
                        </button>
                        <button
                          className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                          title="View"
                        >
                          <Eye className="w-3 h-3" />
                        </button>
                        <button
                          className="p-1.5 text-yellow-600 hover:bg-yellow-50 rounded-md transition-colors duration-200"
                          title="Edit"
                        >
                          <Edit3 className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => handleDelete(file.id)}
                          className="p-1.5 text-red-600 hover:bg-red-50 rounded-md transition-colors duration-200"
                          title="Delete"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={
                        selectedFiles.length === sortedFiles.length &&
                        sortedFiles.length > 0
                      }
                      onChange={handleSelectAll}
                      className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    File Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    College/Program
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sortedFiles.map((file) => (
                  <tr key={file.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={selectedFiles.includes(file.id)}
                        onChange={() => handleFileSelect(file.id)}
                        className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {getFileIcon(file.type)}
                        <div className="ml-3">
                          <span className="text-sm font-medium text-gray-900">
                            {file.name}
                          </span>
                          <p className="text-xs text-gray-500">
                            {file.size} • {file.category}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {file.college}
                      </div>
                      <div className="text-xs text-gray-500">
                        {file.program} ({file.year})
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {getStatusIcon(file.status)}
                        <select
                          value={file.status}
                          onChange={(e) =>
                            handleUpdateStatus(file.id, e.target.value)
                          }
                          className="ml-2 text-xs border-none bg-transparent capitalize focus:ring-0"
                        >
                          {statuses.slice(1).map((status) => (
                            <option key={status} value={status}>
                              {status}
                            </option>
                          ))}
                        </select>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div>{file.uploadDate}</div>
                      <div className="text-xs">by {file.uploadedBy}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleDownload(file)}
                          className="text-green-600 hover:text-green-900"
                          title="Download"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                        <button
                          className="text-blue-600 hover:text-blue-900"
                          title="View"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          className="text-yellow-600 hover:text-yellow-900"
                          title="Edit"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(file.id)}
                          className="text-red-600 hover:text-red-900"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
