import React, { useState } from "react";
import { CreditCard, Wheat, Beef, Bug, Flower2, Layers } from "lucide-react";
import ProgramPageLayout from "@/components/layout/ProgramPageLayout";

const CAAUndergrad = () => {
  const programs = [
    {
      id: 1,
      name: "Bachelor of Science in Agriculture (BSA) major in Agriculture Economics",
      icon: CreditCard,
      color: "from-green-600 to-green-800",
      curriculumFiles: {
        2023: "https://drive.google.com/file/d/1KvvNyQ4H3B0nEohCLQD_XenpoCYm4xXS/view?usp=sharing",
        2022: "https://drive.google.com/file/d/1mFaajZ5nfVn5sMBrfTDsP5if_oJB8DTz/view?usp=sharing",
        2014: "/placeholder.svg?height=800&width=600",
        2005: "/placeholder.svg?height=800&width=600",
        2003: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/1NaRXSyrQODlgvdzkhl3m07TPvLY99qP-",
      },
      description:
        "The BACHELOR OF SCIENCE IN AGRICULTURE (BSA) major in AGRICULTURE ECONOMICS program prepares students for careers in agricultural business, finance, and policy. Students learn economic principles applied to agricultural production, marketing, and resource management. Graduates are equipped to work in agribusiness firms, government agencies, and international organizations focused on agricultural development.",
      programOutcomes: [
        {
          id: "AE01",
          text: "Apply economic principles to analyze agricultural markets, policies, and resource allocation decisions.",
        },
        {
          id: "AE02",
          text: "Evaluate financial performance of agricultural enterprises and develop strategies for improved profitability.",
        },
        {
          id: "AE03",
          text: "Analyze the impact of government policies, international trade, and market structures on agricultural production and distribution.",
        },
        {
          id: "AE04",
          text: "Develop and implement marketing strategies for agricultural products in domestic and international markets.",
        },
        {
          id: "AE05",
          text: "Apply quantitative methods to analyze agricultural data and make informed management decisions.",
        },
        {
          id: "AE06",
          text: "Communicate effectively with stakeholders in the agricultural sector through clear writing, presentations, and interpersonal skills.",
        },
      ],
      programEducationalObjectives: [
        "Produce graduates who can apply economic principles to solve complex agricultural and resource management problems",
        "Develop professionals who can lead sustainable agricultural business initiatives in both public and private sectors",
        "Prepare students for advanced studies and research in specialized areas of agricultural economics",
        "Foster environmental stewardship and ethical practice in agricultural business management",
      ],

      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 155 units",
        "Practicum: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with field work",
      ],
    },
    {
      id: 2,
      name: "Bachelor of Science in Agriculture (BSA) major in Agronomy",
      icon: Wheat,
      color: "from-green-500 to-green-700",
      curriculumFiles: {
        2023: "https://drive.google.com/file/d/1Vfv2M_ck5ktu4Ptty66dsHEUwiqeTRod/view?usp=sharing",
        2019: "https://drive.google.com/file/d/1mFaajZ5nfVn5sMBrfTDsP5if_oJB8DTz/view?usp=sharing",
        2014: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/1NaRXSyrQODlgvdzkhl3m07TPvLY99qP-",
      },
      description:
        "The BACHELOR OF SCIENCE IN AGRICULTURE (BSA) major in AGRONOMY program focuses on crop production and soil management. Students learn about plant breeding, soil science, pest management, and sustainable farming practices. Graduates are prepared for careers in farm management, agricultural research, extension services, and agribusiness.",
      programOutcomes: [
        {
          id: "AG01",
          text: "Apply principles of crop science to develop and implement effective crop production systems.",
        },
        {
          id: "AG02",
          text: "Analyze soil properties and recommend appropriate soil management practices for sustainable crop production.",
        },
        {
          id: "AG03",
          text: "Develop and implement integrated pest management strategies for crop protection.",
        },
        {
          id: "AG04",
          text: "Apply principles of plant breeding and genetics to improve crop varieties.",
        },
        {
          id: "AG05",
          text: "Design and implement sustainable agricultural systems that optimize resource use and minimize environmental impact.",
        },
        {
          id: "AG06",
          text: "Communicate technical information effectively to diverse stakeholders in the agricultural sector.",
        },
      ],
      programEducationalObjectives: [
        "Produce graduates who can apply scientific principles to solve complex crop production challenges",
        "Develop professionals who can lead sustainable farming initiatives",
        "Prepare students for advanced studies and research in specialized areas of agronomy",
        "Foster environmental stewardship and ethical practice in crop management",
      ],
      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 155 units",
        "Practicum: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with field work",
      ],
    },
    {
      id: 3,
      name: "Bachelor of Science in Agriculture (BSA) major in Animal Science",
      icon: Beef,
      color: "from-green-400 to-green-600",
      curriculumFiles: {
        2023: "https://drive.google.com/file/d/1Vfv2M_ck5ktu4Ptty66dsHEUwiqeTRod/view?usp=sharing",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/1NaRXSyrQODlgvdzkhl3m07TPvLY99qP-",
      },
      description:
        "The BACHELOR OF SCIENCE IN AGRICULTURE (BSA) major in ANIMAL SCIENCE program focuses on livestock production, animal nutrition, breeding, and health management. Students learn about different animal species, their care, and production systems. Graduates are prepared for careers in livestock management, animal nutrition, breeding programs, and animal health services.",
      programOutcomes: [
        {
          id: "AS01",
          text: "Apply principles of animal nutrition to develop balanced feeding programs for different livestock species.",
        },
        {
          id: "AS02",
          text: "Implement appropriate animal breeding and selection programs to improve livestock productivity.",
        },
        {
          id: "AS03",
          text: "Develop and implement animal health management programs to prevent and control diseases.",
        },
        {
          id: "AS04",
          text: "Design and manage livestock production systems that optimize animal welfare and productivity.",
        },
        {
          id: "AS05",
          text: "Apply principles of reproductive physiology to manage breeding programs in livestock.",
        },
        {
          id: "AS06",
          text: "Communicate effectively with stakeholders in the livestock industry through clear writing, presentations, and interpersonal skills.",
        },
      ],
      programEducationalObjectives: [
        "Produce graduates who can apply scientific principles to solve complex animal production challenges",
        "Develop professionals who can lead sustainable livestock management initiatives",
        "Prepare students for advanced studies and research in specialized areas of animal science",
        "Foster animal welfare and ethical practice in livestock management",
      ],

      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 155 units",
        "Practicum: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with field work",
      ],
    },
    {
      id: 4,
      name: "Bachelor of Science in Agriculture (BSA) major in Crop Protection",
      icon: Bug,
      color: "from-green-500 to-green-700",
      curriculumFiles: {
        2023: "https://drive.google.com/file/d/1Vfv2M_ck5ktu4Ptty66dsHEUwiqeTRod/view?usp=sharing",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/1NaRXSyrQODlgvdzkhl3m07TPvLY99qP-",
      },
      description:
        "The BACHELOR OF SCIENCE IN AGRICULTURE (BSA) major in CROP PROTECTION program focuses on the identification, prevention, and management of crop pests and diseases. Students learn about entomology, plant pathology, weed science, and integrated pest management. Graduates are prepared for careers in pest management, agricultural extension, research, and regulatory agencies.",
      programOutcomes: [
        {
          id: "CP01",
          text: "Identify and diagnose crop pests, diseases, and disorders affecting agricultural crops.",
        },
        {
          id: "CP02",
          text: "Develop and implement integrated pest management strategies for sustainable crop protection.",
        },
        {
          id: "CP03",
          text: "Evaluate the efficacy, safety, and environmental impact of pest control methods.",
        },
        {
          id: "CP04",
          text: "Apply principles of entomology, plant pathology, and weed science to manage crop health.",
        },
        {
          id: "CP05",
          text: "Design monitoring programs to detect and assess pest populations and disease incidence in crops.",
        },
        {
          id: "CP06",
          text: "Communicate technical information effectively to farmers, extension workers, and other stakeholders.",
        },
      ],
      programEducationalObjectives: [
        "Produce graduates who can apply scientific principles to solve complex crop protection challenges",
        "Develop professionals who can lead sustainable pest management initiatives",
        "Prepare students for advanced studies and research in specialized areas of crop protection",
        "Foster environmental stewardship and ethical practice in pest management",
      ],

      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 155 units",
        "Practicum: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with field work",
      ],
    },
    {
      id: 5,
      name: "Bachelor of Science in Agriculture (BSA) major in Horticulture",
      icon: Flower2,
      color: "from-green-600 to-green-800",
      curriculumFiles: {
        2023: "https://drive.google.com/file/d/1Vfv2M_ck5ktu4Ptty66dsHEUwiqeTRod/view?usp=sharing",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/1NaRXSyrQODlgvdzkhl3m07TPvLY99qP-",
      },
      description:
        "The BACHELOR OF SCIENCE IN AGRICULTURE (BSA) major in HORTICULTURE program focuses on the production, utilization, and improvement of fruits, vegetables, ornamental plants, and landscape design. Students learn about plant propagation, greenhouse management, post-harvest handling, and landscape horticulture. Graduates are prepared for careers in commercial horticulture, nursery management, landscape design, and urban agriculture.",
      programOutcomes: [
        {
          id: "HO01",
          text: "Apply principles of plant science to the production of horticultural crops.",
        },
        {
          id: "HO02",
          text: "Design and manage production systems for fruits, vegetables, and ornamental plants.",
        },
        {
          id: "HO03",
          text: "Implement appropriate post-harvest handling and storage techniques for horticultural products.",
        },
        {
          id: "HO04",
          text: "Apply principles of landscape design and management in urban and rural settings.",
        },
        {
          id: "HO05",
          text: "Develop and implement propagation techniques for horticultural crops.",
        },
        {
          id: "HO06",
          text: "Communicate effectively with diverse stakeholders in the horticultural industry.",
        },
      ],
      programEducationalObjectives: [
        "Produce graduates who can apply scientific principles to solve complex horticultural challenges",
        "Develop professionals who can lead sustainable horticultural production initiatives",
        "Prepare students for advanced studies and research in specialized areas of horticulture",
        "Foster environmental stewardship and ethical practice in horticultural management",
      ],

      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 155 units",
        "Practicum: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with field work",
      ],
    },
    {
      id: 6,
      name: "Bachelor of Science in Agricultural (BSA) major in Soil Science",
      icon: Layers,
      color: "from-green-600 to-green-800",
      curriculumFiles: {
        2023: "https://drive.google.com/file/d/1Vfv2M_ck5ktu4Ptty66dsHEUwiqeTRod/view?usp=sharing",
        2020: "/placeholder.svg?height=800&width=600",
      },
      syllabusFiles: {
        2023: "https://drive.google.com/drive/folders/1NaRXSyrQODlgvdzkhl3m07TPvLY99qP-",
      },
      description:
        "The BACHELOR OF SCIENCE IN AGRICULTURE (BSA) major in SOIL SCIENCE program focuses on the study of soil as a natural resource and medium for plant growth. Students learn about soil formation, classification, chemistry, fertility, and conservation. Graduates are prepared for careers in soil management, land use planning, environmental assessment, and agricultural research.",
      programOutcomes: [
        {
          id: "SS01",
          text: "Analyze soil physical, chemical, and biological properties to assess soil quality and fertility.",
        },
        {
          id: "SS02",
          text: "Develop and implement soil management plans for sustainable agricultural production.",
        },
        {
          id: "SS03",
          text: "Apply principles of soil conservation to prevent erosion and land degradation.",
        },
        {
          id: "SS04",
          text: "Evaluate soil suitability for different agricultural and non-agricultural uses.",
        },
        {
          id: "SS05",
          text: "Design and implement soil remediation strategies for contaminated sites.",
        },
        {
          id: "SS06",
          text: "Communicate soil science information effectively to farmers, land managers, and policymakers.",
        },
      ],
      programEducationalObjectives: [
        "Produce graduates who can apply scientific principles to solve complex soil management challenges",
        "Develop professionals who can lead sustainable soil conservation initiatives",
        "Prepare students for advanced studies and research in specialized areas of soil science",
        "Foster environmental stewardship and ethical practice in soil resource management",
      ],

      accreditation: "CHED Recognized Program",
      programSpecifications: [
        "Duration: 4 years (8 semesters)",
        "Total Units: 155 units",
        "Practicum: Required",
        "Thesis: Required",
        "Mode of Delivery: Face-to-face with field work",
      ],
    },
  ];

  return (
    <ProgramPageLayout
      title="Undergraduate Programs"
      description="Explore our undergraduate programs designed to prepare you for success in agriculture, food technology, and sustainable farming practices."
      programs={programs}
      themeColor="green"
      isGraduate={false}
      bannerImage="/images/caa-logo.png"
      collegeName="College of Agriculture and Agri-Industries"
    />
  );
};

export default CAAUndergrad;
