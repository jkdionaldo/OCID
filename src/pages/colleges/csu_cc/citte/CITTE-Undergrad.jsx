import React from "react";
import {
  GraduationCap,
  Settings,
  Hammer,
  Users,
  Wrench,
  Car,
  Building,
  Zap,
  Cpu,
  Shirt,
  Home,
  Utensils,
  Book,
  Palette,
  Leaf,
} from "lucide-react";
import ProgramPageLayout from "@/components/layout/ProgramPageLayout";

const CITTEUndergrad = () => {
  const programs = [
    {
      id: 1,
      name: "Master of Arts in Education Major in Educational Management (MAEd-EM)",
      icon: GraduationCap,
      color: "from-purple-600 to-purple-800",
      curriculumFiles: {
        2023: "/curriculum/maed-em-2023.pdf",
        2020: "/curriculum/maed-em-2020.pdf",
      },
      syllabusFiles: {
        2023: "https://example.com/maed-em-syllabus-2023",
      },
      description:
        "The Master of Arts in Education Major in Educational Management program prepares educational leaders and administrators. Students develop advanced knowledge in educational leadership, school management, curriculum development, and educational policies to effectively manage educational institutions.",
      programOutcomes: [
        {
          id: "MAED01",
          text: "Demonstrate advanced knowledge in educational management theories and practices.",
        },
        {
          id: "MAED02",
          text: "Apply effective leadership strategies in educational settings.",
        },
        {
          id: "MAED03",
          text: "Design and implement educational policies and programs.",
        },
        {
          id: "MAED04",
          text: "Conduct educational research to improve institutional practices.",
        },
        {
          id: "MAED05",
          text: "Manage educational resources and facilities effectively.",
        },
        {
          id: "MAED06",
          text: "Foster collaborative relationships with stakeholders in education.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 2 years (4 semesters)",
        "Total Units: 42 units",
        "Thesis: Required",
        "Comprehensive Exam: Required",
        "Mode of Delivery: Face-to-face with seminars and workshops",
      ],
      programEducationalObjectives: [
        "Produce educational leaders who can manage schools and educational institutions effectively",
        "Develop professionals who can implement educational reforms and innovations",
        "Prepare graduates for administrative roles in educational organizations",
        "Foster research-based decision making in educational management",
      ],
      careers: [
        "School Principal",
        "School Administrator",
        "Education Supervisor",
        "Training Manager",
        "Curriculum Specialist",
        "Educational Consultant",
      ],
    },
    {
      id: 2,
      name: "Bachelor of Science in Industrial Technology Major in Apparel and Fashion Technology (BSIndTech-AFT)",
      icon: Shirt,
      color: "from-pink-600 to-pink-800",
      curriculumFiles: {
        2023: "/curriculum/bsindtech-aft-2023.pdf",
        2020: "/curriculum/bsindtech-aft-2020.pdf",
      },
      syllabusFiles: {
        2023: "https://example.com/bsindtech-aft-syllabus-2023",
      },
      description:
        "The BSIndTech in Apparel and Fashion Technology program combines fashion design with manufacturing technology. Students learn garment construction, pattern making, fashion illustration, textile science, and apparel production management to work in the fashion and clothing industry.",
      programOutcomes: [
        {
          id: "AFT01",
          text: "Design and create fashionable and functional apparel using industry standards.",
        },
        {
          id: "AFT02",
          text: "Apply pattern making and grading techniques for mass production.",
        },
        {
          id: "AFT03",
          text: "Utilize CAD software and technology in fashion design and production.",
        },
        {
          id: "AFT04",
          text: "Manage apparel production processes and quality control systems.",
        },
        {
          id: "AFT05",
          text: "Apply textile science and material selection for garment construction.",
        },
        {
          id: "AFT06",
          text: "Demonstrate entrepreneurial skills in fashion business and merchandising.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 148 units",
        "Industrial Training: Required (300 hours)",
        "Design Portfolio: Required",
        "Mode of Delivery: Face-to-face with fashion laboratory and workshop",
      ],
      programEducationalObjectives: [
        "Produce fashion technologists who can work in apparel manufacturing industries",
        "Develop professionals who can design and produce high-quality garments",
        "Prepare graduates for careers in fashion design, production, and merchandising",
        "Foster innovation and entrepreneurship in the fashion industry",
      ],
      careers: [
        "Fashion Designer",
        "Pattern Maker",
        "Production Manager",
        "Quality Control Inspector",
        "Fashion Merchandiser",
        "Apparel Entrepreneur",
      ],
    },
    {
      id: 3,
      name: "Bachelor of Science in Industrial Technology Major in Architectural Drafting Technology (BSIndTech-ADT)",
      icon: Building,
      color: "from-blue-600 to-blue-800",
      curriculumFiles: {
        2023: "/curriculum/bsindtech-adt-2023.pdf",
        2020: "/curriculum/bsindtech-adt-2020.pdf",
      },
      syllabusFiles: {
        2023: "https://example.com/bsindtech-adt-syllabus-2023",
      },
      description:
        "The BSIndTech in Architectural Drafting Technology program prepares students to work as architectural drafters and technicians. Students learn architectural drawing, CAD software, building codes, construction materials, and project management to support architects and engineers in building design and construction.",
      programOutcomes: [
        {
          id: "ADT01",
          text: "Create accurate architectural drawings and technical plans using manual and CAD methods.",
        },
        {
          id: "ADT02",
          text: "Apply building codes and regulations in architectural design and drafting.",
        },
        {
          id: "ADT03",
          text: "Use advanced CAD software and BIM technology for architectural projects.",
        },
        {
          id: "ADT04",
          text: "Estimate materials and costs for construction projects.",
        },
        {
          id: "ADT05",
          text: "Assist in project management and construction supervision.",
        },
        {
          id: "ADT06",
          text: "Apply sustainable design principles in architectural projects.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 152 units",
        "Practicum: Required (400 hours)",
        "Portfolio Project: Required",
        "Mode of Delivery: Face-to-face with drafting laboratory and field work",
      ],
      programEducationalObjectives: [
        "Produce architectural drafters who can support building design and construction",
        "Develop professionals who can create accurate technical drawings and plans",
        "Prepare graduates for careers in architectural firms and construction companies",
        "Foster precision and attention to detail in architectural drafting work",
      ],
      careers: [
        "Architectural Drafter",
        "CAD Technician",
        "Building Inspector",
        "Construction Supervisor",
        "Project Coordinator",
        "Design Technician",
      ],
    },
    {
      id: 4,
      name: "Bachelor of Science in Industrial Technology Major in Automotive Technology (BSIndTech-AT)",
      icon: Car,
      color: "from-red-600 to-red-800",
      curriculumFiles: {
        2023: "/curriculum/bsindtech-at-2023.pdf",
        2020: "/curriculum/bsindtech-at-2020.pdf",
      },
      syllabusFiles: {
        2023: "https://example.com/bsindtech-at-syllabus-2023",
      },
      description:
        "The BSIndTech in Automotive Technology program provides comprehensive training in automotive systems, diagnostics, and repair. Students learn engine systems, electrical systems, transmission, brakes, and modern automotive technology to work as automotive technicians and service managers.",
      programOutcomes: [
        {
          id: "AT01",
          text: "Diagnose and repair automotive engine and mechanical systems effectively.",
        },
        {
          id: "AT02",
          text: "Service and maintain automotive electrical and electronic systems.",
        },
        {
          id: "AT03",
          text: "Use automotive diagnostic tools and equipment proficiently.",
        },
        {
          id: "AT04",
          text: "Apply safety procedures and environmental regulations in automotive service.",
        },
        {
          id: "AT05",
          text: "Manage automotive service operations and customer relations.",
        },
        {
          id: "AT06",
          text: "Stay current with emerging automotive technologies and systems.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 155 units",
        "Industrial Training: Required (400 hours)",
        "Certification Exams: Required",
        "Mode of Delivery: Face-to-face with automotive laboratory and shop work",
      ],
      programEducationalObjectives: [
        "Produce automotive technicians who can service modern vehicles effectively",
        "Develop professionals who can manage automotive service facilities",
        "Prepare graduates for careers in automotive dealerships and service centers",
        "Foster expertise in emerging automotive technologies and systems",
      ],
      careers: [
        "Automotive Technician",
        "Service Manager",
        "Automotive Diagnostician",
        "Parts Manager",
        "Shop Supervisor",
        "Automotive Entrepreneur",
      ],
    },
    {
      id: 5,
      name: "Bachelor of Science in Industrial Technology Major in Civil and Construction Technology (BSIndTech-CCT)",
      icon: Hammer,
      color: "from-orange-600 to-orange-800",
      curriculumFiles: {
        2023: "/curriculum/bsindtech-cct-2023.pdf",
        2020: "/curriculum/bsindtech-cct-2020.pdf",
      },
      syllabusFiles: {
        2023: "https://example.com/bsindtech-cct-syllabus-2023",
      },
      description:
        "The BSIndTech in Civil and Construction Technology program prepares students for careers in construction and civil engineering support. Students learn construction methods, surveying, project management, materials testing, and quality control to work in construction companies and infrastructure projects.",
      programOutcomes: [
        {
          id: "CCT01",
          text: "Apply construction methods and techniques in building and infrastructure projects.",
        },
        {
          id: "CCT02",
          text: "Conduct surveying and site layout for construction projects.",
        },
        {
          id: "CCT03",
          text: "Test and evaluate construction materials for quality and compliance.",
        },
        {
          id: "CCT04",
          text: "Assist in project planning, scheduling, and cost estimation.",
        },
        {
          id: "CCT05",
          text: "Implement safety protocols and quality control measures on construction sites.",
        },
        {
          id: "CCT06",
          text: "Use construction technology and equipment effectively.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 158 units",
        "Field Training: Required (400 hours)",
        "Capstone Project: Required",
        "Mode of Delivery: Face-to-face with construction laboratory and field work",
      ],
      programEducationalObjectives: [
        "Produce construction technologists who can support civil engineering projects",
        "Develop professionals who can manage construction operations and quality control",
        "Prepare graduates for careers in construction companies and infrastructure development",
        "Foster safety consciousness and quality excellence in construction work",
      ],
      careers: [
        "Construction Supervisor",
        "Site Engineer",
        "Quality Control Inspector",
        "Project Coordinator",
        "Materials Tester",
        "Construction Manager",
      ],
    },
    {
      id: 6,
      name: "Bachelor of Science in Industrial Technology Major in Culinary Technology (BSIndTech-CT)",
      icon: Utensils,
      color: "from-yellow-600 to-yellow-800",
      curriculumFiles: {
        2023: "/curriculum/bsindtech-ct-2023.pdf",
        2020: "/curriculum/bsindtech-ct-2020.pdf",
      },
      syllabusFiles: {
        2023: "https://example.com/bsindtech-ct-syllabus-2023",
      },
      description:
        "The BSIndTech in Culinary Technology program trains students in culinary arts, food safety, and kitchen management. Students gain skills in food preparation, menu planning, nutrition, and food service operations to excel in the hospitality and culinary industries.",
      programOutcomes: [
        {
          id: "CT01",
          text: "Prepare and present high-quality dishes using various cooking techniques.",
        },
        {
          id: "CT02",
          text: "Apply food safety and sanitation standards in culinary operations.",
        },
        {
          id: "CT03",
          text: "Develop innovative menus and recipes for diverse culinary needs.",
        },
        {
          id: "CT04",
          text: "Manage kitchen operations and food service establishments efficiently.",
        },
        {
          id: "CT05",
          text: "Apply principles of nutrition in food preparation and menu planning.",
        },
        {
          id: "CT06",
          text: "Demonstrate entrepreneurial skills in the culinary business.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 150 units",
        "Practicum: Required (400 hours)",
        "Culinary Portfolio: Required",
        "Mode of Delivery: Face-to-face with kitchen laboratory and internships",
      ],
      programEducationalObjectives: [
        "Produce skilled culinary professionals for the hospitality industry",
        "Develop expertise in food preparation and kitchen management",
        "Prepare graduates for careers in restaurants and food service enterprises",
        "Foster creativity and innovation in culinary arts",
      ],
      careers: [
        "Chef",
        "Kitchen Manager",
        "Food Safety Officer",
        "Restaurant Entrepreneur",
        "Catering Manager",
        "Food Stylist",
      ],
    },
    {
      id: 7,
      name: "Bachelor of Science in Industrial Technology Major in Electrical Technology (BSIndTech-ELT)",
      icon: Zap,
      color: "from-indigo-600 to-indigo-800",
      curriculumFiles: {
        2023: "/curriculum/bsindtech-elt-2023.pdf",
        2020: "/curriculum/bsindtech-elt-2020.pdf",
      },
      syllabusFiles: {
        2023: "https://example.com/bsindtech-elt-syllabus-2023",
      },
      description:
        "The BSIndTech in Electrical Technology program focuses on electrical systems, wiring, and power distribution. Students learn circuit design, electrical installation, maintenance, and safety protocols to work as electrical technicians and supervisors.",
      programOutcomes: [
        {
          id: "ELT01",
          text: "Design and install electrical systems according to safety standards.",
        },
        {
          id: "ELT02",
          text: "Maintain and troubleshoot electrical equipment and circuits.",
        },
        {
          id: "ELT03",
          text: "Apply electrical codes and regulations in installation projects.",
        },
        {
          id: "ELT04",
          text: "Use electrical testing and diagnostic tools effectively.",
        },
        {
          id: "ELT05",
          text: "Manage electrical projects and ensure compliance with safety norms.",
        },
        {
          id: "ELT06",
          text: "Stay updated with advancements in electrical technology.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 154 units",
        "Industrial Training: Required (400 hours)",
        "Certification: Required",
        "Mode of Delivery: Face-to-face with electrical laboratory and field work",
      ],
      programEducationalObjectives: [
        "Produce skilled electrical technicians for industrial and residential projects",
        "Develop professionals who can maintain and install electrical systems",
        "Prepare graduates for careers in electrical contracting and maintenance",
        "Foster safety and technical expertise in electrical work",
      ],
      careers: [
        "Electrical Technician",
        "Maintenance Supervisor",
        "Electrical Contractor",
        "Project Electrician",
        "Safety Inspector",
        "Renewable Energy Technician",
      ],
    },
    {
      id: 8,
      name: "Bachelor of Science in Industrial Technology Major in Electronics Technology (BSIndTech-ELX)",
      icon: Cpu,
      color: "from-teal-600 to-teal-800",
      curriculumFiles: {
        2023: "/curriculum/bsindtech-elx-2023.pdf",
        2020: "/curriculum/bsindtech-elx-2020.pdf",
      },
      syllabusFiles: {
        2023: "https://example.com/bsindtech-elx-syllabus-2023",
      },
      description:
        "The BSIndTech in Electronics Technology program covers electronic circuits, microcontrollers, and digital systems. Students gain skills in repairing, assembling, and maintaining electronic devices to work in the electronics manufacturing and service sectors.",
      programOutcomes: [
        {
          id: "ELX01",
          text: "Assemble and repair electronic circuits and devices.",
        },
        {
          id: "ELX02",
          text: "Program and troubleshoot microcontrollers and embedded systems.",
        },
        {
          id: "ELX03",
          text: "Use electronic testing equipment for diagnostics and repair.",
        },
        {
          id: "ELX04",
          text: "Design basic electronic systems for various applications.",
        },
        {
          id: "ELX05",
          text: "Apply safety protocols in handling electronic components.",
        },
        {
          id: "ELX06",
          text: "Keep pace with innovations in electronics technology.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 156 units",
        "Practicum: Required (400 hours)",
        "Project: Required",
        "Mode of Delivery: Face-to-face with electronics laboratory",
      ],
      programEducationalObjectives: [
        "Produce electronics technicians for manufacturing and service industries",
        "Develop skills in designing and repairing electronic systems",
        "Prepare graduates for careers in electronics companies and research",
        "Foster innovation in electronic device development",
      ],
      careers: [
        "Electronics Technician",
        "Circuit Designer",
        "Maintenance Engineer",
        "Embedded Systems Developer",
        "Quality Control Specialist",
        "Electronics Entrepreneur",
      ],
    },
    {
      id: 9,
      name: "Bachelor of Science in Industrial Technology Major in Welding and Fabrication Technology (BSIndTech-WFT)",
      icon: Wrench,
      color: "from-gray-600 to-gray-800",
      curriculumFiles: {
        2023: "/curriculum/bsindtech-wft-2023.pdf",
        2020: "/curriculum/bsindtech-wft-2020.pdf",
      },
      syllabusFiles: {
        2023: "https://example.com/bsindtech-wft-syllabus-2023",
      },
      description:
        "The BSIndTech in Welding and Fabrication Technology program trains students in welding techniques, metal fabrication, and quality control. Students learn to weld various materials, read blueprints, and maintain welding equipment for careers in manufacturing and construction.",
      programOutcomes: [
        {
          id: "WFT01",
          text: "Perform various welding techniques on different materials.",
        },
        {
          id: "WFT02",
          text: "Fabricate metal structures using blueprints and specifications.",
        },
        {
          id: "WFT03",
          text: "Apply quality control measures in welding projects.",
        },
        {
          id: "WFT04",
          text: "Maintain and troubleshoot welding equipment and tools.",
        },
        {
          id: "WFT05",
          text: "Ensure safety standards in welding and fabrication processes.",
        },
        {
          id: "WFT06",
          text: "Develop skills for entrepreneurship in welding services.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 153 units",
        "Field Training: Required (400 hours)",
        "Certification: Required",
        "Mode of Delivery: Face-to-face with welding laboratory and shop",
      ],
      programEducationalObjectives: [
        "Produce skilled welders and fabricators for industrial applications",
        "Develop expertise in metal fabrication and welding techniques",
        "Prepare graduates for careers in construction and manufacturing",
        "Foster safety and precision in welding operations",
      ],
      careers: [
        "Welder",
        "Fabrication Technician",
        "Welding Inspector",
        "Shop Foreman",
        "Structural Fabricator",
        "Welding Entrepreneur",
      ],
    },
    {
      id: 10,
      name: "Bachelor of Technical - Vocational Teacher Education Major in Architectural Drafting (BTVTEd-ADT)",
      icon: Building,
      color: "from-blue-600 to-blue-800",
      curriculumFiles: {
        2023: "/curriculum/btvtad-adt-2023.pdf",
        2020: "/curriculum/btvtad-adt-2020.pdf",
      },
      syllabusFiles: {
        2023: "https://example.com/btvtad-adt-syllabus-2023",
      },
      description:
        "The BTVTEd in Architectural Drafting program trains educators to teach architectural drafting and technical drawing. Students learn pedagogy, CAD software, and building design principles to become vocational teachers and trainers in technical education.",
      programOutcomes: [
        {
          id: "ADT01",
          text: "Teach architectural drafting skills using modern pedagogical methods.",
        },
        {
          id: "ADT02",
          text: "Develop curriculum and lesson plans for technical education.",
        },
        {
          id: "ADT03",
          text: "Use CAD software to demonstrate drafting techniques.",
        },
        {
          id: "ADT04",
          text: "Assess and evaluate students’ technical drawing proficiency.",
        },
        {
          id: "ADT05",
          text: "Apply safety and quality standards in drafting education.",
        },
        {
          id: "ADT06",
          text: "Prepare students for industry certification in drafting.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 140 units",
        "Teaching Internship: Required (600 hours)",
        "Portfolio: Required",
        "Mode of Delivery: Face-to-face with classroom and laboratory training",
      ],
      programEducationalObjectives: [
        "Produce qualified vocational teachers in architectural drafting",
        "Develop skills in teaching technical drawing and CAD",
        "Prepare graduates for careers in technical-vocational education",
        "Foster educational innovation in drafting instruction",
      ],
      careers: [
        "Vocational Teacher",
        "Technical Trainer",
        "Curriculum Developer",
        "Education Consultant",
        "Drafting Instructor",
        "School Administrator",
      ],
    },
    {
      id: 11,
      name: "Bachelor of Technical - Vocational Teacher Education Major in Automotive Technology (BTVTEd-AT)",
      icon: Car,
      color: "from-red-600 to-red-800",
      curriculumFiles: {
        2023: "/curriculum/btvtad-at-2023.pdf",
        2020: "/curriculum/btvtad-at-2020.pdf",
      },
      syllabusFiles: {
        2023: "https://example.com/btvtad-at-syllabus-2023",
      },
      description:
        "The BTVTEd in Automotive Technology program prepares educators to teach automotive repair and maintenance. Students learn teaching methodologies, automotive diagnostics, and safety practices to train future automotive technicians.",
      programOutcomes: [
        {
          id: "AT01",
          text: "Instruct students in automotive repair and diagnostic techniques.",
        },
        {
          id: "AT02",
          text: "Develop educational materials for automotive technology courses.",
        },
        {
          id: "AT03",
          text: "Use diagnostic tools to demonstrate automotive systems.",
        },
        {
          id: "AT04",
          text: "Evaluate students’ practical skills in automotive service.",
        },
        {
          id: "AT05",
          text: "Implement safety protocols in automotive education.",
        },
        {
          id: "AT06",
          text: "Prepare students for automotive industry certifications.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 142 units",
        "Teaching Internship: Required (600 hours)",
        "Portfolio: Required",
        "Mode of Delivery: Face-to-face with automotive shop and classroom",
      ],
      programEducationalObjectives: [
        "Produce qualified vocational teachers in automotive technology",
        "Develop skills in teaching automotive repair and maintenance",
        "Prepare graduates for careers in technical education",
        "Foster safety and technical proficiency in automotive training",
      ],
      careers: [
        "Vocational Teacher",
        "Automotive Instructor",
        "Training Coordinator",
        "Education Supervisor",
        "Technical Consultant",
        "Curriculum Designer",
      ],
    },
    {
      id: 12,
      name: "Bachelor of Technical - Vocational Teacher Education Major in Civil and Construction Technology (BTVTEd-CCT)",
      icon: Hammer,
      color: "from-orange-600 to-orange-800",
      curriculumFiles: {
        2023: "/curriculum/btvtad-cct-2023.pdf",
        2020: "/curriculum/btvtad-cct-2020.pdf",
      },
      syllabusFiles: {
        2023: "https://example.com/btvtad-cct-syllabus-2023",
      },
      description:
        "The BTVTEd in Civil and Construction Technology program trains educators to teach construction techniques and civil engineering principles. Students learn pedagogy, surveying, and project management to become vocational instructors.",
      programOutcomes: [
        {
          id: "CCT01",
          text: "Teach construction techniques and civil engineering concepts.",
        },
        {
          id: "CCT02",
          text: "Develop training materials for construction technology courses.",
        },
        {
          id: "CCT03",
          text: "Demonstrate surveying and site layout methods.",
        },
        {
          id: "CCT04",
          text: "Assess students’ skills in construction practices.",
        },
        {
          id: "CCT05",
          text: "Implement safety standards in construction education.",
        },
        {
          id: "CCT06",
          text: "Prepare students for industry roles in construction.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 145 units",
        "Teaching Internship: Required (600 hours)",
        "Capstone Project: Required",
        "Mode of Delivery: Face-to-face with field and classroom training",
      ],
      programEducationalObjectives: [
        "Produce qualified vocational teachers in civil and construction technology",
        "Develop skills in teaching construction methods and surveying",
        "Prepare graduates for careers in technical-vocational education",
        "Foster safety and quality in construction training",
      ],
      careers: [
        "Vocational Teacher",
        "Construction Instructor",
        "Training Supervisor",
        "Education Coordinator",
        "Technical Educator",
        "Curriculum Specialist",
      ],
    },
    {
      id: 13,
      name: "Bachelor of Technical - Vocational Teacher Education Major in Electrical Technology (BTVTEd-ELT)",
      icon: Zap,
      color: "from-indigo-600 to-indigo-800",
      curriculumFiles: {
        2023: "/curriculum/btvtad-elt-2023.pdf",
        2020: "/curriculum/btvtad-elt-2020.pdf",
      },
      syllabusFiles: {
        2023: "https://example.com/btvtad-elt-syllabus-2023",
      },
      description:
        "The BTVTEd in Electrical Technology program prepares educators to teach electrical systems and wiring. Students learn teaching strategies, circuit design, and safety practices to train future electrical technicians.",
      programOutcomes: [
        {
          id: "ELT01",
          text: "Instruct students in electrical system installation and maintenance.",
        },
        {
          id: "ELT02",
          text: "Develop educational content for electrical technology courses.",
        },
        {
          id: "ELT03",
          text: "Demonstrate use of electrical testing tools.",
        },
        {
          id: "ELT04",
          text: "Evaluate students’ skills in electrical projects.",
        },
        {
          id: "ELT05",
          text: "Apply safety standards in electrical education.",
        },
        {
          id: "ELT06",
          text: "Prepare students for electrical industry certifications.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 143 units",
        "Teaching Internship: Required (600 hours)",
        "Portfolio: Required",
        "Mode of Delivery: Face-to-face with electrical lab and classroom",
      ],
      programEducationalObjectives: [
        "Produce qualified vocational teachers in electrical technology",
        "Develop skills in teaching electrical systems and safety",
        "Prepare graduates for careers in technical education",
        "Foster technical proficiency in electrical training",
      ],
      careers: [
        "Vocational Teacher",
        "Electrical Instructor",
        "Training Specialist",
        "Education Supervisor",
        "Technical Consultant",
        "Curriculum Developer",
      ],
    },
    {
      id: 14,
      name: "Bachelor of Technical - Vocational Teacher Education Major in Electronics Technology (BTVTEd-ELX)",
      icon: Cpu,
      color: "from-teal-600 to-teal-800",
      curriculumFiles: {
        2023: "/curriculum/btvtad-elx-2023.pdf",
        2020: "/curriculum/btvtad-elx-2020.pdf",
      },
      syllabusFiles: {
        2023: "https://example.com/btvtad-elx-syllabus-2023",
      },
      description:
        "The BTVTEd in Electronics program trains educators to teach electronic circuits and devices. Students learn pedagogy, microcontroller programming, and repair techniques to become vocational instructors in electronics.",
      programOutcomes: [
        {
          id: "ELX01",
          text: "Teach students to assemble and repair electronic circuits.",
        },
        {
          id: "ELX02",
          text: "Develop training materials for electronics courses.",
        },
        {
          id: "ELX03",
          text: "Demonstrate use of electronic diagnostic equipment.",
        },
        {
          id: "ELX04",
          text: "Assess students’ skills in electronics projects.",
        },
        {
          id: "ELX05",
          text: "Implement safety practices in electronics education.",
        },
        {
          id: "ELX06",
          text: "Prepare students for electronics industry roles.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 144 units",
        "Teaching Internship: Required (600 hours)",
        "Project: Required",
        "Mode of Delivery: Face-to-face with electronics lab and classroom",
      ],
      programEducationalObjectives: [
        "Produce qualified vocational teachers in electronics technology",
        "Develop skills in teaching electronic systems and programming",
        "Prepare graduates for careers in technical education",
        "Foster innovation in electronics instruction",
      ],
      careers: [
        "Vocational Teacher",
        "Electronics Instructor",
        "Training Coordinator",
        "Education Consultant",
        "Technical Educator",
        "Curriculum Designer",
      ],
    },
    {
      id: 15,
      name: "Bachelor of Technical - Vocational Teacher Education Major in Food and Service Management (BTVTEd-FSM)",
      icon: Utensils,
      color: "from-yellow-600 to-yellow-800",
      curriculumFiles: {
        2023: "/curriculum/btvtad-fsm-2023.pdf",
        2020: "/curriculum/btvtad-fsm-2020.pdf",
      },
      syllabusFiles: {
        2023: "https://example.com/btvtad-fsm-syllabus-2023",
      },
      description:
        "The BTVTEd in Food and Service Management program trains educators to teach culinary arts and hospitality management. Students learn pedagogy, food safety, and service operations to become vocational instructors.",
      programOutcomes: [
        {
          id: "FSM01",
          text: "Teach food preparation and service management techniques.",
        },
        {
          id: "FSM02",
          text: "Develop educational materials for culinary and service courses.",
        },
        {
          id: "FSM03",
          text: "Demonstrate food safety and hygiene practices.",
        },
        {
          id: "FSM04",
          text: "Assess students’ skills in food service operations.",
        },
        {
          id: "FSM05",
          text: "Implement management principles in hospitality education.",
        },
        {
          id: "FSM06",
          text: "Prepare students for careers in food service industries.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 141 units",
        "Teaching Internship: Required (600 hours)",
        "Portfolio: Required",
        "Mode of Delivery: Face-to-face with kitchen and classroom training",
      ],
      programEducationalObjectives: [
        "Produce qualified vocational teachers in food and service management",
        "Develop skills in teaching culinary arts and hospitality",
        "Prepare graduates for careers in technical education",
        "Foster professionalism in food service training",
      ],
      careers: [
        "Vocational Teacher",
        "Culinary Instructor",
        "Hospitality Trainer",
        "Education Supervisor",
        "Service Management Consultant",
        "Curriculum Developer",
      ],
    },
    {
      id: 16,
      name: "Bachelor of Technical - Vocational Teacher Education Major in Garments, Fashion and Design (BTVTEd-GFD)",
      icon: Palette,
      color: "from-pink-600 to-pink-800",
      curriculumFiles: {
        2023: "/curriculum/btvtad-gfd-2023.pdf",
        2020: "/curriculum/btvtad-gfd-2020.pdf",
      },
      syllabusFiles: {
        2023: "https://example.com/btvtad-gfd-syllabus-2023",
      },
      description:
        "The BTVTEd in Garments, Fashion and Design program trains educators to teach fashion design and garment construction. Students learn pedagogy, pattern making, and textile technology to become vocational instructors.",
      programOutcomes: [
        {
          id: "GFD01",
          text: "Teach garment construction and fashion design techniques.",
        },
        {
          id: "GFD02",
          text: "Develop educational materials for fashion courses.",
        },
        {
          id: "GFD03",
          text: "Demonstrate pattern making and sewing skills.",
        },
        {
          id: "GFD04",
          text: "Assess students’ proficiency in fashion projects.",
        },
        {
          id: "GFD05",
          text: "Apply safety standards in fashion education.",
        },
        {
          id: "GFD06",
          text: "Prepare students for careers in the fashion industry.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 139 units",
        "Teaching Internship: Required (600 hours)",
        "Portfolio: Required",
        "Mode of Delivery: Face-to-face with fashion lab and classroom",
      ],
      programEducationalObjectives: [
        "Produce qualified vocational teachers in garments and fashion design",
        "Develop skills in teaching pattern making and sewing",
        "Prepare graduates for careers in technical education",
        "Foster creativity in fashion instruction",
      ],
      careers: [
        "Vocational Teacher",
        "Fashion Instructor",
        "Design Trainer",
        "Education Consultant",
        "Technical Educator",
        "Curriculum Specialist",
      ],
    },
    {
      id: 17,
      name: "Bachelor of Technical – Vocational Teacher Education Major in Welding & Fabrication Technology (BTVTEd-WFT)",
      icon: Wrench,
      color: "from-slate-600 to-slate-800",
      curriculumFiles: {
        2023: "/curriculum/btvted-wft-2023.pdf",
        2020: "/curriculum/btvted-wft-2020.pdf",
      },
      syllabusFiles: {
        2023: "https://example.com/btvted-wft-syllabus-2023",
      },
      description:
        "The BTVTEd in Welding & Fabrication Technology program trains educators to teach welding techniques and metal fabrication. Students learn pedagogical methods, various welding processes, and safety protocols to become vocational instructors in welding and fabrication technology.",
      programOutcomes: [
        {
          id: "WFT01",
          text: "Teach various welding techniques and metal fabrication processes effectively.",
        },
        {
          id: "WFT02",
          text: "Develop educational materials and curricula for welding technology courses.",
        },
        {
          id: "WFT03",
          text: "Demonstrate proper use of welding equipment and fabrication tools.",
        },
        {
          id: "WFT04",
          text: "Assess students' practical skills in welding and fabrication projects.",
        },
        {
          id: "WFT05",
          text: "Implement comprehensive safety protocols in welding education.",
        },
        {
          id: "WFT06",
          text: "Prepare students for welding industry certifications and careers.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 146 units",
        "Teaching Internship: Required (600 hours)",
        "Welding Certification: Required",
        "Mode of Delivery: Face-to-face with welding laboratory and workshop training",
      ],
      programEducationalObjectives: [
        "Produce qualified vocational teachers in welding and fabrication technology",
        "Develop expertise in teaching welding processes and metal fabrication",
        "Prepare graduates for careers in technical-vocational education",
        "Foster safety consciousness and precision in welding instruction",
      ],
      careers: [
        "Vocational Teacher",
        "Welding Instructor",
        "Technical Trainer",
        "Education Supervisor",
        "Welding Consultant",
        "Curriculum Developer",
      ],
    },
    {
      id: 18,
      name: "Bachelor of Technology and Livelihood Education Major in Home Economics (BTLEd-HE)",
      icon: Home,
      color: "from-green-600 to-green-800",
      curriculumFiles: {
        2023: "/curriculum/btled-he-2023.pdf",
        2020: "/curriculum/btled-he-2020.pdf",
      },
      syllabusFiles: {
        2023: "https://example.com/btled-he-syllabus-2023",
      },
      description:
        "The BTLEd in Home Economics program trains educators to teach home management, nutrition, and family life education. Students learn pedagogy and practical skills to become vocational instructors in home economics.",
      programOutcomes: [
        {
          id: "HE01",
          text: "Teach home management and family life skills.",
        },
        {
          id: "HE02",
          text: "Develop educational materials for home economics courses.",
        },
        {
          id: "HE03",
          text: "Demonstrate nutrition and cooking techniques.",
        },
        {
          id: "HE04",
          text: "Assess students’ skills in home-related projects.",
        },
        {
          id: "HE05",
          text: "Apply safety and hygiene standards in education.",
        },
        {
          id: "HE06",
          text: "Prepare students for careers in home-based industries.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 138 units",
        "Teaching Internship: Required (600 hours)",
        "Portfolio: Required",
        "Mode of Delivery: Face-to-face with home lab and classroom",
      ],
      programEducationalObjectives: [
        "Produce qualified vocational teachers in home economics",
        "Develop skills in teaching nutrition and home management",
        "Prepare graduates for careers in technical education",
        "Foster practical life skills in home-based training",
      ],
      careers: [
        "Vocational Teacher",
        "Home Economics Instructor",
        "Nutrition Educator",
        "Family Life Trainer",
        "Education Consultant",
        "Curriculum Developer",
      ],
    },
    {
      id: 19,
      name: "Bachelor of Technology and Livelihood Education Major in Industrial Arts (BTLEd-IA)",
      icon: Wrench,
      color: "from-gray-600 to-gray-800",
      curriculumFiles: {
        2023: "/curriculum/btled-ia-2023.pdf",
        2020: "/curriculum/btled-ia-2020.pdf",
      },
      syllabusFiles: {
        2023: "https://example.com/btled-ia-syllabus-2023",
      },
      description:
        "The BTLEd in Industrial Arts program trains educators to teach industrial skills such as woodworking, metalwork, and drafting. Students learn pedagogy and technical skills to become vocational instructors.",
      programOutcomes: [
        {
          id: "IA01",
          text: "Teach industrial arts skills like woodworking and metalwork.",
        },
        {
          id: "IA02",
          text: "Develop educational materials for industrial arts courses.",
        },
        {
          id: "IA03",
          text: "Demonstrate technical skills in industrial projects.",
        },
        {
          id: "IA04",
          text: "Assess students’ proficiency in industrial crafts.",
        },
        {
          id: "IA05",
          text: "Apply safety standards in industrial education.",
        },
        {
          id: "IA06",
          text: "Prepare students for industrial trade careers.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 137 units",
        "Teaching Internship: Required (600 hours)",
        "Portfolio: Required",
        "Mode of Delivery: Face-to-face with workshop and classroom",
      ],
      programEducationalObjectives: [
        "Produce qualified vocational teachers in industrial arts",
        "Develop skills in teaching technical trades and crafts",
        "Prepare graduates for careers in technical education",
        "Foster craftsmanship and safety in industrial training",
      ],
      careers: [
        "Vocational Teacher",
        "Industrial Arts Instructor",
        "Workshop Trainer",
        "Education Supervisor",
        "Technical Consultant",
        "Curriculum Designer",
      ],
    },
  ];

  return (
    <ProgramPageLayout
      title="Undergraduate Programs"
      description="The College of Industrial Technology and Teacher Education (CITTE) offers comprehensive programs that combine technical expertise with educational excellence. Our programs prepare students for careers in technical education, industrial technology, and specialized technical fields through hands-on training, industry partnerships, and innovative teaching methodologies."
      programs={programs}
      themeColor="gray"
      isGraduate={false}
      bannerImage="/images/csu-cc/CITTE-logo.png"
      collegeName="College of Industrial Technology and Teacher Education (CITTE) - CSU Cabadbaran Campus"
    />
  );
};

export default CITTEUndergrad;
