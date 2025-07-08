// Import Graduate College Pages
// CSU MAIN College Routes
import CCISGraduate from "@/pages/colleges/csu-main/ccis/CCIS-Graduate";
import CAAGraduate from "@/pages/colleges/csu-main/caa/CAA-Graduate";
import CEDGraduate from "@/pages/colleges/csu-main/ced/CED-Graduate";
import CMNSGraduate from "@/pages/colleges/csu-main/cmns/CMNS-Graduate";
import COFESGraduate from "@/pages/colleges/csu-main/cofes/COFES-Graduate";
import CHASSGraduate from "@/pages/colleges/csu-main/chass/CHASS-Graduate";
// CSU CC College Routes
import CBAGraduate from "@/pages/colleges/csu-cc/cba/CBA-Graduate";
import CEITGraduate from "@/pages/colleges/csu-cc/ceit/CEIT-Graduate";
import CITTEGraduate from "@/pages/colleges/csu-cc/citte/CITTE-Graduate";
import CTHMGraduate from "@/pages/colleges/csu-cc/cthm/CTHM-Graduate";

// Import Undergraduate College Pages
// CSU MAIN College Routes
import CCISUndergrad from "@/pages/colleges/csu-main/ccis/CCIS-Undergrad";
import CAAUndergrad from "@/pages/colleges/csu-main/caa/CAA-Undergrad";
import CEDUndergrad from "@/pages/colleges/csu-main/ced/CED-Undergrad";
import COFESUndergrad from "@/pages/colleges/csu-main/cofes/COFES-Undergrad";
import CHASSUndergrad from "@/pages/colleges/csu-main/chass/CHASS-Undergrad";
import CEGSUndergrad from "@/pages/colleges/csu-main/cegs/CEGS-Undergrad";
import CMNSUndergrad from "@/pages/colleges/csu-main/cmns/CMNS-Undergrad";
// CSU CC College Routes
import CBAUndergrad from "@/pages/colleges/csu-cc/cba/CBA-Undergrad";
import CEITUndergrad from "@/pages/colleges/csu-cc/ceit/CEIT-Undergrad";
import CITTEUndergrad from "@/pages/colleges/csu-cc/citte/CITTE-Undergrad";
import CTHMUndergrad from "@/pages/colleges/csu-cc/cthm/CTHM-Undergrad";

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

// CSU CC Graduate college routes
export const ccGraduateRoutes = [
  {path: "/colleges/csu-cc/cba/graduate", element: <CBAGraduate /> },
  {path: "/colleges/csu-cc/ceit/graduate", element: <CEITGraduate /> },
  {path: "/colleges/csu-cc/citte/graduate", element: <CITTEGraduate /> },
  {path: "/colleges/csu-cc/cthm/graduate", element: <CTHMGraduate /> },
];

// CSU CC Undergraduate college routes
export const ccUndergradRoutes = [
  {path: "/colleges/csu-cc/cba/undergrad", element: <CBAUndergrad /> },
  {path: "/colleges/csu-cc/ceit/undergrad", element: <CEITUndergrad /> },
  {path: "/colleges/csu-cc/citte/undergrad", element: <CITTEUndergrad /> },
  {path: "/colleges/csu-cc/cthm/undergrad", element: <CTHMUndergrad /> },
]