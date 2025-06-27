// Import Graduate College Pages
import CCISGraduate from "@/pages/colleges/CCIS-Graduate";
import CAAGraduate from "@/pages/colleges/CAA-Graduate";
import CEDGraduate from "@/pages/colleges/CED-Graduate";
import CMNSGraduate from "@/pages/colleges/CMNS-Graduate";
import COFESGraduate from "@/pages/colleges/COFES-Graduate";
import CHASSGraduate from "@/pages/colleges/CHASS-Graduate";

// Import Undergraduate College Pages
import CCISUndergrad from "@/pages/undergrad/CCIS-Undergrad";
import CAAUndergrad from "@/pages/undergrad/CAA-Undergrad";
import CEDUndergrad from "@/pages/undergrad/CED-Undergrad";
import COFESUndergrad from "@/pages/undergrad/COFES-Undergrad";
import CHASSUndergrad from "@/pages/undergrad/CHASS-Undergrad";
import CEGSUndergrad from "@/pages/undergrad/CEGS-Undergrad";
import CMNSUndergrad from "@/pages/undergrad/CMNS-Undergrad";

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
