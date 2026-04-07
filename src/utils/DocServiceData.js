// src/data/docServiceData.js
// Single source of truth for Document Services page.

export const docCategories = [
  { id: "manuals",       label: "Manuals" },
  { id: "curriculum",   label: "Curriculum" },
  { id: "instructional", label: "Instructional" },
  { id: "records",      label: "Records" },
];

export const documents = [
  // Manuals
  {
    id: 1,
    category: "manuals",
    title: "Procedural Manual",
    description: "General guidelines for office operations and academic workflows.",
    italic: false,
  },
  {
    id: 2,
    category: "manuals",
    title: "OBE Manual",
    description: "The official guide for implementing Outcomes-Based Education standards.",
    italic: true,
  },
  {
    id: 3,
    category: "manuals",
    title: "Other Items",
    description: "The official guide for the other items on implementing outcomes.",
    italic: false,
  },

  // Curriculum
  {
    id: 4,
    category: "curriculum",
    title: "Curriculum Map Template",
    description: "Standard template for mapping program outcomes to course outcomes.",
    italic: false,
  },
  {
    id: 5,
    category: "curriculum",
    title: "Syllabus Format",
    description: "The approved university syllabus format aligned with OBE principles.",
    italic: true,
  },
  {
    id: 6,
    category: "curriculum",
    title: "Program Proposal Guide",
    description: "Step-by-step guide for submitting new academic program proposals.",
    italic: false,
  },

  // Instructional
  {
    id: 7,
    category: "instructional",
    title: "Instructional Materials Guidelines",
    description: "Standards for developing and submitting instructional materials for review.",
    italic: false,
  },
  {
    id: 8,
    category: "instructional",
    title: "Course Portfolio Template",
    description: "Template for compiling course portfolios at the end of each semester.",
    italic: true,
  },

  // Records
  {
    id: 9,
    category: "records",
    title: "Performance Evaluation Form",
    description: "Official form for faculty performance evaluation. Requires director authorization.",
    italic: false,
  },
  {
    id: 10,
    category: "records",
    title: "Class Records Template",
    description: "Standardized class records format for faculty submission.",
    italic: true,
  },
];

export const colleges = [
  "College of Computing and Information Sciences (CCIS)",
  "College of Agriculture and Agri-Industries (CAA)",
  "College of Education (CED)",
  "College of Forestry and Environmental Sciences (COFES)",
  "College of Engineering and Geosciences (CEGS)",
  "College of Arts and Humanities and Social Sciences (CHASS)",
  "College of Business Administration (CBA)",
  "College of Maritime and Nautical Sciences (CMNS)",
  "College of Information Technology and Technology Management (CITTE)",
  "College of Engineering and Industrial Technology (CEIT)",
  "College of Tourism and Hospitality Management (CTHM)",
  "Office / Administrative Unit",
];

export const departments = [
  "Department of Computer Science",
  "Department of Information Technology",
  "Department of Education",
  "Department of Engineering",
  "Department of Business",
  "Department of Arts and Sciences",
  "N/A",
];

export const urgencyLevels = [
  "Routine (5-7 business days)",
  "Priority (2-3 business days)",
  "Urgent (Same day / Next day)",
];