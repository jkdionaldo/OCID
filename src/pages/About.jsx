import React from "react";
import Card from "../components/ui/HomeCard";

const About = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <div className="relative w-full bg-gradient-to-r from-green-700 to-green-800 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col items-center mb-6">
            <img
              src="/images/ocid-logo.png"
              alt="OCID Logo"
              className="h-20 mb-4"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
              About OCID
            </h1>
            <p className="text-xl text-yellow-300 italic mb-2">
              Office of Curriculum, Instruction and Development
            </p>
          </div>
          <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
            Advancing academic excellence through innovative curriculum
            development, quality instruction, and continuous educational
            improvement at Caraga State University.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-4 sm:px-8 md:px-16">
        {/* Mission and Vision Cards */}
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-10 mb-16">
          {/* Our Mission */}
          <Card>
            <h2 className="text-xl font-bold text-gray-800 text-center mb-6 relative font-poppins">
              OUR MISSION
              <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-green-700"></span>
            </h2>
            <p className="text-center text-sm max-w-2xl mx-auto text-csuGreen mt-6 font-poppins leading-relaxed">
              To ensure academic excellence by developing innovative curricula,
              enhancing instructional quality, and fostering continuous
              improvement in educational programs across all colleges of Caraga
              State University.
            </p>
          </Card>

          {/* Our Vision */}
          <Card>
            <h2 className="text-xl font-bold text-gray-800 text-center mb-6 relative font-poppins">
              OUR VISION
              <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-green-700"></span>
            </h2>
            <p className="text-center text-sm max-w-2xl mx-auto text-csuGreen mt-6 font-poppins leading-relaxed">
              To be the leading catalyst for transformative education, creating
              world-class curricula that produce globally competitive graduates
              who drive innovation and sustainable development.
            </p>
          </Card>
        </div>

        {/* About OCID Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 relative font-poppins">
            What We Do
            <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-green-700"></span>
          </h2>
          <div className="max-w-5xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 text-justify font-poppins leading-relaxed">
              The Office of Curriculum, Instruction and Development (OCID)
              serves as the central hub for educational excellence at Caraga
              State University. We work collaboratively with all colleges and
              departments to ensure that our academic programs meet the highest
              standards of quality and relevance.
            </p>
            <p className="text-lg text-gray-700 text-justify font-poppins leading-relaxed">
              Our comprehensive approach encompasses curriculum design and
              review, instructional development, program accreditation support,
              and the integration of innovative teaching methodologies. We are
              committed to creating educational experiences that prepare our
              students for the challenges and opportunities of the 21st century.
            </p>
          </div>
        </div>

        {/* Core Functions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 relative font-poppins">
            Core Functions
            <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-green-700"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Function 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-green-200 hover:shadow-xl transition-shadow duration-300">
              <div className="text-green-700 text-4xl mb-4 text-center">📚</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center font-poppins">
                Curriculum Development
              </h3>
              <p className="text-gray-600 text-center text-sm font-poppins">
                Design and continuously improve academic programs to meet
                industry standards and emerging educational needs.
              </p>
            </div>

            {/* Function 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-green-200 hover:shadow-xl transition-shadow duration-300">
              <div className="text-green-700 text-4xl mb-4 text-center">🎓</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center font-poppins">
                Instructional Excellence
              </h3>
              <p className="text-gray-600 text-center text-sm font-poppins">
                Support faculty development and promote innovative teaching
                methodologies across all disciplines.
              </p>
            </div>

            {/* Function 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-green-200 hover:shadow-xl transition-shadow duration-300">
              <div className="text-green-700 text-4xl mb-4 text-center">📋</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center font-poppins">
                Program Accreditation
              </h3>
              <p className="text-gray-600 text-center text-sm font-poppins">
                Facilitate and support the accreditation process to ensure
                program quality and recognition.
              </p>
            </div>

            {/* Function 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-green-200 hover:shadow-xl transition-shadow duration-300">
              <div className="text-green-700 text-4xl mb-4 text-center">📊</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center font-poppins">
                Quality Assurance
              </h3>
              <p className="text-gray-600 text-center text-sm font-poppins">
                Monitor and evaluate academic programs to maintain excellence
                and continuous improvement.
              </p>
            </div>

            {/* Function 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-green-200 hover:shadow-xl transition-shadow duration-300">
              <div className="text-green-700 text-4xl mb-4 text-center">💻</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center font-poppins">
                Digital Innovation
              </h3>
              <p className="text-gray-600 text-center text-sm font-poppins">
                Integrate technology and digital resources to enhance learning
                experiences and outcomes.
              </p>
            </div>

            {/* Function 6 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-green-200 hover:shadow-xl transition-shadow duration-300">
              <div className="text-green-700 text-4xl mb-4 text-center">🤝</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center font-poppins">
                Stakeholder Engagement
              </h3>
              <p className="text-gray-600 text-center text-sm font-poppins">
                Collaborate with industry partners and alumni to ensure program
                relevance and graduate employability.
              </p>
            </div>
          </div>
        </div>

        {/* Our Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 relative font-poppins">
            Our Team
            <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-green-700"></span>
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8 font-poppins">
              Our dedicated team of educational professionals, curriculum
              specialists, and academic coordinators work tirelessly to support
              the academic mission of Caraga State University.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-green-700 text-2xl font-bold">👨‍💼</span>
                </div>
                <h3 className="font-bold text-lg mb-2 font-poppins">
                  Administrative Staff
                </h3>
                <p className="text-gray-600 text-sm">
                  Leadership and strategic planning
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-green-700 text-2xl font-bold">👩‍🏫</span>
                </div>
                <h3 className="font-bold text-lg mb-2 font-poppins">
                  Curriculum Specialists
                </h3>
                <p className="text-gray-600 text-sm">
                  Program development and design
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-green-700 text-2xl font-bold">👨‍💻</span>
                </div>
                <h3 className="font-bold text-lg mb-2 font-poppins">
                  Technical Support
                </h3>
                <p className="text-gray-600 text-sm">
                  Digital platforms and resources
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 font-poppins">
            Get in Touch
          </h2>
          <p className="text-gray-700 mb-6 font-poppins">
            Have questions about our programs or need assistance with curriculum
            matters? We're here to help!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-green-700">📧</span>
              <span className="text-gray-700">ocid@carsu.edu.ph</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-700">📞</span>
              <span className="text-gray-700">(085) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-700">📍</span>
              <span className="text-gray-700">
                Caraga State University, Butuan City
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
