// src/data/newsData.js
// Single source of truth for all news articles.
// Both Home.jsx (cards) and NewsDetail.jsx (full page) import from here.

const newsData = [
  {
    id: "ocid-new-director-2026",
    title: "OCID Welcomes New Director for CY 2026",
    date: "January 5, 2026",
    location: "CSU, Main Campus",
    image: "/images/director.png",
    tag: "Welcome!",
    caption: "Photo via CSU OCID",
    body: [
      "The Office of Curriculum and Instruction Development (OCID) of Caraga State University officially welcomes its new director for Calendar Year 2026. The appointment marks a significant milestone for the office as it continues to advance its mandate of developing quality academic programs and instructional materials across the university.",
      "The new director brings with her a wealth of experience in curriculum development, academic quality assurance, and institutional planning. Her leadership is expected to further strengthen OCID's role in aligning the university's academic offerings with the Commission on Higher Education (CHED) standards and Outcomes-Based Education (OBE) principles.",
      "In her inaugural message, the director emphasized her commitment to fostering collaboration among faculty, administrators, and stakeholders to ensure that Caraga State University continues to produce globally competitive graduates ready to address the challenges of the 21st century.",
      "The OCID team expressed their warm welcome and full support to the new director as the office embarks on another year of service, innovation, and academic excellence.",
    ],
  },
  {
    id: "obe-training-2026",
    title: "OBE-Training For Newly Hired and Reinstated Faculty",
    date: "February 18, 2026",
    location: "CSU, Archives",
    image: "/images/OBE.JPG",
    tag: null,
    caption: "Photo via CSU OCID",
    body: [
      "The Office of Curriculum and Instruction Development (OCID) conducted an Outcome-Based Education (OBE) training program for newly hired and reinstated faculty members of Caraga State University.",
      "The training aimed to equip faculty with the foundational knowledge and practical skills needed to design and deliver OBE-aligned courses. Participants were guided through the process of formulating course learning outcomes, aligning teaching strategies and assessments, and constructing syllabi in accordance with CHED and university standards.",
      "Resource persons from OCID facilitated sessions covering the principles of OBE, course outcome mapping, and the use of the university's standard syllabus template. Interactive workshops allowed participants to apply concepts directly to their respective disciplines.",
      "The activity underscores OCID's continued commitment to building faculty capability and ensuring instructional quality across all colleges of Caraga State University.",
    ],
  },
  {
    id: "post-enrollment-curriculum-2026",
    title: "Post-Enrollment Curriculum Assessment",
    date: "March 4, 2026",
    location: "CSU, Archives",
    image: "/images/postcur.jpg",
    tag: null,
    caption: "Photo via CSU OCID",
    body: [
      "The Office of Curriculum and Instruction Development (OCID) conducted its Post-Enrollment Curriculum Assessment for the current academic year, bringing together program heads, college deans, and faculty representatives from across Caraga State University.",
      "The assessment serves as a critical review mechanism to evaluate the alignment of academic programs with institutional outcomes, industry demands, and CHED memorandum orders. Participants examined enrollment data, graduate tracer study results, and stakeholder feedback to identify areas for curriculum improvement.",
      "Key discussions centered on the relevance of existing course offerings, the integration of emerging fields and technologies, and the strengthening of OBE implementation across all programs. Recommendations from the assessment will be consolidated and submitted for review by the University Academic Council.",
      "OCID reaffirms its commitment to continuous curriculum improvement as a cornerstone of academic excellence at Caraga State University, ensuring that programs remain responsive to the evolving needs of students, industry, and society.",
    ],
  },
];

export default newsData;