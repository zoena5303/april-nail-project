import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../scss/BackToTopstyle.scss";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // ✅ 優先監聽 page-container，否則 fallback window
    const container = document.querySelector(".page-container") || window;

    const toggleVisibility = () => {
      const scrollTop =
        container === window ? window.scrollY : container.scrollTop;
      setVisible(scrollTop > 300);
    };

    container.addEventListener("scroll", toggleVisibility);
    return () => container.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const container = document.querySelector(".page-container") || window;
    if (container === window) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      container.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      className={`back-to-top ${visible ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="返回頂端"
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTop;
