// Import Graduate College Pages
import CCISGraduate from "@/pages/colleges/csu-main/ccis/CCIS-Graduate";
import CAAGraduate from "@/pages/colleges/csu-main/caa/CAA-Graduate";
import CEDGraduate from "@/pages/colleges/csu-main/ced/CED-Graduate";
import CMNSGraduate from "@/pages/colleges/csu-main/cmns/CMNS-Graduate";
import COFESGraduate from "@/pages/colleges/csu-main/cofes/COFES-Graduate";
import CHASSGraduate from "@/pages/colleges/csu-main/chass/CHASS-Graduate";

// Import Undergraduate College Pages
import CCISUndergrad from "@/pages/colleges/csu-main/ccis/CCIS-Undergrad";
import CAAUndergrad from "@/pages/colleges/csu-main/caa/CAA-Undergrad";
import CEDUndergrad from "@/pages/colleges/csu-main/ced/CED-Undergrad";
import COFESUndergrad from "@/pages/colleges/csu-main/cofes/COFES-Undergrad";
import CHASSUndergrad from "@/pages/colleges/csu-main/chass/CHASS-Undergrad";
import CEGSUndergrad from "@/pages/colleges/csu-main/cegs/CEGS-Undergrad";
import CMNSUndergrad from "@/pages/colleges/csu-main/cmns/CMNS-Undergrad";

// Graduate college routes
export const graduateRoutes = [
  { path: "/colleges/csu-main/ccis/graduate", element: <CCISGraduate /> },
  { path: "/colleges/csu-main/caa/graduate", element: <CAAGraduate /> },
  { path: "/colleges/csu-main/ced/graduate", element: <CEDGraduate /> },
  { path: "/colleges/csu-main/cmns/graduate", element: <CMNSGraduate /> },
  { path: "/colleges/csu-main/cofes/graduate", element: <COFESGraduate /> },
  { path: "/colleges/csu-main/chass/graduate", element: <CHASSGraduate /> },
];

// Undergraduate college routes
export const undergradRoutes = [
  { path: "/colleges/csu-main/ccis/undergrad", element: <CCISUndergrad /> },
  { path: "/colleges/csu-main/caa/undergrad", element: <CAAUndergrad /> },
  { path: "/colleges/csu-main/ced/undergrad", element: <CEDUndergrad /> },
  { path: "/colleges/csu-main/cofes/undergrad", element: <COFESUndergrad /> },
  { path: "/colleges/csu-main/chass/undergrad", element: <CHASSUndergrad /> },
  { path: "/colleges/csu-main/cegs/undergrad", element: <CEGSUndergrad /> },
  { path: "/colleges/csu-main/cmns/undergrad", element: <CMNSUndergrad /> },
];
