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
            <img src="/images/csu-logo.png"  alt="Caraga State University Logo" className="h-14 mb-2" />
            
            <p className="text-yellow-300 italic text-center text-base mb-2">
              Office of Curriculum and Instruction Development
            </p>
          </div>
          <p className="text-white text-sm text-center leading-tight">
            The Office of Curriculum and Instruction Development (OCID) works with partners to develop innovative
            university programs.
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
      <div className="bg-[#fffde7] py-6 sm:py-10 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Our Vision */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 text-center mb-4 sm:mb-6 relative">
              Our Vision
              <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 bg-green-700"></span>
            </h2>
            <p className="text-center text-sm md:text-base max-w-2xl mx-auto text-gray-700 mt-6">
            A globally-engaged University excelling in science, engineering and the arts. 
            </p>
          </div>

          {/* Our Mission */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 text-center mb-4 sm:mb-6 relative">
              Our Mission
              <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 bg-green-700"></span>
            </h2>
            <p className="text-center text-sm md:text-base max-w-2xl mx-auto text-gray-700 mt-6">
            Caraga State University endeavors to produce globallycompetitive and socially responsible human capital towards the sustainable and inclusive development of Caraga Region and beyond.
            </p>
          </div>

          {/* General Mandate - Simplified on mobile */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 text-center mb-4 sm:mb-6 relative">
              General Mandate
              <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 bg-green-700"></span>
            </h2>
            <p className="text-center text-sm md:text-base max-w-3xl mx-auto text-gray-700 mt-6">
            Caraga State University shall primarily provide advanced education, higher technological, professional instruction and training in the fields of agriculture and environmental studies, fishery, engineering, forestry, industrial technology, education, law, medicine and other health related programs, information technology, arts and sciences and other related courses. It shall undertake research and extension services, and provide progressive leadership in its areas of specialization.

            </p>
          </div>

          {/* Core Values */}
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 text-center mb-4 sm:mb-6 relative">
              Core Values
              <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 bg-green-700"></span>
            </h2>
            <p className="text-center text-sm md:text-base max-w-2xl mx-auto text-gray-700 mt-6">
              Competence Service; and Uprightness
            </p>
          </div>
        </div>
      </div>

    
    </div>
  )
}

export default Home
