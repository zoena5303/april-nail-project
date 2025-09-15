import React, { useEffect, useRef, useState } from "react";
import "../scss/Cursor.scss";
import NailOil from "../assets/images/NaillOil.svg";        // 預設灰色瓶子
import NailOilPink from "../assets/images/NaillOilPink.svg"; // Hover → 粉紅瓶子

const Cursor = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const targetX = useRef(0);
  const targetY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);
  const cursorRef = useRef(null);

  useEffect(() => {
    // 滑鼠移動位置
    const move = (e) => {
      targetX.current = e.clientX + 20; // 讓瓶子跟在游標右下
      targetY.current = e.clientY + 20;
    };

    const handleDown = () => setClicked(true);
    const handleUp = () => setClicked(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    // ✅ 全域監聽：button, a, img, 表單, store, nail, brow, FAQ
    const hoverSelector =
      "button, a, img, .btn, form, input, textarea, select, .store-env, .nail-work-card, .brow-work-card, [class*='faq']";

    const handleMouseOver = (e) => {
      if (e.target.closest(hoverSelector)) {
        setHovered(true);
      }
    };
    const handleMouseOut = (e) => {
      if (e.target.closest(hoverSelector)) {
        setHovered(false);
      }
    };

    document.body.addEventListener("mouseover", handleMouseOver);
    document.body.addEventListener("mouseout", handleMouseOut);

    // 游標延遲跟隨動畫
    const animate = () => {
      currentX.current += (targetX.current - currentX.current) * 0.1;
      currentY.current += (targetY.current - currentY.current) * 0.1;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${currentX.current}px`;
        cursorRef.current.style.top = `${currentY.current}px`;
      }
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.body.removeEventListener("mouseover", handleMouseOver);
      document.body.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${clicked ? "clicked" : ""}`}
    >
      {/* 預設灰色瓶子 */}
      <img
        src={NailOil}
        alt="default"
        className={`cursor-img ${!hovered ? "show" : "hide"}`}
      />
      {/* Hover → 粉紅瓶子 */}
      <img
        src={NailOilPink}
        alt="hovered"
        className={`cursor-img ${hovered ? "show" : "hide"}`}
      />
    </div>
  );
};

export default Cursor;
