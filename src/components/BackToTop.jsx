// src/components/BackToTop.jsx
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../scss/BackToTopstyle.scss"; // 確認這個檔案存在

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300); // 滾動超過 300px 顯示
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 平滑滾動
    });
  };

  return (
    <button
      className={`back-to-top ${visible ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="返回頂端"
    >
      {/* ✅ 強制指定白色 + 大小，避免被 SCSS 蓋掉 */}
      <FaArrowUp color="#fff" size={28} />
    </button>
  );
};

export default BackToTop;
