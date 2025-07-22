import React from "react";
import { File, BookOpen, GraduationCap, FileText, Archive } from "lucide-react";

export default function Status({ files }) {
  // Calculate statistics
  const stats = {
    total: files.length,
    curriculum: files.filter((f) => f.category === "Curriculum").length,
    syllabus: files.filter((f) => f.category === "Syllabus").length,
    documents: files.filter((f) => f.category === "Documents").length,
    images: files.filter((f) => f.category === "Images").length,
    totalSize: files
      .reduce((acc, file) => {
        const size = parseFloat(file.size);
        return acc + size;
      }, 0)
      .toFixed(1),
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Files</p>
            <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
          </div>
          <File className="w-8 h-8 text-blue-500" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Curriculum</p>
            <p className="text-2xl font-bold text-gray-900">
              {stats.curriculum}
            </p>
          </div>
          <BookOpen className="w-8 h-8 text-green-500" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Syllabus</p>
            <p className="text-2xl font-bold text-gray-900">{stats.syllabus}</p>
          </div>
          <GraduationCap className="w-8 h-8 text-purple-500" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Documents</p>
            <p className="text-2xl font-bold text-gray-900">
              {stats.documents}
            </p>
          </div>
          <FileText className="w-8 h-8 text-red-500" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Storage</p>
            <p className="text-2xl font-bold text-gray-900">
              {stats.totalSize} MB
            </p>
          </div>
          <Archive className="w-8 h-8 text-orange-500" />
        </div>
      </div>
    </div>
  );
}
