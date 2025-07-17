import {
  BookOpen,
  ExternalLink,
  Edit,
  Trash2,
  Upload,
  Eye,
} from "lucide-react";

const CurriculumSyllabusProgramModal = ({
  curriculumFiles,
  syllabusFiles,
  onViewCurriculum,
  onViewSyllabus,
  onUploadCurriculum,
  onUploadSyllabus,
  onUpdateCurriculum,
  onUpdateSyllabus,
  onDeleteCurriculum,
  onDeleteSyllabus,
  themeColor = "green",
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
        <BookOpen className={`h-5 w-5 text-${themeColor}-600 mr-2`} />
        CURRICULUM & SYLLABUS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
        {/* Curriculum Files */}
        <div className="flex flex-col h-full">
          <h3 className="text-lg font-medium text-gray-800 mb-3 text-center">
            Curriculum Files
          </h3>

          <div className="space-y-3 mb-4 w-full flex-1">
            {Object.entries(curriculumFiles || {}).map(([year, fileUrl]) => (
              <div
                key={year}
                className="bg-gray-50 p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-800">
                    {year} Curriculum
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onViewCurriculum(year);
                    }}
                    className={`px-2 py-1 bg-${themeColor}-600 text-white rounded text-xs flex items-center hover:bg-${themeColor}-700 transition-colors`}
                  >
                    <Eye className="h-3 w-3 mr-1" />
                    View
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onUpdateCurriculum(year);
                    }}
                    className="px-2 py-1 bg-blue-600 text-white rounded text-xs flex items-center hover:bg-blue-700 transition-colors"
                  >
                    <Edit className="h-3 w-3 mr-1" />
                    Update
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteCurriculum(year);
                    }}
                    className="px-2 py-1 bg-red-600 text-white rounded text-xs flex items-center hover:bg-red-700 transition-colors"
                  >
                    <Trash2 className="h-3 w-3 mr-1" />
                    Delete
                  </button>
                </div>
              </div>
            ))}

            {/* Show message if no curriculum files */}
            {(!curriculumFiles ||
              Object.keys(curriculumFiles).length === 0) && (
              <div className="text-center py-8 text-gray-500">
                <BookOpen className="h-12 w-12 mx-auto mb-2 text-gray-300" />
                <p className="text-sm">No curriculum files available</p>
              </div>
            )}
          </div>

          {/* Upload Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onUploadCurriculum();
            }}
            className={`px-3 py-2 bg-white border border-${themeColor}-600 text-${themeColor}-600 rounded-lg hover:bg-${themeColor}-50 text-sm flex items-center justify-center transition-colors`}
          >
            <Upload className="h-4 w-4 mr-1" />
            Upload Curriculum
          </button>
        </div>

        {/* Syllabus Files */}
        <div className="flex flex-col h-full">
          <h3 className="text-lg font-medium text-gray-800 mb-3 text-center">
            Course Syllabus
          </h3>

          <div className="space-y-3 mb-4 w-full flex-1">
            {syllabusFiles && syllabusFiles.length > 0 ? (
              syllabusFiles.map((syllabus, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-800">
                      {syllabus.courseName || `Syllabus ${index + 1}`}
                    </span>
                  </div>

                  {syllabus.courseCode && (
                    <p className="text-xs text-gray-600 mb-2">
                      Course Code: {syllabus.courseCode}
                    </p>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2 flex-wrap">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onViewSyllabus(syllabus);
                      }}
                      className={`px-2 py-1 bg-${themeColor}-600 text-white rounded text-xs flex items-center hover:bg-${themeColor}-700 transition-colors`}
                    >
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onUpdateSyllabus(syllabus);
                      }}
                      className="px-2 py-1 bg-blue-600 text-white rounded text-xs flex items-center hover:bg-blue-700 transition-colors"
                    >
                      <Edit className="h-3 w-3 mr-1" />
                      Update
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onDeleteSyllabus(syllabus);
                      }}
                      className="px-2 py-1 bg-red-600 text-white rounded text-xs flex items-center hover:bg-red-700 transition-colors"
                    >
                      <Trash2 className="h-3 w-3 mr-1" />
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <BookOpen className="h-12 w-12 mx-auto mb-2 text-gray-300" />
                <p className="text-sm mb-2">No syllabus files available</p>
                <p className="text-xs text-gray-400">
                  Course syllabus provide detailed information about individual
                  courses
                </p>
              </div>
            )}
          </div>

          {/* Upload Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onUploadSyllabus();
            }}
            className={`px-3 py-2 bg-white border border-${themeColor}-600 text-${themeColor}-600 rounded-lg hover:bg-${themeColor}-50 text-sm flex items-center justify-center transition-colors`}
          >
            <Upload className="h-4 w-4 mr-1" />
            Upload Syllabus
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurriculumSyllabusProgramModal;
