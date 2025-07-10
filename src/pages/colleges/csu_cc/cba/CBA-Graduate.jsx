import React from "react";
import { GraduationCap, Briefcase, Users, TrendingUp } from "lucide-react";
import ProgramPageLayout from "@/components/layout/ProgramPageLayout";

const CBAGraduate = () => {
  const programs = [
    {
      id: 1,
      name: "Master of Business Administration (MBA)",
      icon: GraduationCap,
      color: "from-blue-600 to-blue-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://example.com/mba-syllabus-2023",
      },
      description:
        "The Master of Business Administration (MBA) program is designed to develop strategic leaders who can navigate complex business environments and drive organizational success. The program integrates core business functions including strategic management, leadership, innovation, and global business perspectives to prepare executives for senior management roles.",
      programOutcomes: [
        {
          id: "MBA01",
          text: "Formulate and implement strategic business decisions that create sustainable competitive advantage.",
        },
        {
          id: "MBA02",
          text: "Lead diverse teams and organizations through effective communication and change management.",
        },
        {
          id: "MBA03",
          text: "Analyze complex business problems using quantitative and qualitative analytical tools.",
        },
        {
          id: "MBA04",
          text: "Integrate functional business knowledge to address multifaceted organizational challenges.",
        },
        {
          id: "MBA05",
          text: "Apply ethical principles and social responsibility in business decision-making.",
        },
        {
          id: "MBA06",
          text: "Demonstrate global business acumen and cultural competency in international markets.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 2 years (4 semesters)",
        "Total Units: 48 units",
        "Thesis: Required",
        "Comprehensive Exam: Required",
        "Mode of Delivery: Face-to-face with case studies and simulations",
      ],
      programEducationalObjectives: [
        "Develop strategic thinkers who can lead organizations in dynamic business environments",
        "Prepare professionals for executive and senior management positions",
        "Foster innovation and entrepreneurship in business practice",
        "Build ethical leaders who contribute to sustainable business development",
      ],
      careers: [
        "Chief Executive Officer (CEO)",
        "General Manager",
        "Business Development Director",
        "Strategic Planning Manager",
        "Management Consultant",
        "Entrepreneur",
      ],
    },
    {
      id: 2,
      name: "Master of Science in Management (MSM)",
      icon: Briefcase,
      color: "from-green-600 to-green-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://example.com/msm-syllabus-2023",
      },
      description:
        "The Master of Science in Management program focuses on developing advanced management competencies in specialized areas. Students gain deep knowledge in organizational behavior, strategic planning, operations management, and leadership to excel in mid to senior-level management positions across various industries.",
      programOutcomes: [
        {
          id: "MSM01",
          text: "Apply advanced management theories and practices to improve organizational performance.",
        },
        {
          id: "MSM02",
          text: "Design and implement organizational strategies that align with business objectives.",
        },
        {
          id: "MSM03",
          text: "Conduct management research using appropriate methodologies and analytical tools.",
        },
        {
          id: "MSM04",
          text: "Lead organizational change and transformation initiatives effectively.",
        },
        {
          id: "MSM05",
          text: "Evaluate and improve operational processes for enhanced efficiency and quality.",
        },
        {
          id: "MSM06",
          text: "Communicate complex management concepts to diverse stakeholders.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 2 years (4 semesters)",
        "Total Units: 42 units",
        "Research Thesis: Required",
        "Practicum: Required",
        "Mode of Delivery: Face-to-face with research components",
      ],
      programEducationalObjectives: [
        "Produce graduates who can apply scientific management principles to solve organizational problems",
        "Develop professionals who can conduct original research in management disciplines",
        "Prepare students for leadership roles in management and consulting",
        "Foster evidence-based decision making and continuous improvement practices",
      ],
      careers: [
        "Operations Manager",
        "Human Resources Director",
        "Business Analyst",
        "Management Consultant",
        "Project Director",
        "Organizational Development Specialist",
      ],
    },
    {
      id: 3,
      name: "Master of Science in Entrepreneurship",
      icon: TrendingUp,
      color: "from-purple-600 to-purple-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://example.com/mse-syllabus-2023",
      },
      description:
        "The Master of Science in Entrepreneurship program prepares students to create, develop, and manage innovative business ventures. Students learn startup methodologies, business model innovation, venture capital, digital entrepreneurship, and social entrepreneurship to launch successful enterprises and drive economic development.",
      programOutcomes: [
        {
          id: "ENT01",
          text: "Identify and evaluate entrepreneurial opportunities in various market contexts.",
        },
        {
          id: "ENT02",
          text: "Develop comprehensive business plans and validate business models through market testing.",
        },
        {
          id: "ENT03",
          text: "Apply innovation and creativity techniques to solve business challenges.",
        },
        {
          id: "ENT04",
          text: "Secure funding and resources for new venture development and growth.",
        },
        {
          id: "ENT05",
          text: "Build and lead entrepreneurial teams and organizational cultures.",
        },
        {
          id: "ENT06",
          text: "Navigate legal, ethical, and regulatory requirements for business operations.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 2 years (4 semesters)",
        "Total Units: 45 units",
        "Business Plan: Required",
        "Venture Pitch: Required",
        "Mode of Delivery: Face-to-face with incubation programs",
      ],
      programEducationalObjectives: [
        "Develop innovative entrepreneurs who can create sustainable business ventures",
        "Prepare graduates to identify and capitalize on market opportunities",
        "Foster creativity and innovation in business development",
        "Build leaders who contribute to economic growth and job creation",
      ],
      careers: [
        "Entrepreneur/Business Owner",
        "Startup Founder",
        "Innovation Manager",
        "Venture Capitalist",
        "Business Incubator Manager",
        "Economic Development Officer",
      ],
    },
  ];

  return (
    <ProgramPageLayout
      title="Graduate Programs"
      description="Advance your career with our graduate programs designed to develop strategic leaders and innovative managers for the modern business landscape."
      programs={programs}
      themeColor="blue"
      isGraduate={true}
      bannerImage="/images/csu-cc/CBA-logo.png"
      collegeName="College of Business and Accountancy - CSU Cabadbaran Campus"
    />
  );
};

export default CBAGraduate;
