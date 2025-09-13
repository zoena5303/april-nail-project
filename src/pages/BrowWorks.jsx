import React, { useState } from "react";
import "../scss/BrowWorksstyle.scss";
import browBanner from "../assets/images/Browbanner.jpg";

const BrowWorks = () => {
  const [sliderPos, setSliderPos] = useState(50); // 初始在中間

  const handleSlider = (e) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <div className="brow-works">
      {/* ===== Banner 區 ===== */}
      <div className="banner">
        <img src={browBanner} alt="Brow Banner" />
        <h2 className="banner-title">霧眉作品區</h2>
      </div>

      {/* 篩選按鈕 */}
      <div className="filter-buttons">
        <button className="active">全部</button>
        <button>韓式平眉</button>
        <button>歐美眉</button>
        <button>霧感眉</button>
      </div>

      {/* 左右對比示意圖 */}
      <div className="compare-box">
        {/* 左側灰色區域（可調整寬度） */}
        <div
          className="left-box"
          style={{ width: `${sliderPos}%` }}
        ></div>

        {/* 右側藍色背景始終存在 */}
        <div className="right-box"></div>

        {/* 垂直分隔線 */}
        <div
          className="divider-line"
          style={{ left: `${sliderPos}%` }}
        ></div>

        {/* 滑桿 */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPos}
          onChange={handleSlider}
          className="slider"
        />
      </div>
    </div>
  );
};

export default BrowWorks;
