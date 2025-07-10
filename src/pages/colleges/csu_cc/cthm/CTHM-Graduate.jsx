// import React from "react";
// import { GraduationCap, Globe, TrendingUp } from "lucide-react";
// import ProgramPageLayout from "@/components/layout/ProgramPageLayout";

// const CTHMGraduate = () => {
//   const programs = [
//     {
//       id: 1,
//       name: "Master of Science in Tourism Management (MSTM)",
//       icon: Globe,
//       color: "from-blue-600 to-blue-800",
//       curriculumFiles: {
//         2023: "/placeholder.svg?height=800&width=600",
//         2020: "/placeholder.svg?height=800&width=600",
//       },
//       syllabusFiles: {
//         2023: "https://example.com/mstm-syllabus-2023",
//       },
//       description:
//         "The Master of Science in Tourism Management program provides advanced knowledge in sustainable tourism development, destination management, and tourism policy. Students conduct research in tourism impacts, community-based tourism, ecotourism, and cultural tourism to become leaders in responsible tourism development.",
//       programOutcomes: [
//         {
//           id: "MSTM01",
//           text: "Conduct advanced research in tourism development and management.",
//         },
//         {
//           id: "MSTM02",
//           text: "Design and implement sustainable tourism development strategies.",
//         },
//         {
//           id: "MSTM03",
//           text: "Analyze tourism policy and its impact on destinations and communities.",
//         },
//         {
//           id: "MSTM04",
//           text: "Evaluate tourism impacts and develop mitigation strategies.",
//         },
//         {
//           id: "MSTM05",
//           text: "Lead community-based tourism initiatives and stakeholder engagement.",
//         },
//         {
//           id: "MSTM06",
//           text: "Apply digital technologies and innovation in tourism management.",
//         },
//       ],
//       accreditation: "CHED Recognized Program",
//       programSpecifications: [
//         "Duration: 2 years (4 semesters)",
//         "Total Units: 42 units",
//         "Research Thesis: Required",
//         "Field Study: Required",
//         "Mode of Delivery: Face-to-face with field research components",
//       ],
//       programEducationalObjectives: [
//         "Develop tourism leaders who can advance sustainable tourism practices",
//         "Prepare professionals for senior management roles in tourism organizations",
//         "Foster research capabilities in tourism development and policy",
//         "Build expertise in destination management and community engagement",
//       ],
//       careers: [
//         "Tourism Development Manager",
//         "Destination Marketing Director",
//         "Tourism Policy Analyst",
//         "Sustainable Tourism Consultant",
//         "Tourism Research Specialist",
//         "International Tourism Officer",
//       ],
//     },
//     {
//       id: 2,
//       name: "Master of Science in Hospitality Management (MSHM)",
//       icon: GraduationCap,
//       color: "from-green-600 to-green-800",
//       curriculumFiles: {
//         2023: "/placeholder.svg?height=800&width=600",
//         2020: "/placeholder.svg?height=800&width=600",
//       },
//       syllabusFiles: {
//         2023: "https://example.com/mshm-syllabus-2023",
//       },
//       description:
//         "The Master of Science in Hospitality Management program focuses on strategic hospitality management, service innovation, and hospitality technology. Students learn revenue management, hospitality finance, service design, and digital transformation to lead hospitality organizations in the modern era.",
//       programOutcomes: [
//         {
//           id: "MSHM01",
//           text: "Apply advanced hospitality management principles to complex operational challenges.",
//         },
//         {
//           id: "MSHM02",
//           text: "Develop innovative service strategies and hospitality business models.",
//         },
//         {
//           id: "MSHM03",
//           text: "Implement technology solutions to enhance hospitality operations and guest experiences.",
//         },
//         {
//           id: "MSHM04",
//           text: "Conduct research in hospitality management and service innovation.",
//         },
//         {
//           id: "MSHM05",
//           text: "Lead hospitality organizations through strategic planning and change management.",
//         },
//         {
//           id: "MSHM06",
//           text: "Analyze hospitality markets and develop competitive positioning strategies.",
//         },
//       ],
//       accreditation: "CHED Recognized Program",
//       programSpecifications: [
//         "Duration: 2 years (4 semesters)",
//         "Total Units: 39 units",
//         "Research Project: Required",
//         "Industry Consulting Project: Required",
//         "Mode of Delivery: Face-to-face with industry partnerships",
//       ],
//       programEducationalObjectives: [
//         "Develop hospitality leaders who can drive service excellence and innovation",
//         "Prepare professionals for executive roles in hospitality companies",
//         "Foster research and development capabilities in hospitality management",
//         "Build expertise in hospitality technology and digital transformation",
//       ],
//       careers: [
//         "Hotel General Manager",
//         "Regional Operations Director",
//         "Hospitality Consultant",
//         "Revenue Management Director",
//         "Hospitality Technology Manager",
//         "Service Innovation Manager",
//       ],
//     },
//     {
//       id: 3,
//       name: "Master of Arts in Culinary Arts and Food Innovation (MACAFI)",
//       icon: TrendingUp,
//       color: "from-red-600 to-red-800",
//       curriculumFiles: {
//         2023: "/placeholder.svg?height=800&width=600",
//         2020: "/placeholder.svg?height=800&width=600",
//       },
//       syllabusFiles: {
//         2023: "https://example.com/macafi-syllabus-2023",
//       },
//       description:
//         "The Master of Arts in Culinary Arts and Food Innovation program combines advanced culinary techniques with food science and innovation. Students explore molecular gastronomy, food product development, culinary entrepreneurship, and sustainable food systems to become leaders in culinary innovation.",
//       programOutcomes: [
//         {
//           id: "MACAFI01",
//           text: "Create innovative culinary products and dining experiences using advanced techniques.",
//         },
//         {
//           id: "MACAFI02",
//           text: "Apply food science principles to develop new food products and preservation methods.",
//         },
//         {
//           id: "MACAFI03",
//           text: "Design sustainable food systems and promote local food culture.",
//         },
//         {
//           id: "MACAFI04",
//           text: "Conduct research in culinary arts, food innovation, and gastronomy.",
//         },
//         {
//           id: "MACAFI05",
//           text: "Lead culinary teams and manage food innovation projects.",
//         },
//         {
//           id: "MACAFI06",
//           text: "Develop culinary education programs and training curricula.",
//         },
//       ],
//       accreditation: "CHED Recognized Program",
//       programSpecifications: [
//         "Duration: 2 years (4 semesters)",
//         "Total Units: 45 units",
//         "Creative Project: Required",
//         "Research Component: Required",
//         "Mode of Delivery: Face-to-face with advanced culinary laboratories",
//       ],
//       programEducationalObjectives: [
//         "Develop culinary innovators who can advance the culinary arts and food industry",
//         "Prepare professionals for leadership roles in culinary education and research",
//         "Foster entrepreneurship and innovation in food product development",
//         "Build expertise in sustainable culinary practices and food systems",
//       ],
//       careers: [
//         "Executive Chef/Culinary Director",
//         "Food Product Development Manager",
//         "Culinary Arts Educator",
//         "Food Innovation Consultant",
//         "Restaurant Concept Developer",
//         "Culinary Media Specialist",
//       ],
//     },
//   ];

//   return (
//     <ProgramPageLayout
//       title="Graduate Programs"
//       description="Advance your career with our graduate programs designed to develop leaders and innovators in tourism, hospitality, and culinary arts management."
//       programs={programs}
//       themeColor="pink"
//       isGraduate={true}
//       bannerImage="/images/csu-cc/CTHM-logo.png"
//       collegeName="College of Tourism and Hospitality Management - CSU Cabadbaran Campus"
//     />
//   );
// };

// export default CTHMGraduate;
