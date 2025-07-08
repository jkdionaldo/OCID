import React from "react";
import { Plane, Hotel, Utensils, MapPin } from "lucide-react";
import ProgramPageLayout from "@/components/layout/ProgramPageLayout";

const CTHMUndergrad = () => {
  const programs = [
    {
      id: 1,
      name: "Bachelor of Science in Tourism Management (BSTM)",
      icon: Plane,
      color: "from-blue-600 to-blue-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://example.com/bstm-syllabus-2023",
      },
      description:
        "The Bachelor of Science in Tourism Management program prepares students for careers in the dynamic tourism industry. Students learn tourism planning and development, sustainable tourism practices, tour operations, destination management, and cultural heritage preservation to promote responsible tourism development.",
      programOutcomes: [
        {
          id: "TM01",
          text: "Analyze tourism markets and develop effective tourism products and services.",
        },
        {
          id: "TM02",
          text: "Plan and implement sustainable tourism development projects.",
        },
        {
          id: "TM03",
          text: "Manage tour operations and travel services effectively.",
        },
        {
          id: "TM04",
          text: "Apply destination marketing strategies to promote tourism areas.",
        },
        {
          id: "TM05",
          text: "Demonstrate cultural sensitivity and promote responsible tourism practices.",
        },
        {
          id: "TM06",
          text: "Use technology and digital platforms for tourism marketing and operations.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 144 units",
        "Internship: Required (600 hours)",
        "Study Tour: Required",
        "Mode of Delivery: Face-to-face with field trips and practical training",
      ],
      programEducationalObjectives: [
        "Produce tourism professionals who can develop and manage sustainable tourism initiatives",
        "Develop graduates who can promote Philippine destinations effectively",
        "Prepare students for careers in tour operations, destination management, and tourism planning",
        "Foster entrepreneurship and innovation in tourism business development",
      ],
      careers: [
        "Tourism Officer",
        "Tour Operations Manager",
        "Destination Marketing Specialist",
        "Travel Consultant",
        "Tourism Development Officer",
        "Heritage Site Manager",
      ],
    },
    {
      id: 2,
      name: "Bachelor of Science in Hospitality Management (BSHM)",
      icon: Hotel,
      color: "from-green-600 to-green-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://example.com/bshm-syllabus-2023",
      },
      description:
        "The Bachelor of Science in Hospitality Management program provides comprehensive training in hotel and resort operations, guest services, facility management, and hospitality marketing. Students learn front office operations, housekeeping management, food and beverage service, and hospitality finance to excel in the hospitality industry.",
      programOutcomes: [
        {
          id: "HM01",
          text: "Manage hotel and hospitality operations efficiently and effectively.",
        },
        {
          id: "HM02",
          text: "Deliver exceptional guest services and maintain high service standards.",
        },
        {
          id: "HM03",
          text: "Apply revenue management and financial control systems in hospitality operations.",
        },
        {
          id: "HM04",
          text: "Design and implement hospitality marketing and promotional strategies.",
        },
        {
          id: "HM05",
          text: "Ensure compliance with health, safety, and quality standards in hospitality operations.",
        },
        {
          id: "HM06",
          text: "Demonstrate leadership and team management skills in hospitality settings.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 144 units",
        "Internship: Required (600 hours)",
        "Practicum: Required",
        "Mode of Delivery: Face-to-face with hotel laboratory and practical training",
      ],
      programEducationalObjectives: [
        "Produce hospitality professionals who can manage hotel and resort operations effectively",
        "Develop graduates who can deliver world-class hospitality services",
        "Prepare students for management careers in hotels, resorts, and hospitality businesses",
        "Foster excellence in customer service and hospitality innovation",
      ],
      careers: [
        "Hotel Manager",
        "Resort Operations Manager",
        "Guest Relations Manager",
        "Food and Beverage Manager",
        "Event Manager",
        "Hospitality Consultant",
      ],
    },
    {
      id: 3,
      name: "Bachelor of Science in Culinary Arts Management (BSCAM)",
      icon: Utensils,
      color: "from-red-600 to-red-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://example.com/bscam-syllabus-2023",
      },
      description:
        "The Bachelor of Science in Culinary Arts Management program combines culinary skills with business management knowledge. Students learn food preparation techniques, menu development, kitchen management, cost control, and restaurant operations to become professional chefs and food service managers.",
      programOutcomes: [
        {
          id: "CAM01",
          text: "Demonstrate advanced culinary skills and food preparation techniques.",
        },
        {
          id: "CAM02",
          text: "Design and develop innovative menus and food products.",
        },
        {
          id: "CAM03",
          text: "Manage kitchen operations and food service establishments effectively.",
        },
        {
          id: "CAM04",
          text: "Apply food safety and sanitation standards in culinary operations.",
        },
        {
          id: "CAM05",
          text: "Implement cost control and inventory management systems in food service.",
        },
        {
          id: "CAM06",
          text: "Lead culinary teams and maintain high standards of food quality and presentation.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 148 units",
        "Internship: Required (600 hours)",
        "Culinary Practicum: Required",
        "Mode of Delivery: Face-to-face with professional kitchen laboratory",
      ],
      programEducationalObjectives: [
        "Produce culinary professionals who can create innovative food products and experiences",
        "Develop graduates who can manage culinary operations and food service businesses",
        "Prepare students for careers as executive chefs and food service managers",
        "Foster creativity and entrepreneurship in culinary arts and food business",
      ],
      careers: [
        "Executive Chef",
        "Restaurant Manager",
        "Food and Beverage Director",
        "Culinary Instructor",
        "Food Product Developer",
        "Catering Manager",
      ],
    },
    {
      id: 4,
      name: "Bachelor of Science in Travel Management (BSTM)",
      icon: MapPin,
      color: "from-purple-600 to-purple-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://example.com/bstm-travel-syllabus-2023",
      },
      description:
        "The Bachelor of Science in Travel Management program focuses on travel agency operations, airline and transportation management, and travel technology systems. Students learn ticketing procedures, travel planning, customer service, and travel industry regulations to excel in travel and transportation services.",
      programOutcomes: [
        {
          id: "TRM01",
          text: "Manage travel agency operations and provide comprehensive travel services.",
        },
        {
          id: "TRM02",
          text: "Use travel reservation systems and technology platforms effectively.",
        },
        {
          id: "TRM03",
          text: "Plan and organize domestic and international travel itineraries.",
        },
        {
          id: "TRM04",
          text: "Apply travel industry regulations and legal requirements.",
        },
        {
          id: "TRM05",
          text: "Provide excellent customer service and handle travel-related issues.",
        },
        {
          id: "TRM06",
          text: "Develop travel products and packages for different market segments.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 142 units",
        "Internship: Required (600 hours)",
        "Travel Systems Training: Required",
        "Mode of Delivery: Face-to-face with travel laboratory and system training",
      ],
      programEducationalObjectives: [
        "Produce travel professionals who can manage travel services efficiently",
        "Develop graduates who can adapt to changing travel industry technologies",
        "Prepare students for careers in travel agencies, airlines, and transportation companies",
        "Foster customer service excellence and travel industry innovation",
      ],
      careers: [
        "Travel Agent",
        "Airline Customer Service Manager",
        "Tour Coordinator",
        "Travel Technology Specialist",
        "Corporate Travel Manager",
        "Transportation Services Manager",
      ],
    },
  ];

  return (
    <ProgramPageLayout
      title="Undergraduate Programs"
      description="Explore our undergraduate programs designed to prepare you for exciting careers in tourism, hospitality, and travel management, developing skills to serve guests and promote destinations with excellence."
      programs={programs}
      themeColor="blue"
      isGraduate={false}
      bannerImage="/images/cthm-logo.png"
      collegeName="College of Tourism and Hospitality Management - CSU Carig Campus"
    />
  );
};

export default CTHMUndergrad;
