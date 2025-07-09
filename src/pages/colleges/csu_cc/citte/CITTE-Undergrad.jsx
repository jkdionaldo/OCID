import React from "react";
import { BookOpen, Settings, Hammer, Users } from "lucide-react";
import ProgramPageLayout from "@/components/layout/ProgramPageLayout";

const CITTEUndergrad = () => {
  const programs = [
    {
      id: 1,
      name: "Bachelor of Technology and Livelihood Education (BTLEd) major in Industrial Arts",
      icon: Hammer,
      color: "from-orange-600 to-orange-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://example.com/btled-ia-syllabus-2023",
      },
      description:
        "The BTLEd in Industrial Arts program prepares students to become competent teachers in technical-vocational education. Students learn woodworking, metalworking, automotive technology, electronics, and construction technology while developing teaching skills to effectively transfer these competencies to learners.",
      programOutcomes: [
        {
          id: "IA01",
          text: "Demonstrate mastery of industrial arts skills including woodworking, metalworking, and construction.",
        },
        {
          id: "IA02",
          text: "Apply effective teaching methodologies for technical-vocational education.",
        },
        {
          id: "IA03",
          text: "Design and implement competency-based learning experiences in industrial arts.",
        },
        {
          id: "IA04",
          text: "Use modern tools and equipment safely and efficiently in industrial arts education.",
        },
        {
          id: "IA05",
          text: "Assess student learning in technical skills using appropriate evaluation methods.",
        },
        {
          id: "IA06",
          text: "Demonstrate professional ethics and safety practices in industrial arts instruction.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 155 units",
        "Teaching Internship: Required (1 semester)",
        "Field Study: Required",
        "Mode of Delivery: Face-to-face with workshop and laboratory sessions",
      ],
      programEducationalObjectives: [
        "Produce competent teachers who can deliver quality technical-vocational education",
        "Develop professionals who can design and manage industrial arts programs",
        "Prepare graduates for careers in TESDA and other technical education institutions",
        "Foster innovation and entrepreneurship in technical education",
      ],
      careers: [
        "Technical Education Teacher",
        "TESDA Trainer",
        "Vocational Training Specialist",
        "Industrial Arts Instructor",
        "Skills Development Coordinator",
        "Training Program Manager",
      ],
    },
    {
      id: 2,
      name: "Bachelor of Technology and Livelihood Education (BTLEd) major in Information and Communication Technology",
      icon: Settings,
      color: "from-blue-600 to-blue-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://example.com/btled-ict-syllabus-2023",
      },
      description:
        "The BTLEd in ICT program combines information and communication technology competencies with teaching methodologies. Students learn computer programming, network administration, web development, and digital media production while developing skills to teach these technologies effectively in various educational settings.",
      programOutcomes: [
        {
          id: "ICT01",
          text: "Demonstrate proficiency in various ICT areas including programming, networking, and multimedia.",
        },
        {
          id: "ICT02",
          text: "Apply pedagogical approaches appropriate for ICT education and training.",
        },
        {
          id: "ICT03",
          text: "Design and develop digital learning resources and educational technology tools.",
        },
        {
          id: "ICT04",
          text: "Integrate emerging technologies effectively into teaching and learning processes.",
        },
        {
          id: "ICT05",
          text: "Assess ICT competencies using both practical and theoretical evaluation methods.",
        },
        {
          id: "ICT06",
          text: "Practice ethical use of technology and promote digital citizenship.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 155 units",
        "Teaching Internship: Required (1 semester)",
        "Capstone Project: Required",
        "Mode of Delivery: Face-to-face with computer laboratory sessions",
      ],
      programEducationalObjectives: [
        "Produce ICT educators who can deliver competency-based technical education",
        "Develop professionals who can design and implement ICT training programs",
        "Prepare graduates for careers in technical education and corporate training",
        "Foster innovation in educational technology and digital learning",
      ],
      careers: [
        "ICT Teacher/Trainer",
        "Educational Technology Specialist",
        "Corporate Training Specialist",
        "E-Learning Developer",
        "Digital Media Instructor",
        "Computer Laboratory Manager",
      ],
    },
    {
      id: 3,
      name: "Bachelor of Technical Teacher Education (BTTEd) major in Computer Technology",
      icon: BookOpen,
      color: "from-green-600 to-green-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://example.com/btted-ct-syllabus-2023",
      },
      description:
        "The BTTEd in Computer Technology program prepares teachers for technical education in computer hardware, software, and systems. Students learn computer assembly and repair, network installation, software development, and database management while developing advanced teaching competencies for technical education.",
      programOutcomes: [
        {
          id: "CT01",
          text: "Demonstrate advanced competencies in computer hardware and software technologies.",
        },
        {
          id: "CT02",
          text: "Apply specialized teaching methods for technical education in computer technology.",
        },
        {
          id: "CT03",
          text: "Design competency-based curricula and learning materials for computer technology courses.",
        },
        {
          id: "CT04",
          text: "Implement practical assessment methods for technical skills in computer technology.",
        },
        {
          id: "CT05",
          text: "Use current industry standards and practices in computer technology education.",
        },
        {
          id: "CT06",
          text: "Engage in continuous professional development to stay current with technology trends.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 160 units",
        "Teaching Internship: Required (1 semester)",
        "Industry Immersion: Required",
        "Mode of Delivery: Face-to-face with extensive laboratory work",
      ],
      programEducationalObjectives: [
        "Produce technical teachers who can deliver industry-relevant computer technology education",
        "Develop professionals who can establish and manage computer technology programs",
        "Prepare graduates for leadership roles in technical education institutions",
        "Foster partnerships between educational institutions and industry",
      ],
      careers: [
        "Technical Education Teacher",
        "Computer Technology Instructor",
        "Training Center Manager",
        "Curriculum Developer",
        "Technical Skills Assessor",
        "Corporate Trainer",
      ],
    },
    {
      id: 4,
      name: "Bachelor of Science in Industrial Technology (BSIT) major in Electronics Technology",
      icon: Users,
      color: "from-purple-600 to-purple-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://example.com/bsit-et-syllabus-2023",
      },
      description:
        "The BSIT in Electronics Technology program provides practical and theoretical knowledge in electronics systems, troubleshooting, and maintenance. Students learn analog and digital electronics, microprocessors, communication systems, and industrial automation to work as electronics technologists in various industries.",
      programOutcomes: [
        {
          id: "ET01",
          text: "Apply electronic principles and theories to analyze and troubleshoot electronic systems.",
        },
        {
          id: "ET02",
          text: "Install, maintain, and repair electronic equipment and systems effectively.",
        },
        {
          id: "ET03",
          text: "Use electronic test equipment and diagnostic tools proficiently.",
        },
        {
          id: "ET04",
          text: "Design and implement electronic circuits for specific applications.",
        },
        {
          id: "ET05",
          text: "Apply safety procedures and quality standards in electronics work.",
        },
        {
          id: "ET06",
          text: "Adapt to new technologies and continue professional development in electronics.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 150 units",
        "Industrial Training: Required (300 hours)",
        "Practicum: Required",
        "Mode of Delivery: Face-to-face with extensive hands-on training",
      ],
      programEducationalObjectives: [
        "Produce electronics technologists who can work in manufacturing and service industries",
        "Develop professionals who can install and maintain electronic systems and equipment",
        "Prepare graduates for careers in telecommunications, automation, and electronics industries",
        "Foster entrepreneurship in electronics service and manufacturing",
      ],
      careers: [
        "Electronics Technician",
        "Maintenance Technologist",
        "Quality Control Specialist",
        "Service Technician",
        "Field Engineer",
        "Electronics Entrepreneur",
      ],
    },
  ];

  return (
    <ProgramPageLayout
      title="Undergraduate Programs"
      description="Explore our undergraduate programs designed to prepare you for careers in technical education and industrial technology, combining hands-on skills with teaching excellence."
      programs={programs}
      themeColor="orange"
      isGraduate={false}
      bannerImage="/images/citte-logo.png"
      collegeName="College of Industrial Technology and Teacher Education - CSU Carig Campus"
    />
  );
};

export default CITTEUndergrad;
