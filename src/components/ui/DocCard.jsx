import React from "react";

const DocCard = ({ number, title, description, italic = false }) => {
  return (
    <div className="flex items-center gap-4 sm:gap-6 bg-white border border-green-200 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow duration-200">

      {/* Yellow number badge */}
      <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f9dc07] flex items-center justify-center shadow-sm">
        <span className="text-sm sm:text-base font-bold text-gray-800 font-poppins">
          {number}
        </span>
      </div>

      {/* Title */}
      <p className="w-36 sm:w-44 font-bold text-sm sm:text-base text-gray-800 font-poppins flex-shrink-0">
        {title}
      </p>

      {/* Vertical divider — hidden on small screens */}
      <div className="hidden sm:block w-px h-10 bg-gray-200 flex-shrink-0" />

      {/* Description */}
      <p className={`flex-1 text-xs sm:text-sm text-gray-600 font-poppins leading-relaxed ${italic ? "italic" : ""}`}>
        {description}
      </p>

    </div>
  );
};

export default DocCard;