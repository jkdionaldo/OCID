import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-white">
      <h1 className="text-8xl font-extrabold text-red-600 mb-4">404</h1>
      <h2 className="text-4xl font-bold text-gray-900 mb-2">Page Not Found</h2>
      <p className="mt-2 text-lg text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
