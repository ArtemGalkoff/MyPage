import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Показать кнопку при прокрутке вниз
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-[calc((100vw-1280px)/2+50px)] z-35">
      <Button
        onClick={scrollToTop}
        className="w-12 h-12 rounded-full bg-white/4 hover:bg-white/10 border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition"
      >
        <FiArrowUp size={20} />
      </Button>
    </div>
  );
};

export default ScrollToTopButton;
