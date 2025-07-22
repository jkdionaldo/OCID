import React, { useState } from "react";
import { FileText, Columns2, X } from "lucide-react"; // Add Columns2 and X to imports

export default function Procedurals() {
  const [selectedFile, setSelectedFile] = useState(null);

  // Sample data - replace with your actual PDF files
  const proceduralFiles = [
    { id: 1, name: "Procedure Manual 2024", url: "/path/to/pdf1.pdf" },
    { id: 2, name: "Guidelines Document", url: "/path/to/pdf2.pdf" },
    { id: 3, name: "Standard Operations", url: "/path/to/pdf3.pdf" },
  ];

  return (
    <div className="container mx-auto p-4 mb-16 mt-2">
      <div className="grid grid-cols-12 gap-6 h-[calc(100vh-200px)]">
        {/* Left Column - PDF List */}
        <div className="col-span-4 bg-white rounded-lg shadow-md p-4 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">Procedural Files</h2>
          <div className="space-y-2">
            {proceduralFiles.map((file) => (
              <button
                key={file.id}
                onClick={() => setSelectedFile(file)}
                className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                  selectedFile?.id === file.id
                    ? "bg-green-50 text-green-700"
                    : "hover:bg-gray-50"
                }`}
              >
                <FileText className="w-5 h-5 mr-2" />
                <span className="text-left">{file.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - PDF Preview */}
        <div className="col-span-8 bg-white rounded-lg shadow-md relative">
          {selectedFile ? (
            <>
              <button
                onClick={() => setSelectedFile(null)}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 focus:outline-none z-10"
              >
                <X size={24} />
              </button>
              <iframe
                src={selectedFile.url}
                className="w-full h-full rounded-lg"
                title={`Preview of ${selectedFile.name}`}
              />
            </>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
              <Columns2 size={48} className="text-gray-300" />
              <span className="text-lg">Select a file to preview</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
