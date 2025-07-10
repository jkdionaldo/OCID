import React, { useState } from "react";
import { Leaf, TreePine, Sprout, GraduationCap } from "lucide-react";
import ProgramPageLayout from "@/components/layout/ProgramPageLayout";

const COFESGraduate = () => {
  const programs = [
    {
      id: 1,
      name: "Bachelor of Science in Forestry (BSF)",
      icon: TreePine,
      color: "from-green-600 to-green-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2022: "https://drive.google.com/file/d/1KvvNyQ4H3B0nEohCLQD_XenpoCYm4xXS/view?usp=sharing",
        2014: "/placeholder.svg?height=800&width=600",
      },
      description:
        "The Bachelor of Science in Forestry program provides students with a strong foundation in forest science, management, and conservation. Students learn about forest ecology, silviculture, forest measurements, and sustainable forest management practices.",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 155 units",
        "Practicum: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with field work",
      ],
      programEducationalObjectives: [
        "Produce graduates who can apply forestry principles to solve complex environmental and resource management problems",
        "Develop professionals who can lead sustainable forest management initiatives in both public and private sectors",
        "Prepare students for advanced studies and research in specialized areas of forestry and environmental science",
        "Foster environmental stewardship and ethical practice in natural resource management",
      ],
      programOutcomes: [
        "Apply knowledge of forestry principles and practices to manage forest resources sustainably",
        "Design and implement forest management plans that balance ecological, economic, and social considerations",
        "Utilize modern tools and technologies for forest inventory, monitoring, and assessment",
        "Communicate effectively with diverse stakeholders about forest management issues and solutions",
      ],
      careers: [
        "Forest Manager",
        "Conservation Specialist",
        "Environmental Consultant",
        "Forest Researcher",
        "Park Ranger",
      ],
      syllabusFiles: {
        2023: "https://example.com/bsf-syllabus-2023", // Example URL
      },
    },
    {
      id: 2,
      name: "Bachelor of Science in Environmental Science (BSES)",
      icon: Leaf,
      color: "from-green-500 to-green-700",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
        2014: "/placeholder.svg?height=800&width=600",
      },
      description:
        "The Bachelor of Science in Environmental Science program provides students with a multidisciplinary understanding of environmental systems and challenges. Students learn about ecology, environmental chemistry, climate science, and environmental impact assessment.",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 155 units",
        "Practicum: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with field work",
      ],
      programEducationalObjectives: [
        "Produce graduates who can apply scientific principles to solve complex environmental problems",
        "Develop professionals who can lead environmental monitoring and assessment initiatives",
        "Prepare students for advanced studies and research in specialized areas of environmental science",
        "Foster environmental stewardship and ethical practice in scientific research",
      ],
      programOutcomes: [
        "Apply scientific principles to understand and analyze environmental systems and processes",
        "Design and conduct environmental monitoring and assessment studies",
        "Evaluate environmental impacts of human activities and propose mitigation strategies",
        "Communicate environmental science concepts and findings to diverse audiences",
      ],
      careers: [
        "Environmental Scientist",
        "Conservation Officer",
        "Environmental Health Specialist",
        "Sustainability Coordinator",
        "Environmental Educator",
      ],
      syllabusFiles: {
        2023: "https://example.com/bses-syllabus-2023", // Example URL
      },
    },

    {
      id: 3,
      name: "Bachelor of Science in Agroforestry (BSAF)",
      icon: Sprout,
      color: "from-green-500 to-green-700",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      description:
        "The Bachelor of Science in Agroforestry program integrates forestry and agricultural practices for sustainable land use. Students learn about tree-crop interactions, soil conservation, integrated farming systems, and community-based resource management.",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 152 units",
        "Practicum: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with field work",
      ],
      programEducationalObjectives: [
        "Produce graduates who can design and implement sustainable agroforestry systems",
        "Develop professionals who can lead rural development initiatives",
        "Prepare students for careers in sustainable agriculture and community development",
        "Foster environmental stewardship and ethical practice in land management",
      ],
      programOutcomes: [
        "Design and implement agroforestry systems that optimize productivity and sustainability",
        "Apply principles of ecology and agriculture to manage integrated tree-crop systems",
        "Evaluate the economic, social, and environmental benefits of agroforestry practices",
        "Engage with rural communities to promote sustainable agroforestry practices",
      ],
      careers: [
        "Agroforestry Specialist",
        "Sustainable Agriculture Consultant",
        "Rural Development Officer",
        "Extension Worker",
        "Farm Manager",
      ],
      syllabusFiles: {
        2023: "https://example.com/bsaf-syllabus-2023", // Example URL
      },
    },
  ];

  return (
    <ProgramPageLayout
      title="Undergraduate Programs"
      description="Explore our undergraduate programs designed to prepare you for advanced careers in forestry, environmental management, and sustainable resource conservation."
      programs={programs}
      themeColor="green"
      isGraduate={false}
      bannerImage="/images/cofes-logo.png"
      collegeName="College of Forestry and Environmental Sciences"
    />
  );
};

export default COFESGraduate;
