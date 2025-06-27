import React, { useState } from "react";
import { Brain, Users, HeartHandshake } from "lucide-react";
import ProgramPageLayout from "@/components/layout/ProgramPageLayout";

const CHASSUndergrad = () => {
  const programs = [
    {
      id: 1,
      name: "Bachelor of Science in Psychology (BS Psychology)",
      icon: Brain,
      color: "from-purple-500 to-purple-700",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2022: "https://drive.google.com/file/d/1KvvNyQ4H3B0nEohCLQD_XenpoCYm4xXS/view?usp=sharing",
        2020: "/placeholder.svg?height=800&width=600",
      },
      description:
        "The BS Psychology program provides students with a strong foundation in psychological theories, research methods, and practical applications. Students develop critical thinking skills and gain insights into human behavior and mental processes.",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 130 units",
        "Practicum: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with laboratory work",
      ],
      programEducationalObjectives: [
        "Produce graduates who can apply psychological principles to solve complex human behavior problems",
        "Develop professionals who can conduct psychological research and assessment",
        "Prepare students for advanced studies and research in specialized areas of psychology",
        "Foster ethical practice and social responsibility in psychological work",
      ],
      programOutcomes: [
        "Apply psychological theories and principles to understand human behavior",
        "Design and conduct psychological research using appropriate methods",
        "Analyze psychological data using scientific approaches",
        "Communicate psychological concepts effectively to diverse audiences",
      ],
      careers: [
        "Clinical Psychologist (with further education)",
        "Human Resources Specialist",
        "Research Assistant",
        "Behavioral Analyst",
        "Mental Health Counselor (with certification)",
      ],
      syllabusFiles: {
        2023: "https://example.com/psychology-syllabus-2023", // Example URL
      },
    },
    {
      id: 2,
      name: "Bachelor of Arts in Sociology (AB Sociology)",
      icon: Users,
      color: "from-purple-600 to-purple-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      description:
        "The AB Sociology program focuses on the study of social behavior, social institutions, and social change. Students learn to analyze social phenomena and develop solutions to social problems.",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 124 units",
        "Thesis: Required",
        "Community Immersion: Required",
        "Mode of Delivery: Face-to-face with field work",
      ],
      programEducationalObjectives: [
        "Produce graduates who can analyze social structures and processes",
        "Develop professionals who can conduct social research and assessment",
        "Prepare students for careers in community development and social services",
        "Foster social responsibility and ethical practice in sociological work",
      ],
      programOutcomes: [
        "Apply sociological theories to analyze social phenomena",
        "Design and conduct social research using appropriate methods",
        "Develop interventions for social problems based on evidence",
        "Communicate sociological concepts effectively to diverse audiences",
      ],
      careers: [
        "Social Researcher",
        "Community Development Worker",
        "Policy Analyst",
        "Human Services Specialist",
        "Public Relations Specialist",
      ],
      syllabusFiles: {
        2023: "https://example.com/sociology-syllabus-2023", // Example URL
      },
    },
    {
      id: 3,
      name: "Bachelor of Science in Social Work (BS Social Work)",
      icon: HeartHandshake,
      color: "from-purple-600 to-purple-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      description:
        "The BS Social Work program prepares students for professional practice in social welfare and social development. Students learn to help individuals, families, and communities address social problems and improve their well-being.",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 136 units",
        "Field Practice: Required",
        "Board Exam Preparation: Included",
        "Mode of Delivery: Face-to-face with field work",
      ],
      programEducationalObjectives: [
        "Produce graduates who can apply social work principles in various settings",
        "Develop professionals who can conduct social assessments and interventions",
        "Prepare students for licensure and professional practice",
        "Foster social justice advocacy and ethical practice in social work",
      ],
      programOutcomes: [
        "Apply social work principles to help individuals, families, and communities",
        "Conduct social assessments and develop intervention plans",
        "Advocate for social justice and human rights",
        "Engage in ethical practice and professional development",
      ],
      careers: [
        "Licensed Social Worker (after passing board exam)",
        "Case Manager",
        "Community Organizer",
        "Child Welfare Specialist",
        "Healthcare Social Worker",
      ],
      syllabusFiles: {
        2023: "https://example.com/socialwork-syllabus-2023", // Example URL
      },
    },
  ];

  return (
    <ProgramPageLayout
      title="Undergraduate Programs"
      description="Explore our undergraduate programs designed to prepare you for success in the fields of humanities, arts, and social sciences, developing critical thinking and cultural understanding."
      programs={programs}
      themeColor="purple"
      isGraduate={false}
      bannerImage="/images/chass-logo.png"
      collegeName="College of Humanities, Arts and Social Sciences"
    />
  );
};

export default CHASSUndergrad;
