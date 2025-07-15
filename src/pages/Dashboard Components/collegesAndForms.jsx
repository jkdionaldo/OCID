import React, { useRef } from "react";
import {
  Upload,
  Plus,
  MapPin,
  Building,
  GraduationCap,
  School,
  BookOpen,
  FileEdit,
  Building2,
} from "lucide-react";

export default function CollegesAndForms({
  files,
  isDragging,
  setIsDragging,
  handleFileUpload,
  handleDragOver,
  handleDragLeave,
  handleDrop,
}) {
  const fileInputRef = useRef(null);

  // College data for both campuses
  const collegesData = {
    "CSU-MAIN": [
      {
        id: "caa",
        name: "College of Agriculture and Agri-Industries",
        shortName: "CAA",
        description: "Leading agricultural education and research",
        programs: 12,
        students: 850,
        files: files.filter((f) => f.college === "CAA").length,
        color: "green",
        icon: <GraduationCap className="w-8 h-8" />,
      },
      {
        id: "cba-main",
        name: "College of Business Administration",
        shortName: "CBA",
        description: "Business education and entrepreneurship",
        programs: 8,
        students: 720,
        files: files.filter((f) => f.college === "CBA").length,
        color: "blue",
        icon: <Building className="w-8 h-8" />,
      },
      {
        id: "ccis",
        name: "College of Computing and Information Sciences",
        shortName: "CCIS",
        description: "Technology and computing education",
        programs: 6,
        students: 650,
        files: files.filter((f) => f.college === "CCIS").length,
        color: "purple",
        icon: <FileEdit className="w-8 h-8" />,
      },
      {
        id: "ced",
        name: "College of Education",
        shortName: "CED",
        description: "Teacher education and development",
        programs: 10,
        students: 900,
        files: files.filter((f) => f.college === "CED").length,
        color: "orange",
        icon: <BookOpen className="w-8 h-8" />,
      },
      {
        id: "cegs",
        name: "College of Engineering and Geo-Sciences",
        shortName: "CEGS",
        description: "Engineering and geoscience programs",
        programs: 7,
        students: 550,
        files: files.filter((f) => f.college === "CEGS").length,
        color: "red",
        icon: <Building2 className="w-8 h-8" />,
      },
      {
        id: "cmns",
        name: "College of Mathematics and Natural Sciences",
        shortName: "CMNS",
        description: "Mathematics and science education",
        programs: 9,
        students: 480,
        files: files.filter((f) => f.college === "CMNS").length,
        color: "teal",
        icon: <School className="w-8 h-8" />,
      },
    ],
    "CSU-CC": [
      {
        id: "cba-cc",
        name: "College of Business Administration",
        shortName: "CBA",
        description: "Business and management programs",
        programs: 6,
        students: 420,
        files: files.filter((f) => f.college === "CBA").length,
        color: "blue",
        icon: <Building className="w-8 h-8" />,
      },
      {
        id: "ceit",
        name: "College of Engineering and Information Technology",
        shortName: "CEIT",
        description: "Engineering and IT education",
        programs: 8,
        students: 380,
        files: files.filter((f) => f.college === "CEIT").length,
        color: "indigo",
        icon: <FileEdit className="w-8 h-8" />,
      },
      {
        id: "citte",
        name: "College of Industrial Technology and Teacher Education",
        shortName: "CITTE",
        description: "Industrial technology and education",
        programs: 7,
        students: 320,
        files: files.filter((f) => f.college === "CITTE").length,
        color: "yellow",
        icon: <Building2 className="w-8 h-8" />,
      },
      {
        id: "chass",
        name: "College of Humanities, Arts and Social Sciences",
        shortName: "CHASS",
        description: "Liberal arts and humanities",
        programs: 5,
        students: 280,
        files: files.filter((f) => f.college === "CHASS").length,
        color: "pink",
        icon: <BookOpen className="w-8 h-8" />,
      },
    ],
  };

  return (
    <div className="mb-8">
    
      {/* Colleges Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">All Colleges</h2>

        {/* CSU-MAIN Colleges */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <MapPin className="w-5 h-5 text-green-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">
              CSU-MAIN Campus
            </h3>
            <span className="ml-2 px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
              {collegesData["CSU-MAIN"].length} Colleges
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {collegesData["CSU-MAIN"].map((college) => (
              <div
                key={college.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-${college.color}-100`}>
                    <div className={`text-${college.color}-600`}>
                      {college.icon}
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    CSU-MAIN
                  </span>
                </div>

                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {college.shortName}
                </h4>
                <h5 className="text-sm font-medium text-gray-700 mb-2">
                  {college.name}
                </h5>
                <p className="text-sm text-gray-600 mb-4">
                  {college.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">
                      {college.programs}
                    </div>
                    <div className="text-xs text-gray-500">Programs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">
                      {college.students}
                    </div>
                    <div className="text-xs text-gray-500">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">
                      {college.files}
                    </div>
                    <div className="text-xs text-gray-500">Files</div>
                  </div>
                </div>

                <button
                  className={`w-full py-2 px-4 bg-${college.color}-600 hover:bg-${college.color}-700 text-white rounded-md text-sm font-medium transition-colors duration-200`}
                >
                  View College Files
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CSU-CC Colleges */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <MapPin className="w-5 h-5 text-blue-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">
              CSU-CC Campus
            </h3>
            <span className="ml-2 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
              {collegesData["CSU-CC"].length} Colleges
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {collegesData["CSU-CC"].map((college) => (
              <div
                key={college.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-${college.color}-100`}>
                    <div className={`text-${college.color}-600`}>
                      {college.icon}
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    CSU-CC
                  </span>
                </div>

                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {college.shortName}
                </h4>
                <h5 className="text-sm font-medium text-gray-700 mb-2">
                  {college.name}
                </h5>
                <p className="text-sm text-gray-600 mb-4">
                  {college.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">
                      {college.programs}
                    </div>
                    <div className="text-xs text-gray-500">Programs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">
                      {college.students}
                    </div>
                    <div className="text-xs text-gray-500">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">
                      {college.files}
                    </div>
                    <div className="text-xs text-gray-500">Files</div>
                  </div>
                </div>

                <button
                  className={`w-full py-2 px-4 bg-${college.color}-600 hover:bg-${college.color}-700 text-white rounded-md text-sm font-medium transition-colors duration-200`}
                >
                  View College Files
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Campus Summary */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Campus Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-green-800">CSU-MAIN</h4>
                <MapPin className="w-4 h-4 text-green-600" />
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-green-900">
                    {collegesData["CSU-MAIN"].length}
                  </div>
                  <div className="text-xs text-green-600">Colleges</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-green-900">
                    {collegesData["CSU-MAIN"].reduce(
                      (sum, college) => sum + college.programs,
                      0
                    )}
                  </div>
                  <div className="text-xs text-green-600">Programs</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-green-900">
                    {collegesData["CSU-MAIN"].reduce(
                      (sum, college) => sum + college.students,
                      0
                    )}
                  </div>
                  <div className="text-xs text-green-600">Students</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-blue-800">CSU-CC</h4>
                <MapPin className="w-4 h-4 text-blue-600" />
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-blue-900">
                    {collegesData["CSU-CC"].length}
                  </div>
                  <div className="text-xs text-blue-600">Colleges</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-blue-900">
                    {collegesData["CSU-CC"].reduce(
                      (sum, college) => sum + college.programs,
                      0
                    )}
                  </div>
                  <div className="text-xs text-blue-600">Programs</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-blue-900">
                    {collegesData["CSU-CC"].reduce(
                      (sum, college) => sum + college.students,
                      0
                    )}
                  </div>
                  <div className="text-xs text-blue-600">Students</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
