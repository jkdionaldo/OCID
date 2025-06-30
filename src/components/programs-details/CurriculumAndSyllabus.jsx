import { BookOpen, ExternalLink } from "lucide-react";

const CurriculumAndSyllabus = ({
  curriculumFiles,
  syllabusFiles,
  onViewCurriculum,
  onViewSyllabus,
  onUploadCurriculum,
  onUploadSyllabus,
  themeColor = "green",
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
        <BookOpen className={`h-5 w-5 text-${themeColor}-600 mr-2`} />
        CURRICULUM & SYLLABUS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Curriculum Files */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-medium text-gray-800 mb-3">
            Curriculum Files
          </h3>
          <div className="space-y-3 mb-4 w-full">
            {Object.entries(curriculumFiles || {}).map(([year, fileUrl]) => (
              <div
                key={year}
                className="bg-gray-50 p-3 rounded-lg border border-gray-200"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800">
                    {year} Curriculum
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onViewCurriculum(year);
                    }}
                    className={`text-${themeColor}-600 hover:text-${themeColor}-800 text-sm flex items-center`}
                  >
                    <ExternalLink className="h-3 w-3 mr-1" />
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onUploadCurriculum();
            }}
            className={`px-3 py-1.5 bg-white border border-${themeColor}-600 text-${themeColor}-600 rounded-lg hover:bg-${themeColor}-50 text-sm flex items-center`}
          >
            <svg
              className="h-4 w-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12"
              />
            </svg>
            Upload Curriculum
          </button>
        </div>

        {/* Syllabus */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-3">
            Course Syllabus
          </h3>
          <p className="text-sm text-gray-600 mb-4 text-justify">
            Course syllabus provide detailed information about individual
            courses, including learning objectives, topics covered, assessment
            methods, and required readings.
          </p>
          <div className="flex space-x-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onViewSyllabus();
              }}
              className={`px-3 py-1.5 bg-${themeColor}-600 text-white rounded-lg hover:bg-${themeColor}-700 text-sm flex items-center`}
            >
              <svg
                className="h-4 w-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Browse Syllabus
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onUploadSyllabus();
              }}
              className={`px-3 py-1.5 bg-white border border-${themeColor}-600 text-${themeColor}-600 rounded-lg hover:bg-${themeColor}-50 text-sm flex items-center`}
            >
              <svg
                className="h-4 w-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12"
                />
              </svg>
              Upload Syllabus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumAndSyllabus;
