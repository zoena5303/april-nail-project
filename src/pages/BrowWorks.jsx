import React, { useRef } from "react";
import "../scss/BrowWorksstyle.scss";

const BrowWorks = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 280; // 每次移動的寬度
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="brow-works">
      <h2 className="title">霧眉作品示意</h2>
      <p className="subtitle">👉 左右滑動或點箭頭</p>

      <div className="scroll-wrapper">
        <button className="arrow left" onClick={() => scroll("left")}>
          &#8249;
        </button>

        <div className="scroll-container" ref={scrollRef}>
          <div className="scroll-item gray">示意圖 1</div>
          <div className="scroll-item blue">示意圖 2</div>
          <div className="scroll-item pink">示意圖 3</div>
          <div className="scroll-item green">示意圖 4</div>
          <div className="scroll-item brown">示意圖 5</div>
        </div>

        <button className="arrow right" onClick={() => scroll("right")}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default BrowWorks;
