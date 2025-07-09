import React from "react";
import { Wheat } from "lucide-react";
import ProgramPageLayout from "@/components/layout/ProgramPageLayout";

const CAAGraduate = () => {
  const programs = [
    {
      id: 1,
      name: "Master of Science in Crop Science",
      icon: Wheat,
      color: "from-green-600 to-green-800",
      curriculumFiles: {
        2023: "https://drive.google.com/file/d/1yshKEhYNkEhFuZN_f8Gfb4TROahV88f_/view?usp=sharing",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/1AdLRd6wuhirbZlaermpLHOXfKpb94tL7",
      },
      description:
        "The MASTER OF SCIENCE IN CROP SCIENCE program includes advanced study of crop production, plant breeding, soil science, and sustainable agricultural practices. The program prepares graduates to address various challenges in modern agriculture, including improving crop yields, developing disease-resistant varieties, and implementing environmentally sustainable farming methods.",
      programOutcomes: [
        {
          id: "CS01",
          text: "Apply advanced knowledge of crop science, plant physiology, and agricultural systems to analyze and solve complex problems in crop production and management.",
        },
        {
          id: "CS02",
          text: "Design and conduct original research in crop science using appropriate methodologies, statistical analyses, and interpretation of results.",
        },
        {
          id: "CS03",
          text: "Communicate effectively with the scientific community and with agricultural stakeholders through logical writing, presentations, and clear instructions.",
        },
        {
          id: "CS04",
          text: "Function effectively as a member or leader in diverse teams to achieve common research and agricultural development goals.",
        },
        {
          id: "CS05",
          text: "Recognize professional responsibilities and make informed judgments in crop science research and applications based on legal, social, ethical, and environmental principles.",
        },
        {
          id: "CS06",
          text: "Engage in independent learning for continual professional development as a crop scientist who serves the agricultural community.",
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
        "Produce graduates with advanced knowledge in crop science and sustainable agricultural practices",
        "Develop professionals who can conduct original research to address agricultural challenges",
        "Prepare students for leadership roles in agricultural research and development",
        "Foster innovation in crop production, plant breeding, and soil management",
      ],
      careers: [
        "Agricultural Researcher",
        "Plant Breeder",
        "Crop Production Specialist",
        "Agricultural Extension Officer",
        "Sustainable Farming Consultant",
      ],
    },
  ];

  return (
    <ProgramPageLayout
      title="Graduate Programs"
      description="Explore our graduate programs designed to prepare you for advanced careers in agricultural sciences, sustainable farming practices, and agricultural research."
      programs={programs}
      themeColor="green"
      isGraduate={true}
      bannerImage="/images/caa-logo.png"
      collegeName="College of Agriculture and Agri-Industries"
    />
  );
};

export default CAAGraduate;
