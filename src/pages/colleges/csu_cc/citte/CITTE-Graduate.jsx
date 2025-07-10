import React from "react";
import { GraduationCap, BookOpen, Settings } from "lucide-react";
import ProgramPageLayout from "@/components/layout/ProgramPageLayout";

const CITTEGraduate = () => {
  const programs = [
    {
      id: 1,
      name: "Master of Arts in Technology and Livelihood Education (MATLE)",
      icon: GraduationCap,
      color: "from-orange-600 to-orange-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://example.com/matle-syllabus-2023",
      },
      description:
        "The Master of Arts in Technology and Livelihood Education program is designed for educators who want to advance their expertise in technical-vocational education. The program focuses on curriculum development, educational management, research methodologies, and innovative teaching strategies for technology and livelihood education.",
      programOutcomes: [
        {
          id: "MATLE01",
          text: "Design and develop advanced curricula for technology and livelihood education programs.",
        },
        {
          id: "MATLE02",
          text: "Conduct educational research to improve teaching and learning in technical-vocational education.",
        },
        {
          id: "MATLE03",
          text: "Apply innovative teaching methodologies and educational technologies in TLE instruction.",
        },
        {
          id: "MATLE04",
          text: "Lead and manage technical education programs and institutions effectively.",
        },
        {
          id: "MATLE05",
          text: "Evaluate and assess learning outcomes in competency-based technical education.",
        },
        {
          id: "MATLE06",
          text: "Demonstrate professional ethics and leadership in technical education development.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 2 years (4 semesters)",
        "Total Units: 42 units",
        "Research Thesis: Required",
        "Comprehensive Exam: Required",
        "Mode of Delivery: Face-to-face with weekend classes option",
      ],
      programEducationalObjectives: [
        "Develop educational leaders who can advance technology and livelihood education",
        "Prepare professionals for administrative and supervisory roles in technical education",
        "Foster research capabilities in technical-vocational education",
        "Build expertise in curriculum development and educational innovation",
      ],
      careers: [
        "TLE Department Head",
        "Technical Education Supervisor",
        "Curriculum Specialist",
        "Training Manager",
        "Educational Consultant",
        "TESDA Regional Director",
      ],
    },
    {
      id: 2,
      name: "Master of Science in Industrial Technology Education (MSITE)",
      icon: Settings,
      color: "from-blue-600 to-blue-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://example.com/msite-syllabus-2023",
      },
      description:
        "The Master of Science in Industrial Technology Education program combines advanced technical knowledge with educational expertise. Students develop specialized competencies in industrial processes, emerging technologies, and advanced teaching methodologies for preparing technologists and engineers.",
      programOutcomes: [
        {
          id: "MSITE01",
          text: "Apply advanced knowledge of industrial technologies to solve complex technical problems.",
        },
        {
          id: "MSITE02",
          text: "Conduct research in industrial technology education and contribute to knowledge advancement.",
        },
        {
          id: "MSITE03",
          text: "Design competency-based programs for advanced technical education.",
        },
        {
          id: "MSITE04",
          text: "Integrate emerging technologies and Industry 4.0 concepts into technical education.",
        },
        {
          id: "MSITE05",
          text: "Evaluate and improve industrial technology education programs using data-driven approaches.",
        },
        {
          id: "MSITE06",
          text: "Lead technology transfer and innovation initiatives in educational and industrial settings.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 2 years (4 semesters)",
        "Total Units: 39 units",
        "Research Thesis: Required",
        "Industry Collaboration Project: Required",
        "Mode of Delivery: Face-to-face with industry partnerships",
      ],
      programEducationalObjectives: [
        "Develop technical education leaders who can bridge academia and industry",
        "Prepare graduates for advanced research and development in industrial technology",
        "Foster innovation in technical education and technology transfer",
        "Build expertise in emerging technologies and smart manufacturing",
      ],
      careers: [
        "Industrial Technology Researcher",
        "Technical Education Director",
        "Technology Transfer Specialist",
        "Industry-Academia Liaison Officer",
        "Innovation Manager",
        "Advanced Manufacturing Consultant",
      ],
    },
    {
      id: 3,
      name: "Master of Technology Management (MTM)",
      icon: BookOpen,
      color: "from-green-600 to-green-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://example.com/mtm-syllabus-2023",
      },
      description:
        "The Master of Technology Management program prepares professionals to manage technology-driven organizations and projects. Students learn strategic technology planning, innovation management, project management, and technology commercialization to lead technology initiatives in various industries.",
      programOutcomes: [
        {
          id: "MTM01",
          text: "Apply strategic technology management principles to guide organizational technology decisions.",
        },
        {
          id: "MTM02",
          text: "Manage complex technology projects from conception to implementation.",
        },
        {
          id: "MTM03",
          text: "Evaluate and implement emerging technologies for competitive advantage.",
        },
        {
          id: "MTM04",
          text: "Lead innovation initiatives and technology commercialization efforts.",
        },
        {
          id: "MTM05",
          text: "Analyze technology trends and their impact on business and society.",
        },
        {
          id: "MTM06",
          text: "Demonstrate ethical leadership in technology management and implementation.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 2 years (4 semesters)",
        "Total Units: 45 units",
        "Capstone Project: Required",
        "Comprehensive Exam: Required",
        "Mode of Delivery: Face-to-face with executive format option",
      ],
      programEducationalObjectives: [
        "Develop technology managers who can lead digital transformation initiatives",
        "Prepare professionals for senior management roles in technology companies",
        "Foster entrepreneurship and innovation in technology-based businesses",
        "Build competencies in strategic technology planning and implementation",
      ],
      careers: [
        "Technology Manager",
        "Innovation Director",
        "R&D Manager",
        "Technology Consultant",
        "Product Development Manager",
        "Digital Transformation Leader",
      ],
    },
  ];

  return (
    <ProgramPageLayout
      title="Graduate Programs"
      description="Advance your career with our graduate programs designed to develop leaders in technical education, industrial technology, and technology management."
      programs={programs}
      themeColor="gray"
      isGraduate={true}
      bannerImage="/images/csu-cc/CITTE-logo.png"
      collegeName="College of Industrial Technology and Teacher Education - CSU Cabadbaran Campus"
    />
  );
};

export default CITTEGraduate;
