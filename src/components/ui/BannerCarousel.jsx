import React, { useState, useEffect, useRef } from "react";

const DRAG_THRESHOLD = 60;

const BannerCarousel = ({ images, interval = 10000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const intervalRef = useRef(null);

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const goTo = (index) => {
    setCurrentIndex((index + images.length) % images.length);
  };

  // ── Mouse events ──
  const handleMouseDown = (e) => {
    stopAutoPlay();
    setDragStartX(e.clientX);
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || dragStartX === null) return;
    setDragOffset(e.clientX - dragStartX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    if (dragOffset < -DRAG_THRESHOLD) goTo(currentIndex + 1);
    else if (dragOffset > DRAG_THRESHOLD) goTo(currentIndex - 1);
    setDragStartX(null);
    setDragOffset(0);
    setIsDragging(false);
    startAutoPlay();
  };

  // ── Touch events ──
  const handleTouchStart = (e) => {
    stopAutoPlay();
    setDragStartX(e.touches[0].clientX);
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || dragStartX === null) return;
    setDragOffset(e.touches[0].clientX - dragStartX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    if (dragOffset < -DRAG_THRESHOLD) goTo(currentIndex + 1);
    else if (dragOffset > DRAG_THRESHOLD) goTo(currentIndex - 1);
    setDragStartX(null);
    setDragOffset(0);
    setIsDragging(false);
    startAutoPlay();
  };

  return (
    
    <div className="w-full overflow-hidden relative">

      {/* Sliding track — works on mobile and desktop */}
      <div
        className="flex cursor-grab active:cursor-grabbing select-none"
        style={{
          transform: `translateX(calc(-${currentIndex * 100}% + ${isDragging ? dragOffset : 0}px))`,
          transition: isDragging ? "none" : "transform 0.5s ease-in-out",
          willChange: "transform",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Banner ${index + 1}`}
            className="w-full h-auto flex-shrink-0 object-cover"
            style={{ minWidth: "100%" }}
            draggable={false}
            loading={index === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 sm:gap-5 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              stopAutoPlay();
              setCurrentIndex(index);
              startAutoPlay();
            }}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-[#f9dc07] scale-75"
                : "bg-[#f9dc07]/50 hover:bg-[#f9dc07]/80"
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default BannerCarousel;