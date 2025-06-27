import React, { useState } from "react";
import {
  Calculator,
  GraduationCap,
  Briefcase,
  Network,
  FileText,
} from "lucide-react";
import ProgramPageLayout from "@/components/layout/ProgramPageLayout";

const CMNSGraduate = () => {
  const programs = [
    {
      id: 1,
      name: "Master of Science in Mathematics",
      icon: Calculator,
      color: "from-teal-600 to-teal-800",
      curriculumFiles: {
        2023: "https://drive.google.com/file/d/1cn1dmsleFJ5dbsEqxwTYFPQ8VobgDcHL/view?usp=sharing",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/1tbEXz6DnSsQhBm9_ri1VQScmQzjeCfv4",
      },
      description:
        "The MASTER OF SCIENCE IN MATHEMATICS program includes advanced study of mathematical theory, analysis, and applications. The program prepares graduates to address various challenges in modern mathematics, including developing new mathematical models, solving complex problems, and implementing computational methods for scientific and industrial applications.",
      programOutcomes: [
        {
          id: "MS01",
          text: "Apply advanced knowledge of mathematical theory, analysis, and applications to solve complex problems in various fields.",
        },
        {
          id: "MS02",
          text: "Design and conduct original research in mathematics using appropriate methodologies, analytical techniques, and interpretation of results.",
        },
        {
          id: "MS03",
          text: "Communicate effectively with the scientific community and with stakeholders through logical writing, presentations, and clear instructions.",
        },
        {
          id: "MS04",
          text: "Function effectively as a member or leader in diverse teams to achieve common research and development goals.",
        },
        {
          id: "MS05",
          text: "Recognize professional responsibilities and make informed judgments in mathematical research and applications based on logical, social, ethical, and scientific principles.",
        },
        {
          id: "MS06",
          text: "Engage in independent learning for continual professional development as a mathematician who serves the scientific community.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 2 years (4 semesters)",
        "Total Units: 36 units",
        "Research Thesis: Required",
        "Mode of Delivery: Face-to-face with computational components",
      ],
      programEducationalObjectives: [
        "Develop mathematicians with advanced knowledge in mathematical theory and applications",
        "Prepare graduates to conduct original research in mathematics",
        "Equip students with skills to solve complex mathematical problems in various fields",
        "Foster innovation in mathematical modeling and computational methods",
      ],
    },
    {
      id: 2,
      name: "Doctor of Philosophy in Mathematics (PhD Math)",
      icon: GraduationCap,
      color: "from-teal-700 to-teal-900",
      curriculumFiles: {
        2023: "https://drive.google.com/file/d/11glbB9QIOGL9WBYCSt4hV1S0e-fO7PBF/view?usp=sharing",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/1tbEXz6DnSsQhBm9_ri1VQScmQzjeCfv4",
      },
      description:
        "The DOCTOR OF PHILOSOPHY IN MATHEMATICS program is designed for students who wish to pursue advanced research in mathematics. The program provides comprehensive training in mathematical theory, analysis, and applications, preparing graduates for careers in academia, research institutions, and specialized industries.",
      programOutcomes: [
        {
          id: "PhD01",
          text: "Demonstrate mastery of advanced mathematical concepts, theories, and methodologies to address complex mathematical problems.",
        },
        {
          id: "PhD02",
          text: "Conduct original and significant research that contributes to the advancement of mathematical knowledge and applications.",
        },
        {
          id: "PhD03",
          text: "Communicate complex mathematical ideas effectively to both specialized and general audiences through publications, presentations, and teaching.",
        },
        {
          id: "PhD04",
          text: "Collaborate effectively with researchers from diverse disciplines to address multidisciplinary problems requiring mathematical expertise.",
        },
        {
          id: "PhD05",
          text: "Evaluate the ethical implications of mathematical research and applications in various contexts.",
        },
        {
          id: "PhD06",
          text: "Develop and maintain a program of independent research and lifelong learning in mathematics and related fields.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 3-5 years",
        "Total Units: 60 units",
        "Dissertation: Required",
        "Comprehensive Examination: Required",
        "Mode of Delivery: Face-to-face with research components",
      ],
      programEducationalObjectives: [
        "Develop scholars who can contribute to the advancement of mathematical knowledge through original research",
        "Prepare leaders in mathematical research and education",
        "Equip graduates with skills to address complex mathematical problems in various disciplines",
        "Foster innovation in mathematical theory and applications",
      ],
    },
  ];
  return (
    <ProgramPageLayout
      title="Graduate Programs"
      description="Explore our graduate programs designed to prepare you for success in mathematics and natural sciences, discovering the fundamental principles that govern our world."
      programs={programs}
      themeColor="teal"
      isGraduate={true}
      bannerImage="/images/cmns-logo.png"
      collegeName="College of Mathematics and Natural Sciences"
    />
  );
};

export default CMNSGraduate;
