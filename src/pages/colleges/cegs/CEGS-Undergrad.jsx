"use client";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import {
  X,
  Upload,
  FileText,
  Building,
  CircuitBoard,
  Mountain,
  Compass,
  Pickaxe,
  Tractor,
  ArrowLeft,
  ChevronRight,
  ExternalLink,
  Info,
  BookOpen,
  GraduationCap,
  ClipboardList,
  Briefcase,
} from "lucide-react";
import { getViewUrl } from "../../../utils/googleDriveUtils";

const CEGSUndergrad = () => {
  // Undergraduate programs for CEGS with updated icons
  const programs = [
    {
      id: 1,
      name: "Bachelor of Science in Civil Engineering (BSCE)",
      icon: Building,
      color: "from-orange-600 to-orange-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2022: "https://drive.google.com/file/d/1KvvNyQ4H3B0nEohCLQD_XenpoCYm4xXS/view?usp=sharing",
        2014: "/placeholder.svg?height=800&width=600",
      },
      description:
        "The Bachelor of Science in Civil Engineering program provides students with a strong foundation in structural engineering, transportation systems, water resources, and construction management. Students learn to design, build, and maintain infrastructure projects.",
      programSpecifications: [
        "Duration: 5 years (10 semesters)",
        "Total Units: 175 units",
        "Practicum: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with laboratory work",
      ],
      programEducationalObjectives: [
        "Produce graduates who can apply engineering principles to solve complex infrastructure problems",
        "Develop professionals who can lead engineering projects in both public and private sectors",
        "Prepare students for advanced studies and research in specialized areas of civil engineering",
        "Foster environmental stewardship and ethical practice in engineering",
      ],
      programOutcomes: [
        "Apply knowledge of mathematics, science, and engineering to solve civil engineering problems",
        "Design and conduct experiments, as well as analyze and interpret data related to civil engineering systems",
        "Design civil engineering systems, components, or processes to meet desired needs within realistic constraints",
        "Function effectively on multidisciplinary teams in civil engineering projects",
      ],
      careers: [
        "Structural Engineer",
        "Transportation Engineer",
        "Water Resources Engineer",
        "Construction Manager",
        "Geotechnical Engineer",
      ],
      syllabusFiles: {
        2023: "https://example.com/bsce-syllabus-2023", // Example URL
      },
    },
    {
      id: 2,
      name: "Bachelor of Science in Electrical Engineering (BSEE)",
      icon: CircuitBoard,
      color: "from-orange-500 to-orange-700",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      description:
        "The Bachelor of Science in Electrical Engineering program focuses on the study of electricity, electronics, and electromagnetism. Students learn to design and develop electrical systems, electronic devices, and power distribution networks.",
      programSpecifications: [
        "Duration: 5 years (10 semesters)",
        "Total Units: 172 units",
        "Practicum: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with laboratory work",
      ],
      programEducationalObjectives: [
        "Produce graduates who can design and implement electrical systems and components",
        "Develop professionals who can adapt to emerging technologies in the electrical engineering field",
        "Prepare students for advanced studies and research in specialized areas of electrical engineering",
        "Foster innovation and ethical practice in electrical engineering",
      ],
      programOutcomes: [
        "Apply knowledge of mathematics, science, and engineering to solve electrical engineering problems",
        "Design and conduct experiments, as well as analyze and interpret data related to electrical systems",
        "Design electrical systems, components, or processes to meet desired needs within realistic constraints",
        "Use modern engineering tools necessary for electrical engineering practice",
      ],
      careers: [
        "Electrical Design Engineer",
        "Power Systems Engineer",
        "Electronics Engineer",
        "Control Systems Engineer",
        "Telecommunications Engineer",
      ],
      syllabusFiles: {
        2023: "https://example.com/bsee-syllabus-2023", // Example URL
      },
    },
    {
      id: 3,
      name: "Bachelor of Science in Geology (BS GEOL)",
      icon: Mountain,
      color: "from-orange-400 to-orange-600",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      description:
        "The Bachelor of Science in Geology program provides students with a comprehensive understanding of Earth's physical structure and substance, its history, and the processes that act upon it. Students learn about rocks, minerals, fossils, and the forces that shape the Earth.",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 150 units",
        "Field Work: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with field work",
      ],
      programEducationalObjectives: [
        "Produce graduates who can apply geological principles to understand Earth processes",
        "Develop professionals who can assess geological resources and hazards",
        "Prepare students for advanced studies and research in specialized areas of geology",
        "Foster environmental stewardship and ethical practice in geological investigations",
      ],
      programOutcomes: [
        "Apply knowledge of geology to identify and classify rocks, minerals, and fossils",
        "Interpret geological maps and cross-sections to understand subsurface conditions",
        "Conduct field investigations to collect geological data",
        "Analyze geological data to reconstruct Earth history and processes",
      ],
      careers: [
        "Geologist",
        "Environmental Geologist",
        "Mining Geologist",
        "Petroleum Geologist",
        "Hydrogeologist",
      ],
      syllabusFiles: {
        2023: "https://example.com/bsgeol-syllabus-2023", // Example URL
      },
    },
    {
      id: 4,
      name: "Bachelor of Science in Geodetic Engineering (BSGE)",
      icon: Compass,
      color: "from-orange-500 to-orange-700",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      description:
        "The Bachelor of Science in Geodetic Engineering program focuses on the measurement and representation of the Earth's surface. Students learn about surveying, mapping, remote sensing, and geographic information systems.",
      programSpecifications: [
        "Duration: 5 years (10 semesters)",
        "Total Units: 170 units",
        "Field Work: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with field work",
      ],
      programEducationalObjectives: [
        "Produce graduates who can apply geodetic principles to measure and map the Earth's surface",
        "Develop professionals who can utilize modern geospatial technologies",
        "Prepare students for advanced studies and research in specialized areas of geodetic engineering",
        "Foster precision and ethical practice in geodetic measurements",
      ],
      programOutcomes: [
        "Apply knowledge of mathematics, science, and engineering to solve geodetic problems",
        "Conduct land surveys using appropriate equipment and techniques",
        "Process and analyze geospatial data using modern software tools",
        "Create accurate maps and geospatial databases for various applications",
      ],
      careers: [
        "Geodetic Engineer",
        "Land Surveyor",
        "GIS Specialist",
        "Remote Sensing Analyst",
        "Cartographer",
      ],
      syllabusFiles: {
        2023: "https://example.com/bsge-syllabus-2023", // Example URL
      },
    },
    {
      id: 5,
      name: "Bachelor of Science in Mining Engineering (BSME)",
      icon: Pickaxe,
      color: "from-orange-600 to-orange-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      description:
        "The Bachelor of Science in Mining Engineering program focuses on the extraction of minerals from the Earth. Students learn about mine design, mineral processing, rock mechanics, and sustainable mining practices.",
      programSpecifications: [
        "Duration: 5 years (10 semesters)",
        "Total Units: 175 units",
        "Field Work: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with field work",
      ],
      programEducationalObjectives: [
        "Produce graduates who can design and manage mining operations",
        "Develop professionals who can implement safe and sustainable mining practices",
        "Prepare students for advanced studies and research in specialized areas of mining engineering",
        "Foster environmental stewardship and ethical practice in mineral extraction",
      ],
      programOutcomes: [
        "Apply knowledge of mathematics, science, and engineering to solve mining engineering problems",
        "Design mine layouts and extraction sequences for optimal resource recovery",
        "Evaluate mineral processing methods for different ore types",
        "Implement safety measures and environmental protection in mining operations",
      ],
      careers: [
        "Mining Engineer",
        "Mine Planning Engineer",
        "Mineral Processing Engineer",
        "Mine Safety Officer",
        "Environmental Compliance Officer",
      ],
      syllabusFiles: {
        2023: "https://example.com/bsme-syllabus-2023", // Example URL
      },
    },
    {
      id: 6,
      name: "Bachelor of Science in Agricultural And Biosystems Engineering (BSABE)",
      icon: Tractor,
      color: "from-orange-600 to-orange-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      description:
        "The Bachelor of Science in Agricultural and Biosystems Engineering program integrates engineering principles with biological sciences to design systems for agricultural production and processing. Students learn about irrigation systems, farm machinery, post-harvest processing, and sustainable agricultural practices.",
      programSpecifications: [
        "Duration: 5 years (10 semesters)",
        "Total Units: 173 units",
        "Field Work: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with laboratory work",
      ],
      programEducationalObjectives: [
        "Produce graduates who can design and implement agricultural and biosystems engineering solutions",
        "Develop professionals who can enhance agricultural productivity through engineering innovations",
        "Prepare students for advanced studies and research in specialized areas of agricultural engineering",
        "Foster sustainable practices and ethical considerations in agricultural systems",
      ],
      programOutcomes: [
        "Apply knowledge of mathematics, science, and engineering to solve agricultural engineering problems",
        "Design agricultural machinery and processing equipment for improved efficiency",
        "Develop irrigation and drainage systems for optimal water management",
        "Implement post-harvest technologies to reduce losses and maintain product quality",
      ],
      careers: [
        "Agricultural Engineer",
        "Biosystems Engineer",
        "Farm Equipment Designer",
        "Irrigation Engineer",
        "Food Processing Engineer",
      ],
      syllabusFiles: {
        2023: "https://example.com/bsabe-syllabus-2023", // Example URL
      },
    },
  ];

  const [programsState, setProgramsState] = useState(programs);
  const [showCurriculumUpload, setShowCurriculumUpload] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedYear, setSelectedYear] = useState("2023");
  const [showCurriculumViewer, setShowCurriculumViewer] = useState(false);
  const [fileToUpload, setFileToUpload] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [folderStatus, setFolderStatus] = useState("");
  const [showSyllabusUpload, setShowSyllabusUpload] = useState(false);
  const [syllabusFileToUpload, setSyllabusFileToUpload] = useState(null);
  const [isSyllabusUploading, setIsSyllabusUploading] = useState(false);
  const [syllabusStatus, setSyllabusStatus] = useState("");
  const [showProgramDetails, setShowProgramDetails] = useState(false);

  // Google login hook for file upload
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      // Handle curriculum file upload
      if (fileToUpload && selectedProgram !== null && !showSyllabusUpload) {
        try {
          setIsUploading(true);
          setFolderStatus("Starting upload process...");

          // Hardcoded folder ID for CEGS Undergrad
          // This is the folder ID where all files will be uploaded directly
          const targetFolderId = "1tzrnWvcbgszczI7EvEuCquHWhsLjoVdL"; // Default folder ID

          // First verify we can access the folder
          try {
            setFolderStatus("Verifying folder access...");
            const folderCheckResponse = await fetch(
              `https://www.googleapis.com/drive/v3/files/${targetFolderId}?fields=id,name,mimeType`,
              {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${tokenResponse.access_token}`,
                },
              }
            );

            if (!folderCheckResponse.ok) {
              throw new Error(
                `Cannot access target folder: ${folderCheckResponse.status} ${folderCheckResponse.statusText}`
              );
            }

            const folderData = await folderCheckResponse.json();
            setFolderStatus(`Uploading to folder: ${folderData.name}`);
          } catch (folderError) {
            console.error("Folder access error:", folderError);
            setFolderStatus(
              "Cannot access target folder. Uploading to root instead."
            );
            // Continue with upload to root if folder is inaccessible
          }

          // Simple direct upload approach
          setFolderStatus("Uploading file...");

          // Create file metadata
          const metadata = {
            name: fileToUpload.name,
            mimeType: fileToUpload.type,
          };

          // Add the folder ID to parents if we have access
          if (targetFolderId) {
            metadata.parents = [targetFolderId];
          }

          // Step 1: Create the file metadata
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
            const errorData = await metadataResponse.json().catch(() => ({}));
            console.error("Metadata creation error:", errorData);
            throw new Error(
              `Failed to create file metadata: ${metadataResponse.status} ${metadataResponse.statusText}`
            );
          }

          const fileData = await metadataResponse.json();
          const fileId = fileData.id;
          setFolderStatus("File created, uploading content...");

          // Step 2: Upload the file content
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
            throw new Error(
              `Failed to upload file content: ${contentResponse.status} ${contentResponse.statusText}`
            );
          }

          setFolderStatus("Setting file permissions...");

          // Step 3: Set permissions to make the file accessible via link
          try {
            const permissionResponse = await fetch(
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

            if (!permissionResponse.ok) {
              console.warn(
                "Permission setting warning:",
                await permissionResponse.text()
              );
            }
          } catch (permError) {
            console.warn(
              "Error setting permissions, but continuing:",
              permError
            );
          }

          // Step 4: Get the file's web view link
          const getFileResponse = await fetch(
            `https://www.googleapis.com/drive/v3/files/${fileId}?fields=webViewLink,name`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${tokenResponse.access_token}`,
              },
            }
          );

          let fileLink = `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;

          if (getFileResponse.ok) {
            const fileDetails = await getFileResponse.json();
            fileLink = fileDetails.webViewLink || fileLink;
          }

          // Update program state with the Google Drive link
          const updatedPrograms = [...programsState];
          updatedPrograms[selectedProgram].curriculumFiles[selectedYear] =
            fileLink;
          setProgramsState(updatedPrograms);

          setShowCurriculumUpload(false);
          setFileToUpload(null);
          setFolderStatus("");
          alert("Curriculum file uploaded successfully to Google Drive!");
        } catch (error) {
          console.error("Upload error:", error);
          alert(`Error uploading file: ${error.message}`);
          setFolderStatus("");
        } finally {
          setIsUploading(false);
        }
      }
      // Handle syllabus file upload
      else if (syllabusFileToUpload && showSyllabusUpload) {
        try {
          setIsSyllabusUploading(true);
          setSyllabusStatus("Starting upload process...");

          // Hardcoded folder ID for CEGS Undergrad Syllabus
          const syllabusTargetFolderId = "11w_b_9Hk46zLFXZ5r_7AtAuuAtA5Tcnm"; // Using the same folder ID for now

          // First verify we can access the folder
          try {
            setSyllabusStatus("Verifying folder access...");
            const folderCheckResponse = await fetch(
              `https://www.googleapis.com/drive/v3/files/${syllabusTargetFolderId}?fields=id,name,mimeType`,
              {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${tokenResponse.access_token}`,
                },
              }
            );

            if (!folderCheckResponse.ok) {
              throw new Error(
                `Cannot access target folder: ${folderCheckResponse.status} ${folderCheckResponse.statusText}`
              );
            }

            const folderData = await folderCheckResponse.json();
            setSyllabusStatus(`Uploading to folder: ${folderData.name}`);
          } catch (folderError) {
            console.error("Folder access error:", folderError);
            setSyllabusStatus(
              "Cannot access target folder. Uploading to root instead."
            );
            // Continue with upload to root if folder is inaccessible
          }

          // Simple direct upload approach
          setSyllabusStatus("Uploading syllabus file...");

          // Create file metadata
          const metadata = {
            name: syllabusFileToUpload.name,
            mimeType: syllabusFileToUpload.type,
          };

          // Add the folder ID to parents if we have access
          if (syllabusTargetFolderId) {
            metadata.parents = [syllabusTargetFolderId];
          }

          // Step 1: Create the file metadata
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
            const errorData = await metadataResponse.json().catch(() => ({}));
            console.error("Metadata creation error:", errorData);
            throw new Error(
              `Failed to create file metadata: ${metadataResponse.status} ${metadataResponse.statusText}`
            );
          }

          const fileData = await metadataResponse.json();
          const fileId = fileData.id;
          setSyllabusStatus("File created, uploading content...");

          // Step 2: Upload the file content
          const contentResponse = await fetch(
            `https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=media`,
            {
              method: "PATCH",
              headers: {
                Authorization: `Bearer ${tokenResponse.access_token}`,
                "Content-Type": syllabusFileToUpload.type,
              },
              body: syllabusFileToUpload,
            }
          );

          if (!contentResponse.ok) {
            throw new Error(
              `Failed to upload file content: ${contentResponse.status} ${contentResponse.statusText}`
            );
          }

          setSyllabusStatus("Setting file permissions...");

          // Step 3: Set permissions to make the file accessible via link
          try {
            const permissionResponse = await fetch(
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

            if (!permissionResponse.ok) {
              console.warn(
                "Permission setting warning:",
                await permissionResponse.text()
              );
            }
          } catch (permError) {
            console.warn(
              "Error setting permissions, but continuing:",
              permError
            );
          }

          // Step 4: Get the file's web view link
          const getFileResponse = await fetch(
            `https://www.googleapis.com/drive/v3/files/${fileId}?fields=webViewLink,name`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${tokenResponse.access_token}`,
              },
            }
          );

          let fileLink = `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;

          if (getFileResponse.ok) {
            const fileDetails = await getFileResponse.json();
            fileLink = fileDetails.webViewLink || fileLink;
          }

          setShowSyllabusUpload(false);
          setSyllabusFileToUpload(null);
          setSyllabusStatus("");
          alert("Syllabus file uploaded successfully to Google Drive!");
        } catch (error) {
          console.error("Upload error:", error);
          alert(`Error uploading syllabus file: ${error.message}`);
          setSyllabusStatus("");
        } finally {
          setIsSyllabusUploading(false);
        }
      }
    },
    onError: (error) => {
      console.log("Google Login Failed:", error);
      alert("Google login failed. Please try again.");
      setIsUploading(false);
      setFolderStatus("");
      setIsSyllabusUploading(false);
      setSyllabusStatus("");
    },
    scope: "https://www.googleapis.com/auth/drive.file",
  });

  // Handle file selection
  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileToUpload(e.target.files[0]);
    }
  };

  // Handle syllabus file selection
  const handleSyllabusFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSyllabusFileToUpload(e.target.files[0]);
    }
  };

  // Handle curriculum file upload
  const handleCurriculumUpload = () => {
    if (!fileToUpload) {
      alert("Please select a file first");
      return;
    }

    // Trigger Google login which will then upload the file
    login();
  };

  // Handle syllabus file upload
  const handleSyllabusUpload = () => {
    if (!syllabusFileToUpload) {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section with Back Button */}
      <div className="bg-gradient-to-r from-orange-700 to-orange-900 text-white py-12 relative">
        {/* Back Button - Aligned with the navbar logo */}
        <div className="container mx-auto px-6 relative">
          <Link
            to="/undergrad"
            className="absolute left-0 -top-6 inline-flex items-center text-orange-800 hover:text-orange-900 bg-white hover:bg-white/90 px-4 py-2 rounded-lg transition-all duration-200 shadow-md z-10"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span className="font-medium">Back to Colleges</span>
          </Link>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center text-center relative">
            {/* CEGS Logo */}
            <div className="w-24 h-24 bg-white rounded-full p-1 flex-shrink-0 mb-6 shadow-lg">
              <img
                src="/images/cegs-logo.png"
                alt="CEGS Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              College of Engineering and Geo-Sciences
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Explore our undergraduate programs designed to prepare you for
              success in engineering and geo-sciences, building the
              infrastructure and technology of tomorrow.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          Undergraduate Programs
        </h2>

        {/* Programs List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programsState.map((program, programIndex) => (
            <div
              key={program.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer transform hover:-translate-y-1"
              onClick={() => handleProgramClick(programIndex)}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${program.color} flex items-center justify-center text-white shadow-md mr-4`}
                  >
                    <program.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {program.name}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {program.description}
                </p>
                <div className="flex justify-end">
                  <button className="text-orange-600 hover:text-orange-800 font-medium flex items-center text-sm">
                    View Details <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Program Details Modal - Single View */}
      {showProgramDetails && selectedProgram !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col my-4">
            <div className="p-6 border-b bg-gradient-to-r from-orange-50 to-white">
              <div className="flex justify-between items-center">
                <div className="w-8">{/* Empty div for spacing */}</div>
                <div className="text-center flex-1">
                  <h3 className="text-2xl font-bold text-orange-700">
                    {programsState[selectedProgram].name}
                  </h3>
                  <p className="text-sm text-gray-600">Program Details</p>
                </div>
                <button
                  onClick={() => setShowProgramDetails(false)}
                  className="text-gray-400 hover:text-orange-700 transition-colors p-1 rounded-full hover:bg-gray-100 w-8 h-8 flex items-center justify-center"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Single Content Area - All information displayed at once */}
            <div className="flex-1 overflow-auto p-6 bg-gray-50">
              <div className="space-y-8">
                {/* Program Overview */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-2 h-8 bg-orange-600 rounded-full mr-3 inline-block"></span>
                    Program Overview
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {programsState[selectedProgram].description}
                  </p>

                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 flex items-start">
                    <Info className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">
                      This program is designed to prepare students for careers
                      in the field of{" "}
                      {programsState[selectedProgram].name.split("(")[0].trim()}
                      . Students will gain both theoretical knowledge and
                      practical skills through coursework, laboratory sessions,
                      and field experiences.
                    </p>
                  </div>
                </div>

                {/* Program Specifications */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <ClipboardList className="h-5 w-5 text-orange-600 mr-2" />
                    PROGRAM SPECIFICATIONS
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {programsState[selectedProgram].programSpecifications?.map(
                      (spec, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 p-4 rounded-lg flex items-start"
                        >
                          <span className="w-2 h-2 bg-orange-600 rounded-full mr-2 mt-1.5"></span>
                          <span className="text-gray-700">{spec}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Program Educational Objectives */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <GraduationCap className="h-5 w-5 text-orange-600 mr-2" />
                    PROGRAM EDUCATIONAL OBJECTIVES
                  </h2>
                  <p className="text-gray-700 mb-4">
                    The {programsState[selectedProgram].name} program aims to:
                  </p>
                  <div className="space-y-3">
                    {programsState[
                      selectedProgram
                    ].programEducationalObjectives?.map((objective, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 p-4 rounded-lg border-l-4 border-orange-500"
                      >
                        <p className="text-gray-700">
                          <span className="font-semibold text-orange-700">
                            Objective {index + 1}:
                          </span>{" "}
                          {objective}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Program Outcomes */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <ClipboardList className="h-5 w-5 text-orange-600 mr-2" />
                    PROGRAM OUTCOMES
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Upon successful completion of the{" "}
                    {programsState[selectedProgram].name} program, graduates
                    will be able to:
                  </p>
                  <div className="space-y-3">
                    {programsState[selectedProgram].programOutcomes.map(
                      (outcome, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 p-4 rounded-lg border-l-4 border-orange-500"
                        >
                          <p className="text-gray-700">
                            <span className="font-semibold text-orange-700">
                              Outcome {index + 1}:
                            </span>{" "}
                            {outcome}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Curriculum Section */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <BookOpen className="h-5 w-5 text-orange-600 mr-2" />
                    CURRICULUM & SYLLABUS
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Curriculum Files */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-3">
                        Curriculum Files
                      </h3>
                      <div className="space-y-3 mb-4">
                        {Object.entries(
                          programsState[selectedProgram].curriculumFiles
                        ).map(([year, fileUrl]) => (
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
                                  setSelectedYear(year);
                                  setShowCurriculumViewer(true);
                                }}
                                className="text-orange-600 hover:text-orange-800 text-sm flex items-center"
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
                          setSelectedYear("2023");
                          setShowCurriculumUpload(true);
                        }}
                        className="px-3 py-1.5 bg-white border border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 text-sm flex items-center"
                      >
                        <Upload className="h-4 w-4 mr-1" />
                        Upload Curriculum
                      </button>
                    </div>

                    {/* Syllables */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-3">
                        Course Syllabus
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Course syllabus provide detailed information about
                        individual courses, including learning objectives,
                        topics covered, assessment methods, and required
                        readings.
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          // Open the syllabus folder in a new tab
                          if (
                            programsState[selectedProgram].syllabusFiles &&
                            programsState[selectedProgram].syllabusFiles["2023"]
                          ) {
                            window.open(
                              programsState[selectedProgram].syllabusFiles[
                                "2023"
                              ],
                              "_blank"
                            );
                          } else {
                            alert(
                              "No syllabus files available for this program yet."
                            );
                          }
                        }}
                        className="px-3 py-1.5 bg-white border border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 text-sm flex items-center"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        View Syllabus
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 border-t bg-white flex justify-end">
              <button
                onClick={() => setShowProgramDetails(false)}
                className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Curriculum Upload Modal */}
      {showCurriculumUpload && selectedProgram !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl max-w-md w-full shadow-2xl">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-orange-700">
                  Upload Curriculum File
                </h3>
                <button
                  onClick={() => setShowCurriculumUpload(false)}
                  className="text-gray-400 hover:text-orange-700 transition-colors p-1 rounded-full hover:bg-gray-100"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="mb-6 p-4 bg-orange-50 rounded-lg border border-orange-100">
                <p className="text-gray-700">
                  Uploading curriculum for:{" "}
                  <span className="font-semibold">
                    {programsState[selectedProgram].name}
                  </span>
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Please upload the curriculum file for this program. The file
                  will be uploaded directly to Google Drive.
                </p>
                {folderStatus && (
                  <p className="text-sm text-gray-600 mt-2 italic">
                    Status: {folderStatus}
                  </p>
                )}
              </div>

              <div className="space-y-5">
                {/* Curriculum File Upload */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <div className="flex flex-col items-center">
                    <Upload className="h-12 w-12 text-gray-400 mb-3" />
                    <p className="text-gray-700 font-medium mb-2">
                      {fileToUpload
                        ? fileToUpload.name
                        : "Drag and drop your curriculum file here"}
                    </p>
                    <p className="text-gray-500 text-sm mb-4">or</p>
                    <label
                      htmlFor="curriculumFile"
                      className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors cursor-pointer flex items-center"
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Browse Files
                    </label>
                    <input
                      type="file"
                      id="curriculumFile"
                      className="hidden"
                      accept="image/*,.pdf"
                      onChange={handleFileSelect}
                    />
                    <p className="mt-3 text-xs text-gray-500">
                      Supported formats: JPG, PNG, PDF (max 10MB)
                    </p>
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="button"
                    onClick={() => setShowCurriculumUpload(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 mr-3 hover:bg-gray-50 transition-all"
                    disabled={isUploading}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleCurriculumUpload}
                    className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors flex items-center"
                    disabled={!fileToUpload || isUploading}
                  >
                    {isUploading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                        <Upload className="h-4 w-4 mr-2" />
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
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
            <div className="p-6 flex justify-between items-center border-b">
              <div>
                <h3 className="text-xl font-bold text-orange-700">
                  Program Curriculum
                </h3>
                <p className="text-sm text-gray-600">
                  {programsState[selectedProgram].name} - {selectedYear}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setShowCurriculumUpload(true);
                    setShowCurriculumViewer(false);
                  }}
                  className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                >
                  <Upload className="h-4 w-4 mr-1" />
                  Upload New
                </button>
                <button
                  onClick={() => setShowCurriculumViewer(false)}
                  className="text-gray-400 hover:text-orange-700 transition-colors p-1 rounded-full hover:bg-gray-100"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-auto p-4 bg-gray-50">
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
                    className="w-full h-[600px] border-0 shadow-md rounded-md"
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

            <div className="p-4 border-t bg-white">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  Click the download button to save this curriculum file
                </div>
                <a
                  href={
                    programsState[selectedProgram].curriculumFiles[selectedYear]
                  }
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
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

export default CEGSUndergrad;
