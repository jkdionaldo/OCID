import React from "react";
import { Code, Cpu, Wrench, Zap, GraduationCap } from "lucide-react";
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
      name: "Bachelor of Science in Electrical Engineering (BSEE)",
      icon: Zap,
      color: "from-yellow-600 to-yellow-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://example.com/bsee-syllabus-2023",
      },
      description:
        "The Bachelor of Science in Electrical Engineering program focuses on the design, development, and maintenance of electrical systems and equipment. Students learn power systems, electronics, control systems, and electrical machinery to solve complex electrical engineering problems in various industries.",
      programOutcomes: [
        {
          id: "EE01",
          text: "Apply knowledge of mathematics, science, and engineering fundamentals to solve electrical engineering problems.",
        },
        {
          id: "EE02",
          text: "Design and analyze electrical power systems, including generation, transmission, and distribution.",
        },
        {
          id: "EE03",
          text: "Develop control systems for industrial automation and process control applications.",
        },
        {
          id: "EE04",
          text: "Design and implement electrical machines and drive systems.",
        },
        {
          id: "EE05",
          text: "Apply safety standards and regulations in electrical system design and operation.",
        },
        {
          id: "EE06",
          text: "Use modern engineering tools and software for electrical system analysis and design.",
        },
      ],
      accreditation: "ABET Accredited Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 168 units",
        "Internship: Required (320 hours)",
        "Design Project: Required",
        "Mode of Delivery: Face-to-face with extensive laboratory work",
      ],
      programEducationalObjectives: [
        "Produce graduates who can design and develop electrical power systems and equipment",
        "Develop professionals who can work in power generation, distribution, and industrial automation",
        "Prepare students for advanced studies and research in electrical engineering",
        "Foster innovation and sustainable practices in electrical engineering solutions",
      ],
      careers: [
        "Electrical Engineer",
        "Power Systems Engineer",
        "Control Systems Engineer",
        "Electrical Design Engineer",
        "Plant Engineer",
        "Project Engineer",
      ],
    },
    {
      id: 3,
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
      id: 4,
      name: "Electrical Engineering Technology (EET)",
      icon: Wrench,
      color: "from-green-600 to-green-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://example.com/eet-syllabus-2023",
      },
      description:
        "The Electrical Engineering Technology program provides hands-on training in electrical systems, focusing on practical application and technical skills. Students learn electrical installation, maintenance, troubleshooting, and testing of electrical equipment and systems in industrial and commercial settings.",
      programOutcomes: [
        {
          id: "EET01",
          text: "Apply technical knowledge to install, maintain, and troubleshoot electrical systems and equipment.",
        },
        {
          id: "EET02",
          text: "Use electrical testing instruments and tools to diagnose system problems.",
        },
        {
          id: "EET03",
          text: "Read and interpret electrical blueprints, schematics, and technical drawings.",
        },
        {
          id: "EET04",
          text: "Apply electrical codes and safety standards in installation and maintenance work.",
        },
        {
          id: "EET05",
          text: "Perform preventive maintenance on electrical systems and equipment.",
        },
        {
          id: "EET06",
          text: "Work effectively as part of a technical team in industrial environments.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 3 years (6 semesters)",
        "Total Units: 108 units",
        "Internship: Required (240 hours)",
        "Hands-on Training: Required",
        "Mode of Delivery: Face-to-face with extensive practical work",
      ],
      programEducationalObjectives: [
        "Produce graduates who can work as electrical technicians in various industries",
        "Develop professionals who can support electrical engineers in system implementation",
        "Prepare students for technical careers in electrical installation and maintenance",
        "Foster practical skills and safety consciousness in electrical work",
      ],
      careers: [
        "Electrical Technician",
        "Maintenance Technician",
        "Electrical Installer",
        "Instrumentation Technician",
        "Power Plant Technician",
        "Electrical Inspector",
      ],
    },
    {
      id: 5,
      name: "Diploma in Computer Technology (DCT)",
      icon: GraduationCap,
      color: "from-purple-600 to-purple-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://example.com/dct-syllabus-2023",
      },
      description:
        "The Diploma in Computer Technology program provides foundational knowledge and practical skills in computer systems, programming, and information technology. This program prepares students for entry-level positions in the IT industry or serves as a pathway to higher education in computer-related fields.",
      programOutcomes: [
        {
          id: "DCT01",
          text: "Apply basic programming concepts to develop simple software applications.",
        },
        {
          id: "DCT02",
          text: "Install, configure, and maintain computer hardware and software systems.",
        },
        {
          id: "DCT03",
          text: "Perform basic network administration and troubleshooting tasks.",
        },
        {
          id: "DCT04",
          text: "Create and maintain databases for small to medium-scale applications.",
        },
        {
          id: "DCT05",
          text: "Apply cybersecurity best practices to protect computer systems and data.",
        },
        {
          id: "DCT06",
          text: "Provide technical support and user assistance in computer-related problems.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 2 years (4 semesters)",
        "Total Units: 72 units",
        "Practicum: Required (200 hours)",
        "Portfolio Project: Required",
        "Mode of Delivery: Face-to-face with hands-on laboratory sessions",
      ],
      programEducationalObjectives: [
        "Produce graduates who can work as computer technicians and IT support staff",
        "Develop basic programming and system administration skills for entry-level IT positions",
        "Prepare students for further studies in computer science or information technology",
        "Foster practical problem-solving skills in computer technology applications",
      ],
      careers: [
        "Computer Technician",
        "IT Support Specialist",
        "Junior Programmer",
        "Database Assistant",
        "Network Support Technician",
        "Technical Support Representative",
      ],
    },
  ];

  return (
    <ProgramPageLayout
      title="Undergraduate Programs"
      description="The College of Engineering and Information Technology (CEIT) offers comprehensive programs in engineering and technology fields. Our programs combine theoretical knowledge with practical skills, preparing students for successful careers in engineering, information technology, and technical fields through hands-on learning and industry-relevant curriculum."
      programs={programs}
      themeColor="red"
      isGraduate={false}
      bannerImage="/images/csu-cc/CEIT-logo.png"
      collegeName="College of Engineering and Information Technology (CEIT) - CSU Cabadbaran Campus"
    />
  );
};

export default CEITUndergrad;
