import { X, FileText, Upload } from "lucide-react";

const FileUploadModal = ({
  isOpen,
  onClose,
  onUpload,
  isUploading,
  fileType = "Curriculum",
  programName,
  year = "2023",
  themeColor = "green",
  onFileSelect,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-xl max-w-md w-full shadow-2xl">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className={`text-xl font-bold text-${themeColor}-700`}>
              Upload {fileType} File
            </h3>
            <button
              onClick={onClose}
              className={`text-gray-400 hover:text-${themeColor}-700 transition-colors p-1 rounded-full hover:bg-gray-100`}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div
            className={`mb-6 p-4 bg-${themeColor}-50 rounded-lg border border-${themeColor}-100`}
          >
            <p className="text-gray-700">
              Uploading {fileType.toLowerCase()} for:{" "}
              <span className="font-semibold">{programName}</span>
            </p>
            <p className="text-sm text-gray-600 mt-2">
              {fileType === "Curriculum"
                ? `This will be added as the ${year} curriculum.`
                : "This will be added to the program syllables folder."}
            </p>
          </div>

          <div className="mb-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <div className="flex flex-col items-center">
                <Upload className="h-12 w-12 text-gray-400 mb-3" />
                <p className="text-gray-700 font-medium mb-2">
                  Drag and drop your {fileType.toLowerCase()} file here
                </p>
                <p className="text-gray-500 text-sm mb-4">or</p>
                <label
                  htmlFor="fileInput"
                  className={`px-4 py-2 bg-${themeColor}-600 text-white rounded-lg hover:bg-${themeColor}-700 transition-colors cursor-pointer flex items-center`}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Browse Files
                </label>
                <input
                  type="file"
                  id="fileInput"
                  className="hidden"
                  accept="image/*,.pdf"
                  onChange={onFileSelect}
                />
                <p className="mt-3 text-xs text-gray-500">
                  Supported formats: JPG, PNG, PDF (max 10MB)
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 mr-3 hover:bg-gray-50 transition-all"
              disabled={isUploading}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={onUpload}
              className={`px-4 py-2 bg-${themeColor}-600 text-white rounded-lg hover:bg-${themeColor}-700 transition-colors flex items-center`}
              disabled={isUploading}
            >
              {isUploading ? (
                <>
                  <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                  Uploading...
                </>
              ) : (
                "Upload File"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUploadModal;
