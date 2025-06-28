import { X, Upload, Download } from "lucide-react";

const FileViewerModal = ({
  isOpen,
  onClose,
  onUploadNew,
  fileUrl,
  fileName,
  fileType = "Curriculum",
  programName,
  year,
  themeColor = "green",
}) => {
  if (!isOpen) return null;

  // Function to get proper view URL for Google Drive files
  const getViewUrl = (url) => {
    if (!url) return "";
    if (url.includes("drive.google.com")) {
      // Handle Google Drive URLs
      if (url.includes("/file/d/")) {
        const fileId = url.match(/\/file\/d\/([^/]+)/)?.[1];
        if (fileId) return `https://drive.google.com/file/d/${fileId}/preview`;
      } else if (url.includes("id=")) {
        const fileId = url.match(/id=([^&]+)/)?.[1];
        if (fileId) return `https://drive.google.com/file/d/${fileId}/preview`;
      } else if (url.includes("/folders/")) {
        return url; // Return folder URL as-is
      }
    }
    return url;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
        <div className="p-6 flex justify-between items-center border-b">
          <div>
            <h3 className={`text-xl font-bold text-${themeColor}-700`}>
              Program {fileType}
            </h3>
            <p className="text-sm text-gray-600">
              {programName} - {year}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onUploadNew}
              className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
            >
              <Upload className="h-4 w-4 mr-1" />
              Upload New
            </button>
            <button
              onClick={onClose}
              className={`text-gray-400 hover:text-${themeColor}-700 transition-colors p-1 rounded-full hover:bg-gray-100`}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-4 bg-gray-50">
          <div className="flex justify-center">
            {fileUrl?.includes("drive.google.com") ? (
              // If it's a Google Drive file
              fileUrl.includes("folders") ? (
                // For folder links
                <div className="w-full text-center">
                  <p className="mb-4 text-gray-700">
                    This is a Google Drive folder with multiple files.
                  </p>
                  <a
                    href={fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 bg-${themeColor}-600 text-white rounded-lg hover:bg-${themeColor}-700 inline-flex items-center`}
                  >
                    Open Drive Folder
                  </a>
                </div>
              ) : (
                // For single file links
                <iframe
                  src={getViewUrl(fileUrl)}
                  className="w-full h-[600px] border-0 shadow-md rounded-md"
                  title={`${programName} ${fileType} ${year}`}
                  allowFullScreen
                />
              )
            ) : (
              // If it's a regular image or placeholder
              <img
                src={fileUrl || "/placeholder.svg"}
                alt={`${programName} ${fileType} ${year}`}
                className="max-w-full h-auto shadow-md rounded-md"
              />
            )}
          </div>
        </div>

        {fileUrl && !fileUrl.includes("drive.google.com") && (
          <div className="p-4 border-t">
            <div className="flex justify-end">
              <a
                href={fileUrl}
                download={fileName || `${programName}-${fileType}-${year}`}
                className={`px-4 py-2 bg-${themeColor}-600 text-white rounded-lg hover:bg-${themeColor}-700 inline-flex items-center`}
              >
                <Download className="h-4 w-4 mr-2" />
                Download
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileViewerModal;
