<<<<<<< HEAD
import React from "react";
import Card from "../components/ui/Card";
import Chatbot from "../components/chatbot/Chatbox";
import BackToTop from "../components/ui/BackToTop";
=======
import Card from "../components/ui/HomeCard";
>>>>>>> a13138d278ec6ad5ad4c14bf5482c79b8eda2928

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <div className="relative w-full">
        {/* Desktop Banner */}
        <img
          src="/images/ocid-banner1.png"
          className="w-full h-auto hidden md:block"
          loading="eager"
          alt="OCID Banner"
        />

        {/* Mobile Banner */}
        <div className="md:hidden bg-green-700 px-4 py-5">
          <div className="flex flex-col items-center mb-3">
            <img
              src="/images/csu-logo.png"
              alt="CSU Logo"
              className="h-14 mb-2"
            />
            <p className="text-yellow-300 italic text-center text-base mb-2">
              Office of Curriculum and Instruction Development
            </p>
          </div>
          <p className="text-white text-sm text-center leading-tight">
            The Office of Curriculum and Instruction Development (OCID) works
            with partners to develop innovative university programs.
          </p>
          <div className="flex justify-center mt-3">
            <a
              href="https://www.carsu.edu.ph/?q=news/csu-introduces-programs-solicits-stakeholders%E2%80%99-input-innovative-curricula"
              className="px-3 py-1.5 bg-white text-green-700 text-sm font-medium rounded-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* Vision, Mission, Core Values Section */}
      <div className="py-6 sm:py-10 md:py-16 px-4 sm:px-8 md:px-16">
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 mb-16">
          <Card>
            <h2 className="text-xl font-bold text-gray-800 text-center mb-6 relative font-poppins">
              OUR VISION
              <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-green-700"></span>
            </h2>
            <p className="text-center text-sm md:text-base text-csuGreen font-poppins mt-6">
              A socially-engaged digital, innovation, and entrepreneurial
              university excelling globally in science, engineering, and the
              arts by 2028.
            </p>
          </Card>

          <Card>
            <h2 className="text-xl font-bold text-gray-800 text-center mb-6 relative font-poppins">
              CORE VALUES
              <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-green-700"></span>
            </h2>
            <div className="flex flex-col gap-4 mt-6">
              {["C - OMPETENCE", "S - ERVICE", "U - PRIGHTNESS"].map(
                (item, idx) => (
                  <div className="flex items-center" key={idx}>
                    <span className="text-4xl font-bold text-csuGreen font-cinzel w-10 text-center">
                      {item.charAt(0)}
                    </span>
                    <span className="mx-2 text-2xl font-bold text-csuGreen">
                      -
                    </span>
                    <span className="text-xl font-semibold text-csuGreen font-cinzel">
                      {item.slice(4)}
                    </span>
                  </div>
                )
              )}
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-bold text-gray-800 text-center mb-6 relative font-poppins">
              OUR MISSION
              <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-green-700"></span>
            </h2>
            <p className="text-center text-sm md:text-base text-csuGreen font-poppins mt-6">
              As a transformative university, CSU is a responsible steward of
              problem-solvers and value creators who are driven to create a
              sustainable future for the region, the nation, and beyond.
            </p>
          </Card>
        </div>

<<<<<<< HEAD
        {/* General Mandate */}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-center mb-6 relative font-poppins">
            GENERAL MANDATE
            <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-green-700"></span>
          </h2>
          <p className="text-justify text-sm md:text-base text-csuGreen font-poppins mt-6 max-w-3xl mx-auto">
            Caraga State University shall primarily provide advanced education,
            higher technological, professional instruction and training in the
            fields of agriculture and environmental studies, fishery,
            engineering, forestry, industrial technology, education, law,
            medicine and other health related programs, information technology,
            arts and sciences and other related courses. It shall undertake
            research and extension services, and provide progressive leadership
            in its areas of specialization.
=======
        {/*For Insitutional Outcomes*/}
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start md:py-11 mb-12 ">
          <img
            src="/images/institutional_outcome.svg"
            className="w-full max-w-md sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-2xl h-auto rounded-lg"
            alt="Insitutional Outcomes"
            loading="eager"
          ></img>
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
              <br></br>
              <br></br>
              <b>IO2. Research, Innovation and Enterprise.</b> A CSUAN produces
              quality research outputs, applies innovative thinking, and
              develops entrepreneurial solutions that address regional and
              global issues, in pursuit of sustainability and economic
              advancement.
              <br></br>
              <br></br>
              <b>IO3. Lifelong Learning and Social Responsibility.</b> A CSUAN
              continually enhances their knowledge and skills, and actively
              contributes to community development while exemplifying social
              responsibility, ethical standards, and the core values of Caraga
              State University.
            </p>
          </div>
        </div>

        {/*Graduate Attributes*/}
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
              <br></br>
              <br></br>
              <b>Definition:</b>
              <br></br>A CSUAN demonstrates expertise and lifelong learning,
              continuously enhancing their knowledge and skills to meet evolving
              industry and societal demands.
              <br></br>
              <br></br>A CSUAN actively participates in addressing societal
              issues, fostering inclusive development, and advocating for
              sustainable and transformative change.
              <br></br>
              <br></br>A CSUAN upholds integrity, ethical responsibility, and
              accountability, ensuring that their actions reflect the core
              values and mission of the university.
              <br></br>
              <br></br>A CSUAN is adaptable to change, embraces innovation and
              entrepreneurship, and applies creative solutions to solve complex
              challenges in a dynamic world.
              <br></br>
              <br></br>A CSUAN inspires and empowers others through
              collaborative and compassionate leadership, fostering growth,
              mentorship, and a culture of excellence.
            </p>
          </div>
          <img
            src="/images/csuan.svg"
            className=" w-full max-w-md sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-2xl h-auto rounded-lg mt-5 md:mt-0"
            alt="Insitutional Outcomes"
            loading="eager"
          ></img>
        </div>
      </div>
      {/*Educational Philosophy*/}
      <div className="w-full bg-csuGreen py-12 px-4 md:px-16 flex flex-col md:flex-row items-center md:items-center justify-center">
        {/* Left: Headings */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center mb-8 md:mb-0 md:px-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins text-white text-center md:text-left leading-tight">
            Educational
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins text-white text-center md:text-left leading-tight md:ml-24">
            Philosophy
          </h2>
        </div>
        {/* Right: Paragraph */}
        <div className="flex-2 flex md:justify-start md:px-15">
          <p className="text-justify md:text-justify text-xs md:text-base max-w-2xl mx-auto mt-0 text-white font-poppins">
            Caraga State University upholds education as a transformative force
            that creates futures and empowers communities. It is through
            meaningful, values-driven learning that individuals are shaped into
            competent professionals, ethical leaders, and innovative
            problem-solvers. CSU believes that education should go beyond
            knowledge transmission—it must inspire lifelong learning, cultivate
            social responsibility, and enable graduates to lead change, foster
            inclusivity, and contribute to the sustainable development of the
            Caraga Region and beyond.
>>>>>>> a13138d278ec6ad5ad4c14bf5482c79b8eda2928
          </p>
        </div>

        {/* Institutional Outcomes */}
        <div className="flex flex-col md:flex-row gap-10 items-center mb-12">
          <img
            src="/images/institutional_outcome.svg"
            alt="Institutional Outcomes"
            className="w-full max-w-xl rounded-lg"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold font-poppins text-left mb-4">
              Institutional Outcomes
            </h2>
            <p className="text-left text-sm md:text-base text-csuGreen font-poppins">
              <b>IO1:</b> Transformative Leadership and Stewardship – Addressing
              complex societal challenges.
              <br />
              <br />
              <b>IO2:</b> Research, Innovation and Enterprise – Producing
              research and entrepreneurial solutions.
              <br />
              <br />
              <b>IO3:</b> Lifelong Learning and Social Responsibility –
              Committed to growth, ethics, and service.
            </p>
          </div>
        </div>

        {/* Graduate Attributes */}
        <div className="flex flex-col md:flex-row md:gap-11 items-start mb-12">
          <div className="flex-1">
            <h2 className="text-2xl font-bold font-poppins mb-4">
              Graduate Attributes
            </h2>
            <p className="text-sm md:text-base text-csuGreen font-poppins">
              CSUAN graduates are globally competent, visionary stewards,
              sustainability advocates, morally upright, innovative,
              entrepreneurial, and adaptive leaders. <br />
              <br />
              <b>Definition:</b>
              <br />A CSUAN continuously grows, leads with integrity, and
              contributes to a dynamic and inclusive world.
            </p>
          </div>
          <img
            src="/images/csuan.svg"
            className="w-full max-w-xl rounded-lg mt-5 md:mt-0"
            alt="CSUAN Graduate Attributes"
          />
        </div>
      </div>

      {/* Educational Philosophy */}
      <div className="w-full bg-csuGreen py-12 px-4 md:px-16 flex flex-col md:flex-row items-center justify-center">
        <div className="flex-1 mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-5xl font-bold font-poppins text-white leading-tight">
            Educational <br className="md:hidden" />
            Philosophy
          </h2>
        </div>
        c
        <div className="flex-2 md:px-12">
          <p className="text-white text-sm md:text-base text-justify font-poppins">
            Caraga State University upholds education as a transformative force
            that creates futures and empowers communities. CSU believes that
            education must inspire lifelong learning, cultivate social
            responsibility, and enable graduates to foster inclusivity and lead
            change for sustainable development across the Caraga Region and
            beyond.
          </p>
        </div>
        <BackToTop />
      </div>

      {/* Floating Chatbot */}
      {/* <Chatbot /> */}
    </div>
  );
};

export default Home;
