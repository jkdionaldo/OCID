"use client";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import {
  ChevronDown,
  X,
  Upload,
  FileText,
  HeartHandshake,
  ArrowLeft,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import { getViewUrl } from "../../../utils/googleDriveUtils";

const CHASSGraduate = () => {
  // Graduate programs for CHASS with updated icons
  const programs = [
    {
      id: 1,
      name: "Master of Arts in Guidance and Counseling (MA-GC)",
      icon: HeartHandshake,
      color: "from-purple-600 to-purple-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2022: "https://drive.google.com/file/d/1KvvNyQ4H3B0nEohCLQD_XenpoCYm4xXS/view?usp=sharing",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/1Y9Ad3bUdx0JG5cyIPbSJg4-F9h-wPAdJ",
      },
      description:
        "The MASTER OF ARTS IN GUIDANCE AND COUNSELING (MA-GC) program prepares students to become professional counselors in various settings. The program emphasizes the development of counseling skills, theoretical knowledge, and ethical practice. Graduates are equipped to work in schools, community agencies, and private practice, helping individuals navigate life challenges and achieve personal growth.",
      programOutcomes: [
        {
          id: "GC01",
          text: "Apply advanced knowledge of counseling theories and techniques to address diverse client needs and challenges.",
        },
        {
          id: "GC02",
          text: "Design and implement appropriate counseling interventions based on assessment data and client characteristics.",
        },
        {
          id: "GC03",
          text: "Communicate effectively with clients, families, and other professionals through clear writing, presentations, and interpersonal skills.",
        },
        {
          id: "GC04",
          text: "Function effectively as a member of interdisciplinary teams to achieve common goals in client care and support.",
        },
        {
          id: "GC05",
          text: "Recognize professional responsibilities and make informed judgments in counseling practice based on legal, ethical, and cultural considerations.",
        },
        {
          id: "GC06",
          text: "Engage in continuous professional development and self-reflection to enhance counseling effectiveness and personal growth.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 2 years (4 semesters)",
        "Total Units: 36 units",
        "Practicum: Required",
        "Comprehensive Exam: Required",
        "Mode of Delivery: Face-to-face with online components",
      ],
    },
  ];

  const [programsState, setProgramsState] = useState(programs);
  const [showCurriculumUpload, setShowCurriculumUpload] = useState(false);
  const [showSyllabusUpload, setShowSyllabusUpload] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedYear, setSelectedYear] = useState("2023");
  const [showCurriculumViewer, setShowCurriculumViewer] = useState(false);
  const [showSyllabusViewer, setShowSyllabusViewer] = useState(false);
  const [fileToUpload, setFileToUpload] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [folderStatus, setFolderStatus] = useState("");
  const [showProgramDetails, setShowProgramDetails] = useState(false);
  const [uploadType, setUploadType] = useState("curriculum"); // "curriculum" or "syllabus"

  // Modify the login hook to simplify the upload process and redirect to the folder after upload
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      if (fileToUpload && selectedProgram !== null) {
        try {
          setIsUploading(true);
          setFolderStatus("Uploading file...");

          // Hardcoded folder ID for CHASS Graduate
          const targetFolderId = "1ptFtrsGxGpinVqV9IBBHSGsUxCp6tLK8";

          // Simple direct upload to the folder
          const metadata = {
            name: fileToUpload.name,
            mimeType: fileToUpload.type,
            parents: [targetFolderId],
          };

          // Create file with metadata
          const metadataResponse = await fetch(
            "https://www.googleapis.com/drive/v3/files",
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${tokenResponse.access_token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify(metadata),
            }
          );

          if (!metadataResponse.ok) {
            throw new Error(`Upload failed: ${metadataResponse.status}`);
          }

          const fileData = await metadataResponse.json();
          const fileId = fileData.id;

          // Upload file content
          const contentResponse = await fetch(
            `https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=media`,
            {
              method: "PATCH",
              headers: {
                Authorization: `Bearer ${tokenResponse.access_token}`,
                "Content-Type": fileToUpload.type,
              },
              body: fileToUpload,
            }
          );

          if (!contentResponse.ok) {
            throw new Error(`Failed to upload file content`);
          }

          // Set permissions
          await fetch(
            `https://www.googleapis.com/drive/v3/files/${fileId}/permissions`,
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${tokenResponse.access_token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                role: "reader",
                type: "anyone",
                allowFileDiscovery: false,
              }),
            }
          );

          // Reset UI state
          setFileToUpload(null);
          setShowCurriculumUpload(false);
          setShowSyllabusUpload(false);
          setFolderStatus("");

          // Show success message
          alert("File uploaded successfully!");
        } catch (error) {
          console.error("Upload error:", error);
          alert(`Error uploading file: ${error.message}`);
        } finally {
          setIsUploading(false);
          setFolderStatus("");
        }
      }
    },
    onError: (error) => {
      console.log("Google Login Failed:", error);
      alert("Google login failed. Please try again.");
      setIsUploading(false);
      setFolderStatus("");
    },
    scope: "https://www.googleapis.com/auth/drive.file",
  });

  // Handle file selection
  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileToUpload(e.target.files[0]);
    }
  };

  // Handle file upload
  const handleFileUpload = () => {
    if (!fileToUpload) {
      alert("Please select a file first");
      return;
    }

    // Trigger Google login which will then upload the file
    login();
  };

  // Handle program click to show details
  const handleProgramClick = (programIndex) => {
    setSelectedProgram(programIndex);
    setShowProgramDetails(true);
  };

  // Toggle dropdown visibility
  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const [activeDropdown, setActiveDropdown] = useState(null);

  // Updated handleCurriculumYearSelect function to handle all years consistently
  const handleCurriculumYearSelect = (year) => {
    const curriculumFile = programsState[selectedProgram].curriculumFiles[year];

    // Check if the curriculum file is a Google Drive link
    if (curriculumFile && curriculumFile.includes("drive.google.com")) {
      try {
        // Get the file ID from the Google Drive URL
        const fileId = curriculumFile.match(/[-\w]{25,}/)?.[0];

        if (!fileId) {
          throw new Error("Could not extract file ID from URL");
        }

        // Use the format that requires authentication
        const authRequiredUrl = `https://drive.google.com/file/d/${fileId}/view?usp=drivesdk`;

        // Open the link directly in a new tab
        window.open(authRequiredUrl, "_blank");
      } catch (error) {
        // If there's an error (like invalid URL format), show the curriculum viewer instead
        console.error("Error opening Google Drive link:", error);
        setSelectedYear(year);
        setShowCurriculumViewer(true);
      }
    } else {
      // For files that are not Google Drive links, show the curriculum viewer
      setSelectedYear(year);
      setShowCurriculumViewer(true);
    }

    setActiveDropdown(null);
  };

  // Function to extract folder ID from Google Drive URL
  const getFolderIdFromUrl = (url) => {
    const match = url.match(/[-\w]{25,}/);
    return match ? match[0] : null;
  };

  // Handle syllabus year selection
  const handleSyllabusYearSelect = (year) => {
    const syllabusFile = programsState[selectedProgram].syllabusFiles[year];

    // Check if the syllabus file is a Google Drive link
    if (syllabusFile && syllabusFile.includes("drive.google.com")) {
      try {
        // For folder links, open directly in a new tab
        if (syllabusFile.includes("folders")) {
          window.open(syllabusFile, "_blank");
        } else {
          // For file links, extract ID and open
          const fileId = syllabusFile.match(/[-\w]{25,}/)?.[0];

          if (!fileId) {
            throw new Error("Could not extract file ID from URL");
          }

          // Use the format that requires authentication
          const authRequiredUrl = `https://drive.google.com/file/d/${fileId}/view?usp=drivesdk`;

          // Open the link directly in a new tab
          window.open(authRequiredUrl, "_blank");
        }
      } catch (error) {
        // If there's an error (like invalid URL format), show the syllabus viewer instead
        console.error("Error opening Google Drive link:", error);
        setSelectedYear(year);
        setShowSyllabusViewer(true);
      }
    } else {
      // For files that are not Google Drive links, show the syllabus viewer
      setSelectedYear(year);
      setShowSyllabusViewer(true);
    }

    setActiveDropdown(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section with Back Button */}
      <div className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-8 md:py-12 relative">
        {/* Back Button - Aligned with the navbar logo */}
        <div className="container mx-auto px-4 md:px-6 relative">
          <Link
            to="/colleges"
            className="absolute left-0 -top-6 inline-flex items-center text-purple-800 hover:text-purple-900 bg-white hover:bg-white/90 px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition-all duration-200 shadow-md z-10 text-sm md:text-base"
          >
            <ArrowLeft className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
            <span className="font-medium">Back to Colleges</span>
          </Link>
        </div>

        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="flex flex-col items-center text-center relative">
            {/* CHASS Logo */}
            <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full p-1 flex-shrink-0 mb-4 md:mb-6 shadow-lg">
              <img
                src="/images/chass-logo.png"
                alt="CHASS Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              College of Humanities, Arts and Social Sciences
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
              Explore our graduate programs designed to advance your career in
              the fields of humanities, arts, and social sciences, with
              specialized training in guidance and counseling to help
              individuals navigate life challenges.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 md:mb-8">
          Graduate Programs
        </h2>

        {/* Programs List */}
        <div className="space-y-4 md:space-y-8">
          {programsState.map((program, programIndex) => (
            <div
              key={program.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-visible border border-gray-100 cursor-pointer transform hover:-translate-y-1"
              onClick={() => handleProgramClick(programIndex)}
            >
              <div className="p-4 md:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 md:gap-6">
                  <div className="flex items-center">
                    <div
                      className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${program.color} flex items-center justify-center text-white shadow-md mr-3 md:mr-4`}
                    >
                      <program.icon className="h-6 w-6 md:h-7 md:w-7" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800">
                      {program.name}
                    </h3>
                  </div>
                  <div className="flex items-center mt-2 sm:mt-0">
                    <span className="text-xs md:text-sm text-gray-500 mr-1 md:mr-2">
                      View Details
                    </span>
                    <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-purple-600" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Program Details Modal - Single Tab Version */}
      {showProgramDetails && selectedProgram !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 md:p-4 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col my-2 md:my-0">
            <div className="p-4 md:p-6 border-b bg-gradient-to-r from-purple-50 to-white">
              <div className="flex justify-between items-center">
                <div className="w-8 hidden md:block">
                  {/* Empty div for spacing */}
                </div>
                <div className="text-center flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-purple-700 break-words">
                    {programsState[selectedProgram].name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600">
                    Program Details
                  </p>
                </div>
                <button
                  onClick={() => setShowProgramDetails(false)}
                  className="text-gray-400 hover:text-purple-700 transition-colors p-1 rounded-full hover:bg-gray-100 w-8 h-8 flex items-center justify-center"
                >
                  <X className="h-5 w-5 md:h-6 md:w-6" />
                </button>
              </div>
            </div>

            {/* Single Content Area - All information displayed at once */}
            <div className="flex-1 overflow-auto p-3 md:p-6 bg-gray-50">
              <div className="space-y-6 md:space-y-10">
                {/* Program Description */}
                <div className="prose max-w-none bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center">
                    <span className="w-2 h-6 md:h-8 bg-purple-600 rounded-full mr-2 md:mr-3 inline-block"></span>
                    {programsState[selectedProgram].name.toUpperCase()}
                  </h2>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 md:mb-6">
                    {programsState[selectedProgram].description}
                  </p>
                </div>

                {/* Program Specifications */}
                <div className="prose max-w-none bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4 flex items-center">
                    <span className="w-2 h-5 md:h-6 bg-purple-600 rounded-full mr-2 md:mr-3 inline-block"></span>
                    Program Specifications
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                    {programsState[selectedProgram].programSpecifications.map(
                      (spec, index) => (
                        <li
                          key={index}
                          className="flex items-start bg-gray-50 p-2 md:p-3 rounded-lg text-sm md:text-base"
                        >
                          <span className="inline-block w-2 h-2 rounded-full bg-purple-600 mt-1.5 mr-2 flex-shrink-0"></span>
                          <span className="text-gray-700">{spec}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Program Outcomes */}
                <div className="prose max-w-none bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
                  <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4 flex items-center">
                    <span className="w-2 h-5 md:h-6 bg-purple-600 rounded-full mr-2 md:mr-3 inline-block"></span>
                    PROGRAM GRADUATE OUTCOMES
                  </h2>
                  <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">
                    The students of the {programsState[selectedProgram].name}{" "}
                    program shall attain the following attributes and outcomes
                    upon graduation:
                  </p>
                  <div className="space-y-3 md:space-y-4">
                    {programsState[selectedProgram].programOutcomes.map(
                      (outcome, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 p-3 md:p-4 rounded-lg border-l-4 border-purple-500 text-sm md:text-base"
                        >
                          <p className="text-gray-700">
                            <span className="font-semibold text-purple-700">
                              {outcome.id}
                            </span>{" "}
                            - {outcome.text}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Accreditation */}
                <div className="prose max-w-none bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
                  <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4 flex items-center">
                    <span className="w-2 h-5 md:h-6 bg-purple-600 rounded-full mr-2 md:mr-3 inline-block"></span>
                    ACCREDITATION(S)
                  </h2>
                  <div className="bg-gray-50 p-3 md:p-4 rounded-lg inline-block">
                    <p className="text-gray-700 font-semibold text-sm md:text-base">
                      {programsState[selectedProgram].accreditation}
                    </p>
                  </div>
                </div>

                {/* Curriculum Section */}
                <div className="prose max-w-none bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 md:mb-6 flex items-center">
                    <span className="w-2 h-5 md:h-6 bg-purple-600 rounded-full mr-2 md:mr-3 inline-block"></span>
                    Program Documents
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {/* Curriculum Section */}
                    <div className="bg-gray-50 p-4 md:p-5 rounded-xl border border-gray-200">
                      <h5 className="text-base md:text-lg font-medium text-gray-800 mb-3 md:mb-4">
                        Curriculum
                      </h5>
                      <div className="flex flex-wrap gap-2 md:gap-3 mb-3 md:mb-4">
                        {/* Upload Curriculum Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedYear("2023"); // Default to current year
                            setUploadType("curriculum");
                            setShowCurriculumUpload(true);
                          }}
                          className="px-3 py-2 md:px-4 md:py-2.5 rounded-lg bg-white border border-purple-600 text-purple-600 hover:bg-purple-50 transition-all duration-300 flex items-center gap-1 text-xs md:text-sm shadow-sm hover:shadow-md"
                        >
                          <Upload className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                          Upload
                        </button>

                        {/* View Curriculum Dropdown */}
                        <div className="relative inline-block">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleDropdown("view-curriculum");
                            }}
                            className="px-3 py-2 md:px-4 md:py-2.5 rounded-lg bg-white border border-purple-600 text-purple-600 hover:bg-purple-50 transition-all duration-300 flex items-center gap-1 text-xs md:text-sm shadow-sm hover:shadow-md"
                          >
                            View Curriculum
                            <ChevronDown
                              className={`h-3 w-3 md:h-4 md:w-4 transition-transform ${
                                activeDropdown === "view-curriculum"
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </button>

                          {activeDropdown === "view-curriculum" && (
                            <div className="absolute left-0 mt-1 w-36 md:w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                              <ul className="py-1">
                                {["2020", "2022", "2023"].map((year) => (
                                  <li key={year}>
                                    <button
                                      className="block w-full text-left px-3 py-2 md:px-4 md:py-2.5 text-xs md:text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleCurriculumYearSelect(year);
                                      }}
                                    >
                                      {year}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Syllables Section */}
                    <div className="bg-gray-50 p-4 md:p-5 rounded-xl border border-gray-200">
                      <h5 className="text-base md:text-lg font-medium text-gray-800 mb-3 md:mb-4">
                        Syllables
                      </h5>
                      <div className="flex flex-wrap gap-2 md:gap-3 mb-3 md:mb-4">
                        {/* View Syllables Dropdown */}
                        <div className="relative inline-block">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleDropdown("view-syllabus");
                            }}
                            className="px-3 py-2 md:px-4 md:py-2.5 rounded-lg bg-white border border-purple-600 text-purple-600 hover:bg-purple-50 transition-all duration-300 flex items-center gap-1 text-xs md:text-sm shadow-sm hover:shadow-md"
                          >
                            View Syllables
                            <ChevronDown
                              className={`h-3 w-3 md:h-4 md:w-4 transition-transform ${
                                activeDropdown === "view-syllabus"
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </button>

                          {activeDropdown === "view-syllabus" && (
                            <div className="absolute left-0 mt-1 w-36 md:w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                              <ul className="py-1">
                                {["2023"].map((year) => (
                                  <li key={year}>
                                    <button
                                      className="block w-full text-left px-3 py-2 md:px-4 md:py-2.5 text-xs md:text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleSyllabusYearSelect(year);
                                      }}
                                    >
                                      {year}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-gray-600 italic mt-3 md:mt-4">
                    Select a year to view or upload curriculum and syllables
                    files.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-6 border-t bg-white flex justify-center">
              <button
                onClick={() => setShowProgramDetails(false)}
                className="px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-medium text-sm md:text-base"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Curriculum Upload Modal */}
      {showCurriculumUpload && selectedProgram !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-3 md:p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl w-full max-w-md shadow-2xl">
            <div className="p-4 md:p-6">
              <div className="flex justify-between items-center mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl font-bold text-purple-700">
                  Upload Curriculum File
                </h3>
                <button
                  onClick={() => setShowCurriculumUpload(false)}
                  className="text-gray-400 hover:text-purple-700 transition-colors p-1 rounded-full hover:bg-gray-100"
                >
                  <X className="h-5 w-5 md:h-6 md:w-6" />
                </button>
              </div>

              <div className="mb-4 md:mb-6 p-3 md:p-4 bg-purple-50 rounded-lg border border-purple-100">
                <p className="text-sm md:text-base text-gray-700">
                  Uploading curriculum for:{" "}
                  <span className="font-semibold">
                    {programsState[selectedProgram].name}
                  </span>
                </p>
                {folderStatus && (
                  <p className="text-xs md:text-sm text-gray-600 mt-2 italic">
                    Status: {folderStatus}
                  </p>
                )}
                <p className="text-xs text-gray-500 mt-2">
                  Files will be uploaded directly to the Google Drive folder.
                </p>
              </div>

              <div className="space-y-4 md:space-y-5">
                {/* Curriculum File Upload */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 md:p-8 text-center">
                  <div className="flex flex-col items-center">
                    <Upload className="h-10 w-10 md:h-12 md:w-12 text-gray-400 mb-2 md:mb-3" />
                    <p className="text-sm md:text-base text-gray-700 font-medium mb-2">
                      {fileToUpload
                        ? fileToUpload.name
                        : "Drag and drop your curriculum file here"}
                    </p>
                    <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4">
                      or
                    </p>
                    <label
                      htmlFor="curriculumFile"
                      className="px-3 py-1.5 md:px-4 md:py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors cursor-pointer flex items-center text-xs md:text-sm"
                    >
                      <FileText className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                      Browse Files
                    </label>
                    <input
                      type="file"
                      id="curriculumFile"
                      className="hidden"
                      accept="image/*,.pdf"
                      onChange={handleFileSelect}
                    />
                    <p className="mt-2 md:mt-3 text-xs text-gray-500">
                      Supported formats: JPG, PNG, PDF (max 10MB)
                    </p>
                  </div>
                </div>

                <div className="flex justify-end pt-3 md:pt-4">
                  <button
                    type="button"
                    onClick={() => setShowCurriculumUpload(false)}
                    className="px-3 py-1.5 md:px-4 md:py-2 border border-gray-300 rounded-lg text-gray-700 mr-2 md:mr-3 hover:bg-gray-50 transition-all text-xs md:text-sm"
                    disabled={isUploading}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleFileUpload}
                    className="px-3 py-1.5 md:px-4 md:py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center text-xs md:text-sm"
                    disabled={!fileToUpload || isUploading}
                  >
                    {isUploading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-3 w-3 md:h-4 md:w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Uploading...
                      </>
                    ) : (
                      <>
                        <Upload className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                        Upload to Google Drive
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Syllabus Upload Modal */}
      {showSyllabusUpload && selectedProgram !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-3 md:p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl w-full max-w-md shadow-2xl">
            <div className="p-4 md:p-6">
              <div className="flex justify-between items-center mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl font-bold text-purple-700">
                  Upload Syllables File
                </h3>
                <button
                  onClick={() => setShowSyllabusUpload(false)}
                  className="text-gray-400 hover:text-purple-700 transition-colors p-1 rounded-full hover:bg-gray-100"
                >
                  <X className="h-5 w-5 md:h-6 md:w-6" />
                </button>
              </div>

              <div className="mb-4 md:mb-6 p-3 md:p-4 bg-purple-50 rounded-lg border border-purple-100">
                <p className="text-sm md:text-base text-gray-700">
                  Uploading syllables for:{" "}
                  <span className="font-semibold">
                    {programsState[selectedProgram].name}
                  </span>
                </p>
                {folderStatus && (
                  <p className="text-xs md:text-sm text-gray-600 mt-2 italic">
                    Status: {folderStatus}
                  </p>
                )}
              </div>

              <div className="space-y-4 md:space-y-5">
                {/* Syllabus File Upload */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 md:p-8 text-center">
                  <div className="flex flex-col items-center">
                    <BookOpen className="h-10 w-10 md:h-12 md:w-12 text-gray-400 mb-2 md:mb-3" />
                    <p className="text-sm md:text-base text-gray-700 font-medium mb-2">
                      {fileToUpload
                        ? fileToUpload.name
                        : "Drag and drop your syllables file here"}
                    </p>
                    <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4">
                      or
                    </p>
                    <label
                      htmlFor="syllabusFile"
                      className="px-3 py-1.5 md:px-4 md:py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors cursor-pointer flex items-center text-xs md:text-sm"
                    >
                      <FileText className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                      Browse Files
                    </label>
                    <input
                      type="file"
                      id="syllabusFile"
                      className="hidden"
                      accept="image/*,.pdf"
                      onChange={handleFileSelect}
                    />
                    <p className="mt-2 md:mt-3 text-xs text-gray-500">
                      Supported formats: JPG, PNG, PDF (max 10MB)
                    </p>
                  </div>
                </div>

                <div className="flex justify-end pt-3 md:pt-4">
                  <button
                    type="button"
                    onClick={() => setShowSyllabusUpload(false)}
                    className="px-3 py-1.5 md:px-4 md:py-2 border border-gray-300 rounded-lg text-gray-700 mr-2 md:mr-3 hover:bg-gray-50 transition-all text-xs md:text-sm"
                    disabled={isUploading}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleFileUpload}
                    className="px-3 py-1.5 md:px-4 md:py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center text-xs md:text-sm"
                    disabled={!fileToUpload || isUploading}
                  >
                    {isUploading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-3 w-3 md:h-4 md:w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Uploading...
                      </>
                    ) : (
                      <>
                        <Upload className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                        Upload to Google Drive
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Curriculum Viewer Modal */}
      {showCurriculumViewer && selectedProgram !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 md:p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
            <div className="p-3 md:p-6 flex justify-between items-center border-b">
              <div>
                <h3 className="text-base md:text-xl font-bold text-purple-700">
                  Program Curriculum
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  {programsState[selectedProgram].name} - {selectedYear}
                </p>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <button
                  onClick={() => {
                    setShowCurriculumUpload(true);
                    setShowCurriculumViewer(false);
                  }}
                  className="text-blue-600 hover:text-blue-800 text-xs md:text-sm flex items-center"
                >
                  <Upload className="h-3 w-3 md:h-4 md:w-4 mr-0.5 md:mr-1" />
                  <span className="hidden sm:inline">Upload New</span>
                  <span className="sm:hidden">Upload</span>
                </button>
                <button
                  onClick={() => setShowCurriculumViewer(false)}
                  className="text-gray-400 hover:text-purple-700 transition-colors p-1 rounded-full hover:bg-gray-100"
                >
                  <X className="h-5 w-5 md:h-6 md:w-6" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-auto p-2 md:p-4 bg-gray-50">
              <div className="flex justify-center">
                {programsState[selectedProgram].curriculumFiles[
                  selectedYear
                ]?.includes("drive.google.com") ? (
                  // If it's a Google Drive file
                  <iframe
                    src={getViewUrl(
                      programsState[selectedProgram].curriculumFiles[
                        selectedYear
                      ]
                    )}
                    className="w-full h-[300px] sm:h-[400px] md:h-[600px] border-0 shadow-md rounded-md"
                    title={`${programsState[selectedProgram].name} Curriculum ${selectedYear}`}
                    allowFullScreen
                  />
                ) : (
                  // If it's a regular image or placeholder
                  <img
                    src={
                      programsState[selectedProgram].curriculumFiles[
                        selectedYear
                      ] || "/placeholder.svg"
                    }
                    alt={`${programsState[selectedProgram].name} Curriculum ${selectedYear}`}
                    className="max-w-full h-auto shadow-md rounded-md"
                  />
                )}
              </div>
            </div>

            <div className="p-3 md:p-4 border-t bg-white">
              <div className="flex justify-between items-center">
                <div className="text-xs md:text-sm text-gray-500 hidden sm:block">
                  Click the download button to save this curriculum file
                </div>
                <a
                  href={
                    programsState[selectedProgram].curriculumFiles[selectedYear]
                  }
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 md:px-4 md:py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center text-xs md:text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Syllabus Viewer Modal */}
      {showSyllabusViewer && selectedProgram !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 md:p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
            <div className="p-3 md:p-6 flex justify-between items-center border-b">
              <div>
                <h3 className="text-base md:text-xl font-bold text-purple-700">
                  Program Syllables
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  {programsState[selectedProgram].name} - {selectedYear}
                </p>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <button
                  onClick={() => {
                    setShowSyllabusUpload(true);
                    setShowSyllabusViewer(false);
                  }}
                  className="text-blue-600 hover:text-blue-800 text-xs md:text-sm flex items-center"
                >
                  <Upload className="h-3 w-3 md:h-4 md:w-4 mr-0.5 md:mr-1" />
                  <span className="hidden sm:inline">Upload New</span>
                  <span className="sm:hidden">Upload</span>
                </button>
                <button
                  onClick={() => setShowSyllabusViewer(false)}
                  className="text-gray-400 hover:text-purple-700 transition-colors p-1 rounded-full hover:bg-gray-100"
                >
                  <X className="h-5 w-5 md:h-6 md:w-6" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-auto p-2 md:p-4 bg-gray-50">
              <div className="flex justify-center">
                {programsState[selectedProgram].syllabusFiles[
                  selectedYear
                ]?.includes("drive.google.com") ? (
                  // If it's a Google Drive link
                  programsState[selectedProgram].syllabusFiles[
                    selectedYear
                  ].includes("folders") ? (
                    // For folder links
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <p className="text-center mb-4">
                        This is a folder link. Click the button below to open
                        the folder in Google Drive.
                      </p>
                      <div className="flex justify-center">
                        <a
                          href={
                            programsState[selectedProgram].syllabusFiles[
                              selectedYear
                            ]
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 010 2h6a1 1 0 100-2H7z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Open Folder in Google Drive
                        </a>
                      </div>
                    </div>
                  ) : (
                    // For file links
                    <iframe
                      src={getViewUrl(
                        programsState[selectedProgram].syllabusFiles[
                          selectedYear
                        ]
                      )}
                      className="w-full h-[300px] sm:h-[400px] md:h-[600px] border-0 shadow-md rounded-md"
                      title={`${programsState[selectedProgram].name} Syllables ${selectedYear}`}
                      allowFullScreen
                    />
                  )
                ) : (
                  // If it's a regular image or placeholder
                  <img
                    src={
                      programsState[selectedProgram].syllabusFiles[
                        selectedYear
                      ] || "/placeholder.svg"
                    }
                    alt={`${programsState[selectedProgram].name} Syllables ${selectedYear}`}
                    className="max-w-full h-auto shadow-md rounded-md"
                  />
                )}
              </div>
            </div>

            <div className="p-3 md:p-4 border-t bg-white">
              <div className="flex justify-between items-center">
                <div className="text-xs md:text-sm text-gray-500 hidden sm:block">
                  Click the download button to save this syllables file
                </div>
                <a
                  href={
                    programsState[selectedProgram].syllabusFiles[selectedYear]
                  }
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 md:px-4 md:py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center text-xs md:text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CHASSGraduate;
