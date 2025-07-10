import React from "react";
import { TrendingUp, Briefcase, Calculator, Users } from "lucide-react";
import ProgramPageLayout from "@/components/layout/ProgramPageLayout";

const CBAUndergrad = () => {
  const programs = [
    {
      id: 1,
      name: "Bachelor of Science in Business Administration (BSBA) major in Marketing Management",
      icon: TrendingUp,
      color: "from-blue-600 to-blue-800",
      curriculumFiles: {  
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://example.com/bsba-marketing-syllabus-2023",
      },
      description:
        "The BSBA in Marketing Management program prepares students to understand consumer behavior, develop marketing strategies, and manage brand communications. Students learn market research, digital marketing, sales management, and customer relationship management to succeed in today's competitive business environment.",
      programOutcomes: [
        {
          id: "MKT01",
          text: "Analyze market opportunities and consumer behavior to develop effective marketing strategies.",
        },
        {
          id: "MKT02",
          text: "Create comprehensive marketing plans that integrate traditional and digital marketing channels.",
        },
        {
          id: "MKT03",
          text: "Apply marketing research methods to gather and interpret market data for decision-making.",
        },
        {
          id: "MKT04",
          text: "Develop brand management strategies that enhance customer loyalty and market position.",
        },
        {
          id: "MKT05",
          text: "Implement sales management techniques to achieve organizational revenue goals.",
        },
        {
          id: "MKT06",
          text: "Demonstrate ethical marketing practices and social responsibility in business operations.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 124 units",
        "Internship: Required (240 hours)",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with practical applications",
      ],
      programEducationalObjectives: [
        "Produce graduates who can develop and implement effective marketing strategies",
        "Develop professionals who can lead marketing teams and manage brand portfolios",
        "Prepare students for careers in marketing research, advertising, and sales management",
        "Foster innovation and ethical practice in marketing and business management",
      ],
      careers: [
        "Marketing Manager",
        "Brand Manager",
        "Digital Marketing Specialist",
        "Sales Manager",
        "Market Research Analyst",
        "Advertising Executive",
      ],
    },
    {
      id: 2,
      name: "Bachelor of Science in Business Administration (BSBA) major in Human Resource Management",
      icon: Users,
      color: "from-green-600 to-green-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://example.com/bsba-hrm-syllabus-2023",
      },
      description:
        "The BSBA in Human Resource Management program focuses on developing strategic HR professionals who can manage organizational talent effectively. Students learn recruitment, training and development, compensation management, labor relations, and organizational behavior to build productive workplace environments.",
      programOutcomes: [
        {
          id: "HRM01",
          text: "Design and implement recruitment and selection processes that attract qualified candidates.",
        },
        {
          id: "HRM02",
          text: "Develop training and development programs that enhance employee skills and performance.",
        },
        {
          id: "HRM03",
          text: "Create compensation and benefits systems that support organizational goals and employee satisfaction.",
        },
        {
          id: "HRM04",
          text: "Apply labor laws and regulations to ensure compliance in HR practices.",
        },
        {
          id: "HRM05",
          text: "Manage employee relations and resolve workplace conflicts effectively.",
        },
        {
          id: "HRM06",
          text: "Implement performance management systems that drive organizational success.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 124 units",
        "Internship: Required (240 hours)",
        "Practicum: Required",
        "Mode of Delivery: Face-to-face with case studies",
      ],
      programEducationalObjectives: [
        "Produce graduates who can strategically manage human resources in organizations",
        "Develop professionals who can create positive workplace cultures and employee engagement",
        "Prepare students for leadership roles in HR management and organizational development",
        "Foster ethical practice and social responsibility in human resource management",
      ],
      careers: [
        "HR Manager",
        "Recruitment Specialist",
        "Training and Development Officer",
        "Compensation and Benefits Analyst",
        "Employee Relations Specialist",
        "Organizational Development Consultant",
      ],
    },
    {
      id: 3,
      name: "Bachelor of Science in Business Administration (BSBA) major in Financial Management",
      icon: Calculator,
      color: "from-purple-600 to-purple-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://example.com/bsba-fm-syllabus-2023",
      },
      description:
        "The BSBA in Financial Management program prepares students to make strategic financial decisions for organizations. Students learn financial analysis, investment management, risk assessment, corporate finance, and banking operations to excel in the financial services industry.",
      programOutcomes: [
        {
          id: "FM01",
          text: "Analyze financial statements and assess organizational financial health and performance.",
        },
        {
          id: "FM02",
          text: "Develop investment strategies and portfolio management plans for individuals and organizations.",
        },
        {
          id: "FM03",
          text: "Apply risk management principles to identify and mitigate financial risks.",
        },
        {
          id: "FM04",
          text: "Create financial forecasts and budgets to support strategic business planning.",
        },
        {
          id: "FM05",
          text: "Evaluate financing options and capital structure decisions for business growth.",
        },
        {
          id: "FM06",
          text: "Apply ethical principles and regulatory compliance in financial decision-making.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 124 units",
        "Internship: Required (240 hours)",
        "Comprehensive Exam: Required",
        "Mode of Delivery: Face-to-face with financial laboratory",
      ],
      programEducationalObjectives: [
        "Produce graduates who can make sound financial decisions for organizations",
        "Develop professionals who can manage investments and financial portfolios effectively",
        "Prepare students for careers in banking, insurance, and financial planning",
        "Foster analytical thinking and ethical practice in financial management",
      ],
      careers: [
        "Financial Analyst",
        "Investment Advisor",
        "Bank Manager",
        "Financial Planner",
        "Credit Analyst",
        "Risk Management Specialist",
      ],
    },
    {
      id: 4,
      name: "Bachelor of Science in Business Administration (BSBA) major in Operations Management",
      icon: Briefcase,
      color: "from-orange-600 to-orange-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://example.com/bsba-om-syllabus-2023",
      },
      description:
        "The BSBA in Operations Management program focuses on optimizing business processes and operations for maximum efficiency and quality. Students learn supply chain management, quality control, project management, and lean manufacturing principles to improve organizational performance.",
      programOutcomes: [
        {
          id: "OM01",
          text: "Design and optimize business processes to improve operational efficiency and quality.",
        },
        {
          id: "OM02",
          text: "Manage supply chain operations from procurement to distribution effectively.",
        },
        {
          id: "OM03",
          text: "Implement quality management systems to ensure product and service excellence.",
        },
        {
          id: "OM04",
          text: "Apply project management methodologies to deliver projects on time and within budget.",
        },
        {
          id: "OM05",
          text: "Use operations research techniques to solve complex business problems.",
        },
        {
          id: "OM06",
          text: "Implement sustainable operations practices that consider environmental and social impacts.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 124 units",
        "Internship: Required (240 hours)",
        "Capstone Project: Required",
        "Mode of Delivery: Face-to-face with industry exposure",
      ],
      programEducationalObjectives: [
        "Produce graduates who can optimize operations and improve organizational efficiency",
        "Develop professionals who can manage complex supply chains and logistics systems",
        "Prepare students for leadership roles in operations and project management",
        "Foster innovation and sustainability in operations management practices",
      ],
      careers: [
        "Operations Manager",
        "Supply Chain Manager",
        "Quality Assurance Manager",
        "Project Manager",
        "Production Planning Analyst",
        "Logistics Coordinator",
      ],
    },
  ];

  return (
    <ProgramPageLayout
      title="Undergraduate Programs"
      description="Explore our undergraduate programs designed to prepare you for leadership roles in business administration, developing strategic thinking and management skills for the modern business environment."
      programs={programs}
      themeColor="blue"
      isGraduate={false}
      bannerImage="/images/csu-cc/CBA-logo.png"
      collegeName="College of Business Administration - CSU Cabadbaran Campus"
    />
  );
};

export default CBAUndergrad;
