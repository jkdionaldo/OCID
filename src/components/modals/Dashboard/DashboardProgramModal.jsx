import React, { useState, useEffect } from "react";
import { X, GraduationCap, BookOpen, Users, MapPin } from "lucide-react";
import CurriculumSyllabusProgramModal from "./CurriculumSyllabusProgramModal";

const DashboardProgramModal = ({ isOpen, onClose, college, campus }) => {
  const [programs, setPrograms] = useState([]);
  const [activeTab, setActiveTab] = useState("undergraduate");
  const [showCurriculumModal, setShowCurriculumModal] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  // Sample curriculum and syllabus data - replace with real data
  const sampleCurriculumFiles = {
    2024: "/files/curriculum/2024-curriculum.pdf",
    2023: "/files/curriculum/2023-curriculum.pdf",
    2022: "/files/curriculum/2022-curriculum.pdf",
  };

  const sampleSyllabusFiles = [
    {
      courseName: "Introduction to Programming",
      courseCode: "CS101",
      fileUrl: "/files/syllabus/cs101-syllabus.pdf",
    },
    {
      courseName: "Data Structures and Algorithms",
      courseCode: "CS201",
      fileUrl: "/files/syllabus/cs201-syllabus.pdf",
    },
    {
      courseName: "Database Systems",
      courseCode: "CS301",
      fileUrl: "/files/syllabus/cs301-syllabus.pdf",
    },
  ];

  // Complete Program data mapping based on college shortName
  const programsData = {
    // CSU-MAIN Programs
    CAA: {
      undergraduate: [
        {
          id: 1,
          name: "Bachelor of Science in Agriculture (BSA) major in Agriculture Economics",
          path: "/colleges/csu-main/caa/undergrad",
        },
        {
          id: 2,
          name: "Bachelor of Science in Agriculture (BSA) major in Crop Protection",
          path: "/colleges/csu-main/caa/undergrad",
        },
        {
          id: 3,
          name: "Bachelor of Science in Agriculture (BSA) major in Crop Science",
          path: "/colleges/csu-main/caa/undergrad",
        },
        {
          id: 4,
          name: "Bachelor of Science in Agriculture (BSA) major in Animal Science",
          path: "/colleges/csu-main/caa/undergrad",
        },
        {
          id: 5,
          name: "Bachelor of Science in Agriculture (BSA) major in Soil Science",
          path: "/colleges/csu-main/caa/undergrad",
        },
        {
          id: 6,
          name: "Bachelor of Science in Agribusiness (BSAb)",
          path: "/colleges/csu-main/caa/undergrad",
        },
      ],
      graduate: [
        {
          id: 1,
          name: "Master of Science in Agriculture (MSA)",
          path: "/colleges/csu-main/caa/graduate",
        },
        {
          id: 2,
          name: "Doctor of Philosophy in Agriculture (PhD Agri)",
          path: "/colleges/csu-main/caa/graduate",
        },
        {
          id: 3,
          name: "Master of Science in Agribusiness (MSAb)",
          path: "/colleges/csu-main/caa/graduate",
        },
      ],
    },
    CCIS: {
      undergraduate: [
        {
          id: 1,
          name: "Bachelor of Science in Computer Science (BSCS)",
          path: "/colleges/csu-main/ccis/undergrad",
        },
        {
          id: 2,
          name: "Bachelor of Science in Information Technology (BSIT)",
          path: "/colleges/csu-main/ccis/undergrad",
        },
        {
          id: 3,
          name: "Bachelor of Science in Information System (BSIS)",
          path: "/colleges/csu-main/ccis/undergrad",
        },
      ],
      graduate: [
        {
          id: 1,
          name: "Master of Science in Information Technology (MSIT)",
          path: "/colleges/csu-main/ccis/graduate",
        },
      ],
    },
    CED: {
      undergraduate: [
        {
          id: 1,
          name: "Bachelor of Elementary Education (BEEd)",
          path: "/colleges/csu-main/ced/undergrad",
        },
        {
          id: 2,
          name: "Bachelor of Secondary Education (BSEd) major in English",
          path: "/colleges/csu-main/ced/undergrad",
        },
        {
          id: 3,
          name: "Bachelor of Secondary Education (BSEd) major in Mathematics",
          path: "/colleges/csu-main/ced/undergrad",
        },
        {
          id: 4,
          name: "Bachelor of Secondary Education (BSEd) major in Science",
          path: "/colleges/csu-main/ced/undergrad",
        },
        {
          id: 5,
          name: "Bachelor of Secondary Education (BSEd) major in Social Studies",
          path: "/colleges/csu-main/ced/undergrad",
        },
        {
          id: 6,
          name: "Bachelor of Technology and Livelihood Education (BTLEd)",
          path: "/colleges/csu-main/ced/undergrad",
        },
        {
          id: 7,
          name: "Bachelor of Physical Education (BPE)",
          path: "/colleges/csu-main/ced/undergrad",
        },
        {
          id: 8,
          name: "Bachelor of Early Childhood Education (BECE)",
          path: "/colleges/csu-main/ced/undergrad",
        },
        {
          id: 9,
          name: "Bachelor of Special Needs Education (BSNEd)",
          path: "/colleges/csu-main/ced/undergrad",
        },
        {
          id: 10,
          name: "Bachelor of Culture and Arts Education (BCAE)",
          path: "/colleges/csu-main/ced/undergrad",
        },
      ],
      graduate: [
        {
          id: 1,
          name: "Master of Arts in Education (MAEd)",
          path: "/colleges/csu-main/ced/graduate",
        },
        {
          id: 2,
          name: "Master of Arts in Teaching (MAT)",
          path: "/colleges/csu-main/ced/graduate",
        },
        {
          id: 3,
          name: "Master of Education (MEd)",
          path: "/colleges/csu-main/ced/graduate",
        },
        {
          id: 4,
          name: "Doctor of Philosophy in Education (PhD Ed)",
          path: "/colleges/csu-main/ced/graduate",
        },
      ],
    },
    CEGS: {
      undergraduate: [
        {
          id: 1,
          name: "Bachelor of Science in Civil Engineering (BSCE)",
          path: "/colleges/csu-main/cegs/undergrad",
        },
        {
          id: 2,
          name: "Bachelor of Science in Computer Engineering (BSCpE)",
          path: "/colleges/csu-main/cegs/undergrad",
        },
        {
          id: 3,
          name: "Bachelor of Science in Electrical Engineering (BSEE)",
          path: "/colleges/csu-main/cegs/undergrad",
        },
        {
          id: 4,
          name: "Bachelor of Science in Electronics Engineering (BSECE)",
          path: "/colleges/csu-main/cegs/undergrad",
        },
        {
          id: 5,
          name: "Bachelor of Science in Mechanical Engineering (BSME)",
          path: "/colleges/csu-main/cegs/undergrad",
        },
        {
          id: 6,
          name: "Bachelor of Science in Mining Engineering (BSMINE)",
          path: "/colleges/csu-main/cegs/undergrad",
        },
        {
          id: 7,
          name: "Bachelor of Science in Geodetic Engineering (BSGE)",
          path: "/colleges/csu-main/cegs/undergrad",
        },
      ],
      graduate: [],
    },
    CMNS: {
      undergraduate: [
        {
          id: 1,
          name: "Bachelor of Science in Applied Mathematics (BSAM)",
          path: "/colleges/csu-main/cmns/undergrad",
        },
        {
          id: 2,
          name: "Bachelor of Science in Chemistry (BSChem)",
          path: "/colleges/csu-main/cmns/undergrad",
        },
        {
          id: 3,
          name: "Bachelor of Science in Physics (BSPhysics)",
          path: "/colleges/csu-main/cmns/undergrad",
        },
        {
          id: 4,
          name: "Bachelor of Science in Biology (BSBio)",
          path: "/colleges/csu-main/cmns/undergrad",
        },
        {
          id: 5,
          name: "Bachelor of Science in Environmental Science (BSES)",
          path: "/colleges/csu-main/cmns/undergrad",
        },
        {
          id: 6,
          name: "Bachelor of Science in Nutrition and Dietetics (BSND)",
          path: "/colleges/csu-main/cmns/undergrad",
        },
        {
          id: 7,
          name: "Bachelor of Science in Food Technology (BSFT)",
          path: "/colleges/csu-main/cmns/undergrad",
        },
        {
          id: 8,
          name: "Bachelor of Science in Statistics (BSStat)",
          path: "/colleges/csu-main/cmns/undergrad",
        },
        {
          id: 9,
          name: "Bachelor of Science in Biology major in Plant Biology (BSBio-Plant)",
          path: "/colleges/csu-main/cmns/undergrad",
        },
      ],
      graduate: [
        {
          id: 1,
          name: "Master of Science in Mathematics",
          path: "/colleges/csu-main/cmns/graduate",
        },
        {
          id: 2,
          name: "Doctor of Philosophy in Mathematics",
          path: "/colleges/csu-main/cmns/graduate",
        },
      ],
    },
    CHASS: {
      undergraduate: [
        {
          id: 1,
          name: "Bachelor of Science in Psychology (BS Psychology)",
          path: "/colleges/csu-main/chass/undergrad",
        },
        {
          id: 2,
          name: "Bachelor of Science in Social Work (BSSW)",
          path: "/colleges/csu-main/chass/undergrad",
        },
      ],
      graduate: [
        {
          id: 1,
          name: "Master of Arts in Guidance and Counseling (MA-GC)",
          path: "/colleges/csu-main/chass/graduate",
        },
      ],
    },
    CoFES: {
      undergraduate: [
        {
          id: 1,
          name: "Bachelor of Science in Forestry (BSF)",
          path: "/colleges/csu-main/cofes/undergrad",
        },
        {
          id: 2,
          name: "Bachelor of Science in Environmental Science (BSES)",
          path: "/colleges/csu-main/cofes/undergrad",
        },
      ],
      graduate: [
        {
          id: 1,
          name: "Master of Science in Forestry (MSF)",
          path: "/colleges/csu-main/cofes/graduate",
        },
        {
          id: 2,
          name: "Doctor of Philosophy in Forestry (PhD Forestry)",
          path: "/colleges/csu-main/cofes/graduate",
        },
      ],
    },

    // CSU-CC Programs
    CBA: {
      undergraduate: [
        {
          id: 1,
          name: "Bachelor of Science in Business Administration (BSBA) major in Financial Management",
          path: "/colleges/csu-cc/cba/undergrad",
        },
        {
          id: 2,
          name: "Bachelor of Science in Business Administration (BSBA) major in Marketing Management",
          path: "/colleges/csu-cc/cba/undergrad",
        },
        {
          id: 3,
          name: "Bachelor of Science in Business Administration (BSBA) major in Human Resource Development Management",
          path: "/colleges/csu-cc/cba/undergrad",
        },
        {
          id: 4,
          name: "Bachelor of Science in Accountancy (BSA)",
          path: "/colleges/csu-cc/cba/undergrad",
        },
        {
          id: 5,
          name: "Bachelor of Science in Management Accounting (BSMA)",
          path: "/colleges/csu-cc/cba/undergrad",
        },
        {
          id: 6,
          name: "Bachelor of Science in Office Administration (BSOA)",
          path: "/colleges/csu-cc/cba/undergrad",
        },
      ],
      graduate: [],
    },
    CEIT: {
      undergraduate: [
        {
          id: 1,
          name: "Bachelor of Science in Computer Engineering (BSCpE)",
          path: "/colleges/csu-cc/ceit/undergrad",
        },
        {
          id: 2,
          name: "Bachelor of Science in Electrical Engineering (BSEE)",
          path: "/colleges/csu-cc/ceit/undergrad",
        },
        {
          id: 3,
          name: "Bachelor of Science in Electronics Engineering (BSECE)",
          path: "/colleges/csu-cc/ceit/undergrad",
        },
        {
          id: 4,
          name: "Bachelor of Science in Information Technology (BSIT)",
          path: "/colleges/csu-cc/ceit/undergrad",
        },
        {
          id: 5,
          name: "Bachelor of Science in Computer Science (BSCS)",
          path: "/colleges/csu-cc/ceit/undergrad",
        },
        {
          id: 6,
          name: "Bachelor of Science in Civil Engineering (BSCE)",
          path: "/colleges/csu-cc/ceit/undergrad",
        },
        {
          id: 7,
          name: "Bachelor of Science in Mechanical Engineering (BSME)",
          path: "/colleges/csu-cc/ceit/undergrad",
        },
        {
          id: 8,
          name: "Bachelor of Science in Industrial Engineering (BSIE)",
          path: "/colleges/csu-cc/ceit/undergrad",
        },
      ],
      graduate: [],
    },
    CITTE: {
      undergraduate: [
        {
          id: 1,
          name: "Bachelor of Technical Teacher Education (BTTEd) major in Automotive Technology",
          path: "/colleges/csu-cc/citte/undergrad",
        },
        {
          id: 2,
          name: "Bachelor of Technical Teacher Education (BTTEd) major in Computer Technology",
          path: "/colleges/csu-cc/citte/undergrad",
        },
        {
          id: 3,
          name: "Bachelor of Technical Teacher Education (BTTEd) major in Electrical Technology",
          path: "/colleges/csu-cc/citte/undergrad",
        },
        {
          id: 4,
          name: "Bachelor of Technical Teacher Education (BTTEd) major in Electronics Technology",
          path: "/colleges/csu-cc/citte/undergrad",
        },
        {
          id: 5,
          name: "Bachelor of Technical Teacher Education (BTTEd) major in Garments Technology",
          path: "/colleges/csu-cc/citte/undergrad",
        },
        {
          id: 6,
          name: "Bachelor of Technical Teacher Education (BTTEd) major in Food Service Management",
          path: "/colleges/csu-cc/citte/undergrad",
        },
        {
          id: 7,
          name: "Bachelor of Technical Teacher Education (BTTEd) major in Architectural Drafting Technology",
          path: "/colleges/csu-cc/citte/undergrad",
        },
      ],
      graduate: [
        {
          id: 1,
          name: "Master of Arts in Education Major in Educational Management (MAEd-EM)",
          path: "/colleges/csu-cc/citte/graduate",
        },
      ],
    },
    CTHM: {
      undergraduate: [
        {
          id: 1,
          name: "Bachelor of Science in Food and Beverage Service Management (BSFBSM)",
          path: "/colleges/csu-cc/cthm/undergrad",
        },
        {
          id: 2,
          name: "Bachelor of Science in Hotel and Restaurant Management (BSHRM)",
          path: "/colleges/csu-cc/cthm/undergrad",
        },
        {
          id: 3,
          name: "Bachelor of Science in Tourism Management (BSTM)",
          path: "/colleges/csu-cc/cthm/undergrad",
        },
      ],
      graduate: [],
    },
  };

  useEffect(() => {
    if (college && programsData[college.shortName]) {
      setPrograms(programsData[college.shortName]);
    }
  }, [college]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleViewDetails = (program) => {
    setSelectedProgram(program);
    setShowCurriculumModal(true);
  };

  const handleCurriculumModalClose = () => {
    setShowCurriculumModal(false);
    setSelectedProgram(null);
  };

  // Curriculum and Syllabus handlers
  const handleViewCurriculum = (year) => {
    console.log("Viewing curriculum for year:", year);
    // Implement view curriculum logic - open PDF viewer or download
  };

  const handleViewSyllabus = (syllabus) => {
    console.log("Viewing syllabus:", syllabus);
    // Implement view syllabus logic - open PDF viewer or download
  };

  const handleUploadCurriculum = () => {
    console.log("Upload curriculum");
    // Implement upload curriculum logic - open file picker
  };

  const handleUploadSyllabus = () => {
    console.log("Upload syllabus");
    // Implement upload syllabus logic - open file picker
  };

  const handleUpdateCurriculum = (year) => {
    console.log("Update curriculum for year:", year);
    // Implement update curriculum logic - open file picker for replacement
  };

  const handleUpdateSyllabus = (syllabus) => {
    console.log("Update syllabus:", syllabus);
    // Implement update syllabus logic - open file picker for replacement
  };

  const handleDeleteCurriculum = (year) => {
    if (confirm(`Are you sure you want to delete the ${year} curriculum?`)) {
      console.log("Delete curriculum for year:", year);
      // Implement delete curriculum logic
    }
  };

  const handleDeleteSyllabus = (syllabus) => {
    if (
      confirm(
        `Are you sure you want to delete the syllabus for ${syllabus.courseName}?`
      )
    ) {
      console.log("Delete syllabus:", syllabus);
      // Implement delete syllabus logic
    }
  };

  if (!isOpen || !college) return null;

  const currentPrograms = programs[activeTab] || [];

  // If curriculum modal is open, show it instead
  if (showCurriculumModal) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
        <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white p-6 relative">
            <button
              onClick={handleCurriculumModalClose}
              className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors duration-200"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{selectedProgram?.name}</h2>
                <p className="text-green-100">
                  {college.shortName} - {campus} Campus
                </p>
              </div>
            </div>
          </div>

          {/* Curriculum Modal Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
            <CurriculumSyllabusProgramModal
              curriculumFiles={sampleCurriculumFiles}
              syllabusFiles={sampleSyllabusFiles}
              onViewCurriculum={handleViewCurriculum}
              onViewSyllabus={handleViewSyllabus}
              onUploadCurriculum={handleUploadCurriculum}
              onUploadSyllabus={handleUploadSyllabus}
              onUpdateCurriculum={handleUpdateCurriculum}
              onUpdateSyllabus={handleUpdateSyllabus}
              onDeleteCurriculum={handleDeleteCurriculum}
              onDeleteSyllabus={handleDeleteSyllabus}
              themeColor="green"
            />
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <button
                onClick={handleCurriculumModalClose}
                className="text-gray-600 hover:text-gray-800 text-sm font-medium"
              >
                ← Back to Programs
              </button>
              <div className="text-sm text-gray-600">
                <span className="font-medium">{selectedProgram?.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors duration-200"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
              <GraduationCap className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{college.shortName}</h2>
              <p className="text-green-100">{college.name}</p>
            </div>
          </div>

          <div className="flex items-center text-green-100">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{campus} Campus</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 px-6">
          <div className="flex space-x-1">
            <button
              onClick={() => handleTabChange("undergraduate")}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${
                activeTab === "undergraduate"
                  ? "border-green-600 text-green-600 bg-green-50"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <BookOpen className="h-4 w-4 inline mr-2" />
              Undergraduate Programs
              {programs.undergraduate && (
                <span className="ml-2 px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
                  {programs.undergraduate.length}
                </span>
              )}
            </button>

            <button
              onClick={() => handleTabChange("graduate")}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${
                activeTab === "graduate"
                  ? "border-green-600 text-green-600 bg-green-50"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <GraduationCap className="h-4 w-4 inline mr-2" />
              Graduate Programs
              <span className="ml-2 px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
                {programs.graduate?.length || 0}
              </span>
            </button>
          </div>
        </div>

        {/* Programs Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {currentPrograms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentPrograms.map((program) => (
                <div
                  key={program.id}
                  className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-green-300 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-2 line-clamp-2">
                        {program.name}
                      </h4>
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Users className="h-4 w-4 mr-1" />
                        <span>
                          {activeTab === "undergraduate"
                            ? "Undergraduate"
                            : "Graduate"}{" "}
                          Program
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleViewDetails(program)}
                    className="inline-flex items-center px-3 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition-colors duration-200"
                  >
                    View Details
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No {activeTab} programs available
              </h3>
              <p className="text-gray-500">
                This college doesn't offer {activeTab} programs at the moment.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center">
              <span className="font-medium">{college.shortName}</span>
              <span className="mx-2">•</span>
              <span>{campus} Campus</span>
            </div>
            <div className="flex items-center space-x-4">
              <span>{programs.undergraduate?.length || 0} Undergraduate</span>
              <span>{programs.graduate?.length || 0} Graduate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProgramModal;
