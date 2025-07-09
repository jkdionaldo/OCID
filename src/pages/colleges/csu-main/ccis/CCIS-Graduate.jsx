import React from "react";
import { Network } from "lucide-react";
import ProgramPageLayout from "@/components/layout/ProgramPageLayout";

const CCISGraduate = () => {
  const programs = [
    {
      id: 1,
      name: "Master of Science in Information Technology (MSIT)",
      icon: Network,
      color: "from-red-600 to-red-800",
      curriculumFiles: {
        2023: "https://drive.google.com/file/d/1JZvUkOWjc1KwDOoOP1q348R2jYevHro0/view?usp=sharing",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/1vUY-3iPCo1LpoS6ZrBGqIXINwN75OT-e?usp=sharing",
      },
      description:
        "The Master of Science in Information Technology program is designed to provide advanced knowledge and skills in information technology management, systems development, and IT infrastructure. The program prepares graduates for leadership roles in the rapidly evolving field of information technology, with emphasis on both technical expertise and management capabilities.",
      programSpecifications: [
        "Duration: 2 years (4 semesters)",
        "Total Units: 36 units",
        "Thesis/Capstone: Required",
        "Comprehensive Exam: Required",
        "Mode of Delivery: Face-to-face with blended learning components",
      ],
      programEducationalObjectives: [
        "Produce IT professionals with advanced knowledge and skills in information technology",
        "Develop leaders who can manage IT resources and implement IT solutions in organizations",
        "Prepare graduates for research and development in specialized areas of IT",
        "Foster innovation and ethical practice in information technology",
      ],
      programOutcomes: [
        "Apply advanced knowledge of computing, mathematics, and management principles to solve complex IT problems",
        "Design and implement innovative IT solutions that address organizational needs",
        "Communicate effectively with diverse stakeholders about complex IT issues and solutions",
        "Function effectively as a leader or member in diverse teams to achieve common goals",
        "Make informed judgments in IT practice based on legal, ethical, and professional principles",
        "Engage in continuous learning and professional development in the rapidly evolving IT field",
      ],
      accreditation: "PAASCU Level II",
      careers: [
        "IT Manager",
        "Systems Architect",
        "IT Project Manager",
        "Chief Information Officer (CIO)",
        "IT Consultant",
        "Information Security Manager",
      ],
    },
  ];

  return (
    <ProgramPageLayout
      title="Graduate Programs"
      description="Explore our graduate programs designed to advance your career in the rapidly evolving world of technology and computing."
      programs={programs}
      themeColor="red"
      isGraduate={true}
      bannerImage="/images/ccis-logo.png"
      collegeName="College of Computing and Information Sciences"
    />
  );
};

export default CCISGraduate;
