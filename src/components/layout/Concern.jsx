import React, { useState } from "react";

const ConcernSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !message) return;
    // TODO: wire up to your actual email/API endpoint
    console.log("Concern submitted:", { email, message });
    setSubmitted(true);
    setEmail("");
    setMessage("");
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      className="w-full py-12 px-6 sm:px-10 md:px-16 lg:px-24"
      style={{
        background: "linear-gradient(135deg, #1a7a1a 0%, #007a00 50%, #005c00 100%)",
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center text-left gap-10 md:gap-16">

        {/* ── Left: Heading + Contact Info ── */}
        <div className="flex-1 text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins leading-tight mb-5">
            Have a specific<br />concern?
          </h2>
          <p className="text-sm sm:text-base font-poppins text-white/85 leading-relaxed mb-8 max-w-xs">
            Reach out to us through any of the channels below or visit our office at the CSU Main Campus.
          </p>

          {/* Contact details */}
          <div className="flex flex-col gap-4 text-sm sm:text-base font-poppins text-white/90">

            {/* Hours */}
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              </svg>
              <span>Monday – Thursday, 8:00 AM to 7:00 PM</span>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Brgy. Ampayon, Butuan City, 8600 Agusan Del Norte Philippines</span>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:ocid@carsu.edu.ph" className="hover:text-[#f9dc07] transition-colors duration-200">
                ocid@carsu.edu.ph
              </a>
            </div>

          </div>
        </div>

        {/* ── Right: White form card ── */}
        <div className="w-full md:w-[500px] lg:w-[500px] bg-white rounded-2xl shadow-2xl p-6 sm:p-8 flex-shrink-0">

          {submitted ? (
            <div className="flex flex-col items-center justify-center h-48 gap-3">
              <svg className="w-14 h-14 text-[#008000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[#008000] font-bold font-poppins text-lg text-center">Message sent!</p>
              <p className="text-gray-500 font-poppins text-sm text-center">We'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              {/* Email field */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold font-poppins text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="
                    w-full px-4 py-3
                    bg-gray-100 rounded-xl
                    text-sm font-poppins text-gray-700
                    placeholder-gray-400
                    border border-transparent
                    focus:outline-none focus:border-[#008000] focus:bg-white
                    transition-all duration-200
                  "
                />
              </div>

              {/* Message field */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold font-poppins text-gray-700">Message</label>
                <textarea
                  placeholder="Type your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="
                    w-full px-4 py-3
                    bg-gray-100 rounded-xl
                    text-sm font-poppins text-gray-700
                    placeholder-gray-400
                    border border-transparent
                    focus:outline-none focus:border-[#008000] focus:bg-white
                    transition-all duration-200
                    resize-none
                  "
                />
              </div>

              {/* Send button row */}
              <div className="flex items-center gap-3 mt-1">
                <button
                  type="submit"
                  className="
                    px-7 py-2.5
                    bg-[#008000] hover:bg-[#006600]
                    text-white font-semibold font-poppins text-sm
                    rounded-full
                    transition-all duration-200 hover:scale-105
                    shadow-md
                  "
                >
                  Send
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default ConcernSection;