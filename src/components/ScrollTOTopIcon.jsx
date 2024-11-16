"use client"
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopIcon = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop} className="p-3">
          <FaArrowUp size={20} />
        </div>
      )}
    </div>
  );
};

export default ScrollToTopIcon;
