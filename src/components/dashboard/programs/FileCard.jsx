import React from "react";
import { FileText, Download, Edit3, Trash2, Plus, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FileUploadInput = ({ fileType, onFileSelect }) => (
  <input
    key={`${fileType}-upload-input`}
    type="file"
    id={`${fileType}-upload`}
    className="hidden"
    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
    onChange={(e) => {
      const file = e.target.files[0];
      if (file) {
        onFileSelect(file);
      }
    }}
  />
);

const FileCard = ({
  fileType,
  fileData,
  displayName,
  fileOperationLoading,
  formatFileSize,
  formatDate,
  handleFileDownload,
  handleDeleteConfirmation,
  handleFileUpdate,
  handleFileUpload,
}) => {
  const hasFile = fileData && (fileData.file_url || fileData.file_path);
  const loading = fileOperationLoading[fileType];
  const isAnyLoading = Object.values(loading).some(Boolean);

  return (
    <Card
      key={`file-card-${fileType}`}
      className="group border-0 shadow-xl bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
    >
      <CardContent className="p-6 space-y-4 relative">
        {/* Loading Overlay */}
        {isAnyLoading && (
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-lg flex items-center justify-center z-10">
            <div className="flex items-center space-x-3 px-4 py-2 bg-white rounded-lg shadow-lg border">
              <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
              <span className="text-sm font-medium text-gray-700">
                {loading.uploading && "Uploading..."}
                {loading.updating && "Updating..."}
                {loading.deleting && "Deleting..."}
                {loading.downloading && "Downloading..."}
              </span>
            </div>
          </div>
        )}

        <div className="flex items-center gap-3 mb-4">
          <div
            className={`p-2.5 bg-gradient-to-br ${
              fileType === "curriculum"
                ? "from-purple-500 to-purple-600"
                : "from-indigo-500 to-indigo-600"
            } rounded-xl shadow-lg`}
          >
            <FileText className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">{displayName}</h3>
        </div>

        {hasFile ? (
          <div className="space-y-4">
            {/* File Info */}
            <div className="space-y-3">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  File Name
                </label>
                <div className="bg-gradient-to-r from-gray-50 to-white px-3 py-2.5 rounded-xl border border-gray-200 shadow-sm">
                  <p className="text-gray-900 text-sm font-medium">
                    {fileData.file_name || fileData.original_name || "Unknown"}
                  </p>
                </div>
              </div>

              {fileData.file_size && (
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    File Size
                  </label>
                  <div className="bg-gradient-to-r from-gray-50 to-white px-3 py-2.5 rounded-xl border border-gray-200 shadow-sm">
                    <p className="text-gray-900 text-sm">
                      {formatFileSize(fileData.file_size)}
                    </p>
                  </div>
                </div>
              )}

              {fileData.created_at && (
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Uploaded Date
                  </label>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-3 py-2.5 rounded-xl border border-green-200 shadow-sm">
                    <p className="text-green-900 text-sm">
                      {formatDate(fileData.created_at)}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* File Actions */}
            <div className="flex gap-2 pt-2">
              <Button
                onClick={() =>
                  handleFileDownload(
                    fileData.file_url || fileData.file_path,
                    fileData.file_name || fileData.original_name,
                    fileType
                  )
                }
                size="sm"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                disabled={isAnyLoading}
              >
                {loading.downloading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Downloading
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </>
                )}
              </Button>

              <Button
                onClick={() =>
                  document.getElementById(`${fileType}-upload`).click()
                }
                size="sm"
                variant="outline"
                className="flex-1 border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                disabled={isAnyLoading}
              >
                {loading.updating ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Updating
                  </>
                ) : (
                  <>
                    <Edit3 className="w-4 h-4 mr-2" />
                    Update
                  </>
                )}
              </Button>

              <Button
                onClick={() => handleDeleteConfirmation(fileType)}
                size="sm"
                variant="outline"
                className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                disabled={isAnyLoading}
              >
                {loading.deleting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Trash2 className="w-4 h-4" />
                )}
              </Button>
            </div>

            <FileUploadInput
              fileType={fileType}
              onFileSelect={(file) => handleFileUpdate(fileType, file)}
            />
          </div>
        ) : (
          <div className="space-y-4">
            {/* Empty State */}
            <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-600 text-sm mb-2">
                No {fileType} file uploaded
              </p>
              <p className="text-gray-500 text-xs">
                Upload a {fileType} file for this program
              </p>
            </div>

            {/* Upload Button */}
            <Button
              onClick={() =>
                document.getElementById(`${fileType}-upload`).click()
              }
              className={`w-full bg-gradient-to-r ${
                fileType === "curriculum"
                  ? "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
                  : "from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700"
              } text-white`}
              disabled={loading.uploading}
            >
              {loading.uploading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Uploading {displayName}
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4 mr-2" />
                  Upload {displayName}
                </>
              )}
            </Button>

            <FileUploadInput
              fileType={fileType}
              onFileSelect={(file) => handleFileUpload(fileType, file)}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FileCard;
