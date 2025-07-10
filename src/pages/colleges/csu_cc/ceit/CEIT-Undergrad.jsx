import React from "react";
import { Code, Cpu, Wrench, Cog } from "lucide-react";
import ProgramPageLayout from "@/components/layout/ProgramPageLayout";

const CEITUndergrad = () => {
  const programs = [
    {
      id: 1,
      name: "Bachelor of Science in Computer Engineering (BSCpE)",
      icon: Cpu,
      color: "from-red-600 to-red-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://example.com/bscpe-syllabus-2023",
      },
      description:
        "The Bachelor of Science in Computer Engineering program combines computer science and electrical engineering principles to design and develop computer systems and their components. Students learn hardware design, software development, embedded systems, and digital signal processing to create innovative computing solutions.",
      programOutcomes: [
        {
          id: "CpE01",
          text: "Apply knowledge of mathematics, science, and engineering fundamentals to solve complex computer engineering problems.",
        },
        {
          id: "CpE02",
          text: "Design and implement computer systems, components, and processes to meet specified requirements.",
        },
        {
          id: "CpE03",
          text: "Develop software applications and embedded systems using appropriate programming languages and tools.",
        },
        {
          id: "CpE04",
          text: "Analyze and design digital circuits and computer hardware components.",
        },
        {
          id: "CpE05",
          text: "Apply engineering design principles to create solutions that consider economic, environmental, and societal factors.",
        },
        {
          id: "CpE06",
          text: "Communicate effectively with technical and non-technical audiences about computer engineering concepts.",
        },
      ],
      accreditation: "ABET Accredited Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 165 units",
        "Internship: Required (240 hours)",
        "Design Project: Required",
        "Mode of Delivery: Face-to-face with laboratory work",
      ],
      programEducationalObjectives: [
        "Produce graduates who can design and develop computer systems and embedded applications",
        "Develop professionals who can integrate hardware and software components effectively",
        "Prepare students for careers in computer system design, telecommunications, and embedded systems",
        "Foster innovation and problem-solving skills in computer engineering practice",
      ],
      careers: [
        "Computer Hardware Engineer",
        "Embedded Systems Engineer",
        "Digital Systems Designer",
        "Firmware Engineer",
        "Network Systems Engineer",
        "IoT Solutions Architect",
      ],
    },
    {
      id: 2,
      name: "Bachelor of Science in Information Technology (BSIT)",
      icon: Code,
      color: "from-blue-600 to-blue-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://example.com/bsit-syllabus-2023",
      },
      description:
        "The Bachelor of Science in Information Technology program focuses on the practical application of technology in business and organizational contexts. Students learn network administration, database management, web development, cybersecurity, and IT project management to support modern business operations.",
      programOutcomes: [
        {
          id: "IT01",
          text: "Apply knowledge of computing and information technology to solve business problems.",
        },
        {
          id: "IT02",
          text: "Design, implement, and maintain information systems that meet organizational requirements.",
        },
        {
          id: "IT03",
          text: "Manage network infrastructure and ensure system security and reliability.",
        },
        {
          id: "IT04",
          text: "Develop web applications and mobile solutions using current technologies.",
        },
        {
          id: "IT05",
          text: "Apply project management principles to deliver IT solutions effectively.",
        },
        {
          id: "IT06",
          text: "Demonstrate ethical practices and professional responsibility in IT management.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 155 units",
        "Practicum: Required (300 hours)",
        "Capstone Project: Required",
        "Mode of Delivery: Face-to-face with hands-on laboratory sessions",
      ],
      programEducationalObjectives: [
        "Produce graduates who can implement and manage IT infrastructure and services",
        "Develop professionals who can bridge the gap between technology and business needs",
        "Prepare students for careers in IT support, web development, and system administration",
        "Foster adaptability and continuous learning in rapidly evolving technology environments",
      ],
      careers: [
        "IT Manager",
        "Network Administrator",
        "Web Developer",
        "Database Administrator",
        "Cybersecurity Analyst",
        "Systems Integration Specialist",
      ],
    },
    {
      id: 3,
      name: "Bachelor of Science in Electronics Engineering (BSEE)",
      icon: Wrench,
      color: "from-green-600 to-green-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://example.com/bsee-syllabus-2023",
      },
      description:
        "The Bachelor of Science in Electronics Engineering program prepares students to design, develop, and maintain electronic systems and devices. Students learn circuit design, microelectronics, telecommunications, control systems, and signal processing to create innovative electronic solutions for various industries.",
      programOutcomes: [
        {
          id: "ECE01",
          text: "Apply knowledge of mathematics, physics, and engineering fundamentals to analyze electronic systems.",
        },
        {
          id: "ECE02",
          text: "Design and implement electronic circuits and systems for specific applications.",
        },
        {
          id: "ECE03",
          text: "Analyze and design communication systems and signal processing applications.",
        },
        {
          id: "ECE04",
          text: "Apply control systems theory to design automatic control systems.",
        },
        {
          id: "ECE05",
          text: "Use modern engineering tools and software for electronic design and simulation.",
        },
        {
          id: "ECE06",
          text: "Design solutions that consider safety, sustainability, and societal impact.",
        },
      ],
      accreditation: "ABET Accredited Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 170 units",
        "Internship: Required (320 hours)",
        "Design Project: Required",
        "Mode of Delivery: Face-to-face with extensive laboratory work",
      ],
      programEducationalObjectives: [
        "Produce graduates who can design and develop electronic systems and devices",
        "Develop professionals who can work in telecommunications, automation, and electronics industries",
        "Prepare students for advanced studies and research in electronics engineering",
        "Foster innovation and entrepreneurship in electronics and technology development",
      ],
      careers: [
        "Electronics Engineer",
        "Telecommunications Engineer",
        "Control Systems Engineer",
        "RF Engineer",
        "Product Development Engineer",
        "Test Engineer",
      ],
    },
    {
      id: 4,
      name: "Bachelor of Science in Mechanical Engineering (BSME)",
      icon: Cog,
      color: "from-orange-600 to-orange-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://example.com/bsme-syllabus-2023",
      },
      description:
        "The Bachelor of Science in Mechanical Engineering program provides students with knowledge in mechanics, thermodynamics, materials science, and manufacturing processes. Students learn to design, analyze, and manufacture mechanical systems, engines, machines, and thermal systems for various industrial applications.",
      programOutcomes: [
        {
          id: "ME01",
          text: "Apply principles of mathematics, science, and engineering to solve mechanical engineering problems.",
        },
        {
          id: "ME02",
          text: "Design mechanical systems and components that meet specified requirements and constraints.",
        },
        {
          id: "ME03",
          text: "Analyze and design thermal and fluid systems for various engineering applications.",
        },
        {
          id: "ME04",
          text: "Select appropriate materials and manufacturing processes for mechanical design.",
        },
        {
          id: "ME05",
          text: "Apply modern engineering tools and software for design, analysis, and simulation.",
        },
        {
          id: "ME06",
          text: "Consider sustainability, safety, and economic factors in engineering design decisions.",
        },
      ],
      accreditation: "ABET Accredited Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 172 units",
        "Internship: Required (320 hours)",
        "Design Project: Required",
        "Mode of Delivery: Face-to-face with machine shop and laboratory work",
      ],
      programEducationalObjectives: [
        "Produce graduates who can design and analyze mechanical systems and components",
        "Develop professionals who can work in manufacturing, automotive, and energy industries",
        "Prepare students for leadership roles in mechanical engineering and technology management",
        "Foster innovation in sustainable engineering design and green technology",
      ],
      careers: [
        "Mechanical Engineer",
        "Design Engineer",
        "Manufacturing Engineer",
        "HVAC Engineer",
        "Automotive Engineer",
        "Project Engineer",
      ],
    },
  ];

  return (
    <ProgramPageLayout
      title="Undergraduate Programs"
      description="Explore our undergraduate programs designed to prepare you for careers in engineering and information technology, developing innovative solutions for modern technological challenges."
      programs={programs}
      themeColor="red"
      isGraduate={false}
      bannerImage="/images/csu-cc/CEIT-logo.png"
      collegeName="College of Engineering and Information Technology - CSU Cabadbaran Campus"
    />
  );
};

export default CEITUndergrad;
