// Import Graduate College Pages
import CCISGraduate from "@/pages/CCIS-Graduate";
import CAAGraduate from "@/pages/CAA-Graduate";
import CEDGraduate from "@/pages/CED-Graduate";
import CMNSGraduate from "@/pages/CMNS-Graduate";
import COFESGraduate from "@/pages/COFES-Graduate";
import CHASSGraduate from "@/pages/CHASS-Graduate";

// Import Undergraduate College Pages
import CCISUndergrad from "@/pages/CCIS-Undergrad";
import CAAUndergrad from "@/pages/CAA-Undergrad";
import CEDUndergrad from "@/pages/CED-Undergrad";
import COFESUndergrad from "@/pages/COFES-Undergrad";
import CHASSUndergrad from "@/pages/CHASS-Undergrad";
import CEGSUndergrad from "@/pages/CEGS-Undergrad";
import CMNSUndergrad from "@/pages/CMNS-Undergrad";

// Graduate college routes
export const graduateRoutes = [
  { path: "colleges/ccis-graduate", element: <CCISGraduate /> },
  { path: "colleges/caa-graduate", element: <CAAGraduate /> },
  { path: "colleges/ced-graduate", element: <CEDGraduate /> },
  { path: "colleges/cmns-graduate", element: <CMNSGraduate /> },
  { path: "colleges/cofes-graduate", element: <COFESGraduate /> },
  { path: "colleges/chass-graduate", element: <CHASSGraduate /> },
];

// Undergraduate college routes
export const undergradRoutes = [
  { path: "undergrad/ccis-undergrad", element: <CCISUndergrad /> },
  { path: "undergrad/caa-undergrad", element: <CAAUndergrad /> },
  { path: "undergrad/ced-undergrad", element: <CEDUndergrad /> },
  { path: "undergrad/cofes-undergrad", element: <COFESUndergrad /> },
  { path: "undergrad/chass-undergrad", element: <CHASSUndergrad /> },
  { path: "undergrad/cegs-undergrad", element: <CEGSUndergrad /> },
  { path: "undergrad/cmns-undergrad", element: <CMNSUndergrad /> },
];
