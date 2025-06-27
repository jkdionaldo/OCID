"use client";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import {
  X,
  Upload,
  FileText,
  Calculator,
  FlaskConical,
  Atom,
  Microscope,
  TreePine,
  Stethoscope,
  Flower,
  PiSquare,
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

const CMNSUndergrad = () => {
  // Undergraduate programs for CMNS with updated icons
  const programs = [
    {
      id: 1,
      name: "Bachelor of Science in Applied Mathematics (BSAM)",
      icon: Calculator,
      color: "from-teal-600 to-teal-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2022: "https://drive.google.com/file/d/1KvvNyQ4H3B0nEohCLQD_XenpoCYm4xXS/view?usp=sharing",
        2020: "/placeholder.svg?height=800&width=600",
        2014: "/placeholder.svg?height=800&width=600",
      },
      description:
        "The Bachelor of Science in Applied Mathematics program provides students with a strong foundation in mathematical theory and its applications to real-world problems. Students learn to develop mathematical models and computational methods to solve complex problems in science, engineering, and business.",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 155 units",
        "Practicum: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with laboratory work",
      ],
      programEducationalObjectives: [
        "Produce graduates who can apply mathematical principles to solve complex real-world problems",
        "Develop professionals who can use computational tools and mathematical modeling techniques",
        "Prepare students for advanced studies and research in specialized areas of applied mathematics",
        "Foster analytical thinking and problem-solving skills in various contexts",
      ],
      programOutcomes: [
        "Apply knowledge of mathematics to formulate and solve problems in various fields",
        "Design and implement mathematical models for complex systems",
        "Use computational tools and programming languages for mathematical analysis",
        "Communicate mathematical ideas and results effectively to both technical and non-technical audiences",
      ],
      careers: [
        "Data Scientist",
        "Quantitative Analyst",
        "Operations Research Analyst",
        "Statistical Consultant",
        "Mathematical Modeler",
      ],
      syllabusFiles: {
        2023: "https://example.com/bsam-syllabus-2023", // Example URL
      },
    },
    {
      id: 2,
      name: "Bachelor of Science in Mathematics (BSMATH)",
      icon: PiSquare,
      color: "from-teal-500 to-teal-700",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      description:
        "The Bachelor of Science in Mathematics program focuses on the theoretical foundations of mathematics. Students explore abstract mathematical concepts, develop rigorous proofs, and gain a deep understanding of mathematical structures and their properties.",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 150 units",
        "Practicum: Optional",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face",
      ],
      programEducationalObjectives: [
        "Produce graduates with a strong foundation in pure mathematics",
        "Develop professionals who can think abstractly and construct rigorous mathematical arguments",
        "Prepare students for advanced studies and research in mathematics",
        "Foster logical reasoning and problem-solving skills",
      ],
      programOutcomes: [
        "Demonstrate understanding of fundamental mathematical concepts and theories",
        "Construct and evaluate mathematical proofs and logical arguments",
        "Apply mathematical knowledge to solve theoretical and applied problems",
        "Communicate mathematical ideas clearly and precisely",
      ],
      careers: [
        "Mathematics Educator",
        "Research Mathematician",
        "Cryptographer",
        "Actuary",
        "Mathematical Consultant",
      ],
      syllabusFiles: {
        2023: "https://example.com/bsmath-syllabus-2023", // Example URL
      },
    },
    {
      id: 3,
      name: "Bachelor of Science in Chemistry (BS Chemistry)",
      icon: FlaskConical,
      color: "from-teal-400 to-teal-600",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      description:
        "The Bachelor of Science in Chemistry program provides students with a comprehensive understanding of chemical principles, laboratory techniques, and their applications. Students study the composition, structure, properties, and transformations of matter at the molecular level.",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 160 units",
        "Laboratory Work: Extensive",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with laboratory work",
      ],
      programEducationalObjectives: [
        "Produce graduates with strong theoretical knowledge and practical skills in chemistry",
        "Develop professionals who can conduct chemical analyses and experiments",
        "Prepare students for advanced studies and research in specialized areas of chemistry",
        "Foster scientific inquiry and ethical practice in chemical research",
      ],
      programOutcomes: [
        "Apply chemical principles to understand and explain natural phenomena",
        "Design and conduct chemical experiments, as well as analyze and interpret data",
        "Use modern laboratory techniques and instrumentation for chemical analysis",
        "Apply safety protocols and ethical considerations in chemical laboratory work",
      ],
      careers: [
        "Analytical Chemist",
        "Research Chemist",
        "Quality Control Chemist",
        "Environmental Chemist",
        "Pharmaceutical Chemist",
      ],
      syllabusFiles: {
        2023: "https://example.com/bschem-syllabus-2023", // Example URL
      },
    },
    {
      id: 4,
      name: "Bachelor of Science in Physics (BS Physics)",
      icon: Atom,
      color: "from-teal-500 to-teal-700",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      description:
        "The Bachelor of Science in Physics program explores the fundamental laws that govern the universe. Students study matter, energy, space, and time, developing a deep understanding of physical phenomena from subatomic particles to cosmic structures.",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 155 units",
        "Laboratory Work: Extensive",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with laboratory work",
      ],
      programEducationalObjectives: [
        "Produce graduates with a strong foundation in theoretical and experimental physics",
        "Develop professionals who can apply physical principles to solve complex problems",
        "Prepare students for advanced studies and research in specialized areas of physics",
        "Foster scientific inquiry and critical thinking in understanding natural phenomena",
      ],
      programOutcomes: [
        "Apply fundamental physical laws and principles to explain natural phenomena",
        "Design and conduct physics experiments, as well as analyze and interpret data",
        "Use mathematical methods and computational tools to solve physics problems",
        "Communicate scientific ideas and results effectively to various audiences",
      ],
      careers: [
        "Research Physicist",
        "Physics Educator",
        "Data Scientist",
        "Medical Physicist",
        "Computational Physicist",
      ],
      syllabusFiles: {
        2023: "https://example.com/bsphysics-syllabus-2023", // Example URL
      },
    },
    {
      id: 5,
      name: "Bachelor of Science in Biology major in Biodiversity Conservation",
      icon: TreePine,
      color: "from-teal-600 to-teal-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      description:
        "The Bachelor of Science in Biology major in Biodiversity Conservation focuses on the study and preservation of biological diversity. Students learn about ecosystems, species interactions, conservation strategies, and sustainable resource management.",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 158 units",
        "Field Work: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with field work",
      ],
      programEducationalObjectives: [
        "Produce graduates with a strong understanding of biodiversity and conservation principles",
        "Develop professionals who can implement conservation strategies and manage natural resources",
        "Prepare students for advanced studies and research in conservation biology",
        "Foster environmental stewardship and ethical practice in biodiversity conservation",
      ],
      programOutcomes: [
        "Apply ecological principles to understand biodiversity patterns and processes",
        "Design and implement conservation strategies for threatened species and ecosystems",
        "Conduct field surveys and monitoring of biological diversity",
        "Evaluate the effectiveness of conservation interventions and policies",
      ],
      careers: [
        "Conservation Biologist",
        "Wildlife Biologist",
        "Environmental Consultant",
        "Protected Area Manager",
        "Biodiversity Specialist",
      ],
      syllabusFiles: {
        2023: "https://example.com/bsbio-biodiversity-syllabus-2023", // Example URL
      },
    },
    {
      id: 6,
      name: "Bachelor of Science in Biology major in Microbiology",
      icon: Microscope,
      color: "from-teal-600 to-teal-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      description:
        "The Bachelor of Science in Biology major in Microbiology focuses on the study of microorganisms such as bacteria, viruses, fungi, and parasites. Students learn about microbial structure, function, genetics, and their roles in health, disease, and the environment.",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 158 units",
        "Laboratory Work: Extensive",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with laboratory work",
      ],
      programEducationalObjectives: [
        "Produce graduates with a strong foundation in microbiology and laboratory techniques",
        "Develop professionals who can apply microbiological principles in various fields",
        "Prepare students for advanced studies and research in specialized areas of microbiology",
        "Foster scientific inquiry and ethical practice in microbiological research",
      ],
      programOutcomes: [
        "Apply microbiological principles to understand microbial diversity and function",
        "Design and conduct microbiological experiments using appropriate techniques",
        "Analyze and interpret microbiological data using modern tools and methods",
        "Apply safety protocols and ethical considerations in microbiological laboratory work",
      ],
      careers: [
        "Clinical Microbiologist",
        "Food Microbiologist",
        "Environmental Microbiologist",
        "Industrial Microbiologist",
        "Research Microbiologist",
      ],
      syllabusFiles: {
        2023: "https://example.com/bsbio-microbiology-syllabus-2023", // Example URL
      },
    },
    {
      id: 7,
      name: "Bachelor of Science in Biology major in Medical Biology",
      icon: Stethoscope,
      color: "from-teal-600 to-teal-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      description:
        "The Bachelor of Science in Biology major in Medical Biology focuses on the biological aspects of human health and disease. Students study human anatomy, physiology, pathology, and the molecular basis of diseases, preparing them for careers in healthcare and biomedical research.",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 160 units",
        "Laboratory Work: Extensive",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with laboratory work",
      ],
      programEducationalObjectives: [
        "Produce graduates with a strong foundation in medical biology and laboratory techniques",
        "Develop professionals who can apply biological principles to understand human health and disease",
        "Prepare students for advanced studies in medicine, biomedical research, or allied health fields",
        "Foster scientific inquiry and ethical practice in medical research",
      ],
      programOutcomes: [
        "Apply biological principles to understand human anatomy, physiology, and pathology",
        "Design and conduct biomedical experiments using appropriate techniques",
        "Analyze and interpret biomedical data using modern tools and methods",
        "Apply safety protocols and ethical considerations in biomedical laboratory work",
      ],
      careers: [
        "Biomedical Researcher",
        "Clinical Research Associate",
        "Medical Laboratory Scientist",
        "Healthcare Consultant",
        "Medical Science Liaison",
      ],
      syllabusFiles: {
        2023: "https://example.com/bsbio-medical-syllabus-2023", // Example URL
      },
    },
    {
      id: 8,
      name: "Bachelor of Science in Biology major in Plant Biology",
      icon: Flower,
      color: "from-teal-600 to-teal-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      description:
        "The Bachelor of Science in Biology major in Plant Biology focuses on the study of plants, their structure, function, diversity, and ecological roles. Students learn about plant anatomy, physiology, taxonomy, genetics, and the importance of plants in ecosystems and human society.",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 158 units",
        "Field Work: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with field and laboratory work",
      ],
      programEducationalObjectives: [
        "Produce graduates with a strong foundation in plant biology and botanical techniques",
        "Develop professionals who can apply botanical principles in various fields",
        "Prepare students for advanced studies and research in specialized areas of plant biology",
        "Foster scientific inquiry and ethical practice in botanical research",
      ],
      programOutcomes: [
        "Apply botanical principles to understand plant diversity, structure, and function",
        "Design and conduct botanical experiments using appropriate techniques",
        "Analyze and interpret botanical data using modern tools and methods",
        "Apply plant knowledge to address agricultural, environmental, and conservation challenges",
      ],
      careers: [
        "Plant Biologist",
        "Botanist",
        "Plant Geneticist",
        "Agricultural Scientist",
        "Plant Conservation Specialist",
      ],
      syllabusFiles: {
        2023: "https://example.com/bsbio-plant-syllabus-2023", // Example URL
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

          // Hardcoded folder ID for CMNS Undergrad
          // This is the folder ID where all files will be uploaded directly
          const targetFolderId = "1Dnlar3Hx5Og8e401KRxqQoCc0930qmuX"; // Default folder ID

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

          // Hardcoded folder ID for CMNS Undergrad Syllabus
          const syllabusTargetFolderId = "1qOvN9RfKlu9qhv1ixFuruBO7q8OK_w0r"; // Using the same folder ID for now

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
      <div className="bg-gradient-to-r from-teal-700 to-teal-900 text-white py-12 relative">
        {/* Back Button - Aligned with the navbar logo */}
        <div className="container mx-auto px-6 relative">
          <Link
            to="/undergrad"
            className="absolute left-0 -top-6 inline-flex items-center text-teal-800 hover:text-teal-900 bg-white hover:bg-white/90 px-4 py-2 rounded-lg transition-all duration-200 shadow-md z-10"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span className="font-medium">Back to Colleges</span>
          </Link>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center text-center relative">
            {/* CMNS Logo */}
            <div className="w-24 h-24 bg-white rounded-full p-1 flex-shrink-0 mb-6 shadow-lg">
              <img
                src="/images/cmns-logo.png"
                alt="CMNS Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              College of Mathematics and Natural Sciences
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Explore our undergraduate programs designed to prepare you for
              success in mathematics and natural sciences, discovering the
              fundamental principles that govern our world.
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
                  <button className="text-teal-600 hover:text-teal-800 font-medium flex items-center text-sm">
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
            <div className="p-6 border-b bg-gradient-to-r from-teal-50 to-white">
              <div className="flex justify-between items-center">
                <div className="w-8">{/* Empty div for spacing */}</div>
                <div className="text-center flex-1">
                  <h3 className="text-2xl font-bold text-teal-700">
                    {programsState[selectedProgram].name}
                  </h3>
                  <p className="text-sm text-gray-600">Program Details</p>
                </div>
                <button
                  onClick={() => setShowProgramDetails(false)}
                  className="text-gray-400 hover:text-teal-700 transition-colors p-1 rounded-full hover:bg-gray-100 w-8 h-8 flex items-center justify-center"
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
                    <span className="w-2 h-8 bg-teal-600 rounded-full mr-3 inline-block"></span>
                    Program Overview
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {programsState[selectedProgram].description}
                  </p>

                  <div className="bg-teal-50 p-4 rounded-lg border border-teal-100 flex items-start">
                    <Info className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0 mt-0.5" />
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
                    <ClipboardList className="h-5 w-5 text-teal-600 mr-2" />
                    PROGRAM SPECIFICATIONS
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {programsState[selectedProgram].programSpecifications?.map(
                      (spec, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 p-4 rounded-lg flex items-start"
                        >
                          <span className="w-2 h-2 bg-teal-600 rounded-full mr-2 mt-1.5"></span>
                          <span className="text-gray-700">{spec}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Program Educational Objectives */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <GraduationCap className="h-5 w-5 text-teal-600 mr-2" />
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
                        className="bg-gray-50 p-4 rounded-lg border-l-4 border-teal-500"
                      >
                        <p className="text-gray-700">
                          <span className="font-semibold text-teal-700">
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
                    <ClipboardList className="h-5 w-5 text-teal-600 mr-2" />
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
                          className="bg-gray-50 p-4 rounded-lg border-l-4 border-teal-500"
                        >
                          <p className="text-gray-700">
                            <span className="font-semibold text-teal-700">
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
                    <BookOpen className="h-5 w-5 text-teal-600 mr-2" />
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
                                className="text-teal-600 hover:text-teal-800 text-sm flex items-center"
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
                        className="px-3 py-1.5 bg-white border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 text-sm flex items-center"
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
                        className="px-3 py-1.5 bg-white border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 text-sm flex items-center"
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
                className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
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
                <h3 className="text-xl font-bold text-teal-700">
                  Upload Curriculum File
                </h3>
                <button
                  onClick={() => setShowCurriculumUpload(false)}
                  className="text-gray-400 hover:text-teal-700 transition-colors p-1 rounded-full hover:bg-gray-100"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="mb-6 p-4 bg-teal-50 rounded-lg border border-teal-100">
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
                      className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors cursor-pointer flex items-center"
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
                    className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors flex items-center"
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
                <h3 className="text-xl font-bold text-teal-700">
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
                  className="text-gray-400 hover:text-teal-700 transition-colors p-1 rounded-full hover:bg-gray-100"
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
                  className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors flex items-center"
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

export default CMNSUndergrad;
