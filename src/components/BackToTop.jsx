// src/components/BackToTop.jsx
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa"; // 📅 預約 icon
import { useNavigate } from "react-router-dom";
import "../scss/BackToTopstyle.scss"; // ✅ 指向 scss 資料夾

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300); // 超過 300px 顯示按鈕
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToBooking = () => {
    navigate("/nailtime"); // ✅ 預約頁
  };

  return (
    <div className={`floating-buttons ${visible ? "show" : ""}`}>
      <button
        className="circle-btn back-to-top"
        onClick={scrollToTop}
        aria-label="返回頂端"
      >
        <FaArrowUp size={20} />
      </button>
      <button
        className="circle-btn booking-btn"
        onClick={goToBooking}
        aria-label="快來預約"
      >
        <FaRegCalendarAlt size={20} />
      </button>
    </div>
  );
};

export default BackToTop;
