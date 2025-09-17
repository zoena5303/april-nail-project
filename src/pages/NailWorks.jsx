import React, { useState, useEffect } from "react";
import "../scss/NailWorksstyle.scss";

// 引入圖片
import NaillBanner from "../assets/images/NaillBanner2.jpg";
import Naill1 from "../assets/images/Naill-1.jpg";
import Naill2 from "../assets/images/Naill-2.jpg";
import Naill3 from "../assets/images/Naill-3.jpg";
import Naill4 from "../assets/images/Naill-4.jpg";
import Naill6 from "../assets/images/Naill-6.jpg";
import Naill7 from "../assets/images/Naill-7.jpg";

// 作品資料（移除 Naill5）
const works = [
  { id: 1, category: "貓眼", name: "極夜流光 ", style: "星空元素風：亮粉黑帶點星空般的閃爍。", img: Naill1 },
  { id: 2, category: "特殊造型", name: "幻境萌語", style: "清透粉嫩風：以透明感+白色+粉嫩小點綴，顯得清新乾淨。", img: Naill2 },
  { id: 3, category: "暈染", name: "晨曦薄霧", style: "水墨暈染風：帶有水彩/大理石暈染的柔和層次。", img: Naill3 },
  { id: 4, category: "法式", name: "銀色戀語", style: "夢幻童話感：像是童話裡的婚禮或舞會造型。", img: Naill4 },
  { id: 5, category: "特殊造型", name: "芭蕾夢境", style: "法式優雅：白色法式線條搭配蕾絲格紋。", img: Naill6 },
  { id: 6, category: "貓眼", name: "月影流沙", style: "貓眼極光系：利用貓眼光澤製造立體流動感。", img: Naill7 },
];

// 分類
const categories = ["全部", "貓眼", "暈染", "法式", "特殊造型"];

const NailWorks = () => {
  const [active, setActive] = useState("全部");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // 篩選作品
  const filtered =
    active === "全部" ? works : works.filter((w) => w.category === active);

  // 卡片淡入動畫
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
      {/* Banner 區塊 */}
      <div className="banner">
        <img src={NaillBanner} alt="美甲作品集 Banner" />
      </div>

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
                <img src={work.img} alt={`美甲作品 - ${work.name}`} />
              </div>
              <div className="info">
                {/* ✅ 修改這裡 */}
                <div className="name-row">
                  <p className="work-name">{work.name}</p>
                  <span className="tag">{work.category}</span>
                </div>
                <p className="work-style">{work.style}</p>
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
                alt={`放大圖 - ${filtered[lightboxIndex].name}`}
              />
              <button className="next-btn" onClick={handleNext}>
                ›
              </button>
              <p className="lightbox-caption">
                {filtered[lightboxIndex].name}｜{filtered[lightboxIndex].style}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NailWorks;
