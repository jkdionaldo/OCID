import React, { useState } from "react";
import {
  Building,
  CircuitBoard,
  Mountain,
  Compass,
  Pickaxe,
  Tractor,
} from "lucide-react";
import ProgramPageLayout from "@/components/layout/ProgramPageLayout";

const CEGSUndergrad = () => {
  const programs = [
    {
      id: 1,
      name: "Bachelor of Science in Civil Engineering (BSCE)",
      icon: Building,
      color: "from-orange-600 to-orange-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2022: "https://drive.google.com/file/d/1KvvNyQ4H3B0nEohCLQD_XenpoCYm4xXS/view?usp=sharing",
        2014: "/placeholder.svg?height=800&width=600",
      },
      description:
        "The Bachelor of Science in Civil Engineering program provides students with a strong foundation in structural engineering, transportation systems, water resources, and construction management. Students learn to design, build, and maintain infrastructure projects.",
      programSpecifications: [
        "Duration: 5 years (10 semesters)",
        "Total Units: 175 units",
        "Practicum: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with laboratory work",
      ],
      programEducationalObjectives: [
        "Produce graduates who can apply engineering principles to solve complex infrastructure problems",
        "Develop professionals who can lead engineering projects in both public and private sectors",
        "Prepare students for advanced studies and research in specialized areas of civil engineering",
        "Foster environmental stewardship and ethical practice in engineering",
      ],
      programOutcomes: [
        "Apply knowledge of mathematics, science, and engineering to solve civil engineering problems",
        "Design and conduct experiments, as well as analyze and interpret data related to civil engineering systems",
        "Design civil engineering systems, components, or processes to meet desired needs within realistic constraints",
        "Function effectively on multidisciplinary teams in civil engineering projects",
      ],
      careers: [
        "Structural Engineer",
        "Transportation Engineer",
        "Water Resources Engineer",
        "Construction Manager",
        "Geotechnical Engineer",
      ],
      syllabusFiles: {
        2023: "https://example.com/bsce-syllabus-2023", // Example URL
      },
    },
    {
      id: 2,
      name: "Bachelor of Science in Electrical Engineering (BSEE)",
      icon: CircuitBoard,
      color: "from-orange-500 to-orange-700",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      description:
        "The Bachelor of Science in Electrical Engineering program focuses on the study of electricity, electronics, and electromagnetism. Students learn to design and develop electrical systems, electronic devices, and power distribution networks.",
      programSpecifications: [
        "Duration: 5 years (10 semesters)",
        "Total Units: 172 units",
        "Practicum: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with laboratory work",
      ],
      programEducationalObjectives: [
        "Produce graduates who can design and implement electrical systems and components",
        "Develop professionals who can adapt to emerging technologies in the electrical engineering field",
        "Prepare students for advanced studies and research in specialized areas of electrical engineering",
        "Foster innovation and ethical practice in electrical engineering",
      ],
      programOutcomes: [
        "Apply knowledge of mathematics, science, and engineering to solve electrical engineering problems",
        "Design and conduct experiments, as well as analyze and interpret data related to electrical systems",
        "Design electrical systems, components, or processes to meet desired needs within realistic constraints",
        "Use modern engineering tools necessary for electrical engineering practice",
      ],
      careers: [
        "Electrical Design Engineer",
        "Power Systems Engineer",
        "Electronics Engineer",
        "Control Systems Engineer",
        "Telecommunications Engineer",
      ],
      syllabusFiles: {
        2023: "https://example.com/bsee-syllabus-2023", // Example URL
      },
    },
    {
      id: 3,
      name: "Bachelor of Science in Geology (BS GEOL)",
      icon: Mountain,
      color: "from-orange-400 to-orange-600",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      description:
        "The Bachelor of Science in Geology program provides students with a comprehensive understanding of Earth's physical structure and substance, its history, and the processes that act upon it. Students learn about rocks, minerals, fossils, and the forces that shape the Earth.",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 150 units",
        "Field Work: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with field work",
      ],
      programEducationalObjectives: [
        "Produce graduates who can apply geological principles to understand Earth processes",
        "Develop professionals who can assess geological resources and hazards",
        "Prepare students for advanced studies and research in specialized areas of geology",
        "Foster environmental stewardship and ethical practice in geological investigations",
      ],
      programOutcomes: [
        "Apply knowledge of geology to identify and classify rocks, minerals, and fossils",
        "Interpret geological maps and cross-sections to understand subsurface conditions",
        "Conduct field investigations to collect geological data",
        "Analyze geological data to reconstruct Earth history and processes",
      ],
      careers: [
        "Geologist",
        "Environmental Geologist",
        "Mining Geologist",
        "Petroleum Geologist",
        "Hydrogeologist",
      ],
      syllabusFiles: {
        2023: "https://example.com/bsgeol-syllabus-2023", // Example URL
      },
    },
    {
      id: 4,
      name: "Bachelor of Science in Geodetic Engineering (BSGE)",
      icon: Compass,
      color: "from-orange-500 to-orange-700",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      description:
        "The Bachelor of Science in Geodetic Engineering program focuses on the measurement and representation of the Earth's surface. Students learn about surveying, mapping, remote sensing, and geographic information systems.",
      programSpecifications: [
        "Duration: 5 years (10 semesters)",
        "Total Units: 170 units",
        "Field Work: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with field work",
      ],
      programEducationalObjectives: [
        "Produce graduates who can apply geodetic principles to measure and map the Earth's surface",
        "Develop professionals who can utilize modern geospatial technologies",
        "Prepare students for advanced studies and research in specialized areas of geodetic engineering",
        "Foster precision and ethical practice in geodetic measurements",
      ],
      programOutcomes: [
        "Apply knowledge of mathematics, science, and engineering to solve geodetic problems",
        "Conduct land surveys using appropriate equipment and techniques",
        "Process and analyze geospatial data using modern software tools",
        "Create accurate maps and geospatial databases for various applications",
      ],
      careers: [
        "Geodetic Engineer",
        "Land Surveyor",
        "GIS Specialist",
        "Remote Sensing Analyst",
        "Cartographer",
      ],
      syllabusFiles: {
        2023: "https://example.com/bsge-syllabus-2023", // Example URL
      },
    },
    {
      id: 5,
      name: "Bachelor of Science in Mining Engineering (BSME)",
      icon: Pickaxe,
      color: "from-orange-600 to-orange-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      description:
        "The Bachelor of Science in Mining Engineering program focuses on the extraction of minerals from the Earth. Students learn about mine design, mineral processing, rock mechanics, and sustainable mining practices.",
      programSpecifications: [
        "Duration: 5 years (10 semesters)",
        "Total Units: 175 units",
        "Field Work: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with field work",
      ],
      programEducationalObjectives: [
        "Produce graduates who can design and manage mining operations",
        "Develop professionals who can implement safe and sustainable mining practices",
        "Prepare students for advanced studies and research in specialized areas of mining engineering",
        "Foster environmental stewardship and ethical practice in mineral extraction",
      ],
      programOutcomes: [
        "Apply knowledge of mathematics, science, and engineering to solve mining engineering problems",
        "Design mine layouts and extraction sequences for optimal resource recovery",
        "Evaluate mineral processing methods for different ore types",
        "Implement safety measures and environmental protection in mining operations",
      ],
      careers: [
        "Mining Engineer",
        "Mine Planning Engineer",
        "Mineral Processing Engineer",
        "Mine Safety Officer",
        "Environmental Compliance Officer",
      ],
      syllabusFiles: {
        2023: "https://example.com/bsme-syllabus-2023", // Example URL
      },
    },
    {
      id: 6,
      name: "Bachelor of Science in Agricultural And Biosystems Engineering (BSABE)",
      icon: Tractor,
      color: "from-orange-600 to-orange-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      description:
        "The Bachelor of Science in Agricultural and Biosystems Engineering program integrates engineering principles with biological sciences to design systems for agricultural production and processing. Students learn about irrigation systems, farm machinery, post-harvest processing, and sustainable agricultural practices.",
      programSpecifications: [
        "Duration: 5 years (10 semesters)",
        "Total Units: 173 units",
        "Field Work: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with laboratory work",
      ],
      programEducationalObjectives: [
        "Produce graduates who can design and implement agricultural and biosystems engineering solutions",
        "Develop professionals who can enhance agricultural productivity through engineering innovations",
        "Prepare students for advanced studies and research in specialized areas of agricultural engineering",
        "Foster sustainable practices and ethical considerations in agricultural systems",
      ],
      programOutcomes: [
        "Apply knowledge of mathematics, science, and engineering to solve agricultural engineering problems",
        "Design agricultural machinery and processing equipment for improved efficiency",
        "Develop irrigation and drainage systems for optimal water management",
        "Implement post-harvest technologies to reduce losses and maintain product quality",
      ],
      careers: [
        "Agricultural Engineer",
        "Biosystems Engineer",
        "Farm Equipment Designer",
        "Irrigation Engineer",
        "Food Processing Engineer",
      ],
      syllabusFiles: {
        2023: "https://example.com/bsabe-syllabus-2023", // Example URL
      },
    },
  ];

  return (
    <ProgramPageLayout
      title="Undergraduate Programs"
      description="Explore our undergraduate programs designed to prepare you for success in engineering and geo-sciences, building the infrastructure and technology of tomorrow."
      programs={programs}
      themeColor="orange"
      isGraduate={false}
      bannerImage="/images/cegs-logo.png"
      collegeName="College of Engineering and Geo-Sciences"
    />
  );
};

export default CEGSUndergrad;
