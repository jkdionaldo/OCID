import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/images/notfound-bg.png')] bg-cover bg-center bg-no-repeat"></div>

      {/* Overlay (controls opacity) */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-8xl font-extrabold text-[#f9dc07] mb-4">404</h1>
        <h2 className="text-4xl font-bold text-white mb-2">Page Not Found</h2>
        <p className="mt-2 text-lg text-white mb-6">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="mt-6 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}