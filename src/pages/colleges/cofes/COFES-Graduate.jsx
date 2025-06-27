import React, { useState } from "react";
import {
  Leaf,
  GraduationCap,
  Briefcase,
  Network,
  FileText,
} from "lucide-react";
import ProgramPageLayout from "@/components/layout/ProgramPageLayout";

const COFESGraduate = () => {
  const programs = [
    {
      id: 1,
      name: "Master in Science in Environmental Science and Management",
      icon: Leaf,
      color: "from-green-600 to-green-800",
      curriculumFiles: {
        2023: "https://drive.google.com/file/d/1XO3dimuQDJBOpOzZ-NGErRTZrDh5D5U8/view?usp=sharing",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/1qilGYdnZCNc9iYbKmTfU6ovEYEzSdHCW",
      },
      description:
        "The MASTER IN SCIENCE IN ENVIRONMENTAL SCIENCE AND MANAGEMENT program is designed to prepare students for careers in environmental management, conservation, and sustainable resource utilization. The program integrates scientific principles with management strategies to address complex environmental challenges.",
      programOutcomes: [
        {
          id: "MS01",
          text: "Apply advanced knowledge of environmental science and management principles to solve complex environmental problems.",
        },
        {
          id: "MS02",
          text: "Design and conduct original research in environmental science using appropriate methodologies, analytical techniques, and interpretation of results.",
        },
        {
          id: "MS03",
          text: "Communicate effectively with the scientific community and with stakeholders through logical writing, presentations, and clear instructions.",
        },
        {
          id: "MS04",
          text: "Function effectively as a member or leader in diverse teams to achieve common research and development goals in environmental management.",
        },
        {
          id: "MS05",
          text: "Recognize professional responsibilities and make informed judgments in environmental science and management based on ecological, social, ethical, and scientific principles.",
        },
        {
          id: "MS06",
          text: "Engage in independent learning for continual professional development as an environmental scientist who serves the community and environment.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 2 years (4 semesters)",
        "Total Units: 36 units",
        "Research Thesis: Required",
        "Field Work: Required",
        "Mode of Delivery: Face-to-face with field components",
      ],
      programEducationalObjectives: [
        "Develop environmental scientists with advanced knowledge in ecological principles and management strategies",
        "Prepare graduates to conduct original research in environmental science and management",
        "Equip students with skills to address complex environmental challenges",
        "Foster innovation in sustainable resource management and conservation",
      ],
      careers: [
        "Environmental Scientist",
        "Conservation Specialist",
        "Environmental Consultant",
        "Natural Resource Manager",
        "Sustainability Coordinator",
        "Environmental Policy Analyst",
      ],
    },
  ];

  return (
    <ProgramPageLayout
      title="Graduate Programs"
      description="Explore our graduate programs designed to prepare you for advanced careers in forestry, environmental management, and sustainable resource conservation."
      programs={programs}
      themeColor="green"
      isGraduate={true}
      bannerImage="/images/cofes-logo.png"
      collegeName="College of Forestry and Environmental Sciences"
    />
  );
};

export default COFESGraduate;
