import React from "react";
import { TrendingUp, Briefcase, Calculator, Users } from "lucide-react";
import ProgramPageLayout from "@/components/layout/ProgramPageLayout";

const CBAUndergrad = () => {
  const programs = [
    {
      id: 1,
      name: "Bachelor of Science in Accountancy (BSA)",
      icon: Calculator,
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

      accreditation: "CHED Recognized Program",

      programEducationalObjectives: [
        "Produce graduates who can apply accounting principles and practices in compliance with professional standards",
        "Develop professionals who can pursue CPA licensure and excel in public accounting practices",
        "Prepare students for careers in auditing, taxation, and financial reporting",
        "Foster ethical behavior and professional responsibility in accounting practice",
      ],
      careers: [
        "Certified Public Accountant (CPA)",
        "External Auditor",
        "Tax Consultant",
        "Financial Accountant",
        "Internal Auditor",
        "Forensic Accountant",
      ],
    },
    {
      id: 2,
      name: "Bachelor of Science in Management Accounting (BSMA)",
      icon: TrendingUp,
      color: "from-green-600 to-green-800",

      description:
        "The Bachelor of Science in Management Accounting (BSMA) program focuses on preparing students for careers in cost accounting, budgeting, and financial planning within organizations. The program emphasizes managerial decision-making, performance evaluation, and strategic cost management to help businesses optimize their operations and profitability.",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 124 units",
        "Internship: Required (240 hours)",
        "Practicum: Required",
        "Mode of Delivery: Face-to-face with case studies",
      ],
      programOutcomes: [
        {
          id: "BSMA01",
          text: "Apply management accounting principles to support organizational decision-making and planning.",
        },
        {
          id: "BSMA02",
          text: "Design and implement cost accounting systems for effective cost control and management.",
        },
        {
          id: "BSMA03",
          text: "Prepare budgets and financial forecasts to guide business operations and strategy.",
        },
        {
          id: "BSMA04",
          text: "Analyze financial performance using various management accounting tools and techniques.",
        },
        {
          id: "BSMA05",
          text: "Implement internal control systems to ensure accuracy and reliability of financial information.",
        },
        {
          id: "BSMA06",
          text: "Communicate financial information effectively to management for strategic decision-making.",
        },
      ],
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://example.com/bsba-hrm-syllabus-2023",
      },
      accreditation: "CHED Recognized Program",

      programEducationalObjectives: [
        "Produce graduates who can effectively manage and analyze costs in various business settings",
        "Develop professionals who can design and implement management accounting systems",
        "Prepare students for careers in cost accounting, budgeting, and financial analysis",
        "Foster analytical thinking and ethical practice in management accounting",
      ],
      careers: [
        "Management Accountant",
        "Cost Accountant",
        "Budget Analyst",
        "Financial Analyst",
        "Controller",
        "Internal Auditor",
      ],
    },
    {
      id: 3,
      name: "Bachelor of Science in Business Administration Major in Financial Management (BSBA-FM)",
      icon: Briefcase,
      color: "from-purple-600 to-purple-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://example.com/bsba-fm-syllabus-2023",
      },
      description:
        "The BSBA Major in Financial Management program prepares students to make strategic financial decisions for organizations. Students learn financial analysis, investment management, risk assessment, corporate finance, and banking operations to excel in the financial services industry and corporate finance roles.",
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
      name: "Bachelor of Science in Business Administration Major in Human Resource Management (BSBA-HRM)",
      icon: Users,
      color: "from-orange-600 to-orange-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://example.com/bsba-hrm-syllabus-2023",
      },
      description:
        "The BSBA Major in Human Resource Management program prepares students to effectively manage human resources in organizations. Students learn recruitment, training and development, compensation management, labor relations, and organizational behavior to create positive workplace cultures and drive organizational success.",
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
      id: 5,
      name: "Bachelor of Science in Business Administration Major in Marketing Management (BSBA-MM)",
      icon: TrendingUp,
      color: "from-pink-600 to-pink-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://example.com/bsba-mm-syllabus-2023",
      },
      description:
        "The BSBA Major in Marketing Management program focuses on developing students' skills in marketing strategy, consumer behavior, digital marketing, and brand management. Students learn to create effective marketing campaigns, analyze market trends, and build strong customer relationships in the modern business environment.",
      programOutcomes: [
        {
          id: "MM01",
          text: "Develop and implement comprehensive marketing strategies for various business contexts.",
        },
        {
          id: "MM02",
          text: "Analyze consumer behavior and market trends to inform marketing decisions.",
        },
        {
          id: "MM03",
          text: "Create effective marketing campaigns using traditional and digital marketing channels.",
        },
        {
          id: "MM04",
          text: "Manage brand portfolios and develop brand positioning strategies.",
        },
        {
          id: "MM05",
          text: "Conduct market research and analyze data to support marketing initiatives.",
        },
        {
          id: "MM06",
          text: "Apply ethical principles in marketing practices and customer relationship management.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 124 units",
        "Internship: Required (240 hours)",
        "Marketing Project: Required",
        "Mode of Delivery: Face-to-face with practical applications",
      ],
      programEducationalObjectives: [
        "Produce graduates who can develop and implement effective marketing strategies",
        "Develop professionals who can lead marketing teams and manage brand portfolios",
        "Prepare students for careers in digital marketing, advertising, and sales management",
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
      id: 6,
      name: "Bachelor of Science in Entrepreneurship (BSEntrep)",
      icon: Briefcase,
      color: "from-yellow-600 to-yellow-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://example.com/bsentrep-syllabus-2023",
      },
      description:
        "The Bachelor of Science in Entrepreneurship program is designed to develop innovative and creative entrepreneurs who can start and manage successful business ventures. Students learn business planning, innovation management, startup operations, and sustainable business practices to become future business leaders and job creators.",
      programOutcomes: [
        {
          id: "ENT01",
          text: "Develop comprehensive business plans for new venture creation and existing business expansion.",
        },
        {
          id: "ENT02",
          text: "Identify and evaluate business opportunities in various market conditions.",
        },
        {
          id: "ENT03",
          text: "Apply innovation and creativity in developing products and services.",
        },
        {
          id: "ENT04",
          text: "Manage startup operations including finance, marketing, and human resources.",
        },
        {
          id: "ENT05",
          text: "Implement sustainable and socially responsible business practices.",
        },
        {
          id: "ENT06",
          text: "Demonstrate leadership and networking skills in entrepreneurial ventures.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 124 units",
        "Business Incubation: Required",
        "Capstone Business Project: Required",
        "Mode of Delivery: Face-to-face with experiential learning",
      ],
      programEducationalObjectives: [
        "Produce graduates who can create and manage innovative business ventures",
        "Develop entrepreneurs who can contribute to economic development and job creation",
        "Prepare students to become business leaders with strong ethical foundations",
        "Foster creativity, innovation, and sustainable business practices",
      ],
      careers: [
        "Business Owner/Entrepreneur",
        "Startup Founder",
        "Business Development Manager",
        "Innovation Manager",
        "Venture Capital Analyst",
        "Business Consultant",
      ],
    },
    {
      id: 7,
      name: "Bachelor of Science in Office Administration (BSOA)",
      icon: Calculator,
      color: "from-indigo-600 to-indigo-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://example.com/bsoa-syllabus-2023",
      },
      description:
        "The Bachelor of Science in Office Administration program prepares students for administrative and management support roles in various organizations. Students learn office management, records management, business communication, and administrative procedures to become efficient and effective office professionals.",
      programOutcomes: [
        {
          id: "OA01",
          text: "Manage office operations and administrative procedures efficiently and effectively.",
        },
        {
          id: "OA02",
          text: "Implement records management systems and maintain organizational documentation.",
        },
        {
          id: "OA03",
          text: "Communicate effectively in written and oral forms in professional settings.",
        },
        {
          id: "OA04",
          text: "Utilize office technology and software applications to enhance productivity.",
        },
        {
          id: "OA05",
          text: "Coordinate meetings, events, and business activities professionally.",
        },
        {
          id: "OA06",
          text: "Provide administrative support and assistance to management and teams.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 124 units",
        "Internship: Required (240 hours)",
        "Office Practicum: Required",
        "Mode of Delivery: Face-to-face with hands-on training",
      ],
      programEducationalObjectives: [
        "Produce graduates who can manage office operations and administrative functions effectively",
        "Develop professionals who can provide excellent administrative support in various organizations",
        "Prepare students for supervisory and management roles in office administration",
        "Foster professionalism, efficiency, and ethical practice in office administration",
      ],
      careers: [
        "Office Manager",
        "Administrative Officer",
        "Executive Assistant",
        "Records Manager",
        "Office Supervisor",
        "Administrative Coordinator",
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
