import React from "react";
import Card from "../components/ui/HomeCard";
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
  Briefcase,
  UserCheck,
  Wrench,
} from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <div className="relative w-full bg-gradient-to-br from-green-700 via-green-800 to-green-900 py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex flex-col items-center mb-8 animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <img
                src="/images/ocid-logo.png"
                alt="OCID Logo"
                className="relative h-24 mb-6 drop-shadow-2xl transform group-hover:scale-105 transition duration-300"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-poppins tracking-tight">
              About OCID
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-yellow-300"></div>
              <p className="text-xl md:text-2xl text-yellow-300 italic">
                Office of Curriculum, Instruction and Development
              </p>
              <div className="h-px w-8 bg-yellow-300"></div>
            </div>
          </div>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
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
            <p className="text-lg text-gray-700 mb-6 text-center font-poppins leading-relaxed">
              The <b>Office of Curriculum Instruction and Development (OCID) </b>
              serves as the central hub for educational excellence at <b>Caraga
              State University.</b> We work collaboratively with all colleges and
              departments to ensure that our academic programs meet the highest
              standards of quality and relevance.
            </p>
            <p className="text-lg text-gray-700 text-center font-poppins leading-relaxed">
              Our comprehensive approach encompasses curriculum design and
              review, instructional development, program accreditation support,
              and the integration of innovative teaching methodologies. <b>We are
              committed to creating educational experiences that prepare our
              students for the challenges and opportunities of the 21st century.</b>
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
            <div className="group bg-white p-8 rounded-xl shadow-lg border border-green-100 hover:border-green-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-full group-hover:from-green-100 group-hover:to-green-200 transition-all duration-300">
                  <BookOpen className="w-8 h-8 text-green-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center font-poppins">
                Curriculum Development
              </h3>
              <p className="text-gray-600 text-center text-sm font-poppins leading-relaxed">
                Design and continuously improve academic programs to meet
                industry standards and emerging educational needs.
              </p>
            </div>

            {/* Function 2 */}
            <div className="group bg-white p-8 rounded-xl shadow-lg border border-green-100 hover:border-green-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-full group-hover:from-green-100 group-hover:to-green-200 transition-all duration-300">
                  <GraduationCap className="w-8 h-8 text-green-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center font-poppins">
                Instructional Excellence
              </h3>
              <p className="text-gray-600 text-center text-sm font-poppins leading-relaxed">
                Support faculty development and promote innovative teaching
                methodologies across all disciplines.
              </p>
            </div>

            {/* Function 3 */}
            <div className="group bg-white p-8 rounded-xl shadow-lg border border-green-100 hover:border-green-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-full group-hover:from-green-100 group-hover:to-green-200 transition-all duration-300">
                  <ClipboardCheck className="w-8 h-8 text-green-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center font-poppins">
                Program Accreditation
              </h3>
              <p className="text-gray-600 text-center text-sm font-poppins leading-relaxed">
                Facilitate and support the accreditation process to ensure
                program quality and recognition.
              </p>
            </div>

            {/* Function 4 */}
            <div className="group bg-white p-8 rounded-xl shadow-lg border border-green-100 hover:border-green-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-full group-hover:from-green-100 group-hover:to-green-200 transition-all duration-300">
                  <BarChart3 className="w-8 h-8 text-green-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center font-poppins">
                Quality Assurance
              </h3>
              <p className="text-gray-600 text-center text-sm font-poppins leading-relaxed">
                Monitor and evaluate academic programs to maintain excellence
                and continuous improvement.
              </p>
            </div>

            {/* Function 5 */}
            <div className="group bg-white p-8 rounded-xl shadow-lg border border-green-100 hover:border-green-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-full group-hover:from-green-100 group-hover:to-green-200 transition-all duration-300">
                  <Laptop className="w-8 h-8 text-green-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center font-poppins">
                Digital Innovation
              </h3>
              <p className="text-gray-600 text-center text-sm font-poppins leading-relaxed">
                Integrate technology and digital resources to enhance learning
                experiences and outcomes.
              </p>
            </div>

            {/* Function 6 */}
            <div className="group bg-white p-8 rounded-xl shadow-lg border border-green-100 hover:border-green-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-full group-hover:from-green-100 group-hover:to-green-200 transition-all duration-300">
                  <Users className="w-8 h-8 text-green-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center font-poppins">
                Stakeholder Engagement
              </h3>
              <p className="text-gray-600 text-center text-sm font-poppins leading-relaxed">
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
              <div className="group text-center">
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-full w-28 h-28 mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <Briefcase className="w-12 h-12 text-green-700" />
                </div>
                <h3 className="font-bold text-lg mb-2 font-poppins text-gray-800">
                  Administrative Staff
                </h3>
                <p className="text-gray-600 text-sm">
                  Leadership and strategic planning
                </p>
              </div>
              <div className="group text-center">
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-full w-28 h-28 mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <UserCheck className="w-12 h-12 text-green-700" />
                </div>
                <h3 className="font-bold text-lg mb-2 font-poppins text-gray-800">
                  Curriculum Specialists
                </h3>
                <p className="text-gray-600 text-sm">
                  Program development and design
                </p>
              </div>
              <div className="group text-center">
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-full w-28 h-28 mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <Wrench className="w-12 h-12 text-green-700" />
                </div>
                <h3 className="font-bold text-lg mb-2 font-poppins text-gray-800">
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
        <div className="relative bg-gradient-to-br from-green-50 via-green-50 to-green-100 rounded-2xl p-10 text-center shadow-lg overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 rounded-full -mr-32 -mt-32 opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-300 rounded-full -ml-24 -mb-24 opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 font-poppins">
              Get in Touch
            </h2>
            <p className="text-gray-700 mb-8 font-poppins max-w-2xl mx-auto">
              Have questions about our programs or need assistance with
              curriculum matters? We're here to help!
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
  );
};

export default About;
