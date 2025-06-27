"use client"

import { Link } from "react-router-dom"
import { useState } from "react"
import { useGoogleLogin } from "@react-oauth/google"
import {
  X,
  Upload,
  FileText,
  CreditCard,
  Wheat,
  Beef,
  Bug,
  Flower2,
  Layers,
  ArrowLeft,
  ChevronRight,
  ExternalLink,
  Info,
  BookOpen,
  GraduationCap,
  ClipboardList,
  Briefcase,
} from "lucide-react"
import { getViewUrl } from "../utils/googleDriveUtils"

const CAAUndergrad = () => {
  // Undergraduate programs for CAA
  const programs = [
    {
      id: 1,
      name: "Bachelor of Science in Agriculture (BSA) major in Agriculture Economics",
      icon: CreditCard,
      color: "from-green-600 to-green-800",
      curriculumFiles: {
        2023: "https://drive.google.com/file/d/1KvvNyQ4H3B0nEohCLQD_XenpoCYm4xXS/view?usp=sharing",
        2022: "https://drive.google.com/file/d/1mFaajZ5nfVn5sMBrfTDsP5if_oJB8DTz/view?usp=sharing",
        2014: "/placeholder.svg?height=800&width=600",
        2005: "/placeholder.svg?height=800&width=600",
        2003: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/1NaRXSyrQODlgvdzkhl3m07TPvLY99qP-",
      },
      description:
        "The BACHELOR OF SCIENCE IN AGRICULTURE (BSA) major in AGRICULTURE ECONOMICS program prepares students for careers in agricultural business, finance, and policy. Students learn economic principles applied to agricultural production, marketing, and resource management. Graduates are equipped to work in agribusiness firms, government agencies, and international organizations focused on agricultural development.",
      programOutcomes: [
        {
          id: "AE01",
          text: "Apply economic principles to analyze agricultural markets, policies, and resource allocation decisions.",
        },
        {
          id: "AE02",
          text: "Evaluate financial performance of agricultural enterprises and develop strategies for improved profitability.",
        },
        {
          id: "AE03",
          text: "Analyze the impact of government policies, international trade, and market structures on agricultural production and distribution.",
        },
        {
          id: "AE04",
          text: "Develop and implement marketing strategies for agricultural products in domestic and international markets.",
        },
        {
          id: "AE05",
          text: "Apply quantitative methods to analyze agricultural data and make informed management decisions.",
        },
        {
          id: "AE06",
          text: "Communicate effectively with stakeholders in the agricultural sector through clear writing, presentations, and interpersonal skills.",
        },
      ],
      programEducationalObjectives: [
        "Produce graduates who can apply economic principles to solve complex agricultural and resource management problems",
        "Develop professionals who can lead sustainable agricultural business initiatives in both public and private sectors",
        "Prepare students for advanced studies and research in specialized areas of agricultural economics",
        "Foster environmental stewardship and ethical practice in agricultural business management",
      ],
     
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 155 units",
        "Practicum: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with field work",
      ],
    },
    {
      id: 2,
      name: "Bachelor of Science in Agriculture (BSA) major in Agronomy",
      icon: Wheat,
      color: "from-green-500 to-green-700",
      curriculumFiles: {
        2023: "https://drive.google.com/file/d/1Vfv2M_ck5ktu4Ptty66dsHEUwiqeTRod/view?usp=sharing",
        2019: "https://drive.google.com/file/d/1mFaajZ5nfVn5sMBrfTDsP5if_oJB8DTz/view?usp=sharing",
        2014: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/1NaRXSyrQODlgvdzkhl3m07TPvLY99qP-",
      },
      description:
        "The BACHELOR OF SCIENCE IN AGRICULTURE (BSA) major in AGRONOMY program focuses on crop production and soil management. Students learn about plant breeding, soil science, pest management, and sustainable farming practices. Graduates are prepared for careers in farm management, agricultural research, extension services, and agribusiness.",
      programOutcomes: [
        {
          id: "AG01",
          text: "Apply principles of crop science to develop and implement effective crop production systems.",
        },
        {
          id: "AG02",
          text: "Analyze soil properties and recommend appropriate soil management practices for sustainable crop production.",
        },
        {
          id: "AG03",
          text: "Develop and implement integrated pest management strategies for crop protection.",
        },
        {
          id: "AG04",
          text: "Apply principles of plant breeding and genetics to improve crop varieties.",
        },
        {
          id: "AG05",
          text: "Design and implement sustainable agricultural systems that optimize resource use and minimize environmental impact.",
        },
        {
          id: "AG06",
          text: "Communicate technical information effectively to diverse stakeholders in the agricultural sector.",
        },
      ],
      programEducationalObjectives: [
        "Produce graduates who can apply scientific principles to solve complex crop production challenges",
        "Develop professionals who can lead sustainable farming initiatives",
        "Prepare students for advanced studies and research in specialized areas of agronomy",
        "Foster environmental stewardship and ethical practice in crop management",
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 155 units",
        "Practicum: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with field work",
      ],
    },
    {
      id: 3,
      name: "Bachelor of Science in Agriculture (BSA) major in Animal Science",
      icon: Beef,
      color: "from-green-400 to-green-600",
      curriculumFiles: {
        2023: "https://drive.google.com/file/d/1Vfv2M_ck5ktu4Ptty66dsHEUwiqeTRod/view?usp=sharing",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/1NaRXSyrQODlgvdzkhl3m07TPvLY99qP-",
      },
      description:
        "The BACHELOR OF SCIENCE IN AGRICULTURE (BSA) major in ANIMAL SCIENCE program focuses on livestock production, animal nutrition, breeding, and health management. Students learn about different animal species, their care, and production systems. Graduates are prepared for careers in livestock management, animal nutrition, breeding programs, and animal health services.",
      programOutcomes: [
        {
          id: "AS01",
          text: "Apply principles of animal nutrition to develop balanced feeding programs for different livestock species.",
        },
        {
          id: "AS02",
          text: "Implement appropriate animal breeding and selection programs to improve livestock productivity.",
        },
        {
          id: "AS03",
          text: "Develop and implement animal health management programs to prevent and control diseases.",
        },
        {
          id: "AS04",
          text: "Design and manage livestock production systems that optimize animal welfare and productivity.",
        },
        {
          id: "AS05",
          text: "Apply principles of reproductive physiology to manage breeding programs in livestock.",
        },
        {
          id: "AS06",
          text: "Communicate effectively with stakeholders in the livestock industry through clear writing, presentations, and interpersonal skills.",
        },
      ],
      programEducationalObjectives: [
        "Produce graduates who can apply scientific principles to solve complex animal production challenges",
        "Develop professionals who can lead sustainable livestock management initiatives",
        "Prepare students for advanced studies and research in specialized areas of animal science",
        "Foster animal welfare and ethical practice in livestock management",
      ],
      
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 155 units",
        "Practicum: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with field work",
      ],
    },
    {
      id: 4,
      name: "Bachelor of Science in Agriculture (BSA) major in Crop Protection",
      icon: Bug,
      color: "from-green-500 to-green-700",
      curriculumFiles: {
        2023: "https://drive.google.com/file/d/1Vfv2M_ck5ktu4Ptty66dsHEUwiqeTRod/view?usp=sharing",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/1NaRXSyrQODlgvdzkhl3m07TPvLY99qP-",
      },
      description:
        "The BACHELOR OF SCIENCE IN AGRICULTURE (BSA) major in CROP PROTECTION program focuses on the identification, prevention, and management of crop pests and diseases. Students learn about entomology, plant pathology, weed science, and integrated pest management. Graduates are prepared for careers in pest management, agricultural extension, research, and regulatory agencies.",
      programOutcomes: [
        {
          id: "CP01",
          text: "Identify and diagnose crop pests, diseases, and disorders affecting agricultural crops.",
        },
        {
          id: "CP02",
          text: "Develop and implement integrated pest management strategies for sustainable crop protection.",
        },
        {
          id: "CP03",
          text: "Evaluate the efficacy, safety, and environmental impact of pest control methods.",
        },
        {
          id: "CP04",
          text: "Apply principles of entomology, plant pathology, and weed science to manage crop health.",
        },
        {
          id: "CP05",
          text: "Design monitoring programs to detect and assess pest populations and disease incidence in crops.",
        },
        {
          id: "CP06",
          text: "Communicate technical information effectively to farmers, extension workers, and other stakeholders.",
        },
      ],
      programEducationalObjectives: [
        "Produce graduates who can apply scientific principles to solve complex crop protection challenges",
        "Develop professionals who can lead sustainable pest management initiatives",
        "Prepare students for advanced studies and research in specialized areas of crop protection",
        "Foster environmental stewardship and ethical practice in pest management",
      ],
      
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 155 units",
        "Practicum: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with field work",
      ],
    },
    {
      id: 5,
      name: "Bachelor of Science in Agriculture (BSA) major in Horticulture",
      icon: Flower2,
      color: "from-green-600 to-green-800",
      curriculumFiles: {
        2023: "https://drive.google.com/file/d/1Vfv2M_ck5ktu4Ptty66dsHEUwiqeTRod/view?usp=sharing",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/1NaRXSyrQODlgvdzkhl3m07TPvLY99qP-",
      },
      description:
        "The BACHELOR OF SCIENCE IN AGRICULTURE (BSA) major in HORTICULTURE program focuses on the production, utilization, and improvement of fruits, vegetables, ornamental plants, and landscape design. Students learn about plant propagation, greenhouse management, post-harvest handling, and landscape horticulture. Graduates are prepared for careers in commercial horticulture, nursery management, landscape design, and urban agriculture.",
      programOutcomes: [
        {
          id: "HO01",
          text: "Apply principles of plant science to the production of horticultural crops.",
        },
        {
          id: "HO02",
          text: "Design and manage production systems for fruits, vegetables, and ornamental plants.",
        },
        {
          id: "HO03",
          text: "Implement appropriate post-harvest handling and storage techniques for horticultural products.",
        },
        {
          id: "HO04",
          text: "Apply principles of landscape design and management in urban and rural settings.",
        },
        {
          id: "HO05",
          text: "Develop and implement propagation techniques for horticultural crops.",
        },
        {
          id: "HO06",
          text: "Communicate effectively with diverse stakeholders in the horticultural industry.",
        },
      ],
      programEducationalObjectives: [
        "Produce graduates who can apply scientific principles to solve complex horticultural challenges",
        "Develop professionals who can lead sustainable horticultural production initiatives",
        "Prepare students for advanced studies and research in specialized areas of horticulture",
        "Foster environmental stewardship and ethical practice in horticultural management",
      ],
     
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 155 units",
        "Practicum: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with field work",
      ],
    },
    {
      id: 6,
      name: "Bachelor of Science in Agricultural (BSA) major in Soil Science",
      icon: Layers,
      color: "from-green-600 to-green-800",
      curriculumFiles: {
        2023: "https://drive.google.com/file/d/1Vfv2M_ck5ktu4Ptty66dsHEUwiqeTRod/view?usp=sharing",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/1NaRXSyrQODlgvdzkhl3m07TPvLY99qP-",
      },
      description:
        "The BACHELOR OF SCIENCE IN AGRICULTURE (BSA) major in SOIL SCIENCE program focuses on the study of soil as a natural resource and medium for plant growth. Students learn about soil formation, classification, chemistry, fertility, and conservation. Graduates are prepared for careers in soil management, land use planning, environmental assessment, and agricultural research.",
      programOutcomes: [
        {
          id: "SS01",
          text: "Analyze soil physical, chemical, and biological properties to assess soil quality and fertility.",
        },
        {
          id: "SS02",
          text: "Develop and implement soil management plans for sustainable agricultural production.",
        },
        {
          id: "SS03",
          text: "Apply principles of soil conservation to prevent erosion and land degradation.",
        },
        {
          id: "SS04",
          text: "Evaluate soil suitability for different agricultural and non-agricultural uses.",
        },
        {
          id: "SS05",
          text: "Design and implement soil remediation strategies for contaminated sites.",
        },
        {
          id: "SS06",
          text: "Communicate soil science information effectively to farmers, land managers, and policymakers.",
        },
      ],
      programEducationalObjectives: [
        "Produce graduates who can apply scientific principles to solve complex soil management challenges",
        "Develop professionals who can lead sustainable soil conservation initiatives",
        "Prepare students for advanced studies and research in specialized areas of soil science",
        "Foster environmental stewardship and ethical practice in soil resource management",
      ],
     
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 155 units",
        "Practicum: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with field work",
      ],
    },
  ]

  const [programsState, setProgramsState] = useState(programs)
  const [showCurriculumUpload, setShowCurriculumUpload] = useState(false)
  const [showSyllabusUpload, setShowSyllabusUpload] = useState(false)
  const [selectedProgram, setSelectedProgram] = useState(null)
  const [selectedYear, setSelectedYear] = useState("2023")
  const [showCurriculumViewer, setShowCurriculumViewer] = useState(false)
  const [showSyllabusViewer, setShowSyllabusViewer] = useState(false)
  const [fileToUpload, setFileToUpload] = useState(null)
  const [isUploading, setIsUploading] = useState(false)
  const [folderStatus, setFolderStatus] = useState("")
  const [showProgramDetails, setShowProgramDetails] = useState(false)
  const [syllabusFileToUpload, setSyllabusFileToUpload] = useState(null)
  const [isSyllabusUploading, setIsSyllabusUploading] = useState(false)
  const [syllabusStatus, setSyllabusStatus] = useState("")
  const [activeDropdown, setActiveDropdown] = useState(null)

  // Google login hook for file upload
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      // Handle curriculum file upload
      if (fileToUpload && selectedProgram !== null && !showSyllabusUpload) {
        try {
          setIsUploading(true)
          setFolderStatus("Starting upload process...")

          // Hardcoded folder ID for CAA Undergrad
          // This is the folder ID where all files will be uploaded directly
          const targetFolderId = "1NaRXSyrQODlgvdzkhl3m07TPvLY99qP-" // Default folder ID

          // First verify we can access the folder
          try {
            setFolderStatus("Verifying folder access...")
            const folderCheckResponse = await fetch(
              `https://www.googleapis.com/drive/v3/files/${targetFolderId}?fields=id,name,mimeType`,
              {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${tokenResponse.access_token}`,
                },
              },
            )

            if (!folderCheckResponse.ok) {
              throw new Error(
                `Cannot access target folder: ${folderCheckResponse.status} ${folderCheckResponse.statusText}`,
              )
            }

            const folderData = await folderCheckResponse.json()
            setFolderStatus(`Uploading to folder: ${folderData.name}`)
          } catch (folderError) {
            console.error("Folder access error:", folderError)
            setFolderStatus("Cannot access target folder. Uploading to root instead.")
            // Continue with upload to root if folder is inaccessible
          }

          // Simple direct upload approach
          setFolderStatus("Uploading file...")

          // Create file metadata
          const metadata = {
            name: fileToUpload.name,
            mimeType: fileToUpload.type,
          }

          // Add the folder ID to parents if we have access
          if (targetFolderId) {
            metadata.parents = [targetFolderId]
          }

          // Step 1: Create the file metadata
          const metadataResponse = await fetch("https://www.googleapis.com/drive/v3/files", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(metadata),
          })

          if (!metadataResponse.ok) {
            const errorData = await metadataResponse.json().catch(() => ({}))
            console.error("Metadata creation error:", errorData)
            throw new Error(`Failed to create file metadata: ${metadataResponse.status} ${metadataResponse.statusText}`)
          }

          const fileData = await metadataResponse.json()
          const fileId = fileData.id
          setFolderStatus("File created, uploading content...")

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
            },
          )

          if (!contentResponse.ok) {
            throw new Error(`Failed to upload file content: ${contentResponse.status} ${contentResponse.statusText}`)
          }

          setFolderStatus("Setting file permissions...")

          // Step 3: Set permissions to make the file accessible via link
          try {
            const permissionResponse = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}/permissions`, {
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
            })

            if (!permissionResponse.ok) {
              console.warn("Permission setting warning:", await permissionResponse.text())
            }
          } catch (permError) {
            console.warn("Error setting permissions, but continuing:", permError)
          }

          // Step 4: Get the file's web view link
          const getFileResponse = await fetch(
            `https://www.googleapis.com/drive/v3/files/${fileId}?fields=webViewLink,name`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${tokenResponse.access_token}`,
              },
            },
          )

          let fileLink = `https://drive.google.com/file/d/${fileId}/view?usp=sharing`

          if (getFileResponse.ok) {
            const fileDetails = await getFileResponse.json()
            fileLink = fileDetails.webViewLink || fileLink
          }

          // Update program state with the Google Drive link
          const updatedPrograms = [...programsState]
          updatedPrograms[selectedProgram].curriculumFiles[selectedYear] = fileLink
          setProgramsState(updatedPrograms)

          setShowCurriculumUpload(false)
          setFileToUpload(null)
          setFolderStatus("")
          alert("Curriculum file uploaded successfully to Google Drive!")
        } catch (error) {
          console.error("Upload error:", error)
          alert(`Error uploading file: ${error.message}`)
          setFolderStatus("")
        } finally {
          setIsUploading(false)
        }
      }
      // Handle syllabus file upload
      else if (syllabusFileToUpload && showSyllabusUpload) {
        try {
          setIsSyllabusUploading(true)
          setSyllabusStatus("Starting upload process...")

          // Hardcoded folder ID for CAA Undergrad Syllabus
          const syllabusTargetFolderId = "1NaRXSyrQODlgvdzkhl3m07TPvLY99qP-" // Using the same folder ID for now

          // First verify we can access the folder
          try {
            setSyllabusStatus("Verifying folder access...")
            const folderCheckResponse = await fetch(
              `https://www.googleapis.com/drive/v3/files/${syllabusTargetFolderId}?fields=id,name,mimeType`,
              {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${tokenResponse.access_token}`,
                },
              },
            )

            if (!folderCheckResponse.ok) {
              throw new Error(
                `Cannot access target folder: ${folderCheckResponse.status} ${folderCheckResponse.statusText}`,
              )
            }

            const folderData = await folderCheckResponse.json()
            setSyllabusStatus(`Uploading to folder: ${folderData.name}`)
          } catch (folderError) {
            console.error("Folder access error:", folderError)
            setSyllabusStatus("Cannot access target folder. Uploading to root instead.")
            // Continue with upload to root if folder is inaccessible
          }

          // Simple direct upload approach
          setSyllabusStatus("Uploading syllabus file...")

          // Create file metadata
          const metadata = {
            name: syllabusFileToUpload.name,
            mimeType: syllabusFileToUpload.type,
          }

          // Add the folder ID to parents if we have access
          if (syllabusTargetFolderId) {
            metadata.parents = [syllabusTargetFolderId]
          }

          // Step 1: Create the file metadata
          const metadataResponse = await fetch("https://www.googleapis.com/drive/v3/files", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(metadata),
          })

          if (!metadataResponse.ok) {
            const errorData = await metadataResponse.json().catch(() => ({}))
            console.error("Metadata creation error:", errorData)
            throw new Error(`Failed to create file metadata: ${metadataResponse.status} ${metadataResponse.statusText}`)
          }

          const fileData = await metadataResponse.json()
          const fileId = fileData.id
          setSyllabusStatus("File created, uploading content...")

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
            },
          )

          if (!contentResponse.ok) {
            throw new Error(`Failed to upload file content: ${contentResponse.status} ${contentResponse.statusText}`)
          }

          setSyllabusStatus("Setting file permissions...")

          // Step 3: Set permissions to make the file accessible via link
          try {
            const permissionResponse = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}/permissions`, {
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
            })

            if (!permissionResponse.ok) {
              console.warn("Permission setting warning:", await permissionResponse.text())
            }
          } catch (permError) {
            console.warn("Error setting permissions, but continuing:", permError)
          }

          // Step 4: Get the file's web view link
          const getFileResponse = await fetch(
            `https://www.googleapis.com/drive/v3/files/${fileId}?fields=webViewLink,name`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${tokenResponse.access_token}`,
              },
            },
          )

          let fileLink = `https://drive.google.com/file/d/${fileId}/view?usp=sharing`

          if (getFileResponse.ok) {
            const fileDetails = await getFileResponse.json()
            fileLink = fileDetails.webViewLink || fileLink
          }

          setShowSyllabusUpload(false)
          setSyllabusFileToUpload(null)
          setSyllabusStatus("")
          alert("Syllabus file uploaded successfully to Google Drive!")
        } catch (error) {
          console.error("Upload error:", error)
          alert(`Error uploading syllabus file: ${error.message}`)
          setSyllabusStatus("")
        } finally {
          setIsSyllabusUploading(false)
        }
      }
    },
    onError: (error) => {
      console.log("Google Login Failed:", error)
      alert("Google login failed. Please try again.")
      setIsUploading(false)
      setFolderStatus("")
      setIsSyllabusUploading(false)
      setSyllabusStatus("")
    },
    scope: "https://www.googleapis.com/auth/drive.file",
  })

  // Handle file selection
  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileToUpload(e.target.files[0])
    }
  }

  // Handle syllabus file selection
  const handleSyllabusFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSyllabusFileToUpload(e.target.files[0])
    }
  }

  // Handle curriculum file upload
  const handleCurriculumUpload = () => {
    if (!fileToUpload) {
      alert("Please select a file first")
      return
    }

    // Trigger Google login which will then upload the file
    login()
  }

  // Handle syllabus file upload
  const handleSyllabusUpload = () => {
    if (!syllabusFileToUpload) {
      alert("Please select a file first")
      return
    }

    // Trigger Google login which will then upload the file
    login()
  }

  // Handle program click to show details
  const handleProgramClick = (programIndex) => {
    setSelectedProgram(programIndex)
    setShowProgramDetails(true)
  }

  // Toggle dropdown visibility
  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

  // Updated handleCurriculumYearSelect function to handle all years consistently
  const handleCurriculumYearSelect = (year) => {
    const curriculumFile = programsState[selectedProgram].curriculumFiles[year]

    // Check if the curriculum file is a Google Drive link
    if (curriculumFile && curriculumFile.includes("drive.google.com")) {
      try {
        // Get the file ID from the Google Drive URL
        const fileId = curriculumFile.match(/[-\w]{25,}/)?.[0]

        if (!fileId) {
          throw new Error("Could not extract file ID from URL")
        }

        // Use the format that requires authentication
        const authRequiredUrl = `https://drive.google.com/file/d/${fileId}/view?usp=drivesdk`

        // Open the link directly in a new tab
        window.open(authRequiredUrl, "_blank")
      } catch (error) {
        // If there's an error (like invalid URL format), show the curriculum viewer instead
        console.error("Error opening Google Drive link:", error)
        setSelectedYear(year)
        setShowCurriculumViewer(true)
      }
    } else {
      // For files that are not Google Drive links, show the curriculum viewer
      setSelectedYear(year)
      setShowCurriculumViewer(true)
    }

    setActiveDropdown(null)
  }

  // Function to extract folder ID from Google Drive URL
  const getFolderIdFromUrl = (url) => {
    const match = url.match(/[-\w]{25,}/)
    return match ? match[0] : null
  }

  // Handle syllabus year selection
  const handleSyllabusYearSelect = (year) => {
    const syllabusFile = programsState[selectedProgram].syllabusFiles[year]

    // Check if the syllabus file is a Google Drive link
    if (syllabusFile && syllabusFile.includes("drive.google.com")) {
      try {
        // For folder links, open directly in a new tab
        if (syllabusFile.includes("folders")) {
          window.open(syllabusFile, "_blank")
        } else {
          // For file links, extract ID and open
          const fileId = syllabusFile.match(/[-\w]{25,}/)?.[0]

          if (!fileId) {
            throw new Error("Could not extract file ID from URL")
          }

          // Use the format that requires authentication
          const authRequiredUrl = `https://drive.google.com/file/d/${fileId}/view?usp=drivesdk`

          // Open the link directly in a new tab
          window.open(authRequiredUrl, "_blank")
        }
      } catch (error) {
        // If there's an error (like invalid URL format), show the syllabus viewer instead
        console.error("Error opening Google Drive link:", error)
        setSelectedYear(year)
        setShowSyllabusViewer(true)
      }
    } else {
      // For files that are not Google Drive links, show the syllabus viewer
      setSelectedYear(year)
      setShowSyllabusViewer(true)
    }

    setActiveDropdown(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section with Back Button */}
      <div className="bg-gradient-to-r from-green-700 to-green-900 text-white py-8 md:py-12 relative">
        {/* Back Button - Aligned with the navbar logo */}
        <div className="container mx-auto px-4 md:px-6 relative">
          <Link
            to="/undergrad"
            className="absolute left-0 -top-6 inline-flex items-center text-green-800 hover:text-green-900 bg-white hover:bg-white/90 px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition-all duration-200 shadow-md z-10 text-sm md:text-base"
          >
            <ArrowLeft className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
            <span className="font-medium">Back to Colleges</span>
          </Link>
        </div>

        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="flex flex-col items-center text-center relative">
            {/* CAA Logo */}
            <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full p-1 flex-shrink-0 mb-4 md:mb-6 shadow-lg">
              <img src="/images/caa-logo.png" alt="CAA Logo" className="w-full h-full object-contain" />
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              College of Agriculture and Agri-Industries
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
              Explore our undergraduate programs designed to prepare you for success in agriculture, food technology,
              and sustainable farming practices.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 md:mb-8">Undergraduate Programs</h2>

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
                  <h3 className="text-xl font-bold text-gray-800">{program.name}</h3>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">{program.description}</p>
                <div className="flex justify-end">
                  <button className="text-green-600 hover:text-green-800 font-medium flex items-center text-sm">
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
            <div className="p-6 border-b bg-gradient-to-r from-green-50 to-white">
              <div className="flex justify-between items-center">
                <div className="w-8">{/* Empty div for spacing */}</div>
                <div className="text-center flex-1">
                  <h3 className="text-2xl font-bold text-green-700">{programsState[selectedProgram].name}</h3>
                  <p className="text-sm text-gray-600">Program Details</p>
                </div>
                <button
                  onClick={() => setShowProgramDetails(false)}
                  className="text-gray-400 hover:text-green-700 transition-colors p-1 rounded-full hover:bg-gray-100 w-8 h-8 flex items-center justify-center"
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
                    <span className="w-2 h-8 bg-green-600 rounded-full mr-3 inline-block"></span>
                    Program Overview
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">{programsState[selectedProgram].description}</p>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex items-start">
                    <Info className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">
                      This program is designed to prepare students for careers in the field of{" "}
                      {programsState[selectedProgram].name.split("(")[0].trim()}. Students will gain both theoretical
                      knowledge and practical skills through coursework, laboratory sessions, and field experiences.
                    </p>
                  </div>
                </div>

                {/* Program Specifications */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <ClipboardList className="h-5 w-5 text-green-600 mr-2" />
                    PROGRAM SPECIFICATIONS
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {programsState[selectedProgram].programSpecifications?.map((spec, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-start">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-2 mt-1.5"></span>
                        <span className="text-gray-700">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Program Educational Objectives */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <GraduationCap className="h-5 w-5 text-green-600 mr-2" />
                    PROGRAM EDUCATIONAL OBJECTIVES
                  </h2>
                  <p className="text-gray-700 mb-4">The {programsState[selectedProgram].name} program aims to:</p>
                  <div className="space-y-3">
                    {programsState[selectedProgram].programEducationalObjectives?.map((objective, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
                        <p className="text-gray-700">
                          <span className="font-semibold text-green-700">Objective {index + 1}:</span> {objective}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Program Outcomes */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <ClipboardList className="h-5 w-5 text-green-600 mr-2" />
                    PROGRAM OUTCOMES
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Upon successful completion of the {programsState[selectedProgram].name} program, graduates will be
                    able to:
                  </p>
                  <div className="space-y-3">
                    {programsState[selectedProgram].programOutcomes.map((outcome, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
                        <p className="text-gray-700">
                          <span className="font-semibold text-green-700">{outcome.id}:</span> {outcome.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Curriculum Section */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <BookOpen className="h-5 w-5 text-green-600 mr-2" />
                    CURRICULUM & SYLLABLES
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Curriculum Files */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-3">Curriculum Files</h3>
                      <div className="space-y-3 mb-4">
                        {Object.entries(programsState[selectedProgram].curriculumFiles).map(([year, fileUrl]) => (
                          <div key={year} className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-gray-800">{year} Curriculum</span>
                              <button
                                onClick={() => {
                                  setSelectedYear(year)
                                  setShowCurriculumViewer(true)
                                }}
                                className="text-green-600 hover:text-green-800 text-sm flex items-center"
                              >
                                <ExternalLink className="h-3 w-3 mr-1" />
                                View
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <button 
                        onClick={() => {
                          setSelectedYear("2023")
                          setShowCurriculumUpload(true)
                        }}
                        className="px-3 py-1.5 bg-white border border-green-600 text-green-600 rounded-lg hover:bg-green-50 text-sm flex items-center"
                      >
                        <Upload className="h-4 w-4 mr-1" />
                        Upload Curriculum
                      </button>
                    </div>

                    {/* Syllables */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-3">Course Syllabus</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Course syllables provide detailed information about individual courses, including learning
                        objectives, topics covered, assessment methods, and required readings.
                      </p>
                      <button
                        onClick={() => {
                          // Open the syllabus folder in a new tab
                          if (
                            programsState[selectedProgram].syllabusFiles &&
                            programsState[selectedProgram].syllabusFiles["2023"]
                          ) {
                            window.open(programsState[selectedProgram].syllabusFiles["2023"], "_blank")
                          } else {
                            alert("No syllabus files available for this program yet.")
                          }
                        }}
                        className="px-3 py-1.5 bg-white border border-green-600 text-green-600 rounded-lg hover:bg-green-50 text-sm flex items-center mr-2 inline-block"
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
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
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
                <h3 className="text-xl font-bold text-green-700">Upload Curriculum File</h3>
                <button
                  onClick={() => setShowCurriculumUpload(false)}
                  className="text-gray-400 hover:text-green-700 transition-colors p-1 rounded-full hover:bg-gray-100"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-100">
                <p className="text-gray-700">
                  Uploading curriculum for: <span className="font-semibold">{programsState[selectedProgram].name}</span>
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Please upload the curriculum file for this program. The file will be uploaded directly to Google
                  Drive.
                </p>
                {folderStatus && <p className="text-sm text-gray-600 mt-2 italic">Status: {folderStatus}</p>}
              </div>

              <div className="space-y-5">
                {/* Curriculum File Upload */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <div className="flex flex-col items-center">
                    <Upload className="h-12 w-12 text-gray-400 mb-3" />
                    <p className="text-gray-700 font-medium mb-2">
                      {fileToUpload ? fileToUpload.name : "Drag and drop your curriculum file here"}
                    </p>
                    <p className="text-gray-500 text-sm mb-4">or</p>
                    <label
                      htmlFor="curriculumFile"
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors cursor-pointer flex items-center"
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
                    <p className="mt-3 text-xs text-gray-500">Supported formats: JPG, PNG, PDF (max 10MB)</p>
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
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center"
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

      {/* Syllabus Upload Modal */}
      {showSyllabusUpload && selectedProgram !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl max-w-md w-full shadow-2xl">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-green-700">Upload Syllables File</h3>
                <button
                  onClick={() => setShowSyllabusUpload(false)}
                  className="text-gray-400 hover:text-green-700 transition-colors p-1 rounded-full hover:bg-gray-100"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-100">
                <p className="text-gray-700">
                  Uploading syllables for: <span className="font-semibold">{programsState[selectedProgram].name}</span>
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Please upload the syllabus file for this program. The file will be uploaded directly to Google Drive.
                </p>
                {syllabusStatus && <p className="text-sm text-gray-600 mt-2 italic">Status: {syllabusStatus}</p>}
              </div>

              <div className="space-y-5">
                {/* Syllabus File Upload */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <div className="flex flex-col items-center">
                    <BookOpen className="h-12 w-12 text-gray-400 mb-3" />
                    <p className="text-gray-700 font-medium mb-2">
                      {syllabusFileToUpload ? syllabusFileToUpload.name : "Drag and drop your syllables file here"}
                    </p>
                    <p className="text-gray-500 text-sm mb-4">or</p>
                    <label
                      htmlFor="syllabusFile"
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors cursor-pointer flex items-center"
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Browse Files
                    </label>
                    <input
                      type="file"
                      id="syllabusFile"
                      className="hidden"
                      accept="image/*,.pdf"
                      onChange={handleSyllabusFileSelect}
                    />
                    <p className="mt-3 text-xs text-gray-500">Supported formats: JPG, PNG, PDF (max 10MB)</p>
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="button"
                    onClick={() => setShowSyllabusUpload(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 mr-3 hover:bg-gray-50 transition-all"
                    disabled={isSyllabusUploading}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSyllabusUpload}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center"
                    disabled={!syllabusFileToUpload || isSyllabusUploading}
                  >
                    {isSyllabusUploading ? (
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
                <h3 className="text-xl font-bold text-green-700">Program Curriculum</h3>
                <p className="text-sm text-gray-600">
                  {programsState[selectedProgram].name} - {selectedYear}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setShowCurriculumUpload(true)
                    setShowCurriculumViewer(false)
                  }}
                  className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                >
                  <Upload className="h-4 w-4 mr-1" />
                  Upload New
                </button>
                <button
                  onClick={() => setShowCurriculumViewer(false)}
                  className="text-gray-400 hover:text-green-700 transition-colors p-1 rounded-full hover:bg-gray-100"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-auto p-4 bg-gray-50">
              <div className="flex justify-center">
                {programsState[selectedProgram].curriculumFiles[selectedYear]?.includes("drive.google.com") ? (
                  // If it's a Google Drive file
                  <iframe
                    src={getViewUrl(programsState[selectedProgram].curriculumFiles[selectedYear])}
                    className="w-full h-[600px] border-0 shadow-md rounded-md"
                    title={`${programsState[selectedProgram].name} Curriculum ${selectedYear}`}
                    allowFullScreen
                  />
                ) : (
                  // If it's a regular image or placeholder
                  <img
                    src={programsState[selectedProgram].curriculumFiles[selectedYear] || "/placeholder.svg"}
                    alt={`${programsState[selectedProgram].name} Curriculum ${selectedYear}`}
                    className="max-w-full h-auto shadow-md rounded-md"
                  />
                )}
              </div>
            </div>

            <div className="p-4 border-t bg-white">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">Click the download button to save this curriculum file</div>
                <a
                  href={programsState[selectedProgram].curriculumFiles[selectedYear]}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center"
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

      {/* Syllabus Viewer Modal */}
      {showSyllabusViewer && selectedProgram !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
            <div className="p-6 flex justify-between items-center border-b">
              <div>
                <h3 className="text-xl font-bold text-green-700">Program Syllables</h3>
                <p className="text-sm text-gray-600">
                  {programsState[selectedProgram].name} - {selectedYear}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setShowSyllabusUpload(true)
                    setShowSyllabusViewer(false)
                  }}
                  className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                >
                  <Upload className="h-4 w-4 mr-1" />
                  Upload New
                </button>
                <button
                  onClick={() => setShowSyllabusViewer(false)}
                  className="text-gray-400 hover:text-green-700 transition-colors p-1 rounded-full hover:bg-gray-100"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-auto p-4 bg-gray-50">
              <div className="flex justify-center">
                {programsState[selectedProgram].syllabusFiles[selectedYear]?.includes("drive.google.com") ? (
                  // If it's a Google Drive link
                  programsState[selectedProgram].syllabusFiles[selectedYear].includes("folders") ? (
                    // For folder links
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <p className="text-center mb-4">
                        This is a folder link. Click the button below to open the folder in Google Drive.
                      </p>
                      <div className="flex justify-center">
                        <a
                          href={programsState[selectedProgram].syllabusFiles[selectedYear]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center"
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
                      src={getViewUrl(programsState[selectedProgram].syllabusFiles[selectedYear])}
                      className="w-full h-[600px] border-0 shadow-md rounded-md"
                      title={`${programsState[selectedProgram].name} Syllables ${selectedYear}`}
                      allowFullScreen
                    />
                  )
                ) : (
                  // If it's a regular image or placeholder
                  <img
                    src={programsState[selectedProgram].syllabusFiles[selectedYear] || "/placeholder.svg"}
                    alt={`${programsState[selectedProgram].name} Syllables ${selectedYear}`}
                    className="max-w-full h-auto shadow-md rounded-md"
                  />
                )}
              </div>
            </div>

            <div className="p-4 border-t bg-white">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">Click the download button to save this syllables file</div>
                <a
                  href={programsState[selectedProgram].syllabusFiles[selectedYear]}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center"
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
  )
}

export default CAAUndergrad
