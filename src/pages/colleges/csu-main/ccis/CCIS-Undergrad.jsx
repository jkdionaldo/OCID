import React from "react";
import { CodeSquare, Network, Database } from "lucide-react";
import ProgramPageLayout from "@/components/layout/ProgramPageLayout";

const CCISUndergrad = () => {
  const programs = [
    {
      id: 1,
      name: "Bachelor of Science in Computer Science (BSCS)",
      icon: CodeSquare,
      color: "from-red-600 to-red-800",
      curriculumFiles: {
        2022: "https://drive.google.com/file/d/1KvvNyQ4H3B0nEohCLQD_XenpoCYm4xXS/view?usp=sharing",
        2020: "/placeholder.svg?height=800&width=600",
        2014: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/1Dv17k6faXw1t5oOXH55LjEK-vne5j8Zg",
      },
      description:
        "The BACHELOR OF SCIENCE IN COMPUTER SCIENCE (BSCS) program provides students with a strong foundation in computer science theory and practice. Students learn programming languages, algorithms, data structures, software engineering, and computer systems. Graduates are prepared for careers in software development, systems analysis, and further studies in computer science.",
      programOutcomes: [
        {
          id: "CS01",
          text: "Apply knowledge of computing fundamentals, mathematics, and algorithms to solve complex computing problems.",
        },
        {
          id: "CS02",
          text: "Design, implement, and evaluate computer-based solutions to meet specific requirements.",
        },
        {
          id: "CS03",
          text: "Communicate effectively with a range of audiences about technical information.",
        },
        {
          id: "CS04",
          text: "Apply computer science theory and software development principles to produce computing-based solutions.",
        },
        {
          id: "CS05",
          text: "Function effectively as a member or leader of a team engaged in activities appropriate to computer science.",
        },
        {
          id: "CS06",
          text: "Recognize professional responsibilities and make informed judgments based on legal and ethical principles.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 155 units",
        "Practicum: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with laboratory work",
      ],
      programEducationalObjectives: [
        "Produce graduates who can apply computer science principles to solve complex computational problems",
        "Develop professionals who can design and implement software systems for various domains",
        "Prepare students for advanced studies and research in specialized areas of computer science",
        "Foster innovation and ethical practice in computing and information technology",
      ],
      careers: [
        "Software Developer",
        "Systems Analyst",
        "Database Administrator",
        "AI/ML Engineer",
        "Research Scientist",
      ],
    },
    {
      id: 2,
      name: "Bachelor of Science in Information Technology (BSIT)",
      icon: Network,
      color: "from-red-500 to-red-700",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
        2014: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/1Dv17k6faXw1t5oOXH55LjEK-vne5j8Zg",
      },
      description:
        "The BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY (BSIT) program focuses on the practical application of computing technology in business and organizational contexts. Students learn about network administration, web development, database management, and IT project management. Graduates are prepared for careers in IT support, network administration, web development, and systems integration.",
      programOutcomes: [
        {
          id: "IT01",
          text: "Apply knowledge of computing and mathematics appropriate to the discipline.",
        },
        {
          id: "IT02",
          text: "Analyze a problem and identify the computing requirements appropriate to its solution.",
        },
        {
          id: "IT03",
          text: "Design, implement, and evaluate a computer-based system, process, component, or program to meet desired needs.",
        },
        {
          id: "IT04",
          text: "Function effectively on teams to accomplish a common goal.",
        },
        {
          id: "IT05",
          text: "Understand professional, ethical, legal, security, and social issues and responsibilities.",
        },
        {
          id: "IT06",
          text: "Communicate effectively with a range of audiences.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 155 units",
        "Practicum: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with laboratory work",
      ],
      programEducationalObjectives: [
        "Produce graduates who can apply IT principles to solve business and organizational problems",
        "Develop professionals who can implement and manage IT infrastructure and services",
        "Prepare students for industry certifications and specialized IT roles",
        "Foster adaptability and continuous learning in the rapidly evolving IT landscape",
      ],
      careers: [
        "Network Administrator",
        "IT Support Specialist",
        "Web Developer",
        "Systems Integrator",
        "Cloud Engineer",
      ],
    },
    {
      id: 3,
      name: "Bachelor of Science in Information System (BSIS)",
      icon: Database,
      color: "from-red-400 to-red-600",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
        2014: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/1Dv17k6faXw1t5oOXH55LjEK-vne5j8Zg",
      },
      description:
        "The BACHELOR OF SCIENCE IN INFORMATION SYSTEM (BSIS) program focuses on the integration of information technology solutions and business processes. Students learn about database design, systems analysis and design, business process management, and enterprise systems. Graduates are prepared for careers in systems analysis, database administration, business analysis, and IT consulting.",
      programOutcomes: [
        {
          id: "IS01",
          text: "Apply knowledge of computing and business concepts appropriate to information systems development.",
        },
        {
          id: "IS02",
          text: "Analyze business requirements and design appropriate information system solutions.",
        },
        {
          id: "IS03",
          text: "Implement and evaluate information systems to support business processes.",
        },
        {
          id: "IS04",
          text: "Manage information systems projects through their entire lifecycle.",
        },
        {
          id: "IS05",
          text: "Communicate effectively with both technical and non-technical stakeholders.",
        },
        {
          id: "IS06",
          text: "Apply ethical principles and professional standards in information systems practice.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 155 units",
        "Practicum: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with laboratory work",
      ],
      programEducationalObjectives: [
        "Produce graduates who can integrate information systems with business processes",
        "Develop professionals who can analyze business requirements and design appropriate information systems",
        "Prepare students for roles in systems analysis, database administration, and IT consulting",
        "Foster a business-oriented approach to information technology implementation",
      ],
      careers: [
        "Business Analyst",
        "Systems Analyst",
        "Database Administrator",
        "IT Project Manager",
        "ERP Consultant",
      ],
    },
  ];

  return (
    <ProgramPageLayout
      title="Undergraduate Programs"
      description="Explore our undergraduate programs designed to prepare you for success in the rapidly evolving world of technology and computing."
      programs={programs}
      themeColor="red"
      isGraduate={false}
      bannerImage="/images/ccis-logo.png"
      collegeName="College of Computing and Information Sciences"
    />
  );
};

export default CCISUndergrad;
