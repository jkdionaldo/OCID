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
      { name: "Christian A. Balasabas", role: "Backend Developer",        image: "/images/intern3.png" },
      { name: "Arabela Mae O. Matias",  role: "System Analyst/UI Designer", image: "/images/intern1.png" },
      { name: "Edgar Lino L. Hinlo",   role: "Frontend Developer",          image: "/images/intern2.png" },
    ],
  },
  {
    id: 2,
    label: "Summer Batch 2024 – 2025",
    layout: "5",           // top row 3, bottom row 2 centered
    bgVariant: "plain",
    developers: [
      { name: "Christian James M. Bantillo", role: "Frontend Developer",        image: "/images/17.png" },
      { name: "Khervee P. Lagang",  role: "System Analyst/UI Designer", image: "/images/19.png" },
      { name: "Jan Kevin B. Dionaldo",   role: "Backend Developer",          image: "/images/16.png" },
      { name: "Noralf Russel",  role: "System Analyst/UI Designer", image: "/images/18.png" },
      { name: "Joren P. Verdad",   role: "Backend Developer",          image: "/images/15.png" },
    ],
  },
  {
    id: 3,
    label: "Batch 2024 – 2025",
    layout: "12",          // 3 rows of 4
    bgVariant: "building", // watermark background
    developers: [
      { name: "Leizel Jane Campasas", image: null },
      { name: "Joshua Dexter Mah",    image: null },
      { name: "Ian Van Nituda",  image: null },
      { name: "Merrey Joy Ocon", image: null },
      { name: "Rodulfo Orquiz", image: null },
      { name: "Julius Parado", image: null },
      { name: "Gadiel Piedad", image: null },
      { name: "Angelo Plantado", image: null },
      { name: "Richdhan P. Roca", image: null },
      { name: "Frietzzylyn Salarda", image: null },
      { name: "Ryan Jay Varron", image: null },
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

// 11/12 cards — rows 1 & 2 stay in the original 4-col grid,
// last row (remaining cards) is a centered flex row
const Grid12 = ({ developers }) => {
  const perRow = 4;
  const fullRows = developers.slice(0, perRow * 2);   // first 8 — rows 1 & 2
  const lastRow  = developers.slice(perRow * 2);       // remaining — row 3

  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      {/* Rows 1 & 2 — original 4-column grid layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 sm:gap-10 justify-items-center">
        {fullRows.map((dev, i) => (
          <DeveloperCard key={i} {...dev} />
        ))}
      </div>

      {/* Row 3 — always centered regardless of card count */}
      {lastRow.length > 0 && (
        <div className="flex flex-wrap justify-center gap-28 sm:gap-36">
          {lastRow.map((dev, i) => (
            <DeveloperCard key={`last-${i}`} {...dev} />
          ))}
        </div>
      )}
    </div>
  );
};

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