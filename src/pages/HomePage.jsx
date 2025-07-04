import Card from "../components/ui/Card";

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section with Responsive OCID Banner */}
      <div className="relative w-full">
        {/* Desktop Banner (hidden on small screens) */}
        <img
          src="/images/ocid-banner1.png"
          className="w-full h-auto hidden md:block"
          loading="eager"
        />

        {/* Mobile Banner (shown only on small screens) */}
        <div className="md:hidden bg-green-700 px-4 py-5">
          <div className="flex flex-col items-center mb-3">
            <img
              src="/images/csu-logo.png"
              alt="Caraga State University Logo"
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

      {/* Content Sections with Cream Background */}
      <div className="py-6 sm:py-10 md:py-16 px-4 sm:px-8 md:px-16">
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 mb-8 sm:mb-12 md:mb-16">
          {/* Our Vision */}
          <Card>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 text-center   mb-4 sm:mb-6 relative font-poppins">
              OUR VISION
              <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 bg-green-700"></span>
            </h2>
            <p className="text-center text-sm md:text-base max-w-2xl mx-auto text-gray-700 mt-6">
              A socially-engaged digital, innovation, and entrepreneurial
              university excelling globally in science,engineering, and the arts
              by 2028.
            </p>
          </Card>

          {/* Core Values */}
          <Card>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 text-center mb-4 sm:mb-6 relative font-poppins">
              CORE VALUES
              <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 bg-green-700"></span>
            </h2>
            {/*layout for core values*/}
            <div className="flex flex-col gap-4 mt-6">
              {/* for C*/}
              <div className="flex items-center">
                <span className="text-4xl font-bold text-gray-800 font-cinzel w-10 text-center">
                  C
                </span>
                <span className="mx-2 text-2xl font-bold text-gray-800">-</span>
                <span className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 tracking-wide font-cinzel">
                  OMPETENCE
                </span>
              </div>
              {/* for S*/}
              <div className="flex items-center">
                <span className="text-4xl font-bold text-gray-800 font-cinzel w-10 text-center">
                  S
                </span>
                <span className="mx-2 text-2xl font-bold text-gray-800">-</span>
                <span className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 tracking-wide font-cinzel">
                  ERVICE
                </span>
              </div>
              {/* for U*/}
              <div className="flex items-center">
                <span className="text-4xl font-bold text-gray-800 font-cinzel w-10 text-center">
                  U
                </span>
                <span className="mx-2 text-2xl font-bold text-gray-800">-</span>
                <span className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 tracking-wide font-cinzel">
                  PRIGHTNESS
                </span>
              </div>
            </div>
          </Card>

          {/* Our Mission */}
          <Card>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 text-center mb-4 sm:mb-6 relative font-poppins">
              OUR MISSION
              <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 bg-green-700"></span>
            </h2>
            <p className="text-center text-sm md:text-base max-w-2xl mx-auto text-gray-700 mt-6">
              As a transformative university, CSU is a responsible steward of
              problem-solvers and value creators who are driven to create a
              sustainable future for the region, the nation,and beyond.
            </p>
          </Card>

          {/* General Mandate - Simplified on mobile 
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 text-center mb-4 sm:mb-6 relative">
              General Mandate
              <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 bg-green-700"></span>
            </h2>
            <p className="text-center text-sm md:text-base max-w-3xl mx-auto text-gray-700 mt-6">
              Caraga State University shall primarily provide advanced
              education, higher technological, professional instruction and
              training in the fields of agriculture and environmental studies,
              fishery, engineering, forestry, industrial technology, education,
              law, medicine and other health related programs, information
              technology, arts and sciences and other related courses. It shall
              undertake research and extension services, and provide progressive
              leadership in its areas of specialization.
            </p>
          </div>
          */}
        </div>
      </div>
    </div>
  );
};

export default Home;
