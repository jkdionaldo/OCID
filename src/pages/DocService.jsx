import React, { useState } from "react";
import DocCard from "../components/ui/DocCard";
import {
  docCategories,
  documents,
  colleges,
  departments,
  urgencyLevels,
} from "../utils/DocServiceData.js";

// ── Reusable select field ──────────────────────
const SelectField = ({ label, id, value, onChange, options, placeholder }) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={id} className="text-sm font-semibold font-poppins text-gray-700">
      {label}
    </label>
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full appearance-none px-4 py-3
          bg-gray-100 rounded-xl
          text-sm font-poppins text-gray-700
          border border-transparent
          focus:outline-none focus:border-[#008000] focus:bg-white
          transition-all duration-200 cursor-pointer
        "
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      <svg
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
);

// ── Main Page ──────────────────────────────────
const DocService = () => {
  const [activeCategory, setActiveCategory] = useState("manuals");
  const [form, setForm] = useState({
    name: "", college: "", department: "",
    documentTitle: "", purpose: "", urgency: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const setField = (field) => (value) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const filteredDocs = documents.filter((d) => d.category === activeCategory);
  const allDocTitles = documents.map((d) => d.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Document request submitted:", form);
    setSubmitted(true);
    setForm({ name: "", college: "", department: "", documentTitle: "", purpose: "", urgency: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="flex flex-col w-full">

      {/* ── Hero ── */}
        <section className="relative w-full h-[360px] sm:h-[480px] overflow-hidden">

          {/* Green base */}
            <div className="absolute inset-0 bg-[#145214]" />

          {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/OT-BG2.png')",
                filter: "grayscale(100%)",
              }}
            />

          {/* Fade overlay (THIS IS THE IMPORTANT PART) */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#145214]/40 to-[#f9fafb]" />

          {/* Title */}
            <div className="relative z-10 pt-16 sm:pt-20 md:pt-24 px-4 text-center">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white font-poppins text-center drop-shadow-lg">
                Document Services
              </h1>
            </div>
    </section>

      {/* ── Intro ── */}
      <section className="w-full bg-gray-50 py-2 px-4 sm:px-8 md:px-16">
        <div className="max-w-6xl mx-auto text-center px-2 sm:px-4">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-green-700 font-poppins mb-10 leading-relaxed">
            Your Gateway to Academic Standards and Instructional Resources
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 font-poppins leading-loose max-w-6xl mx-auto">
            The Office of Curriculum and Instruction Development (OCID) maintains a centralized
            repository of essential academic documents. This page serves as a directory for
            faculty, staff, and stakeholders to identify available resources and formally request
            the documentation needed for compliance, evaluation, and instructional enhancement.
          </p>
        </div>
      </section>

      {/* ── Document Directory ── */}
      <section className="w-full bg-gray-50 py-12 sm:py-24 px-4 sm:px-8 md:px-16">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins text-green-700 mb-3">
              Document Directory
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-500 font-poppins max-w-2xl mx-auto leading-loose">
              Browse the list below to identify the specific documents, manuals, or
              records maintained by our office.
            </p>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center items-center gap-1 mb-8 bg-white border border-gray-200 rounded-full px-2 py-1.5 shadow-sm w-fit mx-auto">
            {docCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  px-4 sm:px-6 py-2 rounded-full text-sm font-poppins font-medium
                  transition-all duration-200
                  ${activeCategory === cat.id
                    ? "bg-white border border-gray-300 text-gray-800 shadow-sm font-semibold"
                    : "text-gray-500 hover:text-gray-700"
                  }
                `}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Document list */}
          <div className="flex flex-col gap-3">
            {filteredDocs.length > 0 ? (
              filteredDocs.map((doc, index) => (
                <DocCard
                  key={doc.id}
                  number={index + 1}
                  title={doc.title}
                  description={doc.description}
                  italic={doc.italic}
                />
              ))
            ) : (
              <p className="text-center text-gray-400 font-poppins text-sm py-8">
                No documents found in this category.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ── Document Request Portal ── */}
      <section className="w-full bg-gray-50 py-12 sm:py-16 px-4 sm:px-8 md:px-16">
        <div className="max-w-2xl mx-auto">

          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins text-[#008000] mb-4">
              Document Request Portal
            </h2>
            <p className="text-sm sm:text-base text-gray-500 font-poppins leading-relaxed max-w-6xl mx-auto">
              Please fill out the form below. Note that requests for sensitive data, such as
              Performance Evaluations or Class Records, may require additional authorization
              from the Office of the Director.
            </p>
          </div>

          {/* Form card */}
          <div className="bg-white border border-green-200 rounded-2xl shadow-sm p-6 sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4">
                <svg className="w-14 h-14 text-[#008000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[#008000] font-bold font-poppins text-lg text-center">
                  Request submitted successfully!
                </p>
                <p className="text-gray-500 font-poppins text-sm text-center">
                  Our team will review your request and get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="req-name" className="text-sm font-semibold font-poppins text-gray-700">
                    Name:
                  </label>
                  <input
                    id="req-name"
                    type="text"
                    placeholder="Your Full Name"
                    value={form.name}
                    onChange={(e) => setField("name")(e.target.value)}
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

                <SelectField
                  label="College/Office:"
                  id="req-college"
                  value={form.college}
                  onChange={setField("college")}
                  options={colleges}
                  placeholder="Select Designated Department/College"
                />

                <SelectField
                  label="Department (If Applicable):"
                  id="req-department"
                  value={form.department}
                  onChange={setField("department")}
                  options={departments}
                  placeholder="Select Designated Department/College"
                />

                <SelectField
                  label="Document Title:"
                  id="req-doc"
                  value={form.documentTitle}
                  onChange={setField("documentTitle")}
                  options={allDocTitles}
                  placeholder="Select Documents"
                />

                {/* Purpose */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="req-purpose" className="text-sm font-semibold font-poppins text-gray-700">
                    Purpose of Request:
                  </label>
                  <textarea
                    id="req-purpose"
                    placeholder="Indicate purpose"
                    value={form.purpose}
                    onChange={(e) => setField("purpose")(e.target.value)}
                    required
                    rows={4}
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

                <SelectField
                  label="Urgency:"
                  id="req-urgency"
                  value={form.urgency}
                  onChange={setField("urgency")}
                  options={urgencyLevels}
                  placeholder="Select Urgency"
                />

                {/* Submit */}
                <div className="flex items-center gap-3 mt-2">
                  <button
                    type="submit"
                    className="
                      px-7 py-2.5
                      bg-[#008000] hover:bg-[#006600]
                      text-white font-semibold font-poppins text-sm
                      rounded-full shadow-md
                      transition-all duration-200 hover:scale-105
                    "
                  >
                    Submit Request
                  </button>
                </div>

              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};

export default DocService;