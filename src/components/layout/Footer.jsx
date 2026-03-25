const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm">

      {/* ── Top: Concern & Inquiry notice ── */}
      <div className="w-full text-center pt-8 pb-6 px-4 mb-8">
        <p className="text-xs sm:text-sm leading-relaxed">
          For concerns and Inquiry about the website please visit
        </p>
        <a
          href="https://ocid.carsu.edu.ph"
          className="text-[#f9dc07] underline font-semibold text-xs sm:text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Office of Curriculum and Instruction Development
        </a>
        <p className="text-xs sm:text-sm mt-1">
          or email us at{" "}
          <a
            href="mailto:ocid@carsu.edu.ph"
            className="text-[#f9dc07] underline font-semibold"
          >
            ocid@carsu.edu.ph
          </a>
        </p>
      </div>

      {/* ── Middle: Logos + Nav links ── */}
      <div className="container mx-auto px-6 pb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-0">

          {/* Left: Logos */}
          <div className="flex items-end flex-shrink-0">
            {/* OCID logo — biggest */}
            <img
              src="/images/ocid_logo.png"
              alt="OCID Logo"
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 object-contain"
            />
            {/* CSU Seal — medium */}
            <img
              src="/images/CSU-Official-Seal_1216-x-2009-1.svg"
              alt="CSU Official Seal"
              className="w-16 h-16 sm:w-18 sm:h-18 md:w-24 md:h-24 object-contain"
            />
            {/* Bagong Pilipinas — medium */}
            <img
              src="/images/Hi-Res-BAGONG-PILIPINAS-LOGO-1474x1536-1-1.svg"
              alt="Bagong Pilipinas Logo"
              className="w-14 h-16 sm:w-16 sm:h-20 md:w-20 md:h-24 object-contain"
            />
          </div>

          {/* Right: Nav columns — pushed to the right on desktop */}
          <div className="flex flex-row gap-10 sm:gap-16 md:gap-20 md:ml-auto text-xs sm:text-sm">

            {/* Column 1 */}
            <div className="flex flex-col gap-2 text-center md:text-left">
              <a href="/about" className="text-white hover:text-[#f9dc07] transition-colors duration-200">About</a>
              <a href="/#news" className="text-white hover:text-[#f9dc07] transition-colors duration-200">News &amp; Updates</a>
              <a href="/about#orgTeam" className="text-white hover:text-[#f9dc07] transition-colors duration-200">Team</a>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-2 text-center md:text-left">
              <a href="/programs" className="text-white hover:text-[#f9dc07] transition-colors duration-200">Programs</a>
              <a href="/colleges_graduate_main" className="text-white hover:text-[#f9dc07] transition-colors duration-200">Main Campus</a>
              <a href="/colleges_undergraduate_cc" className="text-white hover:text-[#f9dc07] transition-colors duration-200">Cabadbaran Campus</a>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-2 text-center md:text-left">
              <a href="/contact" className="text-white hover:text-[#f9dc07] transition-colors duration-200">Contact</a>
              <a href="/faqs" className="text-white hover:text-[#f9dc07] transition-colors duration-200">FAQs</a>
            </div>

          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="border-t border-gray-700 mx-6 md:mx-12 lg:mx-16" />

      {/* ── Bottom: Copyright + Legal links ── */}
      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
        <p className="text-xs sm:text-sm text-gray-300">
          &copy; Caraga State University, {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm mb-8 sm:mb-0">
          <a href="/devs" className="text-gray-300 hover:text-[#f9dc07] transition-colors duration-200">The Devs</a>
          <a href="/terms" className="text-gray-300 hover:text-[#f9dc07] transition-colors duration-200">Terms of Service</a>
          <a href="/privacy" className="text-gray-300 hover:text-[#f9dc07] transition-colors duration-200">Privacy Policy</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;