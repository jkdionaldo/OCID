import React from "react";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const batches = [
  {
    id: 1,
    label: "Academic Year 2025 – 2026",
    layout: "3",           // 3 cards in one row
    bgVariant: "plain",
    developers: [
      { name: "Christian A. Balasabas", role: "Backend Developer",        image: "/images/intern3.jpg" },
      { name: "Arabela Mae O. Matias",  role: "System Analyst/UI Designer", image: "/images/team-matias.png" },
      { name: "Edgar Lino L. Hinlo",   role: "Frontend Developer",          image: "/images/intern2.png" },
    ],
  },
  {
    id: 2,
    label: "Summer Batch 2024 – 2025",
    layout: "5",           // top row 3, bottom row 2 centered
    bgVariant: "plain",
    developers: [
      { name: "Christian A. Balasabas", role: "Frontend Developer",        image: null },
      { name: "Arabela Mae O. Matias",  role: "System Analyst/UI Designer", image: "/images/team-matias.png" },
      { name: "Edgar Lino L. Hinlo",   role: "Backend Developer",          image: null },
      { name: "Arabela Mae O. Matias",  role: "System Analyst/UI Designer", image: null },
      { name: "Edgar Lino L. Hinlo",   role: "Backend Developer",          image: null },
    ],
  },
  {
    id: 3,
    label: "Batch 2024 – 2025",
    layout: "12",          // 3 rows of 4
    bgVariant: "building", // watermark background
    developers: [
      { name: "Edgar Lino L. Hinlo",   role: "Backend Developer",  image: null },
      { name: "Edgar Lino L. Hinlo",   role: "Backend Developer",  image: null },
      { name: "Edgar Lino L. Hinlo",   role: "Backend Developer",  image: null },
      { name: "Edgar Lino L. Hinlo",   role: "Backend Developer",  image: null },
      { name: "Edgar Lino L. Hinlo",   role: "Backend Developer",  image: null },
      { name: "Edgar Lino L. Hinlo",   role: "Backend Developer",  image: null },
      { name: "Edgar Lino L. Hinlo",   role: "Backend Developer",  image: null },
      { name: "Edgar Lino L. Hinlo",   role: "Backend Developer",  image: null },
      { name: "Edgar Lino L. Hinlo",   role: "Backend Developer",  image: null },
      { name: "Edgar Lino L. Hinlo",   role: "Backend Developer",  image: null },
      { name: "Edgar Lino L. Hinlo",   role: "Backend Developer",  image: null },
      { name: "Edgar Lino L. Hinlo",   role: "Backend Developer",  image: null },
    ],
  },
];

// ─────────────────────────────────────────────
// DEVELOPER CARD
// ─────────────────────────────────────────────
const DeveloperCard = ({ name, role, image }) => (
  <div className="flex flex-col items-center text-center">
    {/* Avatar circle */}
    <div
      className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-lg mb-3 flex-shrink-0"
      style={{
        background: "radial-gradient(circle at 40% 35%, #2d7a2d, #145214)",
      }}
    >
      {image ? (
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top"
        />
      ) : (
        /* Default silhouette */
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Head */}
          <circle cx="50" cy="36" r="18" fill="white" opacity="0.9" />
          {/* Body */}
          <ellipse cx="50" cy="80" rx="28" ry="22" fill="white" opacity="0.9" />
        </svg>
      )}
    </div>

    {/* Name */}
    <p className="font-bold text-sm sm:text-base font-poppins text-gray-900 leading-tight">
      {name}
    </p>
    {/* Role */}
    <p className="text-green-600 text-xs sm:text-sm font-poppins mt-0.5 leading-tight">
      {role}
    </p>
  </div>
);

// ─────────────────────────────────────────────
// GRID LAYOUTS
// ─────────────────────────────────────────────

// 3 cards — single centered row
const Grid3 = ({ developers }) => (
  <div className="flex flex-wrap justify-center gap-10 sm:gap-16">
    {developers.map((dev, i) => (
      <DeveloperCard key={i} {...dev} />
    ))}
  </div>
);

// 5 cards — top row 3, bottom row 2 centered
const Grid5 = ({ developers }) => (
  <div className="flex flex-col items-center gap-10">
    <div className="flex flex-wrap justify-center gap-10 sm:gap-16">
      {developers.slice(0, 3).map((dev, i) => (
        <DeveloperCard key={i} {...dev} />
      ))}
    </div>
    <div className="flex flex-wrap justify-center gap-10 sm:gap-16">
      {developers.slice(3).map((dev, i) => (
        <DeveloperCard key={i} {...dev} />
      ))}
    </div>
  </div>
);

// 12 cards — 4-column grid (3 rows of 4)
const Grid12 = ({ developers }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 sm:gap-10 justify-items-center">
    {developers.map((dev, i) => (
      <DeveloperCard key={i} {...dev} />
    ))}
  </div>
);

// Pick grid based on layout prop
const DevGrid = ({ layout, developers }) => {
  if (layout === "3")  return <Grid3  developers={developers} />;
  if (layout === "5")  return <Grid5  developers={developers} />;
  if (layout === "12") return <Grid12 developers={developers} />;
  // fallback: flex wrap centered
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {developers.map((dev, i) => <DeveloperCard key={i} {...dev} />)}
    </div>
  );
};

// ─────────────────────────────────────────────
// BATCH SECTION
// ─────────────────────────────────────────────
const BatchSection = ({ batch }) => {
  const hasBuilding = batch.bgVariant === "building";

  return (
    <section className="relative w-full py-14 px-4 sm:px-8 md:px-16">
      {/* Building watermark background for final batch */}
      {hasBuilding && (
        <>
          <div
            className="absolute inset-0 bg-cover"
            style={{
              backgroundImage: "url('/images/OT-BG.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              
              
            }}
          />
          {/* White wash so it's a subtle watermark */}
          <div className="absolute inset-0 bg-stone-100/90" />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Batch title */}
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-gray-900 text-center">
            {batch.label}
          </h2>
          {/* Green underline */}
          <div className="mt-2 h-[3px] min-w-40 md:w-64 bg-green-700 item-center rounded-full mb-8" />
        </div>

        {/* Developer grid */}
        <DevGrid layout={batch.layout} developers={batch.developers} />
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
const DeveloperCollective = () => {
  return (
    <div className="flex flex-col w-full">

      {/* ── Hero Section ── */}
      <section className="relative w-full min-h-[340px] sm:min-h-[500px] flex flex-col ">
        {/* Dark green background */}
 
        {/* Building image at the bottom, greyscale */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/DevTeam.png')",
          }}
        />
      </section>

      {/* ── Intro Section ── */}
      <section className="w-full py-12 sm:py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-[#009900] font-poppins mb-6 leading-snug mb-8">
            Redefining OCID Workflows through Agile Student Development.
          </h2>
          <p className="text-sm sm:text-base font-poppins leading-relaxed">
            This platform is the result of a collaborative effort between the Office of Curriculum
            and Instruction Development (OCID) and the talented interns of the Caraga State
            University IT Department. We recognize the technical expertise and dedication of the
            student developers who transformed office mandates into a functional digital ecosystem.
          </p>
        </div>
      </section>

      {/* ── Batch Sections ── */}
      {batches.map((batch, i) => (
        <BatchSection key={batch.id} batch={batch} />
      ))}

    </div>
  );
};

export default DeveloperCollective;