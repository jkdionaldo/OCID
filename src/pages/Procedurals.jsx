import React, { useState } from "react";
import { FileText, Columns2, X } from "lucide-react";

export default function Procedurals() {
  const [selectedFile, setSelectedFile] = useState(null);

  // Procedural PDF files
  const proceduralFiles = [
    {
      id: 1,
      name: "F-CID-001",
      title: "Request for Evaluation",
      purpose: "All request use this form",
      revision: "Rev 4",
      url: "/images/ocid-procedurals/F-CID-001.pdf",
    },
    {
      id: 2,
      name: "F-CID-002",
      title: "REVIEW REPORT",
      purpose: "All",
      revision: "Rev 5",
      url: "/images/ocid-procedurals/F-CID-002.pdf",
    },
    {
      id: 3,
      name: "F-CID-003",
      title: "REVIEW AND REPLY SHEET",
      purpose: "All",
      revision: "Rev 5",
      url: "/images/ocid-procedurals/F-CID-003.pdf",
    },
    {
      id: 4,
      name: "F-CID-004 FS",
      title: "Financial Feasibility Assessment Tool",
      purpose: "For New Program Curriculum",
      revision: "Rev 1",
      url: "/images/ocid-procedurals/F-CID-004 FS.pdf",
    },
    {
      id: 5,
      name: "F-CID-005 FS",
      title: "Management Feasibility Assessment Tool",
      purpose: "For New Program Curriculum",
      revision: "Rev 1",
      url: "/images/ocid-procedurals/F-CID-005 FS.pdf",
    },
    {
      id: 6,
      name: "F-CID-006 FS",
      title: "Marketing Feasibility Assessment Tool",
      purpose: "For New Program Curriculum",
      revision: "Rev 1",
      url: "/images/ocid-procedurals/F-CID-006 FS.pdf",
    },
    {
      id: 7,
      name: "F-CID-007 FS",
      title: "Technical Feasibility Assessment Tool",
      purpose: "For New Program Curriculum",
      revision: "Rev 1",
      url: "/images/ocid-procedurals/F-CID-007 FS.pdf",
    },
  ];

  return (
    <div className="container mx-auto p-4 mb-16 mt-2">
      <div className="grid grid-cols-12 gap-6 h-[calc(100vh-200px)]">
        {/* Left Column - PDF List */}
        <div className="col-span-4 bg-white rounded-lg shadow-md p-4 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">Procedural Files</h2>
          <div className="space-y-2">
            {proceduralFiles.map((file) => (
              <div
                key={file.id}
                className={`w-full flex flex-col p-3 rounded-lg transition-colors ${
                  selectedFile?.id === file.id
                    ? "bg-green-50 text-green-700 border-2 border-green-200"
                    : "hover:bg-gray-50 border-2 border-transparent"
                }`}
              >
                <button
                  onClick={() => setSelectedFile(file)}
                  className="flex items-center w-full text-left"
                >
                  <FileText className="w-5 h-5 mr-2 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-semibold">{file.name}</div>
                    <div className="text-xs text-gray-600 mt-1">
                      {file.title}
                    </div>
                  </div>
                </button>
                <div className="mt-2 pl-7 text-xs text-gray-500">
                  <div>Purpose: {file.purpose}</div>
                  <div className="mt-1">Revision: {file.revision}</div>
                </div>
              </div>
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
