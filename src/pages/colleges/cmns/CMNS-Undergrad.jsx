import React, { useState } from "react";
import {
  Calculator,
  FlaskConical,
  Atom,
  Microscope,
  TreePine,
  Stethoscope,
  Flower,
  PiSquare,
} from "lucide-react";
import ProgramPageLayout from "@/components/layout/ProgramPageLayout";

const CMNSUndergrad = () => {
  const programs = [
    {
      id: 1,
      name: "Bachelor of Science in Applied Mathematics (BSAM)",
      icon: Calculator,
      color: "from-teal-600 to-teal-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2022: "https://drive.google.com/file/d/1KvvNyQ4H3B0nEohCLQD_XenpoCYm4xXS/view?usp=sharing",
        2020: "/placeholder.svg?height=800&width=600",
        2014: "/placeholder.svg?height=800&width=600",
      },
      description:
        "The Bachelor of Science in Applied Mathematics program provides students with a strong foundation in mathematical theory and its applications to real-world problems. Students learn to develop mathematical models and computational methods to solve complex problems in science, engineering, and business.",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 155 units",
        "Practicum: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with laboratory work",
      ],
      programEducationalObjectives: [
        "Produce graduates who can apply mathematical principles to solve complex real-world problems",
        "Develop professionals who can use computational tools and mathematical modeling techniques",
        "Prepare students for advanced studies and research in specialized areas of applied mathematics",
        "Foster analytical thinking and problem-solving skills in various contexts",
      ],
      programOutcomes: [
        "Apply knowledge of mathematics to formulate and solve problems in various fields",
        "Design and implement mathematical models for complex systems",
        "Use computational tools and programming languages for mathematical analysis",
        "Communicate mathematical ideas and results effectively to both technical and non-technical audiences",
      ],
      careers: [
        "Data Scientist",
        "Quantitative Analyst",
        "Operations Research Analyst",
        "Statistical Consultant",
        "Mathematical Modeler",
      ],
      syllabusFiles: {
        2023: "https://example.com/bsam-syllabus-2023", // Example URL
      },
    },
    {
      id: 2,
      name: "Bachelor of Science in Mathematics (BSMATH)",
      icon: PiSquare,
      color: "from-teal-500 to-teal-700",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      description:
        "The Bachelor of Science in Mathematics program focuses on the theoretical foundations of mathematics. Students explore abstract mathematical concepts, develop rigorous proofs, and gain a deep understanding of mathematical structures and their properties.",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 150 units",
        "Practicum: Optional",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face",
      ],
      programEducationalObjectives: [
        "Produce graduates with a strong foundation in pure mathematics",
        "Develop professionals who can think abstractly and construct rigorous mathematical arguments",
        "Prepare students for advanced studies and research in mathematics",
        "Foster logical reasoning and problem-solving skills",
      ],
      programOutcomes: [
        "Demonstrate understanding of fundamental mathematical concepts and theories",
        "Construct and evaluate mathematical proofs and logical arguments",
        "Apply mathematical knowledge to solve theoretical and applied problems",
        "Communicate mathematical ideas clearly and precisely",
      ],
      careers: [
        "Mathematics Educator",
        "Research Mathematician",
        "Cryptographer",
        "Actuary",
        "Mathematical Consultant",
      ],
      syllabusFiles: {
        2023: "https://example.com/bsmath-syllabus-2023", // Example URL
      },
    },
    {
      id: 3,
      name: "Bachelor of Science in Chemistry (BS Chemistry)",
      icon: FlaskConical,
      color: "from-teal-400 to-teal-600",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      description:
        "The Bachelor of Science in Chemistry program provides students with a comprehensive understanding of chemical principles, laboratory techniques, and their applications. Students study the composition, structure, properties, and transformations of matter at the molecular level.",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 160 units",
        "Laboratory Work: Extensive",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with laboratory work",
      ],
      programEducationalObjectives: [
        "Produce graduates with strong theoretical knowledge and practical skills in chemistry",
        "Develop professionals who can conduct chemical analyses and experiments",
        "Prepare students for advanced studies and research in specialized areas of chemistry",
        "Foster scientific inquiry and ethical practice in chemical research",
      ],
      programOutcomes: [
        "Apply chemical principles to understand and explain natural phenomena",
        "Design and conduct chemical experiments, as well as analyze and interpret data",
        "Use modern laboratory techniques and instrumentation for chemical analysis",
        "Apply safety protocols and ethical considerations in chemical laboratory work",
      ],
      careers: [
        "Analytical Chemist",
        "Research Chemist",
        "Quality Control Chemist",
        "Environmental Chemist",
        "Pharmaceutical Chemist",
      ],
      syllabusFiles: {
        2023: "https://example.com/bschem-syllabus-2023", // Example URL
      },
    },
    {
      id: 4,
      name: "Bachelor of Science in Physics (BS Physics)",
      icon: Atom,
      color: "from-teal-500 to-teal-700",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      description:
        "The Bachelor of Science in Physics program explores the fundamental laws that govern the universe. Students study matter, energy, space, and time, developing a deep understanding of physical phenomena from subatomic particles to cosmic structures.",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 155 units",
        "Laboratory Work: Extensive",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with laboratory work",
      ],
      programEducationalObjectives: [
        "Produce graduates with a strong foundation in theoretical and experimental physics",
        "Develop professionals who can apply physical principles to solve complex problems",
        "Prepare students for advanced studies and research in specialized areas of physics",
        "Foster scientific inquiry and critical thinking in understanding natural phenomena",
      ],
      programOutcomes: [
        "Apply fundamental physical laws and principles to explain natural phenomena",
        "Design and conduct physics experiments, as well as analyze and interpret data",
        "Use mathematical methods and computational tools to solve physics problems",
        "Communicate scientific ideas and results effectively to various audiences",
      ],
      careers: [
        "Research Physicist",
        "Physics Educator",
        "Data Scientist",
        "Medical Physicist",
        "Computational Physicist",
      ],
      syllabusFiles: {
        2023: "https://example.com/bsphysics-syllabus-2023", // Example URL
      },
    },
    {
      id: 5,
      name: "Bachelor of Science in Biology major in Biodiversity Conservation",
      icon: TreePine,
      color: "from-teal-600 to-teal-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      description:
        "The Bachelor of Science in Biology major in Biodiversity Conservation focuses on the study and preservation of biological diversity. Students learn about ecosystems, species interactions, conservation strategies, and sustainable resource management.",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 158 units",
        "Field Work: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with field work",
      ],
      programEducationalObjectives: [
        "Produce graduates with a strong understanding of biodiversity and conservation principles",
        "Develop professionals who can implement conservation strategies and manage natural resources",
        "Prepare students for advanced studies and research in conservation biology",
        "Foster environmental stewardship and ethical practice in biodiversity conservation",
      ],
      programOutcomes: [
        "Apply ecological principles to understand biodiversity patterns and processes",
        "Design and implement conservation strategies for threatened species and ecosystems",
        "Conduct field surveys and monitoring of biological diversity",
        "Evaluate the effectiveness of conservation interventions and policies",
      ],
      careers: [
        "Conservation Biologist",
        "Wildlife Biologist",
        "Environmental Consultant",
        "Protected Area Manager",
        "Biodiversity Specialist",
      ],
      syllabusFiles: {
        2023: "https://example.com/bsbio-biodiversity-syllabus-2023", // Example URL
      },
    },
    {
      id: 6,
      name: "Bachelor of Science in Biology major in Microbiology",
      icon: Microscope,
      color: "from-teal-600 to-teal-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      description:
        "The Bachelor of Science in Biology major in Microbiology focuses on the study of microorganisms such as bacteria, viruses, fungi, and parasites. Students learn about microbial structure, function, genetics, and their roles in health, disease, and the environment.",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 158 units",
        "Laboratory Work: Extensive",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with laboratory work",
      ],
      programEducationalObjectives: [
        "Produce graduates with a strong foundation in microbiology and laboratory techniques",
        "Develop professionals who can apply microbiological principles in various fields",
        "Prepare students for advanced studies and research in specialized areas of microbiology",
        "Foster scientific inquiry and ethical practice in microbiological research",
      ],
      programOutcomes: [
        "Apply microbiological principles to understand microbial diversity and function",
        "Design and conduct microbiological experiments using appropriate techniques",
        "Analyze and interpret microbiological data using modern tools and methods",
        "Apply safety protocols and ethical considerations in microbiological laboratory work",
      ],
      careers: [
        "Clinical Microbiologist",
        "Food Microbiologist",
        "Environmental Microbiologist",
        "Industrial Microbiologist",
        "Research Microbiologist",
      ],
      syllabusFiles: {
        2023: "https://example.com/bsbio-microbiology-syllabus-2023", // Example URL
      },
    },
    {
      id: 7,
      name: "Bachelor of Science in Biology major in Medical Biology",
      icon: Stethoscope,
      color: "from-teal-600 to-teal-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      description:
        "The Bachelor of Science in Biology major in Medical Biology focuses on the biological aspects of human health and disease. Students study human anatomy, physiology, pathology, and the molecular basis of diseases, preparing them for careers in healthcare and biomedical research.",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 160 units",
        "Laboratory Work: Extensive",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with laboratory work",
      ],
      programEducationalObjectives: [
        "Produce graduates with a strong foundation in medical biology and laboratory techniques",
        "Develop professionals who can apply biological principles to understand human health and disease",
        "Prepare students for advanced studies in medicine, biomedical research, or allied health fields",
        "Foster scientific inquiry and ethical practice in medical research",
      ],
      programOutcomes: [
        "Apply biological principles to understand human anatomy, physiology, and pathology",
        "Design and conduct biomedical experiments using appropriate techniques",
        "Analyze and interpret biomedical data using modern tools and methods",
        "Apply safety protocols and ethical considerations in biomedical laboratory work",
      ],
      careers: [
        "Biomedical Researcher",
        "Clinical Research Associate",
        "Medical Laboratory Scientist",
        "Healthcare Consultant",
        "Medical Science Liaison",
      ],
      syllabusFiles: {
        2023: "https://example.com/bsbio-medical-syllabus-2023", // Example URL
      },
    },
    {
      id: 8,
      name: "Bachelor of Science in Biology major in Plant Biology",
      icon: Flower,
      color: "from-teal-600 to-teal-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      description:
        "The Bachelor of Science in Biology major in Plant Biology focuses on the study of plants, their structure, function, diversity, and ecological roles. Students learn about plant anatomy, physiology, taxonomy, genetics, and the importance of plants in ecosystems and human society.",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 158 units",
        "Field Work: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with field and laboratory work",
      ],
      programEducationalObjectives: [
        "Produce graduates with a strong foundation in plant biology and botanical techniques",
        "Develop professionals who can apply botanical principles in various fields",
        "Prepare students for advanced studies and research in specialized areas of plant biology",
        "Foster scientific inquiry and ethical practice in botanical research",
      ],
      programOutcomes: [
        "Apply botanical principles to understand plant diversity, structure, and function",
        "Design and conduct botanical experiments using appropriate techniques",
        "Analyze and interpret botanical data using modern tools and methods",
        "Apply plant knowledge to address agricultural, environmental, and conservation challenges",
      ],
      careers: [
        "Plant Biologist",
        "Botanist",
        "Plant Geneticist",
        "Agricultural Scientist",
        "Plant Conservation Specialist",
      ],
      syllabusFiles: {
        2023: "https://example.com/bsbio-plant-syllabus-2023", // Example URL
      },
    },
  ];

  return (
    <ProgramPageLayout
      title="Undergraduate Programs"
      description="Explore our undergraduate programs designed to prepare you for success in mathematics and natural sciences, discovering the fundamental principles that govern our world."
      programs={programs}
      themeColor="teal"
      isGraduate={false}
      bannerImage="/images/cmns-logo.png"
      collegeName="College of Mathematics and Natural Sciences"
    />
  );
};

export default CMNSUndergrad;
