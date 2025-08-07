import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-8 right-8 z-50 group
        transition-all duration-300 transform
        ${isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-4 scale-75 pointer-events-none"
        }
      `}
    >
      <div className="relative">
        {/* background with animated gradient */}
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 
          transition-opacity duration-200 group-hover:opacity-90"
        />

        {/* Hover highlight effect */}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 
          transition-opacity duration-200 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent_50%)]"
        />

        {/* Button */}
        <div className="relative p-3 transition-transform duration-300 group-hover:scale-110">
          <ArrowUp className="text-white" size={20} />
        </div>
      </div>

      {/* Tooltip */}
      <span
        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs 
        text-white bg-gray-800/90 rounded opacity-0 group-hover:opacity-100 transition-opacity 
        duration-200 whitespace-nowrap backdrop-blur-sm border border-gray-700/50"
      >
        Scroll to top
      </span>
    </button>
  );
};

export default ScrollToTopButton;
