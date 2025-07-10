// import React from "react";
// import { GraduationCap, Cpu, Wrench, Code } from "lucide-react";
// import ProgramPageLayout from "@/components/layout/ProgramPageLayout";

// const CEITGraduate = () => {
//   const programs = [
//     {
//       id: 1,
//       name: "Master of Science in Engineering Management (MSEM)",
//       icon: GraduationCap,
//       color: "from-red-600 to-red-800",
//       curriculumFiles: {
//         2023: "/placeholder.svg?height=800&width=600",
//         2020: "/placeholder.svg?height=800&width=600",
//       },
//       syllabusFiles: {
//         2023: "https://example.com/msem-syllabus-2023",
//       },
//       description:
//         "The Master of Science in Engineering Management program combines advanced engineering knowledge with management principles to prepare leaders for technology-based organizations. Students learn project management, systems engineering, quality management, and strategic planning to effectively manage engineering teams and technical projects.",
//       programOutcomes: [
//         {
//           id: "EM01",
//           text: "Apply advanced engineering principles to solve complex technological and managerial problems.",
//         },
//         {
//           id: "EM02",
//           text: "Lead engineering teams and manage technical projects using appropriate methodologies.",
//         },
//         {
//           id: "EM03",
//           text: "Integrate business and engineering knowledge to make strategic decisions in technology organizations.",
//         },
//         {
//           id: "EM04",
//           text: "Apply quality management and process improvement techniques in engineering operations.",
//         },
//         {
//           id: "EM05",
//           text: "Evaluate and implement emerging technologies for competitive advantage.",
//         },
//         {
//           id: "EM06",
//           text: "Demonstrate ethical leadership and social responsibility in engineering management.",
//         },
//       ],
//       accreditation: "CHED Recognized Program",
//       programSpecifications: [
//         "Duration: 2 years (4 semesters)",
//         "Total Units: 42 units",
//         "Thesis: Required",
//         "Comprehensive Exam: Required",
//         "Mode of Delivery: Face-to-face with case studies and project work",
//       ],
//       programEducationalObjectives: [
//         "Develop engineering leaders who can manage technology-driven organizations effectively",
//         "Prepare professionals for senior management roles in engineering and technology companies",
//         "Foster innovation and strategic thinking in engineering management",
//         "Build competencies in project management and systems thinking",
//       ],
//       careers: [
//         "Engineering Manager",
//         "Technical Project Manager",
//         "R&D Director",
//         "Operations Manager",
//         "Technology Consultant",
//         "Product Development Manager",
//       ],
//     },
//     {
//       id: 2,
//       name: "Master of Science in Information Technology (MSIT)",
//       icon: Code,
//       color: "from-blue-600 to-blue-800",
//       curriculumFiles: {
//         2023: "/placeholder.svg?height=800&width=600",
//         2020: "/placeholder.svg?height=800&width=600",
//       },
//       syllabusFiles: {
//         2023: "https://example.com/msit-syllabus-2023",
//       },
//       description:
//         "The Master of Science in Information Technology program provides advanced knowledge in information systems, cybersecurity, data analytics, and emerging technologies. Students learn to design and implement enterprise-level IT solutions, manage complex information systems, and lead digital transformation initiatives.",
//       programOutcomes: [
//         {
//           id: "MSIT01",
//           text: "Design and implement advanced information systems and technology solutions.",
//         },
//         {
//           id: "MSIT02",
//           text: "Apply cybersecurity principles to protect organizational information assets.",
//         },
//         {
//           id: "MSIT03",
//           text: "Analyze big data and apply data science techniques to support decision-making.",
//         },
//         {
//           id: "MSIT04",
//           text: "Lead digital transformation initiatives and technology adoption strategies.",
//         },
//         {
//           id: "MSIT05",
//           text: "Conduct research in emerging IT areas and contribute to knowledge advancement.",
//         },
//         {
//           id: "MSIT06",
//           text: "Demonstrate ethical practices and professional leadership in IT management.",
//         },
//       ],
//       accreditation: "CHED Recognized Program",
//       programSpecifications: [
//         "Duration: 2 years (4 semesters)",
//         "Total Units: 39 units",
//         "Research Thesis: Required",
//         "Portfolio Project: Required",
//         "Mode of Delivery: Face-to-face with advanced laboratory work",
//       ],
//       programEducationalObjectives: [
//         "Develop IT professionals who can lead technology innovation and implementation",
//         "Prepare graduates for senior IT management and consulting roles",
//         "Foster research capabilities in emerging information technologies",
//         "Build expertise in cybersecurity, data analytics, and enterprise systems",
//       ],
//       careers: [
//         "IT Director",
//         "Chief Information Officer (CIO)",
//         "Cybersecurity Manager",
//         "Data Science Manager",
//         "IT Consultant",
//         "Digital Transformation Leader",
//       ],
//     },
//     {
//       id: 3,
//       name: "Master of Science in Electronics Engineering (MSECE)",
//       icon: Cpu,
//       color: "from-green-600 to-green-800",
//       curriculumFiles: {
//         2023: "/placeholder.svg?height=800&width=600",
//         2020: "/placeholder.svg?height=800&width=600",
//       },
//       syllabusFiles: {
//         2023: "https://example.com/msece-syllabus-2023",
//       },
//       description:
//         "The Master of Science in Electronics Engineering program provides advanced knowledge in electronic systems design, signal processing, communications, and microelectronics. Students conduct research in cutting-edge areas such as IoT, wireless communications, embedded systems, and semiconductor devices.",
//       programOutcomes: [
//         {
//           id: "MSECE01",
//           text: "Conduct advanced research in electronics engineering and contribute to knowledge creation.",
//         },
//         {
//           id: "MSECE02",
//           text: "Design complex electronic systems and devices using state-of-the-art technologies.",
//         },
//         {
//           id: "MSECE03",
//           text: "Apply advanced signal processing and communication system design principles.",
//         },
//         {
//           id: "MSECE04",
//           text: "Develop innovative solutions for emerging technologies in electronics and communications.",
//         },
//         {
//           id: "MSECE05",
//           text: "Demonstrate mastery of modern design tools and simulation software.",
//         },
//         {
//           id: "MSECE06",
//           text: "Communicate research findings effectively to technical and scientific communities.",
//         },
//       ],
//       accreditation: "CHED Recognized Program",
//       programSpecifications: [
//         "Duration: 2 years (4 semesters)",
//         "Total Units: 36 units",
//         "Research Thesis: Required",
//         "Comprehensive Exam: Required",
//         "Mode of Delivery: Face-to-face with advanced research laboratories",
//       ],
//       programEducationalObjectives: [
//         "Develop electronics engineers who can conduct advanced research and development",
//         "Prepare graduates for leadership roles in electronics and telecommunications industries",
//         "Foster innovation in emerging technologies such as IoT, 5G, and semiconductor design",
//         "Build research capabilities for pursuing doctoral studies",
//       ],
//       careers: [
//         "Senior Electronics Engineer",
//         "R&D Engineer",
//         "Telecommunications Specialist",
//         "IC Design Engineer",
//         "Research Scientist",
//         "Technology Development Manager",
//       ],
//     },
//   ];

//   return (
//     <ProgramPageLayout
//       title="Graduate Programs"
//       description="Advance your career with our graduate programs designed to develop technical leaders and researchers in engineering and information technology."
//       programs={programs}
//       themeColor="red"
//       isGraduate={true}
//       bannerImage="/images/csu-cc/CEIT-logo.png"
//       collegeName="College of Engineering and Information Technology - CSU Cabadbaran Campus"
//     />
//   );
// };

// export default CEITGraduate;
