import React from "react";
import { Utensils, Hotel, Plane } from "lucide-react";
import ProgramPageLayout from "@/components/layout/ProgramPageLayout";

const CTHMUndergrad = () => {
  const programs = [
    {
      id: 1,
      name: "Bachelor of Science in Food and Beverage Service Management (BSFBSM)",
      icon: Utensils,
      color: "from-red-600 to-red-800",
      curriculumFiles: {
        2023: "/placeholder.svg?height=800&width=600",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://example.com/bsfbsm-syllabus-2023",
      },
      description:
        "The Bachelor of Science in Food and Beverage Service Management program prepares students for leadership roles in food service operations. Students learn food and beverage management, culinary arts, restaurant operations, menu planning, cost control, and customer service to excel in the food service industry.",
      programOutcomes: [
        {
          id: "FBSM01",
          text: "Manage food and beverage operations in restaurants, hotels, and catering establishments.",
        },
        {
          id: "FBSM02",
          text: "Develop innovative menus and food products that meet customer preferences and dietary requirements.",
        },
        {
          id: "FBSM03",
          text: "Apply food safety and sanitation standards in food service operations.",
        },
        {
          id: "FBSM04",
          text: "Implement cost control and inventory management systems for food and beverage operations.",
        },
        {
          id: "FBSM05",
          text: "Provide exceptional customer service and manage dining experiences.",
        },
        {
          id: "FBSM06",
          text: "Lead food service teams and maintain high standards of service quality.",
        },
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 148 units",
        "Internship: Required (600 hours)",
        "Culinary Practicum: Required",
        "Mode of Delivery: Face-to-face with professional kitchen and restaurant laboratory",
      ],
      programEducationalObjectives: [
        "Produce food service professionals who can manage restaurant and catering operations effectively",
        "Develop graduates who can create innovative food and beverage experiences",
        "Prepare students for management careers in restaurants, hotels, and food service establishments",
        "Foster excellence in food service operations and customer satisfaction",
      ],
      careers: [
        "Restaurant Manager",
        "Food and Beverage Manager",
        "Catering Manager",
        "Food Service Director",
        "Banquet Manager",
        "Culinary Operations Manager",
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
  ];

  return (
    <ProgramPageLayout
      title="Undergraduate Programs"
      description="The College of Tourism and Hospitality Management (CTHM) offers specialized programs in food service, hospitality operations, and tourism development. Our programs combine theoretical knowledge with hands-on experience, preparing students for successful careers in the dynamic tourism and hospitality industry through practical training and industry partnerships."
      programs={programs}
      themeColor="pink"
      isGraduate={false}
      bannerImage="/images/csu-cc/CTHM-logo.png"
      collegeName="College of Tourism and Hospitality Management (CTHM) - CSU Cabadbaran Campus"
    />
  );
};

export default CTHMUndergrad;
