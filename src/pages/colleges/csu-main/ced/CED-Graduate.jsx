import React, { useState } from "react";
import {
  GraduationCap,
  Calculator,
  Microscope,
  Building2,
  Languages,
  Users,
  BookText,
  Atom,
} from "lucide-react";
import ProgramPageLayout from "@/components/layout/ProgramPageLayout";

const CEDGraduate = () => {
  // Graduate programs for CED with updated icons
  const programs = [
    {
      id: 1,
      name: "Master of Science in Mathematics Education",
      icon: Calculator,
      color: "from-blue-600 to-blue-800",
      curriculumFiles: {
        2023: "https://drive.google.com/file/d/1Yx5Yx5Yx5Yx5Yx5Yx5Yx5Yx5Yx5Yx5/view?usp=sharing",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/19jZ1LQtXHfrw7mdiaGKuWmIFaPelgrEA",
      },
      description:
        "The MASTER OF SCIENCE IN MATHEMATICS EDUCATION program focuses on advanced mathematical concepts, teaching methodologies, and educational research. The program prepares graduates to become effective mathematics educators at various levels, develop innovative teaching strategies, and contribute to the field of mathematics education research.",
      programOutcomes: [
        {
          id: "ME01",
          text: "Apply advanced mathematical knowledge and pedagogical theories to enhance mathematics teaching and learning.",
        },
        {
          id: "ME02",
          text: "Design and conduct original research in mathematics education using appropriate methodologies and statistical analyses.",
        },
        {
          id: "ME03",
          text: "Communicate mathematical concepts effectively to diverse audiences through clear instruction, writing, and presentations.",
        },
        {
          id: "ME04",
          text: "Function effectively as a member or leader in educational teams to achieve common goals in mathematics education.",
        },
        {
          id: "ME05",
          text: "Recognize professional responsibilities and make informed judgments in mathematics education based on ethical principles and educational standards.",
        },
        {
          id: "ME06",
          text: "Engage in independent learning for continual professional development as a mathematics educator.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 2 years (4 semesters)",
        "Total Units: 36 units",
        "Research Thesis: Required",
        "Teaching Practicum: Required",
        "Mode of Delivery: Face-to-face with online components",
      ],
      programEducationalObjectives: [
        "Develop mathematics educators with advanced knowledge in mathematical concepts and teaching methodologies",
        "Prepare graduates to conduct research in mathematics education",
        "Equip students with skills to design innovative curriculum materials",
        "Foster leadership in mathematics education at various levels",
      ],
      careers: [
        "Mathematics Education Specialist",
        "Mathematics Department Chair",
        "Mathematics Curriculum Developer",
        "Educational Researcher",
        "Mathematics Teacher Trainer",
        "Academic Administrator",
      ],
    },
    {
      id: 2,
      name: "Doctor of Philosophy in Mathematics Education (PhDMathEd)",
      icon: GraduationCap,
      color: "from-blue-700 to-blue-900",
      curriculumFiles: {
        2023: "https://drive.google.com/file/d/2Yx5Yx5Yx5Yx5Yx5Yx5Yx5Yx5Yx5Yx5/view?usp=sharing",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/19jZ1LQtXHfrw7mdiaGKuWmIFaPelgrEA",
      },
      description:
        "The DOCTOR OF PHILOSOPHY IN MATHEMATICS EDUCATION program is designed for educators seeking to become leaders in mathematics education research, curriculum development, and educational policy. The program emphasizes advanced research methodologies, theoretical frameworks in mathematics education, and the development of innovative approaches to mathematics teaching and learning.",
      programOutcomes: [
        {
          id: "PME01",
          text: "Demonstrate expertise in advanced mathematical concepts and educational theories to lead innovations in mathematics education.",
        },
        {
          id: "PME02",
          text: "Design and conduct sophisticated research that contributes significantly to the field of mathematics education.",
        },
        {
          id: "PME03",
          text: "Communicate complex mathematical and educational concepts effectively to diverse audiences through scholarly writing and presentations.",
        },
        {
          id: "PME04",
          text: "Lead educational teams and initiatives to improve mathematics education at institutional and policy levels.",
        },
        {
          id: "PME05",
          text: "Evaluate and develop mathematics education policies based on ethical principles, research evidence, and educational standards.",
        },
        {
          id: "PME06",
          text: "Contribute to the advancement of mathematics education through original research and scholarly activities.",
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
        "Develop scholars who can contribute to the advancement of mathematics education through original research",
        "Prepare leaders who can influence educational policy in mathematics education",
        "Equip graduates with skills to design and evaluate mathematics education programs",
        "Foster innovation in mathematics teaching and learning at all educational levels",
      ],
      careers: [
        "University Professor",
        "Mathematics Education Researcher",
        "Educational Policy Advisor",
        "Mathematics Education Program Director",
        "Educational Consultant",
        "Academic Dean",
      ],
    },
    {
      id: 3,
      name: "Master of Science Education With specialization In Biology",
      icon: Microscope,
      color: "from-blue-500 to-blue-700",
      curriculumFiles: {
        2023: "https://drive.google.com/file/d/3Yx5Yx5Yx5Yx5Yx5Yx5Yx5Yx5Yx5Yx5/view?usp=sharing",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/19jZ1LQtXHfrw7mdiaGKuWmIFaPelgrEA",
      },
      description:
        "The MASTER OF SCIENCE EDUCATION WITH SPECIALIZATION IN BIOLOGY program combines advanced biological concepts with educational methodologies. The program prepares biology educators to enhance their teaching practices, develop innovative curriculum materials, and conduct research in biology education.",
      programOutcomes: [
        {
          id: "BIO01",
          text: "Apply advanced biological knowledge and educational theories to enhance biology teaching and learning.",
        },
        {
          id: "BIO02",
          text: "Design and conduct research in biology education using appropriate scientific and educational methodologies.",
        },
        {
          id: "BIO03",
          text: "Communicate biological concepts effectively through clear instruction, scientific writing, and presentations.",
        },
        {
          id: "BIO04",
          text: "Function effectively in collaborative educational and scientific teams to achieve common goals in biology education.",
        },
        {
          id: "BIO05",
          text: "Make informed judgments in biology education based on ethical principles, scientific evidence, and educational standards.",
        },
        {
          id: "BIO06",
          text: "Engage in continuous professional development as a biology educator through independent learning and scientific inquiry.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 2 years (4 semesters)",
        "Total Units: 36 units",
        "Research Thesis: Required",
        "Laboratory Work: Required",
        "Mode of Delivery: Face-to-face with laboratory components",
      ],
      programEducationalObjectives: [
        "Develop biology educators with advanced knowledge in biological sciences and teaching methodologies",
        "Prepare graduates to conduct research in biology education",
        "Equip students with skills to design innovative biology curriculum materials",
        "Foster leadership in science education with focus on biological sciences",
      ],
      careers: [
        "Biology Education Specialist",
        "Science Department Chair",
        "Biology Curriculum Developer",
        "Science Education Researcher",
        "Biology Teacher Trainer",
        "Science Program Coordinator",
      ],
    },
    {
      id: 4,
      name: "Doctor of Education Major in Educational Management",
      icon: Building2,
      color: "from-blue-700 to-blue-900",
      curriculumFiles: {
        2023: "https://drive.google.com/file/d/1Ax5Ax5Ax5Ax5Ax5Ax5Ax5Ax5Ax5Ax5/view?usp=sharing",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/19jZ1LQtXHfrw7mdiaGKuWmIFaPelgrEA",
      },
      description:
        "The DOCTOR OF EDUCATION MAJOR IN EDUCATIONAL MANAGEMENT program prepares educational leaders for advanced roles in school administration, policy development, and institutional leadership. The program emphasizes organizational theory, educational policy analysis, leadership development, and research methodologies applicable to educational management.",
      programOutcomes: [
        {
          id: "EM01",
          text: "Apply advanced knowledge of educational management theories and practices to address complex challenges in educational institutions.",
        },
        {
          id: "EM02",
          text: "Design and conduct research that contributes to the improvement of educational management and leadership practices.",
        },
        {
          id: "EM03",
          text: "Communicate effectively with educational stakeholders through clear writing, presentations, and policy recommendations.",
        },
        {
          id: "EM04",
          text: "Lead educational organizations and initiatives to achieve institutional goals and implement positive change.",
        },
        {
          id: "EM05",
          text: "Evaluate and develop educational policies based on ethical principles, research evidence, and educational standards.",
        },
        {
          id: "EM06",
          text: "Engage in continuous professional development as an educational leader through reflective practice and scholarly activities.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 3-5 years",
        "Total Units: 60 units",
        "Dissertation: Required",
        "Comprehensive Examination: Required",
        "Mode of Delivery: Face-to-face with field components",
      ],
      programEducationalObjectives: [
        "Develop educational leaders who can effectively manage educational institutions",
        "Prepare scholars who can contribute to the field of educational management through research",
        "Equip graduates with skills to formulate and implement educational policies",
        "Foster innovation in educational administration and leadership",
      ],
      careers: [
        "School Principal",
        "University Administrator",
        "Educational Policy Analyst",
        "Educational Consultant",
        "Academic Dean",
        "Educational Program Director",
      ],
    },
    {
      id: 5,
      name: "Master of Arts in Educational Management Major in English Language Teaching",
      icon: Languages,
      color: "from-blue-500 to-blue-700",
      curriculumFiles: {
        2023: "https://drive.google.com/file/d/2Zx5Zx5Zx5Zx5Zx5Zx5Zx5Zx5Zx5Zx5/view?usp=sharing",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/19jZ1LQtXHfrw7mdiaGKuWmIFaPelgrEA",
      },
      description:
        "The MASTER OF ARTS IN EDUCATIONAL MANAGEMENT MAJOR IN ENGLISH LANGUAGE TEACHING program combines principles of educational leadership with specialized knowledge in English language pedagogy. The program prepares graduates to lead English language programs, develop curriculum, and implement effective teaching methodologies in various educational settings.",
      programOutcomes: [
        {
          id: "ELT01",
          text: "Apply advanced knowledge of educational management and English language teaching methodologies to enhance language programs.",
        },
        {
          id: "ELT02",
          text: "Design and conduct research in English language teaching using appropriate linguistic and educational methodologies.",
        },
        {
          id: "ELT03",
          text: "Communicate effectively in English and about English language teaching through clear instruction, writing, and presentations.",
        },
        {
          id: "ELT04",
          text: "Lead English language programs and initiatives to achieve institutional goals and improve language education.",
        },
        {
          id: "ELT05",
          text: "Evaluate and develop English language teaching policies based on linguistic theories, research evidence, and educational standards.",
        },
        {
          id: "ELT06",
          text: "Engage in continuous professional development as an English language educator and leader through reflective practice.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 2 years (4 semesters)",
        "Total Units: 36 units",
        "Research Thesis: Required",
        "Teaching Practicum: Required",
        "Mode of Delivery: Face-to-face with online components",
      ],
      programEducationalObjectives: [
        "Develop educational leaders with specialized knowledge in English language teaching",
        "Prepare graduates to manage English language programs effectively",
        "Equip students with skills to design and implement English language curriculum",
        "Foster innovation in English language teaching methodologies",
      ],
      careers: [
        "English Language Program Director",
        "English Department Chair",
        "Language School Administrator",
        "English Curriculum Developer",
        "Language Assessment Specialist",
        "English Language Teacher Trainer",
      ],
    },
    {
      id: 6,
      name: "Master of Arts in Education Major in Educational Management",
      icon: Users,
      color: "from-blue-600 to-blue-800",
      curriculumFiles: {
        2023: "https://drive.google.com/file/d/2Ax5Ax5Ax5Ax5Ax5Ax5Ax5Ax5Ax5Ax5/view?usp=sharing",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/19jZ1LQtXHfrw7mdiaGKuWmIFaPelgrEA",
      },
      description:
        "The MASTER OF ARTS IN EDUCATION MAJOR IN EDUCATIONAL MANAGEMENT program prepares educators for leadership roles in school administration and educational organizations. The program focuses on organizational theory, educational leadership, policy analysis, and research methodologies applicable to educational settings.",
      programOutcomes: [
        {
          id: "EDM01",
          text: "Apply theories and principles of educational management to address challenges in educational institutions.",
        },
        {
          id: "EDM02",
          text: "Design and conduct research that contributes to the improvement of educational management practices.",
        },
        {
          id: "EDM03",
          text: "Communicate effectively with educational stakeholders through clear writing, presentations, and policy recommendations.",
        },
        {
          id: "EDM04",
          text: "Lead educational teams and initiatives to achieve institutional goals and implement positive change.",
        },
        {
          id: "EDM05",
          text: "Evaluate and develop educational policies based on ethical principles, research evidence, and educational standards.",
        },
        {
          id: "EDM06",
          text: "Engage in continuous professional development as an educational leader through reflective practice.",
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
        "Develop educational leaders with strong management and administrative skills",
        "Prepare graduates to implement effective organizational strategies in educational settings",
        "Equip students with skills to analyze and develop educational policies",
        "Foster ethical leadership in educational institutions",
      ],
      careers: [
        "School Administrator",
        "Department Head",
        "Educational Program Manager",
        "Academic Coordinator",
        "School Principal",
        "Educational Consultant",
      ],
    },
    {
      id: 7,
      name: "Master of Arts in Education (MAEd), Major in Teaching Reading and Literature (TRL)",
      icon: BookText,
      color: "from-blue-500 to-blue-700",
      curriculumFiles: {
        2023: "https://drive.google.com/file/d/3Zx5Zx5Zx5Zx5Zx5Zx5Zx5Zx5Zx5Zx5/view?usp=sharing",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/19jZ1LQtXHfrw7mdiaGKuWmIFaPelgrEA",
      },
      description:
        "The MASTER OF ARTS IN EDUCATION MAJOR IN TEACHING READING AND LITERATURE program focuses on advanced literacy instruction, literary analysis, and reading pedagogy. The program prepares educators to become reading specialists, literacy coaches, and literature teachers who can enhance students' reading comprehension and literary appreciation.",
      programOutcomes: [
        {
          id: "TRL01",
          text: "Apply advanced knowledge of reading theories, literary analysis, and pedagogical approaches to enhance literacy instruction.",
        },
        {
          id: "TRL02",
          text: "Design and conduct research in reading education and literature teaching using appropriate methodologies.",
        },
        {
          id: "TRL03",
          text: "Communicate effectively about literature and reading instruction through clear teaching, writing, and presentations.",
        },
        {
          id: "TRL04",
          text: "Lead literacy programs and initiatives to improve reading and literature education in various settings.",
        },
        {
          id: "TRL05",
          text: "Evaluate and develop literacy policies based on reading research, literary theories, and educational standards.",
        },
        {
          id: "TRL06",
          text: "Engage in continuous professional development as a reading and literature educator through reflective practice.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 2 years (4 semesters)",
        "Total Units: 36 units",
        "Research Thesis: Required",
        "Teaching Practicum: Required",
        "Mode of Delivery: Face-to-face with online components",
      ],
      programEducationalObjectives: [
        "Develop reading and literature specialists with advanced knowledge in literacy instruction",
        "Prepare graduates to implement effective reading and literature teaching strategies",
        "Equip students with skills to design literacy programs and interventions",
        "Foster appreciation for literature and effective reading instruction",
      ],
      careers: [
        "Reading Specialist",
        "Literacy Coach",
        "Literature Teacher",
        "Reading Program Coordinator",
        "Literacy Curriculum Developer",
        "Reading Intervention Specialist",
      ],
    },
    {
      id: 8,
      name: "Doctor Of Philosophy in Science Education with Specialization in Physics (PhDScied Physics)",
      icon: Atom,
      color: "from-blue-700 to-blue-900",
      curriculumFiles: {
        2023: "https://drive.google.com/file/d/3Ax5Ax5Ax5Ax5Ax5Ax5Ax5Ax5Ax5Ax5/view?usp=sharing",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/19jZ1LQtXHfrw7mdiaGKuWmIFaPelgrEA",
      },
      description:
        "The DOCTOR OF PHILOSOPHY IN SCIENCE EDUCATION WITH SPECIALIZATION IN PHYSICS program prepares educators to become leaders in physics education research, curriculum development, and advanced physics instruction. The program emphasizes advanced physics concepts, educational research methodologies, and innovative approaches to physics teaching and learning.",
      programOutcomes: [
        {
          id: "PSP01",
          text: "Demonstrate expertise in advanced physics concepts and educational theories to lead innovations in physics education.",
        },
        {
          id: "PSP02",
          text: "Design and conduct sophisticated research that contributes significantly to the field of physics education.",
        },
        {
          id: "PSP03",
          text: "Communicate complex physics concepts effectively to diverse audiences through scholarly writing and presentations.",
        },
        {
          id: "PSP04",
          text: "Lead physics education programs and initiatives to improve science education at institutional and policy levels.",
        },
        {
          id: "PSP05",
          text: "Evaluate and develop physics education policies based on scientific principles, research evidence, and educational standards.",
        },
        {
          id: "PSP06",
          text: "Contribute to the advancement of physics education through original research and scholarly activities.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 3-5 years",
        "Total Units: 60 units",
        "Dissertation: Required",
        "Comprehensive Examination: Required",
        "Mode of Delivery: Face-to-face with laboratory components",
      ],
      programEducationalObjectives: [
        "Develop scholars who can contribute to the advancement of physics education through original research",
        "Prepare leaders who can influence educational policy in science education",
        "Equip graduates with skills to design and evaluate physics education programs",
        "Foster innovation in physics teaching and learning at all educational levels",
      ],
      careers: [
        "Physics Education Researcher",
        "University Professor",
        "Science Education Policy Advisor",
        "Physics Education Program Director",
        "Science Education Consultant",
        "Academic Dean for Science Programs",
      ],
    },
    {
      id: 9,
      name: "Master of Science Education with specialization in Physics",
      icon: Atom,
      color: "from-blue-500 to-blue-700",
      curriculumFiles: {
        2023: "https://drive.google.com/file/d/3Dx5Dx5Dx5Dx5Dx5Dx5Dx5Dx5Dx5Dx5/view?usp=sharing",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/19jZ1LQtXHfrw7mdiaGKuWmIFaPelgrEA",
      },
      description:
        "The MASTER OF SCIENCE EDUCATION WITH SPECIALIZATION IN PHYSICS program combines advanced physics concepts with educational methodologies. The program prepares physics educators to enhance their teaching practices, develop innovative curriculum materials, and conduct research in physics education.",
      programOutcomes: [
        {
          id: "PHY01",
          text: "Apply advanced physics knowledge and educational theories to enhance physics teaching and learning.",
        },
        {
          id: "PHY02",
          text: "Design and conduct research in physics education using appropriate scientific and educational methodologies.",
        },
        {
          id: "PHY03",
          text: "Communicate physics concepts effectively through clear instruction, scientific writing, and presentations.",
        },
        {
          id: "PHY04",
          text: "Function effectively in collaborative educational and scientific teams to achieve common goals in physics education.",
        },
        {
          id: "PHY05",
          text: "Make informed judgments in physics education based on ethical principles, scientific evidence, and educational standards.",
        },
        {
          id: "PHY06",
          text: "Engage in continuous professional development as a physics educator through independent learning and scientific inquiry.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 2 years (4 semesters)",
        "Total Units: 36 units",
        "Research Thesis: Required",
        "Laboratory Work: Required",
        "Mode of Delivery: Face-to-face with laboratory components",
      ],
      programEducationalObjectives: [
        "Develop physics educators with advanced knowledge in physics and teaching methodologies",
        "Prepare graduates to conduct research in physics education",
        "Equip students with skills to design innovative physics curriculum materials",
        "Foster leadership in science education with focus on physics",
      ],
      careers: [
        "Physics Education Specialist",
        "Science Department Chair",
        "Physics Curriculum Developer",
        "Science Education Researcher",
        "Physics Teacher Trainer",
        "Science Program Coordinator",
      ],
    },
  ];

  return (
    <ProgramPageLayout
      title="Graduate Programs"
      description="Explore our graduate programs designed to advance your career in education, develop specialized expertise, and prepare you for leadership roles in educational institutions."
      programs={programs}
      themeColor="blue"
      isGraduate={true}
      bannerImage="/images/ced-logo.png"
      collegeName="College of Education "
    />
  );
};

export default CEDGraduate;
