// Import Graduate College Pages
import CCISGraduate from "@/pages/colleges/ccis/CCIS-Graduate";
import CAAGraduate from "@/pages/colleges/caa/CAA-Graduate";
import CEDGraduate from "@/pages/colleges/ced/CED-Graduate";
import CMNSGraduate from "@/pages/colleges/cmns/CMNS-Graduate";
import COFESGraduate from "@/pages/colleges/cofes/COFES-Graduate";
import CHASSGraduate from "@/pages/colleges/chass/CHASS-Graduate";

// Import Undergraduate College Pages
import CCISUndergrad from "@/pages/colleges/ccis/CCIS-Undergrad";
import CAAUndergrad from "@/pages/colleges/caa/CAA-Undergrad";
import CEDUndergrad from "@/pages/colleges/ced/CED-Undergrad";
import COFESUndergrad from "@/pages/colleges/cofes/COFES-Undergrad";
import CHASSUndergrad from "@/pages/colleges/chass/CHASS-Undergrad";
import CEGSUndergrad from "@/pages/colleges/cegs/CEGS-Undergrad";
import CMNSUndergrad from "@/pages/colleges/cmns/CMNS-Undergrad";

// Graduate college routes
export const graduateRoutes = [
  { path: "/colleges/ccis/graduate", element: <CCISGraduate /> },
  { path: "/colleges/caa/graduate", element: <CAAGraduate /> },
  { path: "/colleges/ced/graduate", element: <CEDGraduate /> },
  { path: "/colleges/cmns/graduate", element: <CMNSGraduate /> },
  { path: "/colleges/cofes/graduate", element: <COFESGraduate /> },
  { path: "/colleges/chass/graduate", element: <CHASSGraduate /> },
];

// Undergraduate college routes
export const undergradRoutes = [
  { path: "/colleges/ccis/undergrad", element: <CCISUndergrad /> },
  { path: "/colleges/caa/undergrad", element: <CAAUndergrad /> },
  { path: "/colleges/ced/undergrad", element: <CEDUndergrad /> },
  { path: "/colleges/cofes/undergrad", element: <COFESUndergrad /> },
  { path: "/colleges/chass/undergrad", element: <CHASSUndergrad /> },
  { path: "/colleges/cegs/undergrad", element: <CEGSUndergrad /> },
  { path: "/colleges/cmns/undergrad", element: <CMNSUndergrad /> },
];
