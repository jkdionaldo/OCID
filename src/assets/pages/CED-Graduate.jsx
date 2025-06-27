"use client"

import { Link } from "react-router-dom"
import { useState } from "react"
import { useGoogleLogin } from "@react-oauth/google"
import {
  X,
  Upload,
  FileText,
  Calculator,
  ArrowLeft,
  ChevronRight,
  ExternalLink,
  Info,
  BookOpen,
  GraduationCap,
  Microscope,
  Building2,
  Languages,
  BookText,
  Atom,
  Users,
  ClipboardList,
  Briefcase,
} from "lucide-react"
import { getViewUrl } from "../utils/googleDriveUtils"

const CEDGraduate = () => {
  // Graduate programs for CED with updated icons
  const programs = [
    {
      id: 1,
      name: "Master of Science in Mathematics Education",
      icon: Calculator,
      color: "from-blue-600 to-blue-800",
      curriculumFiles: {
        2023: "https://drive.google.com/file/d/1Yx5Yx5Yx5Yx5Yx5Yx5Yx5Yx5Yx5Yx5/view?usp=sharing",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/19jZ1LQtXHfrw7mdiaGKuWmIFaPelgrEA",
      },
      description:
        "The MASTER OF SCIENCE IN MATHEMATICS EDUCATION program focuses on advanced mathematical concepts, teaching methodologies, and educational research. The program prepares graduates to become effective mathematics educators at various levels, develop innovative teaching strategies, and contribute to the field of mathematics education research.",
      programOutcomes: [
        {
          id: "ME01",
          text: "Apply advanced mathematical knowledge and pedagogical theories to enhance mathematics teaching and learning.",
        },
        {
          id: "ME02",
          text: "Design and conduct original research in mathematics education using appropriate methodologies and statistical analyses.",
        },
        {
          id: "ME03",
          text: "Communicate mathematical concepts effectively to diverse audiences through clear instruction, writing, and presentations.",
        },
        {
          id: "ME04",
          text: "Function effectively as a member or leader in educational teams to achieve common goals in mathematics education.",
        },
        {
          id: "ME05",
          text: "Recognize professional responsibilities and make informed judgments in mathematics education based on ethical principles and educational standards.",
        },
        {
          id: "ME06",
          text: "Engage in independent learning for continual professional development as a mathematics educator.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 2 years (4 semesters)",
        "Total Units: 36 units",
        "Research Thesis: Required",
        "Teaching Practicum: Required",
        "Mode of Delivery: Face-to-face with online components",
      ],
      programEducationalObjectives: [
        "Develop mathematics educators with advanced knowledge in mathematical concepts and teaching methodologies",
        "Prepare graduates to conduct research in mathematics education",
        "Equip students with skills to design innovative curriculum materials",
        "Foster leadership in mathematics education at various levels",
      ],
      careers: [
        "Mathematics Education Specialist",
        "Mathematics Department Chair",
        "Mathematics Curriculum Developer",
        "Educational Researcher",
        "Mathematics Teacher Trainer",
        "Academic Administrator",
      ],
    },
    {
      id: 2,
      name: "Doctor of Philosophy in Mathematics Education (PhDMathEd)",
      icon: GraduationCap,
      color: "from-blue-700 to-blue-900",
      curriculumFiles: {
        2023: "https://drive.google.com/file/d/2Yx5Yx5Yx5Yx5Yx5Yx5Yx5Yx5Yx5Yx5/view?usp=sharing",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/19jZ1LQtXHfrw7mdiaGKuWmIFaPelgrEA",
      },
      description:
        "The DOCTOR OF PHILOSOPHY IN MATHEMATICS EDUCATION program is designed for educators seeking to become leaders in mathematics education research, curriculum development, and educational policy. The program emphasizes advanced research methodologies, theoretical frameworks in mathematics education, and the development of innovative approaches to mathematics teaching and learning.",
      programOutcomes: [
        {
          id: "PME01",
          text: "Demonstrate expertise in advanced mathematical concepts and educational theories to lead innovations in mathematics education.",
        },
        {
          id: "PME02",
          text: "Design and conduct sophisticated research that contributes significantly to the field of mathematics education.",
        },
        {
          id: "PME03",
          text: "Communicate complex mathematical and educational concepts effectively to diverse audiences through scholarly writing and presentations.",
        },
        {
          id: "PME04",
          text: "Lead educational teams and initiatives to improve mathematics education at institutional and policy levels.",
        },
        {
          id: "PME05",
          text: "Evaluate and develop mathematics education policies based on ethical principles, research evidence, and educational standards.",
        },
        {
          id: "PME06",
          text: "Contribute to the advancement of mathematics education through original research and scholarly activities.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 3-5 years",
        "Total Units: 60 units",
        "Dissertation: Required",
        "Comprehensive Examination: Required",
        "Mode of Delivery: Face-to-face with research components",
      ],
      programEducationalObjectives: [
        "Develop scholars who can contribute to the advancement of mathematics education through original research",
        "Prepare leaders who can influence educational policy in mathematics education",
        "Equip graduates with skills to design and evaluate mathematics education programs",
        "Foster innovation in mathematics teaching and learning at all educational levels",
      ],
      careers: [
        "University Professor",
        "Mathematics Education Researcher",
        "Educational Policy Advisor",
        "Mathematics Education Program Director",
        "Educational Consultant",
        "Academic Dean",
      ],
    },
    {
      id: 3,
      name: "Master of Science Education With specialization In Biology",
      icon: Microscope,
      color: "from-blue-500 to-blue-700",
      curriculumFiles: {
        2023: "https://drive.google.com/file/d/3Yx5Yx5Yx5Yx5Yx5Yx5Yx5Yx5Yx5Yx5/view?usp=sharing",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/19jZ1LQtXHfrw7mdiaGKuWmIFaPelgrEA",
      },
      description:
        "The MASTER OF SCIENCE EDUCATION WITH SPECIALIZATION IN BIOLOGY program combines advanced biological concepts with educational methodologies. The program prepares biology educators to enhance their teaching practices, develop innovative curriculum materials, and conduct research in biology education.",
      programOutcomes: [
        {
          id: "BIO01",
          text: "Apply advanced biological knowledge and educational theories to enhance biology teaching and learning.",
        },
        {
          id: "BIO02",
          text: "Design and conduct research in biology education using appropriate scientific and educational methodologies.",
        },
        {
          id: "BIO03",
          text: "Communicate biological concepts effectively through clear instruction, scientific writing, and presentations.",
        },
        {
          id: "BIO04",
          text: "Function effectively in collaborative educational and scientific teams to achieve common goals in biology education.",
        },
        {
          id: "BIO05",
          text: "Make informed judgments in biology education based on ethical principles, scientific evidence, and educational standards.",
        },
        {
          id: "BIO06",
          text: "Engage in continuous professional development as a biology educator through independent learning and scientific inquiry.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 2 years (4 semesters)",
        "Total Units: 36 units",
        "Research Thesis: Required",
        "Laboratory Work: Required",
        "Mode of Delivery: Face-to-face with laboratory components",
      ],
      programEducationalObjectives: [
        "Develop biology educators with advanced knowledge in biological sciences and teaching methodologies",
        "Prepare graduates to conduct research in biology education",
        "Equip students with skills to design innovative biology curriculum materials",
        "Foster leadership in science education with focus on biological sciences",
      ],
      careers: [
        "Biology Education Specialist",
        "Science Department Chair",
        "Biology Curriculum Developer",
        "Science Education Researcher",
        "Biology Teacher Trainer",
        "Science Program Coordinator",
      ],
    },
    {
      id: 4,
      name: "Doctor of Education Major in Educational Management",
      icon: Building2,
      color: "from-blue-700 to-blue-900",
      curriculumFiles: {
        2023: "https://drive.google.com/file/d/1Ax5Ax5Ax5Ax5Ax5Ax5Ax5Ax5Ax5Ax5/view?usp=sharing",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/19jZ1LQtXHfrw7mdiaGKuWmIFaPelgrEA",
      },
      description:
        "The DOCTOR OF EDUCATION MAJOR IN EDUCATIONAL MANAGEMENT program prepares educational leaders for advanced roles in school administration, policy development, and institutional leadership. The program emphasizes organizational theory, educational policy analysis, leadership development, and research methodologies applicable to educational management.",
      programOutcomes: [
        {
          id: "EM01",
          text: "Apply advanced knowledge of educational management theories and practices to address complex challenges in educational institutions.",
        },
        {
          id: "EM02",
          text: "Design and conduct research that contributes to the improvement of educational management and leadership practices.",
        },
        {
          id: "EM03",
          text: "Communicate effectively with educational stakeholders through clear writing, presentations, and policy recommendations.",
        },
        {
          id: "EM04",
          text: "Lead educational organizations and initiatives to achieve institutional goals and implement positive change.",
        },
        {
          id: "EM05",
          text: "Evaluate and develop educational policies based on ethical principles, research evidence, and educational standards.",
        },
        {
          id: "EM06",
          text: "Engage in continuous professional development as an educational leader through reflective practice and scholarly activities.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 3-5 years",
        "Total Units: 60 units",
        "Dissertation: Required",
        "Comprehensive Examination: Required",
        "Mode of Delivery: Face-to-face with field components",
      ],
      programEducationalObjectives: [
        "Develop educational leaders who can effectively manage educational institutions",
        "Prepare scholars who can contribute to the field of educational management through research",
        "Equip graduates with skills to formulate and implement educational policies",
        "Foster innovation in educational administration and leadership",
      ],
      careers: [
        "School Principal",
        "University Administrator",
        "Educational Policy Analyst",
        "Educational Consultant",
        "Academic Dean",
        "Educational Program Director",
      ],
    },
    {
      id: 5,
      name: "Master of Arts in Educational Management Major in English Language Teaching",
      icon: Languages,
      color: "from-blue-500 to-blue-700",
      curriculumFiles: {
        2023: "https://drive.google.com/file/d/2Zx5Zx5Zx5Zx5Zx5Zx5Zx5Zx5Zx5Zx5/view?usp=sharing",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/19jZ1LQtXHfrw7mdiaGKuWmIFaPelgrEA",
      },
      description:
        "The MASTER OF ARTS IN EDUCATIONAL MANAGEMENT MAJOR IN ENGLISH LANGUAGE TEACHING program combines principles of educational leadership with specialized knowledge in English language pedagogy. The program prepares graduates to lead English language programs, develop curriculum, and implement effective teaching methodologies in various educational settings.",
      programOutcomes: [
        {
          id: "ELT01",
          text: "Apply advanced knowledge of educational management and English language teaching methodologies to enhance language programs.",
        },
        {
          id: "ELT02",
          text: "Design and conduct research in English language teaching using appropriate linguistic and educational methodologies.",
        },
        {
          id: "ELT03",
          text: "Communicate effectively in English and about English language teaching through clear instruction, writing, and presentations.",
        },
        {
          id: "ELT04",
          text: "Lead English language programs and initiatives to achieve institutional goals and improve language education.",
        },
        {
          id: "ELT05",
          text: "Evaluate and develop English language teaching policies based on linguistic theories, research evidence, and educational standards.",
        },
        {
          id: "ELT06",
          text: "Engage in continuous professional development as an English language educator and leader through reflective practice.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 2 years (4 semesters)",
        "Total Units: 36 units",
        "Research Thesis: Required",
        "Teaching Practicum: Required",
        "Mode of Delivery: Face-to-face with online components",
      ],
      programEducationalObjectives: [
        "Develop educational leaders with specialized knowledge in English language teaching",
        "Prepare graduates to manage English language programs effectively",
        "Equip students with skills to design and implement English language curriculum",
        "Foster innovation in English language teaching methodologies",
      ],
      careers: [
        "English Language Program Director",
        "English Department Chair",
        "Language School Administrator",
        "English Curriculum Developer",
        "Language Assessment Specialist",
        "English Language Teacher Trainer",
      ],
    },
    {
      id: 6,
      name: "Master of Arts in Education Major in Educational Management",
      icon: Users,
      color: "from-blue-600 to-blue-800",
      curriculumFiles: {
        2023: "https://drive.google.com/file/d/2Ax5Ax5Ax5Ax5Ax5Ax5Ax5Ax5Ax5Ax5/view?usp=sharing",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/19jZ1LQtXHfrw7mdiaGKuWmIFaPelgrEA",
      },
      description:
        "The MASTER OF ARTS IN EDUCATION MAJOR IN EDUCATIONAL MANAGEMENT program prepares educators for leadership roles in school administration and educational organizations. The program focuses on organizational theory, educational leadership, policy analysis, and research methodologies applicable to educational settings.",
      programOutcomes: [
        {
          id: "EDM01",
          text: "Apply theories and principles of educational management to address challenges in educational institutions.",
        },
        {
          id: "EDM02",
          text: "Design and conduct research that contributes to the improvement of educational management practices.",
        },
        {
          id: "EDM03",
          text: "Communicate effectively with educational stakeholders through clear writing, presentations, and policy recommendations.",
        },
        {
          id: "EDM04",
          text: "Lead educational teams and initiatives to achieve institutional goals and implement positive change.",
        },
        {
          id: "EDM05",
          text: "Evaluate and develop educational policies based on ethical principles, research evidence, and educational standards.",
        },
        {
          id: "EDM06",
          text: "Engage in continuous professional development as an educational leader through reflective practice.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 2 years (4 semesters)",
        "Total Units: 36 units",
        "Research Thesis: Required",
        "Field Work: Required",
        "Mode of Delivery: Face-to-face with field components",
      ],
      programEducationalObjectives: [
        "Develop educational leaders with strong management and administrative skills",
        "Prepare graduates to implement effective organizational strategies in educational settings",
        "Equip students with skills to analyze and develop educational policies",
        "Foster ethical leadership in educational institutions",
      ],
      careers: [
        "School Administrator",
        "Department Head",
        "Educational Program Manager",
        "Academic Coordinator",
        "School Principal",
        "Educational Consultant",
      ],
    },
    {
      id: 7,
      name: "Master of Arts in Education (MAEd), Major in Teaching Reading and Literature (TRL)",
      icon: BookText,
      color: "from-blue-500 to-blue-700",
      curriculumFiles: {
        2023: "https://drive.google.com/file/d/3Zx5Zx5Zx5Zx5Zx5Zx5Zx5Zx5Zx5Zx5/view?usp=sharing",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/19jZ1LQtXHfrw7mdiaGKuWmIFaPelgrEA",
      },
      description:
        "The MASTER OF ARTS IN EDUCATION MAJOR IN TEACHING READING AND LITERATURE program focuses on advanced literacy instruction, literary analysis, and reading pedagogy. The program prepares educators to become reading specialists, literacy coaches, and literature teachers who can enhance students' reading comprehension and literary appreciation.",
      programOutcomes: [
        {
          id: "TRL01",
          text: "Apply advanced knowledge of reading theories, literary analysis, and pedagogical approaches to enhance literacy instruction.",
        },
        {
          id: "TRL02",
          text: "Design and conduct research in reading education and literature teaching using appropriate methodologies.",
        },
        {
          id: "TRL03",
          text: "Communicate effectively about literature and reading instruction through clear teaching, writing, and presentations.",
        },
        {
          id: "TRL04",
          text: "Lead literacy programs and initiatives to improve reading and literature education in various settings.",
        },
        {
          id: "TRL05",
          text: "Evaluate and develop literacy policies based on reading research, literary theories, and educational standards.",
        },
        {
          id: "TRL06",
          text: "Engage in continuous professional development as a reading and literature educator through reflective practice.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 2 years (4 semesters)",
        "Total Units: 36 units",
        "Research Thesis: Required",
        "Teaching Practicum: Required",
        "Mode of Delivery: Face-to-face with online components",
      ],
      programEducationalObjectives: [
        "Develop reading and literature specialists with advanced knowledge in literacy instruction",
        "Prepare graduates to implement effective reading and literature teaching strategies",
        "Equip students with skills to design literacy programs and interventions",
        "Foster appreciation for literature and effective reading instruction",
      ],
      careers: [
        "Reading Specialist",
        "Literacy Coach",
        "Literature Teacher",
        "Reading Program Coordinator",
        "Literacy Curriculum Developer",
        "Reading Intervention Specialist",
      ],
    },
    {
      id: 8,
      name: "Doctor Of Philosophy in Science Education with Specialization in Physics (PhDScied Physics)",
      icon: Atom,
      color: "from-blue-700 to-blue-900",
      curriculumFiles: {
        2023: "https://drive.google.com/file/d/3Ax5Ax5Ax5Ax5Ax5Ax5Ax5Ax5Ax5Ax5/view?usp=sharing",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/19jZ1LQtXHfrw7mdiaGKuWmIFaPelgrEA",
      },
      description:
        "The DOCTOR OF PHILOSOPHY IN SCIENCE EDUCATION WITH SPECIALIZATION IN PHYSICS program prepares educators to become leaders in physics education research, curriculum development, and advanced physics instruction. The program emphasizes advanced physics concepts, educational research methodologies, and innovative approaches to physics teaching and learning.",
      programOutcomes: [
        {
          id: "PSP01",
          text: "Demonstrate expertise in advanced physics concepts and educational theories to lead innovations in physics education.",
        },
        {
          id: "PSP02",
          text: "Design and conduct sophisticated research that contributes significantly to the field of physics education.",
        },
        {
          id: "PSP03",
          text: "Communicate complex physics concepts effectively to diverse audiences through scholarly writing and presentations.",
        },
        {
          id: "PSP04",
          text: "Lead physics education programs and initiatives to improve science education at institutional and policy levels.",
        },
        {
          id: "PSP05",
          text: "Evaluate and develop physics education policies based on scientific principles, research evidence, and educational standards.",
        },
        {
          id: "PSP06",
          text: "Contribute to the advancement of physics education through original research and scholarly activities.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 3-5 years",
        "Total Units: 60 units",
        "Dissertation: Required",
        "Comprehensive Examination: Required",
        "Mode of Delivery: Face-to-face with laboratory components",
      ],
      programEducationalObjectives: [
        "Develop scholars who can contribute to the advancement of physics education through original research",
        "Prepare leaders who can influence educational policy in science education",
        "Equip graduates with skills to design and evaluate physics education programs",
        "Foster innovation in physics teaching and learning at all educational levels",
      ],
      careers: [
        "Physics Education Researcher",
        "University Professor",
        "Science Education Policy Advisor",
        "Physics Education Program Director",
        "Science Education Consultant",
        "Academic Dean for Science Programs",
      ],
    },
    {
      id: 9,
      name: "Master of Science Education with specialization in Physics",
      icon: Atom,
      color: "from-blue-500 to-blue-700",
      curriculumFiles: {
        2023: "https://drive.google.com/file/d/3Dx5Dx5Dx5Dx5Dx5Dx5Dx5Dx5Dx5Dx5/view?usp=sharing",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/19jZ1LQtXHfrw7mdiaGKuWmIFaPelgrEA",
      },
      description:
        "The MASTER OF SCIENCE EDUCATION WITH SPECIALIZATION IN PHYSICS program combines advanced physics concepts with educational methodologies. The program prepares physics educators to enhance their teaching practices, develop innovative curriculum materials, and conduct research in physics education.",
      programOutcomes: [
        {
          id: "PHY01",
          text: "Apply advanced physics knowledge and educational theories to enhance physics teaching and learning.",
        },
        {
          id: "PHY02",
          text: "Design and conduct research in physics education using appropriate scientific and educational methodologies.",
        },
        {
          id: "PHY03",
          text: "Communicate physics concepts effectively through clear instruction, scientific writing, and presentations.",
        },
        {
          id: "PHY04",
          text: "Function effectively in collaborative educational and scientific teams to achieve common goals in physics education.",
        },
        {
          id: "PHY05",
          text: "Make informed judgments in physics education based on ethical principles, scientific evidence, and educational standards.",
        },
        {
          id: "PHY06",
          text: "Engage in continuous professional development as a physics educator through independent learning and scientific inquiry.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 2 years (4 semesters)",
        "Total Units: 36 units",
        "Research Thesis: Required",
        "Laboratory Work: Required",
        "Mode of Delivery: Face-to-face with laboratory components",
      ],
      programEducationalObjectives: [
        "Develop physics educators with advanced knowledge in physics and teaching methodologies",
        "Prepare graduates to conduct research in physics education",
        "Equip students with skills to design innovative physics curriculum materials",
        "Foster leadership in science education with focus on physics",
      ],
      careers: [
        "Physics Education Specialist",
        "Science Department Chair",
        "Physics Curriculum Developer",
        "Science Education Researcher",
        "Physics Teacher Trainer",
        "Science Program Coordinator",
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

  // Google login hook for file upload
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      // Handle curriculum file upload
      if (fileToUpload && selectedProgram !== null && !showSyllabusUpload) {
        try {
          setIsUploading(true)
          setFolderStatus("Starting upload process...")

          // Hardcoded folder ID for CED Graduate - PRESERVE EXISTING FOLDER ID
          const targetFolderId = "1qilGYdnZCNc9iYbKmTfU6ovEYEzSdHCW"

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
      else if (syllabusFileToUpload && selectedProgram !== null && showSyllabusUpload) {
        try {
          setIsSyllabusUploading(true)
          setSyllabusStatus("Starting upload process...")

          // Hardcoded folder ID for CED Graduate Syllabus - PRESERVE EXISTING FOLDER ID
          const syllabusTargetFolderId = "1qilGYdnZCNc9iYbKmTfU6ovEYEzSdHCW" // Using the same folder ID for now

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

          // Update program state with the Google Drive link
          const updatedPrograms = [...programsState]
          updatedPrograms[selectedProgram].syllabusFiles[selectedYear] = fileLink
          setProgramsState(updatedPrograms)

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section with Back Button */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white py-12 relative">
        {/* Back Button - Aligned with the navbar logo */}
        <div className="container mx-auto px-6 relative">
          <Link
            to="/colleges"
            className="absolute left-0 -top-6 inline-flex items-center text-blue-800 hover:text-blue-900 bg-white hover:bg-white/90 px-4 py-2 rounded-lg transition-all duration-200 shadow-md z-10"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span className="font-medium">Back to Colleges</span>
          </Link>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center text-center relative">
            {/* CED Logo */}
            <div className="w-24 h-24 bg-white rounded-full p-1 flex-shrink-0 mb-6 shadow-lg">
              <img src="/images/ced-logo.png" alt="CED Logo" className="w-full h-full object-contain" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">College of Education</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Explore our graduate programs designed to advance your career in education, develop specialized expertise,
              and prepare you for leadership roles in educational institutions.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Graduate Programs</h2>

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
                  <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center text-sm">
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
            <div className="p-6 border-b bg-gradient-to-r from-blue-50 to-white">
              <div className="flex justify-between items-center">
                <div className="w-8">{/* Empty div for spacing */}</div>
                <div className="text-center flex-1">
                  <h3 className="text-2xl font-bold text-blue-700">{programsState[selectedProgram].name}</h3>
                  <p className="text-sm text-gray-600">Program Details</p>
                </div>
                <button
                  onClick={() => setShowProgramDetails(false)}
                  className="text-gray-400 hover:text-blue-700 transition-colors p-1 rounded-full hover:bg-gray-100 w-8 h-8 flex items-center justify-center"
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
                    <span className="w-2 h-8 bg-blue-600 rounded-full mr-3 inline-block"></span>
                    Program Overview
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">{programsState[selectedProgram].description}</p>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex items-start">
                    <Info className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">
                      This program is designed to prepare students for advanced careers in the field of{" "}
                      {programsState[selectedProgram].name.split("(")[0].trim()}. Students will gain both theoretical
                      knowledge and practical skills through coursework, research, and project-based learning.
                    </p>
                  </div>
                </div>

                {/* Program Specifications */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <ClipboardList className="h-5 w-5 text-blue-600 mr-2" />
                    PROGRAM SPECIFICATIONS
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {programsState[selectedProgram].programSpecifications?.map((spec, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 mt-1.5"></span>
                        <span className="text-gray-700">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Program Educational Objectives */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <GraduationCap className="h-5 w-5 text-blue-600 mr-2" />
                    PROGRAM EDUCATIONAL OBJECTIVES
                  </h2>
                  <p className="text-gray-700 mb-4">The {programsState[selectedProgram].name} program aims to:</p>
                  <div className="space-y-3">
                    {programsState[selectedProgram].programEducationalObjectives?.map((objective, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                        <p className="text-gray-700">
                          <span className="font-semibold text-blue-700">Objective {index + 1}:</span> {objective}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Program Outcomes */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <ClipboardList className="h-5 w-5 text-blue-600 mr-2" />
                    PROGRAM OUTCOMES
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Upon successful completion of the {programsState[selectedProgram].name} program, graduates will be
                    able to:
                  </p>
                  <div className="space-y-3">
                    {programsState[selectedProgram].programOutcomes.map((outcome, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                        <p className="text-gray-700">
                          <span className="font-semibold text-blue-700">{outcome.id}:</span> {outcome.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Curriculum Section */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                    CURRICULUM & SYLLABUS
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
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setSelectedYear(year)
                                  setShowCurriculumViewer(true)
                                }}
                                className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
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
                          e.stopPropagation()
                          setSelectedYear("2023")
                          setShowCurriculumUpload(true)
                        }}
                        className="px-3 py-1.5 bg-white border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 text-sm flex items-center"
                      >
                        <Upload className="h-4 w-4 mr-1" />
                        Upload Curriculum
                      </button>
                    </div>

                    {/* Syllables */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-3">Course Syllabus</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Course syllabus provide detailed information about individual courses, including learning
                        objectives, topics covered, assessment methods, and required readings.
                      </p>
                      <div className="flex space-x-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
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
                          className="px-3 py-1.5 bg-white border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 text-sm flex items-center"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          View Syllables
                        </button>
                       
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="p-4 border-t bg-white flex justify-end">
              <button
                onClick={() => setShowProgramDetails(false)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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
                <h3 className="text-xl font-bold text-blue-700">Upload Curriculum File</h3>
                <button
                  onClick={() => setShowCurriculumUpload(false)}
                  className="text-gray-400 hover:text-blue-700 transition-colors p-1 rounded-full hover:bg-gray-100"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
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
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer flex items-center"
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
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
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
                <h3 className="text-xl font-bold text-blue-700">Upload Syllabus File</h3>
                <button
                  onClick={() => setShowSyllabusUpload(false)}
                  className="text-gray-400 hover:text-blue-700 transition-colors p-1 rounded-full hover:bg-gray-100"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-gray-700">
                  Uploading syllabus for: <span className="font-semibold">{programsState[selectedProgram].name}</span>
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
                    <Upload className="h-12 w-12 text-gray-400 mb-3" />
                    <p className="text-gray-700 font-medium mb-2">
                      {syllabusFileToUpload ? syllabusFileToUpload.name : "Drag and drop your syllabus file here"}
                    </p>
                    <p className="text-gray-500 text-sm mb-4">or</p>
                    <label
                      htmlFor="syllabusFile"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer flex items-center"
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
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
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
                <h3 className="text-xl font-bold text-blue-700">Program Curriculum</h3>
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
                  className="text-gray-400 hover:text-blue-700 transition-colors p-1 rounded-full hover:bg-gray-100"
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
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
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
                <h3 className="text-xl font-bold text-blue-700">Program Syllables</h3>
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
                  className="text-gray-400 hover:text-blue-700 transition-colors p-1 rounded-full hover:bg-gray-100"
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
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
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
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
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

export default CEDGraduate
