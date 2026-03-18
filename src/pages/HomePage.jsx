import React from "react";
import Card from "../components/ui/HomeCard";
import Card2 from "../components/ui/HomeCard2";
import Faq from "../components/ui/FAQcards";
import BannerCarousel from "../components/ui/BannerCarousel";
// import Chatbot from "../components/chatbot/Chatbox";

const bannerImages = [
  "/images/banner1.png",
  "/images/banner2.png",
];

const Home = () => {
  return (
    <div className="sm: hidden lg:flex displaymin-h-screen flex flex-col w-full ">

      {/* ── Hero Banner Carousel ── */}
      <BannerCarousel images={bannerImages} interval={10000} />

     <div className="flex flex-col items-center py-8 sm:py-10 md:py-12 justify-center w-full mb-8 md:mb-16 mx-auto px-4">
        <div className="flex flex-wrap justify-center items-baseline gap-0 w-full font-cinzel">

          {/* Mobile: stacked lines | Desktop: single row */}
          <div className="flex flex-col sm:flex-row items-center sm:items-baseline flex-wrap justify-center gap-x-0">

            {/* Competence */}
            <span className="flex items-baseline">
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#009900]">C</span>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black tracking-wide">OMPETENCE.</span>
            </span>

            {/* Service */}
            <span className="flex items-baseline sm:pl-2">
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#009900]">S</span>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black tracking-wide">ERVICE.</span>
            </span>

            {/* Uprightness */}
            <span className="flex items-baseline sm:pl-2">
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#009900]">U</span>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black tracking-wide">PRIGHTNESS.</span>
            </span>

          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto py-8 px-4 sm:px-8 md:px-8 flex flex-col items-center">

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16 w-full">
          {/* Our Vision */}
          <Card>
            <h2 className="text-2xl font-bold text-[#008000] mb-4 relative pb-2 front-poppins mt-2">
              VISION
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-green-700 rounded-full"></span>
            </h2>
            <p className="text-l text-[#4d4d4d] mt-4 font-poppins leading-relaxed">
              A socially-engaged digital, innovation, and entrepreneurial
              university excelling globally in science, engineering, and the arts
              by 2028.
            </p>
          </Card>

          {/* Our Mission */}
          <Card>
            <h2 className="text-2xl font-bold text-[#008000] mb-4 relative pb-2 front-poppins mt-2">
              MISSION
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-green-700 rounded-full"></span>
            </h2>
            <p className="text-l text-[#4d4d4d] mt-4 font-poppins leading-relaxed">
              As a transformative university, CSU is a responsible steward of
              problem-solvers and value creators who are driven to create a
              sustainable future for the region, the nation, and beyond.
            </p>
          </Card>

          {/* General Mandate */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl font-bold text-[#008000] mb-4 relative pb-2 front-poppins mt-2">
              GENERAL MANDATE
            </h2>
            <p className="text-justify text-sm md:text-base max-w-3xl mx-auto mt-6 text-csuGreen font-poppinsw">
              Caraga State University shall primarily provide advanced
              education, higher technological, professional instruction and
              training in the fields of <i>agriculture and environmental studies,
              fishery, engineering, forestry, industrial technology, education,
              law, medicine and other health related programs, information
              technology, arts and sciences</i> and other related courses. It shall
              undertake research and extension services, and provide progressive
              leadership in its areas of specialization.
            </p>
          </div>
        </div>

        {/* Institutional Outcomes */}
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center md:items-start max-w-8xl mx-auto md:py-11 mb-12">
          <img
            src="/images/IO.png"
            className="w-full max-w-md sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-2xl h-auto rounded-lg"
            alt="Institutional Outcomes"
            loading="eager"
          />
          <div className="flex-1 text-center">
            <h2 className="text-md sm:text-xl md:text-3xl font-bold font-poppins text-left">
              Aligned with the Caraga State University's Vision, Mission, Core
              Values, and Quality Objectives the following Institutional
              Outcomes are expected of the graduates
            </h2>
            <p className="text-left text-xs md:text-base max-w-3xl mx-auto mt-4 md:mt-11 text-csuGreen font-poppins">
              <b>IO1. Transformative Leadership and Stewardship.</b> A CSUAN
              applies advanced expertise in addressing complex societal
              challenges as a transformative leader and purpose-driven steward.
              <br /><br />
              <b>IO2. Research, Innovation and Enterprise.</b> A CSUAN produces
              quality research outputs, applies innovative thinking, and
              develops entrepreneurial solutions that address regional and
              global issues, in pursuit of sustainability and economic
              advancement.
              <br /><br />
              <b>IO3. Lifelong Learning and Social Responsibility.</b> A CSUAN
              continually enhances their knowledge and skills, and actively
              contributes to community development while exemplifying social
              responsibility, ethical standards, and the core values of Caraga
              State University.
            </p>
          </div>
        </div>

        {/* Graduate Attributes */}
        <div className="flex flex-col md:flex-row md:gap-11 item-center md:items-start mb-12">
          <div className="flex-1 text-center">
            <h2 className="text-lg sm:text-4xl font-bold font-poppins text-left">
              Graduate Attributes
            </h2>
            <p className="text-left text-xs md:text-base max-w-3xl mx-auto mt-5 text-csuGreen font-poppins">
              The CSUAN graduate is globally competent, lifelong learner,
              visionary steward, sustainability-advocate, morally-upright,
              ethically critical, with integrity, adaptable to change,
              innovative, has entrepreneurial mindset, and a transformative
              leader.
              <br /><br />
              <b>Definition:</b>
              <br />A CSUAN demonstrates expertise and lifelong learning,
              continuously enhancing their knowledge and skills to meet evolving
              industry and societal demands.
              <br /><br />
              A CSUAN actively participates in addressing societal
              issues, fostering inclusive development, and advocating for
              sustainable and transformative change.
              <br /><br />
              A CSUAN upholds integrity, ethical responsibility, and
              accountability, ensuring that their actions reflect the core
              values and mission of the university.
              <br /><br />
              A CSUAN is adaptable to change, embraces innovation and
              entrepreneurship, and applies creative solutions to solve complex
              challenges in a dynamic world.
              <br /><br />
              A CSUAN inspires and empowers others through
              collaborative and compassionate leadership, fostering growth,
              mentorship, and a culture of excellence.
            </p>
          </div>
          <img
            src="/images/GA.png"
            className="w-full max-w-md sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-2xl h-auto rounded-lg mt-5 md:mt-0"
            alt="Graduate Attributes"
            loading="eager"
          />
        </div>
      </div>

      {/* News & Updates */}
      <div className="container mx-auto mb-8 py-8 px-4 sm:px-8 md:px-8 flex flex-col items-start md:px-16">
        <h2 className="text-4xl font-bold font-poppins text-left mb-8">
          News &amp; Updates
        </h2>
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <Card2
            image="/images/director.png"
            title="OCID Welcomes New Director for CY 2026"
            date="January 5, 2026"
          />
          <Card2
            image="/images/OBE.JPG"
            title="OBE-Training For Newly Hired and Reinstated Faculty"
            date="February 18, 2026"
          />
          <Card2
            image="/images/postcur.jpg"
            title="Post-Enrollment Curriculum Assessment"
            date="March 4, 2026"
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="hidden lg:flex min mb-12 flex flex-col w-full">
        <div className="container mx-auto relative max-w-fit">
          <img
            src="/images/college.png"
            className="w-full h-auto hidden md:block"
            loading="eager"
          />
          <div className="absolute inset-0 flex items-center justify-end px-24 mx-4 md:mx-16">
            <a
              href="/colleges_graduate_main"
              className="
                group relative inline-flex items-center gap-2
                px-8 py-4
                bg-white hover:bg-white/90
                text-[#008000] font-bold text-lg font-poppins
                rounded-full shadow-lg hover:shadow-xl
                border-2 border-white/30
                transition-all duration-300 ease-in-out
                hover:scale-105 hover:gap-3
              "
            >
              View Approved Programs
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── Got Questions ── */}
      <div className="container mx-auto mb-8 px-4 sm:px-6 md:px-8 lg:px-16 w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-left text-[#008000]">
          Got Questions?
        </h2>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-left mb-6 md:mb-8">
          We've Got Answers.
        </h2>
        <p className="text-sm sm:text-base font-poppins text-left mb-8 md:mb-16 leading-relaxed">
          Navigating curriculum standards and instructional development can be complex.
          Whether you are a faculty member preparing a new syllabus or an office administrator managing records,
          we've gathered the most common questions about our units and processes to help you stay on track.
        </p>
 
        <div className="flex flex-col gap-3 w-full">
          <Faq
            question="1. What is the primary role of OCID?"
            answer="The Office of Curriculum and Instruction Development (OCID) is responsible for overseeing the creation, review, and enhancement of academic programs, instructional materials, and performance evaluation systems at Caraga State University. Our goal is to ensure that all curricula align with CHED standards and Outcomes-Based Education (OBE) principles."
          />
          <Faq
            question="2. How can faculty members submit instructional materials for review?"
            answer="Faculty members may submit instructional materials through their respective College Dean's Office. Materials are then forwarded to OCID for evaluation. Submissions must follow the standard template provided by OCID and should include the course syllabus, learning outcomes, and assessment tools."
          />
          <Faq
            question="3. Where can I find the list of officially approved academic degree programs?"
            answer="The list of officially approved academic degree programs is available on the Caraga State University official website under the Academics section. You may also visit the OCID office or contact us directly for the most updated list of CHED-approved programs offered by the university."
          />
          <Faq
            question="4. What is the Outcome-Based Education (OBE) standard used by the University?"
            answer="Outcome-Based Education (OBE) is an educational framework that focuses on clearly defining the skills, knowledge, and attitudes students should demonstrate upon completing a program. CSU follows OBE principles in alignment with CHED Memorandum Orders, ensuring that all programs produce graduates who meet industry and societal standards."
          />
          <Faq
            question="5. How does the office handle the confidentiality of academic performance evaluations?"
            answer="OCID strictly adheres to the Data Privacy Act of 2012. All academic performance evaluation data is handled with utmost confidentiality and is accessible only to authorized personnel. Evaluation results are used solely for academic quality assurance and institutional improvement purposes."
          />
        </div>
      </div>

      {/* Educational Philosophy */}
      <div className="w-full bg-csuGreen py-12 px-4 md:px-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          <Card></Card>
        </div>
      </div>

    </div>
  );
};

export default Home;