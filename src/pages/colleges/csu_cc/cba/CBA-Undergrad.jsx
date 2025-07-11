import React from "react";
import { TrendingUp, Briefcase, Calculator, Users } from "lucide-react";
import ProgramPageLayout from "@/components/layout/ProgramPageLayout";

const CBAUndergrad = () => {
  const programs = [
    {
      id: 1,
      name: "Bachelor of Science in Accountancy (BSA)",
      icon: TrendingUp,
      color: "from-blue-600 to-blue-800",

      description:
        "The Bachelor of Science in Accountancy (BSA) is a comprehensive program designed to prepare students for professional careers in accounting and finance. It provides in-depth knowledge of financial reporting, auditing, taxation, and business laws, equipping graduates with the competencies required to pursue licensure as Certified Public Accountants (CPAs) and excel in various sectors of the industry.",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 124 units",
        "Internship: Required (240 hours)",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with practical applications",
      ],
      programOutcomes: [
        {
          id: "BSA01",
          text: "Apply accounting, auditing, and taxation principles in compliance with professional standards and legal frameworks.",
        },
        {
          id: "BSA02",
          text: "Analyze and interpret financial information to support business decision-making.",
        },
        {
          id: "BSA03",
          text: "Demonstrate ethical and professional behavior in accounting practices.",
        },
        {
          id: "BSA04",
          text: "Communicate effectively in both written and oral forms in a business environment.",
        },
        {
          id: "BSA05",
          text: "Engage in lifelong learning and adapt to the evolving accounting profession.",
        },
        {
          id: "BSA06",
          text: "Utilize information technology and accounting software to enhance efficiency and accuracy in accounting tasks.",
        },
      ],
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://example.com/bsba-marketing-syllabus-2023",
      },

      accreditation: "CHED Recognized Program", //not shown in the UI

      programEducationalObjectives: [
        "Produce graduates who can develop and implement effective marketing strategies",
        "Develop professionals who can lead marketing teams and manage brand portfolios",
        "Prepare students for careers in marketing research, advertising, and sales management",
        "Foster innovation and ethical practice in marketing and business management",
      ], //not shown in the UI
      careers: [
        "Marketing Manager",
        "Brand Manager",
        "Digital Marketing Specialist",
        "Sales Manager",
        "Market Research Analyst",
        "Advertising Executive",
      ], // not shown in the UI
    },
    {
      id: 2,
      name: "Bachelor of Science in Management Accounting (BSMA)",
      icon: Users,
      color: "from-green-600 to-green-800",

      description:
        "The Bachelor of Science in Accountancy (BSA) is a comprehensive program designed to prepare students for professional careers in accounting and finance. It provides in-depth knowledge of financial reporting, auditing, taxation, and business laws, equipping graduates with the competencies required to pursue licensure as Certified Public Accountants (CPAs) and excel in various sectors of the industry.",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 124 units",
        "Internship: Required (240 hours)",
        "Practicum: Required",
        "Mode of Delivery: Face-to-face with case studies",
      ],
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
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://example.com/bsba-hrm-syllabus-2023",
      },
     
      accreditation: "CHED Recognized Program", // not shown in the UI

      programEducationalObjectives: [
        "Produce graduates who can strategically manage human resources in organizations",
        "Develop professionals who can create positive workplace cultures and employee engagement",
        "Prepare students for leadership roles in HR management and organizational development",
        "Foster ethical practice and social responsibility in human resource management",
      ], // not shown in the UI
      careers: [
        "HR Manager",
        "Recruitment Specialist",
        "Training and Development Officer",
        "Compensation and Benefits Analyst",
        "Employee Relations Specialist",
        "Organizational Development Consultant",
      ], // not shown in the UI
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
      description="The College of Business and Accountancy (CBA) is dedicated to developing future business leaders and accounting professionals through quality education, innovative teaching, and practical training. With programs grounded in ethics, leadership, and industry relevance, CBA equips students with the skills and knowledge needed to thrive in a dynamic global business environment."
      programs={programs}
      themeColor="blue"
      isGraduate={false}
      bannerImage="/images/csu-cc/CBA-logo.png"
      collegeName="College of Business & Accountancy (CBA)- CSU Cabadbaran Campus"
    />
  );
};

export default CBAUndergrad;
