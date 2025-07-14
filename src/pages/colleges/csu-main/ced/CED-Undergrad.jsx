import React from "react";
import {
  School,
  BookOpen,
  Languages,
  Calculator,
  FlaskConical,
} from "lucide-react";
import ProgramPageLayout from "@/components/layout/ProgramPageLayout";

const CEDUndergrad = () => {
  const programs = [
    {
      id: 1,
      name: "Bachelor of Elementary Education (BEEd)",
      icon: School,
      color: "from-blue-600 to-blue-800",

      description:
        "The BACHELOR OF ELEMENTARY EDUCATION (BEEd) program prepares students to become effective elementary school teachers. The curriculum focuses on child development, teaching methodologies, and subject matter knowledge across all elementary education areas. Graduates are equipped to teach in elementary schools and contribute to the educational development of young learners.",
      programOutcomes: [
        {
          id: "BEEd01",
          text: "Demonstrate mastery of subject matter knowledge across all learning areas in elementary education.",
        },
        {
          id: "BEEd02",
          text: "Apply appropriate teaching methodologies and strategies for diverse elementary learners.",
        },
        {
          id: "BEEd03",
          text: "Design and implement developmentally appropriate learning experiences for elementary students.",
        },
        {
          id: "BEEd04",
          text: "Assess student learning using various assessment tools and techniques.",
        },
        {
          id: "BEEd05",
          text: "Engage in professional development and lifelong learning to enhance teaching practice.",
        },
        {
          id: "BEEd06",
          text: "Demonstrate ethical and professional behavior in educational settings.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 155 units",
        "Practicum: Required",
        "Field Study: Required",
        "Mode of Delivery: Face-to-face with laboratory work",
      ],
      programEducationalObjectives: [
        "Produce graduates who can apply educational principles to teach effectively in elementary schools",
        "Develop professionals who can design and implement appropriate learning experiences for young learners",
        "Prepare students for advanced studies and research in elementary education",
        "Foster innovation and ethical practice in elementary education",
      ],
      careers: [
        "Elementary School Teacher",
        "Curriculum Developer",
        "Educational Consultant",
        "Academic Coordinator",
        "Educational Materials Developer",
      ],
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2022: "https://drive.google.com/file/d/1KvvNyQ4H3B0nEohCLQD_XenpoCYm4xXS/view?usp=sharing",
        2014: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/1xbq5iAKxVi8IETIC38pTXKTAW-ujJR7k",
      },
    },
    {
      id: 2,
      name: "Bachelor of Secondary Education major in English (BSEd - English)",
      icon: BookOpen,
      color: "from-blue-500 to-blue-700",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/1xbq5iAKxVi8IETIC38pTXKTAW-ujJR7k",
      },
      description:
        "The BACHELOR OF SECONDARY EDUCATION MAJOR IN ENGLISH (BSEd - English) program prepares students to become effective English language teachers at the secondary level. The curriculum focuses on English language and literature, teaching methodologies, and educational theories. Graduates are equipped to teach English subjects in high schools and contribute to the language development of adolescent learners.",
      programOutcomes: [
        {
          id: "BSEd-E01",
          text: "Demonstrate mastery of English language and literature content knowledge.",
        },
        {
          id: "BSEd-E02",
          text: "Apply appropriate teaching methodologies for English language instruction.",
        },
        {
          id: "BSEd-E03",
          text: "Design and implement effective English language learning experiences.",
        },
        {
          id: "BSEd-E04",
          text: "Assess student learning in English language and literature using various assessment tools.",
        },
        {
          id: "BSEd-E05",
          text: "Engage in professional development to enhance English language teaching practice.",
        },
        {
          id: "BSEd-E06",
          text: "Demonstrate ethical and professional behavior in educational settings.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 155 units",
        "Practicum: Required",
        "Field Study: Required",
        "Mode of Delivery: Face-to-face with laboratory work",
      ],
      programEducationalObjectives: [
        "Produce graduates who can apply educational principles to teach English effectively",
        "Develop professionals who can design and implement appropriate English language learning experiences",
        "Prepare students for advanced studies and research in English education",
        "Foster innovation and ethical practice in English language teaching",
      ],
      careers: [
        "Secondary School English Teacher",
        "Language Curriculum Developer",
        "English Language Trainer",
        "Academic Coordinator",
        "Educational Materials Developer",
      ],
    },
    {
      id: 3,
      name: "Bachelor of Secondary Education major in Filipino (BSEd - Filipino)",
      icon: Languages,
      color: "from-blue-400 to-blue-600",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/1xbq5iAKxVi8IETIC38pTXKTAW-ujJR7k",
      },
      description:
        "The BACHELOR OF SECONDARY EDUCATION MAJOR IN FILIPINO (BSEd - Filipino) program prepares students to become effective Filipino language teachers at the secondary level. The curriculum focuses on Filipino language and literature, teaching methodologies, and educational theories. Graduates are equipped to teach Filipino subjects in high schools and contribute to the cultural and language development of adolescent learners.",
      programOutcomes: [
        {
          id: "BSEd-F01",
          text: "Demonstrate mastery of Filipino language and literature content knowledge.",
        },
        {
          id: "BSEd-F02",
          text: "Apply appropriate teaching methodologies for Filipino language instruction.",
        },
        {
          id: "BSEd-F03",
          text: "Design and implement effective Filipino language learning experiences.",
        },
        {
          id: "BSEd-F04",
          text: "Assess student learning in Filipino language and literature using various assessment tools.",
        },
        {
          id: "BSEd-F05",
          text: "Engage in professional development to enhance Filipino language teaching practice.",
        },
        {
          id: "BSEd-F06",
          text: "Demonstrate ethical and professional behavior in educational settings.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 155 units",
        "Practicum: Required",
        "Field Study: Required",
        "Mode of Delivery: Face-to-face with laboratory work",
      ],
      programEducationalObjectives: [
        "Produce graduates who can apply educational principles to teach Filipino effectively",
        "Develop professionals who can design and implement appropriate Filipino language learning experiences",
        "Prepare students for advanced studies and research in Filipino education",
        "Foster innovation and ethical practice in Filipino language teaching",
      ],
      careers: [
        "Secondary School Filipino Teacher",
        "Filipino Language Curriculum Developer",
        "Filipino Language Trainer",
        "Academic Coordinator",
        "Educational Materials Developer",
      ],
    },
    {
      id: 4,
      name: "Bachelor of Secondary Education major in Mathematics (BSEd - Mathematics)",
      icon: Calculator,
      color: "from-blue-500 to-blue-700",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/1xbq5iAKxVi8IETIC38pTXKTAW-ujJR7k",
      },
      description:
        "The BACHELOR OF SECONDARY EDUCATION MAJOR IN MATHEMATICS (BSEd - Mathematics) program prepares students to become effective mathematics teachers at the secondary level. The curriculum focuses on mathematics content knowledge, teaching methodologies, and educational theories. Graduates are equipped to teach mathematics subjects in high schools and contribute to the mathematical development of adolescent learners.",
      programOutcomes: [
        {
          id: "BSEd-M01",
          text: "Demonstrate mastery of mathematics content knowledge.",
        },
        {
          id: "BSEd-M02",
          text: "Apply appropriate teaching methodologies for mathematics instruction.",
        },
        {
          id: "BSEd-M03",
          text: "Design and implement effective mathematics learning experiences.",
        },
        {
          id: "BSEd-M04",
          text: "Assess student learning in mathematics using various assessment tools.",
        },
        {
          id: "BSEd-M05",
          text: "Engage in professional development to enhance mathematics teaching practice.",
        },
        {
          id: "BSEd-M06",
          text: "Demonstrate ethical and professional behavior in educational settings.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 155 units",
        "Practicum: Required",
        "Field Study: Required",
        "Mode of Delivery: Face-to-face with laboratory work",
      ],
      programEducationalObjectives: [
        "Produce graduates who can apply educational principles to teach mathematics effectively",
        "Develop professionals who can design and implement appropriate mathematics learning experiences",
        "Prepare students for advanced studies and research in mathematics education",
        "Foster innovation and ethical practice in mathematics teaching",
      ],
      careers: [
        "Secondary School Mathematics Teacher",
        "Mathematics Curriculum Developer",
        "Mathematics Trainer",
        "Academic Coordinator",
        "Educational Materials Developer",
      ],
    },
    {
      id: 5,
      name: "Bachelor of Secondary Education major in Science (BSEd - Science)",
      icon: FlaskConical,
      color: "from-blue-600 to-blue-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/1xbq5iAKxVi8IETIC38pTXKTAW-ujJR7k",
      },
      description:
        "The BACHELOR OF SECONDARY EDUCATION MAJOR IN SCIENCE (BSEd - Science) program prepares students to become effective science teachers at the secondary level. The curriculum focuses on science content knowledge across biology, chemistry, physics, and earth science, as well as teaching methodologies and educational theories. Graduates are equipped to teach science subjects in high schools and contribute to the scientific literacy of adolescent learners.",
      programOutcomes: [
        {
          id: "BSEd-S01",
          text: "Demonstrate mastery of science content knowledge across various scientific disciplines.",
        },
        {
          id: "BSEd-S02",
          text: "Apply appropriate teaching methodologies for science instruction.",
        },
        {
          id: "BSEd-S03",
          text: "Design and implement effective science learning experiences including laboratory activities.",
        },
        {
          id: "BSEd-S04",
          text: "Assess student learning in science using various assessment tools.",
        },
        {
          id: "BSEd-S05",
          text: "Engage in professional development to enhance science teaching practice.",
        },
        {
          id: "BSEd-S06",
          text: "Demonstrate ethical and professional behavior in educational settings.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 155 units",
        "Practicum: Required",
        "Field Study: Required",
        "Laboratory Work: Required",
        "Mode of Delivery: Face-to-face with laboratory work",
      ],
      programEducationalObjectives: [
        "Produce graduates who can apply educational principles to teach science effectively",
        "Develop professionals who can design and implement appropriate science learning experiences",
        "Prepare students for advanced studies and research in science education",
        "Foster innovation and ethical practice in science teaching",
      ],
      careers: [
        "Secondary School Science Teacher",
        "Science Curriculum Developer",
        "Science Education Specialist",
        "Laboratory Coordinator",
        "Educational Materials Developer",
      ],
    },
  ];

  return (
    <ProgramPageLayout
      title="Undergraduate Programs"
      description="Explore our undergraduate programs designed to prepare you for success in the field of education, shaping the minds of future generations."
      programs={programs}
      themeColor="blue"
      isGraduate={false}
      bannerImage="/images/ced-logo.png"
      collegeName="College of Education"
    />
  );
};

export default CEDUndergrad;
