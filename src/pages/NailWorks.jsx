import React, { useState, useEffect } from "react";
import "../scss/NailWorksstyle.scss";

// 引入圖片
import NaillBanner from "../assets/images/NaillBanner2.jpg";
import Naill1 from "../assets/images/Naill-1.png";
import Naill2 from "../assets/images/Naill-2.png";
import Naill3 from "../assets/images/Naill-3.png";
import Naill4 from "../assets/images/Naill-4.png";
import Naill5 from "../assets/images/Naill-5.png";
import Naill6 from "../assets/images/Naill-6.png";

const works = [
  { id: 1, category: "漸層", name: "黑貓眼漸層", img: Naill1 },
  { id: 2, category: "特殊造型", name: "卡通造型", img: Naill2 },
  { id: 3, category: "法式", name: "墨染法式", img: Naill3 },
  { id: 4, category: "特殊造型", name: "蝴蝶結", img: Naill4 },
  { id: 5, category: "純色", name: "馬卡龍色", img: Naill5 },
  { id: 6, category: "特殊造型", name: "立體蝴蝶結", img: Naill6 },
];

const categories = ["全部", "純色", "漸層", "法式", "特殊造型"];

const NailWorks = () => {
  const [active, setActive] = useState("全部");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered =
    active === "全部" ? works : works.filter((w) => w.category === active);

  // 淡入動畫
  useEffect(() => {
    const cards = document.querySelectorAll(".work-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [active]);

  // 燈箱切換
  const handlePrev = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));
  };

  // ✅ 鍵盤操作
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  return (
    <>
      {/* Banner 區塊獨立出來，不受 nail-works 限制 */}
      <div className="banner">
        <img src={NaillBanner} alt="美甲作品集 Banner" />
      </div>

      {/* 主要內容 */}
      <div className="nail-works">
        {/* 頁面標題 */}
        <h2 className="page-title">美甲作品集</h2>

        {/* 分類 Tabs */}
        <div className="tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={active === cat ? "active" : ""}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 卡片區 */}
        <div className="works-grid">
          {filtered.map((work, index) => (
            <div
              key={work.id}
              className="work-card fade-in"
              onClick={() => setLightboxIndex(index)}
            >
              <div className="circle">
                <img src={work.img} alt={work.name} />
              </div>
              <div className="info">
                <p className="work-name">{work.name}</p>
                <span className="tag">{work.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 燈箱 Lightbox */}
        {lightboxIndex !== null && (
          <div className="lightbox" onClick={() => setLightboxIndex(null)}>
            <div
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setLightboxIndex(null)}>
                ✕
              </button>
              <button className="prev-btn" onClick={handlePrev}>
                ‹
              </button>
              <img
                src={filtered[lightboxIndex].img}
                alt={filtered[lightboxIndex].name}
              />
              <button className="next-btn" onClick={handleNext}>
                ›
              </button>
              <p className="lightbox-caption">{filtered[lightboxIndex].name}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NailWorks;
