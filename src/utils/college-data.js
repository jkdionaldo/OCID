// College data with local logo paths
export const collegeData = {
    CCIS: {
      id: "CCIS",
      path: "/ccis",
      fullName: "College of Computing and Information Sciences",
      shortName: "CCIS",
      logo: "/images/ccis-logo.png",
      color: "red-700",
    },
    CED: {
      id: "CED",
      path: "/ced",
      fullName: "College of Education",
      shortName: "CED",
      logo: "/images/ced-logo.png",
      color: "blue-700",
    },
    CAA: {
      id: "CAA",
      path: "/caa",
      fullName: "College of Agriculture and Agri-Industries",
      shortName: "CAA",
      logo: "/images/caa-logo.png",
      color: "green-700",
    },
    CMNS: {
      id: "CMNS",
      path: "/cmns",
      fullName: "College of Mathematics and Natural Sciences",
      shortName: "CMNS",
      logo: "/images/cmns-logo.png",
      color: "teal-700",
    },
    COFES: {
      id: "COFES",
      path: "/cofes",
      fullName: "College of Forestry and Environmental Sciences",
      shortName: "COFES",
      logo: "/images/cofes-logo.png",
      color: "green-700",
    },
    CEGS: {
      id: "CEGS",
      path: "/cegs",
      fullName: "College of Engineering and Geo-Sciences",
      shortName: "CEGS",
      logo: "/images/cegs-logo.png",
      color: "orange-700",
    },
    CHASS: {
      id: "CHASS",
      path: "/chass",
      fullName: "College of Humanities, Arts and Social Sciences",
      shortName: "CHASS",
      logo: "/images/chass-logo.png",
      color: "purple-700",
    },
  }
  
  // Helper function to get college data by ID
  export const getCollegeById = (id) => {
    return collegeData[id] || null
  }
  
  // Get graduate colleges (subset for graduate page)
  export const getGraduateColleges = () => {
    return [collegeData.CCIS, collegeData.CED, collegeData.CAA, collegeData.CMNS, collegeData.COFES]
  }
  
  // Get all colleges (for undergraduate page)
  export const getAllColleges = () => {
    return Object.values(collegeData)
  }
  
  