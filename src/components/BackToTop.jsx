// src/components/BackToTop.jsx
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../App.scss"; // ✅ 已把 back-to-top 樣式整合到 App.scss

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // 嘗試抓取子頁面的滾動容器
    const container = document.querySelector(".page-container");
    const target = container || window;

    const handleScroll = () => {
      const scrollTop = container ? container.scrollTop : window.scrollY;
      setVisible(scrollTop > 300); // 超過 300px 才顯示按鈕
    };

    target.addEventListener("scroll", handleScroll);
    return () => target.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const container = document.querySelector(".page-container");
    if (container) {
      container.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
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
