import React, { useState } from "react";
import "../scss/BrowWorksstyle.scss";

// 匯入圖片
import BrowWorks1 from "../assets/images/BrowWorks1.jpg";
import BrowWorks2 from "../assets/images/BrowWorks2.jpg";
import BrowWorksBanner from "../assets/images/BrowWorksbanner.jpg";

// Before / After Slider
const BeforeAfter = ({ before, after }) => {
  const [position, setPosition] = useState(50);
  const isDragging = React.useRef(false);
  const containerRef = React.useRef(null);

  const handleDown = () => { isDragging.current = true; };
  const handleUp = () => { isDragging.current = false; };

  const handleMove = (e) => {
    if (!isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let x = ((e.clientX - rect.left) / rect.width) * 100;
    if (x < 0) x = 0;
    if (x > 100) x = 100;
    setPosition(x);
  };

  return (
    <div
      className="before-after-container"
      ref={containerRef}
      onMouseDown={handleDown}
      onMouseUp={handleUp}
      onMouseLeave={handleUp}
      onMouseMove={handleMove}
      onTouchStart={handleDown}
      onTouchEnd={handleUp}
      onTouchMove={(e) => handleMove(e.touches[0])}
    >
      <img src={after} className="after-img" alt="after" />
      <div className="before-img-wrapper" style={{ width: `${position}%` }}>
        <img src={before} alt="before" />
      </div>
      <div className="slider-handle" style={{ left: `${position}%` }} />
    </div>
  );
};

const BrowWorks = () => {
  // 分類選單
  const categories = [
    { key: "all", label: "全部" },
    { key: "korean", label: "韓式平眉" },
    { key: "western", label: "歐美眉" },
    { key: "mist", label: "霧感眉" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  // 作品集
  const works = [
    {
      id: 1,
      category: "korean",
      type: "real",
      before: BrowWorks1,
      after: BrowWorks2,
      name: "韓式平眉案例",
      desc: "自然柔和的眉型，修飾臉型。",
    },
    {
      id: 2,
      category: "western",
      type: "placeholder",
      name: "歐美眉案例",
      desc: "敬請期待更多作品展示。",
    },
    {
      id: 3,
      category: "mist",
      type: "placeholder",
      name: "霧感眉案例",
      desc: "敬請期待更多作品展示。",
    },
  ];

  // 篩選邏輯
  const filteredWorks =
    selectedCategory === "all"
      ? works
      : works.filter((work) => work.category === selectedCategory);

  return (
    <div className="brow-works">
      {/* === Banner 區 === */}
      <div className="banner">
        <img src={BrowWorksBanner} alt="BrowWorks Banner" />
        <h2 className="banner-title">霧眉作品集</h2>
      </div>

      {/* === 分類按鈕 === */}
      <div className="category-tabs">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`tab-btn ${selectedCategory === cat.key ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* === 卡片展示 === */}
      <div className="works-gallery">
        {filteredWorks.map((work) => (
          <div className="work-card" key={work.id}>
            {work.type === "real" ? (
              <BeforeAfter before={work.before} after={work.after} />
            ) : (
              <div className="placeholder-img">敬請期待</div>
            )}
            <div className="work-info">
              <h3>{work.name}</h3>
              <p>{work.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowWorks;
