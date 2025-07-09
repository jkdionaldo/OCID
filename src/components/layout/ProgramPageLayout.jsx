import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProgramCard from "@/components/programs-details/ProgramCard";
import ProgramDetailsHeader from "@/components/programs-details/ProgramDetailsHeader";
import ProgramOverview from "@/components/programs-details/ProgramOverview";
import ProgramSpecifications from "@/components/programs-details/ProgramSpecifications";
import ProgramOutcomes from "@/components/programs-details/ProgramOutcomes";
import CurriculumAndSyllabus from "@/components/programs-details/CurriculumAndSyllabus";
import FileUploadModal from "@/components/modals/FileUploadModal";
import FileViewerModal from "@/components/modals/FileViewerModal";
import { ArrowLeft } from "lucide-react";

const ProgramPageTemplate = ({
  title,
  description,
  programs,
  themeColor,
  isGraduate = false,
  bannerImage = "/images/campus.jpg",
  collegeName,
}) => {
  const navigate = useNavigate();
  const [programsState, setProgramsState] = useState(programs);
  const [showCurriculumUpload, setShowCurriculumUpload] = useState(false);
  const [showSyllabusUpload, setShowSyllabusUpload] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedYear, setSelectedYear] = useState("2023");
  const [showCurriculumViewer, setShowCurriculumViewer] = useState(false);
  const [showSyllabusViewer, setShowSyllabusViewer] = useState(false);
  const [fileToUpload, setFileToUpload] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [showProgramDetails, setShowProgramDetails] = useState(false);

  const handleProgramClick = (index) => {
    setSelectedProgram(index);
    setShowProgramDetails(true);
  };

  const handleFileSelect = (e) => {
    setFileToUpload(e.target.files[0]);
  };

  const handleCurriculumUpload = () => {
    // Implement file upload logic here
    setIsUploading(true);
    // Simulating upload
    setTimeout(() => {
      setIsUploading(false);
      setShowCurriculumUpload(false);
      // Update state with new file URL
      // This is where you'd normally update with the result of your upload
    }, 2000);
  };

  const handleSyllabusUpload = () => {
    // Similar to curriculum upload
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setShowSyllabusUpload(false);
    }, 2000);
  };

  const handleBackClick = () => {
    // Check if there's history to go back to
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      // Fallback to default routes
      navigate(isGraduate ? "/colleges" : "/undergrad");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div
        className={`relative bg-gradient-to-r from-${themeColor}-700 to-${themeColor}-900 min-h-[350px] md:min-h-[450px]`}
      >
        {/* Back Button */}
        <div className="absolute top-8 left-8 z-10">
          <div
            onClick={handleBackClick}
            className={`flex items-center gap-2 bg-white px-4 py-2 rounded-md shadow-md hover:bg-${themeColor}-50 transition-colors duration-200 cursor-pointer`}
          >
            <ArrowLeft className={`text-${themeColor}-700 w-5 h-5`} />
            <span className={`text-${themeColor}-700 font-medium`}>Back</span>
          </div>
        </div>

        {/* Banner Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        ></div>

        {/* Banner Content */}
        <div className="relative container mx-auto px-6 py-16 md:py-24 text-center text-white flex flex-col justify-center items-center min-h-[350px] md:min-h-[450px]">
          {/* Optional: Add college logo if available */}
          {bannerImage && bannerImage.includes("logo") && (
            <div className="mb-6">
              <img
                src={bannerImage}
                alt={`${collegeName} logo`}
                className="w-24 h-24 md:w-32 md:h-32 object-contain bg-white p-2 rounded-full"
              />
            </div>
          )}
          <h1 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
            {collegeName}
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto drop-shadow-md">
            {description}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          {isGraduate ? "Graduate Programs" : "Undergraduate Programs"}
        </h2>

        {/* Programs List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programsState.map((program, programIndex) => (
            <ProgramCard
              key={program.id}
              program={program}
              onClick={() => handleProgramClick(programIndex)}
              themeColor={themeColor}
            />
          ))}
        </div>
      </div>

      {/* Program Details Modal */}
      {showProgramDetails && selectedProgram !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col my-4">
            <ProgramDetailsHeader
              program={programsState[selectedProgram]}
              onClose={() => setShowProgramDetails(false)}
              themeColor={themeColor}
            />

            {/* Single Content Area - All information displayed at once */}
            <div className="flex-1 overflow-auto p-6 bg-gray-50">
              <div className="space-y-8">
                {/* Program Overview */}
                <ProgramOverview
                  program={{ ...programsState[selectedProgram], isGraduate }}
                  themeColor={themeColor}
                />

                {/* Program Specifications */}
                <ProgramSpecifications
                  specifications={
                    programsState[selectedProgram].programSpecifications
                  }
                  themeColor={themeColor}
                />

                {/* Program Educational Objectives */}
                {programsState[selectedProgram]
                  .programEducationalObjectives && (
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    {/* Extract this to another component if needed */}
                  </div>
                )}

                {/* Program Outcomes */}
                <ProgramOutcomes
                  outcomes={programsState[selectedProgram].programOutcomes}
                  programName={programsState[selectedProgram].name}
                  themeColor={themeColor}
                />

                {/* Curriculum Section */}
                <CurriculumAndSyllabus
                  curriculumFiles={
                    programsState[selectedProgram].curriculumFiles
                  }
                  syllabusFiles={programsState[selectedProgram].syllabusFiles}
                  onViewCurriculum={(year) => {
                    setSelectedYear(year);
                    setShowCurriculumViewer(true);
                  }}
                  onViewSyllabus={() => {
                    setShowSyllabusViewer(true);
                  }}
                  onUploadCurriculum={() => {
                    setSelectedYear("2023");
                    setShowCurriculumUpload(true);
                  }}
                  onUploadSyllabus={() => {
                    setShowSyllabusUpload(true);
                  }}
                  themeColor={themeColor}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* File Upload Modals */}
      <FileUploadModal
        isOpen={showCurriculumUpload}
        onClose={() => setShowCurriculumUpload(false)}
        onUpload={handleCurriculumUpload}
        isUploading={isUploading}
        fileType="Curriculum"
        programName={
          selectedProgram !== null ? programsState[selectedProgram].name : ""
        }
        year={selectedYear}
        themeColor={themeColor}
        onFileSelect={handleFileSelect}
      />

      <FileUploadModal
        isOpen={showSyllabusUpload}
        onClose={() => setShowSyllabusUpload(false)}
        onUpload={handleSyllabusUpload}
        isUploading={isUploading}
        fileType="Syllabus"
        programName={
          selectedProgram !== null ? programsState[selectedProgram].name : ""
        }
        themeColor={themeColor}
        onFileSelect={handleFileSelect}
      />

      {/* File Viewer Modals */}
      <FileViewerModal
        isOpen={showCurriculumViewer}
        onClose={() => setShowCurriculumViewer(false)}
        onUploadNew={() => {
          setShowCurriculumUpload(true);
          setShowCurriculumViewer(false);
        }}
        fileUrl={
          selectedProgram !== null
            ? programsState[selectedProgram].curriculumFiles[selectedYear]
            : ""
        }
        fileName={
          selectedProgram !== null
            ? `${programsState[selectedProgram].name}-Curriculum-${selectedYear}`
            : ""
        }
        fileType="Curriculum"
        programName={
          selectedProgram !== null ? programsState[selectedProgram].name : ""
        }
        year={selectedYear}
        themeColor={themeColor}
      />

      <FileViewerModal
        isOpen={showSyllabusViewer}
        onClose={() => setShowSyllabusViewer(false)}
        onUploadNew={() => {
          setShowSyllabusUpload(true);
          setShowSyllabusViewer(false);
        }}
        fileUrl={
          selectedProgram !== null &&
          programsState[selectedProgram].syllabusFiles
            ? programsState[selectedProgram].syllabusFiles[selectedYear]
            : ""
        }
        fileName={
          selectedProgram !== null
            ? `${programsState[selectedProgram].name}-Syllabus-${selectedYear}`
            : ""
        }
        fileType="Syllables"
        programName={
          selectedProgram !== null ? programsState[selectedProgram].name : ""
        }
        year={selectedYear}
        themeColor={themeColor}
      />
    </div>
  );
};

export default ProgramPageTemplate;
