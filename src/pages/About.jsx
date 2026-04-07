import React from "react";
import Card from "../components/ui/HomeCard";
import ACard from "../components/ui/aboutcard";
import ScrollToHash from "../components/ui/ScrollToHash";

import {
  BookOpen,
  GraduationCap,
  ClipboardCheck,
  BarChart3,
  Laptop,
  Users,
  Mail,      
  Phone,       
  MapPin, 
} from "lucide-react";

// ── Team data ──────────────────────────────────────────────
const director = {
  name: "ENGR. ANAMARIE P. SAJONIA",
  role: "Director, OCID",
  image: "/images/DIREC.png",
};

const unitHeads = [
  {
    name: "HERMOGENES B. AYING",
    role: "Head, Instructional Materials Development Unit",
    image: "/images/IM.png",
  },
  {
    name: "ABIGAEL BALBIN, D.ENG",
    role: "Head, Curriculum Development Unit",
    image: "/images/HEAD.png",
  },
  {
    name: "JONNE PEARL Q. ALAS",
    role: "Head, Performance Evaluation Development Unit",
    image: "/images/PE.png",
  },
];

const officeStaff = [
  {
    name: "SIR LOU",
    role: "Planning Officer",
    image: "",  
  },

  {
    name: "MAE CAMELLE M. CANOY, LPT",
    role: "Office Staff",
    image: "/images/STAFF.png",
  },
  {
    name: "MEROCEL M. TRIMUCHA",
    role: "Administrative AIDE IV",
    image: "/images/ADMIN.png",
  },
];

const interns = [
  { name: "Arabela Mae O. Matias", role: "Intern", image: "/images/intern1.png" },
  { name: "Christian A. Bolosobas", role: "Intern", image: "/images/intern3.png" },
  { name: "Edgar Lino L. Hinio", role: "Intern", image: "/images/intern2.png" },
  { name: "Carlea Mae A. Quimpan", role: "Student Assistant", image: "/images/SA1.png" },
  { name: "Al Dave B. Pepito", role: "Student Assistant", image: "/images/SA2.png" },
];
// ──────────────────────────────────────────────────────────

// Placeholder SVG icon for missing photos
const PersonIcon = ({ size = "large" }) => (
  <div className={`w-full h-full bg-green-700 flex items-center justify-center`}>
    <svg
      className={size === "large" ? "w-14 h-14 text-white/50" : "w-9 h-9 text-white/50"}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
    </svg>
  </div>
);

// Large card — square photo, used for director / unit heads / staff
const MemberCardLarge = ({ name, role, image }) => (
  <div className="flex flex-col items-center text-center w-16 sm:w-48">
    <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-lg overflow-hidden border-2 border-green-700 shadow-lg mb-3 flex-shrink-0">
      {image ? (
        <img src={image} alt={name} className="w-full h-full object-cover object-top" />
      ) : (
        <PersonIcon size="large" />
      )}
    </div>
    <p className="font-bold text-xs sm:text-sm font-poppins text-gray-800 leading-tight">{name}</p>
    <p className="text-[#008000] text-xs font-poppins mt-1 leading-tight">{role}</p>
  </div>
);

// Small card — circle photo, used for interns / student assistants
const MemberCardSmall = ({ name, role, image }) => (
  <div className="flex flex-col items-center text-center w-26 sm:w-42">
    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-green-700 shadow-md mb-2 flex-shrink-0">
      {image ? (
        <img src={image} alt={name} className="w-full h-full object-cover object-top" />
      ) : (
        <PersonIcon size="small" />
      )}
    </div>
    <p className="font-semibold text-xs font-poppins text-gray-800 leading-tight">{name}</p>
    <p className="text-[#008000] text-[10px] font-poppins mt-0.5 leading-tight">{role}</p>
  </div>
);

const About = () => {
  return (
    <div className="flex flex-col w-full">

      {/* ── Hero Section ── */}
      <div className="relative w-full py-20 px-4 overflow-hidden bg-[url('/images/about-header.png')] bg-cover bg-bottom bg-no-repeat">
        {/* ✅ Pattern opacity reduced from default to be subtle */}
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex flex-col items-center mb-8">
            <div className="relative group">
              <img
                src="/images/ocid-outline.png"
                alt="OCID Logo"
                className="relative h-32 mb-6 drop-shadow-2xl transform group-hover:scale-105 transition duration-300"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white font-poppins tracking-tight mb-8">
              About OCID
            </h1>

            <div className="flex flex-col items-center justify-center w-full mb-8 md:mb-12 mx-auto px-4">
              <div className="flex flex-wrap justify-center items-baseline gap-2 w-full font-cinzel text-center">
                <span className="flex items-baseline mb-12">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f9dc07]">O</span>
                  <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-wide">FFICE</span>
                </span>
                <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-wide">OF</span>
                <span className="flex items-baseline">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f9dc07]">C</span>
                  <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-wide">URRICULUM</span>
                </span>
                <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-wide">AND</span>
                <span className="flex items-baseline">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f9dc07]">I</span>
                  <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-wide">NSTRUCTION</span>
                </span>
                <span className="flex items-baseline">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f9dc07]">D</span>
                  <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-wide">EVELOPMENT</span>
                </span>
                <p className="font-poppins sm:text-lg md:text-l text-white mx-auto mb-40">
                  Navigating curriculum standards and instructional development can be complex.
                  Whether you are a faculty member preparing a new syllabus or an office administrator managing records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="py-16 px-4 sm:px-8 md:px-16">

        {/* Mission / What We Do / Vision */}
        <div className="flex flex-col py-12 lg:flex-row justify-center items-stretch gap-10 mb-16">
         <div className="py-4">
          <Card>
            <h2 className="text-xl font-bold text-gray-800 text-center mb-6 relative font-poppins">
              OUR MISSION
              <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-green-700"></span>
            </h2>
            <p className="text-center text-sm max-w-2xl mx-auto text-csuGreen mt-6 font-poppins leading-relaxed">
              To ensure academic excellence by developing innovative curricula,
              enhancing instructional quality, and fostering continuous improvement
              in educational programs across all colleges of Caraga State University.
            </p>
          </Card>
          </div>
          <ACard>
            <h2 className=" py-2 text-xl font-bold text-gray-800 text-center mb-6 relative font-poppins">
              WHAT WE DO
              <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-green-700"></span>
            </h2>
            <p className="text-center text-sm max-w-2xl mx-auto text-csuGreen mt-6 font-poppins leading-relaxed">
              The OCID collaborate across Caraga State University to design high-quality curricula,
              innovate teaching methods, and support program accreditation. Our ultimate goal is
              preparing students for 21st-century success.
            </p>
          </ACard>
          <div className="py-4">
          <Card>
            <h2 className="text-xl font-bold text-gray-800 text-center mb-6 relative font-poppins">
              OUR VISION
              <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-green-700"></span>
            </h2>
            <p className="text-center text-sm max-w-2xl mx-auto text-csuGreen mt-6 font-poppins leading-relaxed">
              To be the leading catalyst for transformative education, creating world-class curricula
              that produce globally competitive graduates who drive innovation and sustainable development.
            </p>
          </Card>
          </div>
        </div>

        {/* Core Functions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 relative font-poppins">
            Core Functions
            <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-green-700"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: BookOpen, title: "Curriculum Development", desc: "Design and continuously improve academic programs to meet industry standards and emerging educational needs." },
              { icon: GraduationCap, title: "Instructional Excellence", desc: "Support faculty development and promote innovative teaching methodologies across all disciplines." },
              { icon: ClipboardCheck, title: "Program Accreditation", desc: "Facilitate and support the accreditation process to ensure program quality and recognition." },
              { icon: BarChart3, title: "Quality Assurance", desc: "Monitor and evaluate academic programs to maintain excellence and continuous improvement." },
              { icon: Laptop, title: "Digital Innovation", desc: "Integrate technology and digital resources to enhance learning experiences and outcomes." },
              { icon: Users, title: "Stakeholder Engagement", desc: "Collaborate with industry partners and alumni to ensure program relevance and graduate employability." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group bg-white p-8 rounded-xl shadow-lg border border-green-100 hover:border-green-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-full group-hover:from-green-100 group-hover:to-green-200 transition-all duration-300">
                    <Icon className="w-8 h-8 text-green-700" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center font-poppins">{title}</h3>
                <p className="text-gray-600 text-center text-sm font-poppins leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Our Team Org Chart ── */}
        <div id="orgTeam">
          <h2 className="text-3xl font-bold text-center mb-4 relative font-poppins">
            OUR TEAM
            <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-green-700"></span>
          </h2>
          <p className="text-center text-sm sm:text-base text-gray-600 font-poppins max-w-2xl mx-auto mt-6">
            Navigating curriculum standards and instructional development can be complex. Whether you
            are a faculty member preparing a new syllabus or an office administrator managing records.
          </p>
         </div>
        </div>

          {/* ✅ Background image with subtle white overlay (opacity-75) so it's visible but not distracting */}
          <div
            className="relative w-full py-14 px-4 sm:px-8"
            style={{
              backgroundImage: "url('/images/OT-BG.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* White wash overlay — adjust opacity to taste: 70-80% is subtle */}
            <div className="absolute inset-0 bg-stone-100/90"></div>

            {/* Org chart content */}
            <div className="relative z-10 flex flex-col items-center gap-0">

              {/* ── Row 1: Director ── */}
              <div className="flex justify-center">
                <MemberCardLarge {...director} />
              </div>

              {/* Vertical connector */}
              <div className="h-8 bg-green-700 mx-auto"></div>

              {/* Horizontal bar across unit heads */}
              <div className="flex items-start w-full max-w-3xl relative">
                {/* Horizontal line */}
                <div className="absolute top-0 left-1/6 right-1/6 h-px bg-green-700"></div>

                {/* ── Row 2: Unit Heads ── */}
                <div className="flex flex-col sm:flex-row justify-between w-full gap-8 sm:gap-4 pt-0 mb-4">
                  {unitHeads.map((m) => (
                    <div key={m.name} className="flex flex-col items-center">
                      {/* Vertical connector down from bar */}
                      <div className=" h-8 bg-green-700"></div>
                      <MemberCardLarge {...m} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Vertical connector */}
              <div className="h-8 bg-green-700 mx-auto mt-2"></div>

              {/* ── Row 3: Office Staff ── */}
              <div className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-36">
                {officeStaff.map((m) => (
                  <MemberCardLarge key={m.name} {...m} />
                ))}
              </div>

              {/* Divider line before interns */}
              <div className="w-full max-w-3xl  mt-10 mb-8"></div>

              {/* ── Row 4: Interns & Student Assistants ── */}
              <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
                {interns.map((m) => (
                  <MemberCardSmall key={m.name} {...m} />
                ))}
              </div>

            
          

      {/* Contact Information */}
        <div id="contact">
          <div className="py-24 relative z-10">
              <h2 className="text-3xl font-bold text-gray-800 text-center mb-6 relative font-poppins">
              GET IN TOUCH
              <span className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-green-700"></span>
            </h2>
            <p className="text-center text-sm sm:text-base text-gray-600 font-poppins max-w-2xl mx-auto mt-6 mb-16">
              Reach out to us through any of the channels 
              below or visit our office at the CSU Main Campus.
            </p>
          
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-4xl mx-auto">
              <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 min-w-[250px]">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Mail className="w-5 h-5 text-green-700" />
                </div>
                <span className="text-gray-700 font-medium">
                  ocid@carsu.edu.ph
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 min-w-[250px]">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Phone className="w-5 h-5 text-green-700" />
                </div>
                <span className="text-gray-700 font-medium">
                  (085) 123-4567
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 min-w-[250px]">
                <div className="p-2 bg-green-100 rounded-lg">
                  <MapPin className="w-5 h-5 text-green-700" />
                </div>
                <span className="text-gray-700 font-medium">
                  Caraga State University
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  );
};

export default About;