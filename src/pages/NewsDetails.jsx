import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import newsData from "../utils/newsData";

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the current article
  const article = newsData.find((n) => n.id === id);

  // Other articles for the "Latest Updates" sidebar
  const latestUpdates = newsData.filter((n) => n.id !== id);

  // 404 fallback
  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 font-poppins">
        <h2 className="text-2xl font-bold text-gray-700">Article not found.</h2>
        <Link to="/#news" className="text-green-700 underline text-sm">
          ← Back to News &amp; Updates
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 py-10 md:py-14">

        {/* Back link */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-green-700 text-sm font-poppins font-medium mb-8 hover:underline"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

          {/* ── Left: Article content ── */}
          <article className="flex-1 min-w-0">

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#008000] font-poppins leading-tight mb-4">
              {article.title}
            </h1>

            {/* Meta: date + location */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-poppins mb-6">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <circle cx="12" cy="12" r="10"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2"/>
                </svg>
                {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                {article.location}
              </span>
            </div>

            {/* Divider */}
            <hr className="border-gray-200 mb-6" />

            {/* Hero image */}
            <div className="w-full mb-4 rounded-lg overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Caption */}
            {article.caption && (
              <p className="text-xs text-gray-400 font-poppins italic mb-8">
                {article.caption}
              </p>
            )}

            {/* Body paragraphs */}
            <div className="flex flex-col gap-5">
              {article.body.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-sm sm:text-base text-gray-700 font-poppins leading-relaxed text-justify"
                >
                  {paragraph}
                </p>
              ))}
            </div>

          </article>

          {/* ── Right: Latest Updates sidebar ── */}
          <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="text-base font-bold font-poppins text-gray-800 mb-4">
                Latest Updates
              </h3>

              <div className="flex flex-col gap-3">
                {latestUpdates.map((item) => (
                  <Link
                    key={item.id}
                    to={`/news/${item.id}`}
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                  >
                    {/* Thumbnail */}
                    <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden relative">
                      {item.tag && (
                        <span className="absolute top-1 left-1 bg-[#008000] text-white text-[9px] font-bold px-1.5 py-0.5 rounded z-10 font-poppins">
                          {item.tag}
                        </span>
                      )}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex flex-col gap-1 min-w-0">
                      <p className="text-xs font-semibold font-poppins text-gray-800 leading-snug group-hover:text-green-700 transition-colors line-clamp-2">
                        {item.title}
                      </p>
                      <span className="flex items-center gap-1 text-[10px] text-gray-400 font-poppins">
                        <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <circle cx="12" cy="12" r="10"/>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2"/>
                        </svg>
                        {item.date}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default NewsDetail;