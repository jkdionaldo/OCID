import React, { useState } from "react";
import { HeartHandshake } from "lucide-react";
import ProgramPageLayout from "@/components/layout/ProgramPageLayout";

const CHASSGraduate = () => {
  const programs = [
    {
      id: 1,
      name: "Master of Arts in Guidance and Counseling (MA-GC)",
      icon: HeartHandshake,
      color: "from-purple-600 to-purple-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2022: "https://drive.google.com/file/d/1KvvNyQ4H3B0nEohCLQD_XenpoCYm4xXS/view?usp=sharing",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/1Y9Ad3bUdx0JG5cyIPbSJg4-F9h-wPAdJ",
      },
      description:
        "The MASTER OF ARTS IN GUIDANCE AND COUNSELING (MA-GC) program prepares students to become professional counselors in various settings. The program emphasizes the development of counseling skills, theoretical knowledge, and ethical practice. Graduates are equipped to work in schools, community agencies, and private practice, helping individuals navigate life challenges and achieve personal growth.",
      programOutcomes: [
        {
          id: "GC01",
          text: "Apply advanced knowledge of counseling theories and techniques to address diverse client needs and challenges.",
        },
        {
          id: "GC02",
          text: "Design and implement appropriate counseling interventions based on assessment data and client characteristics.",
        },
        {
          id: "GC03",
          text: "Communicate effectively with clients, families, and other professionals through clear writing, presentations, and interpersonal skills.",
        },
        {
          id: "GC04",
          text: "Function effectively as a member of interdisciplinary teams to achieve common goals in client care and support.",
        },
        {
          id: "GC05",
          text: "Recognize professional responsibilities and make informed judgments in counseling practice based on legal, ethical, and cultural considerations.",
        },
        {
          id: "GC06",
          text: "Engage in continuous professional development and self-reflection to enhance counseling effectiveness and personal growth.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 2 years (4 semesters)",
        "Total Units: 36 units",
        "Practicum: Required",
        "Comprehensive Exam: Required",
        "Mode of Delivery: Face-to-face with online components",
      ],
    },
  ];

  return (
    <ProgramPageLayout
      title="Graduate Programs"
      description="Explore our graduate programs designed to advance your career in the fields of humanities, arts, and social sciences, with specialized training in guidance and counseling to help individuals navigate life challenges."
      programs={programs}
      themeColor="purple"
      isGraduate={true}
      bannerImage="/images/chass-logo.png"
      collegeName="College of Humanities, Arts and Social Sciences"
    />
  );
};

export default CHASSGraduate;
