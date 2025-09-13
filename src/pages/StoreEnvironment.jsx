import React, { useState, useEffect } from "react";
import "../scss/StoreEnvironmentstyle.scss";

// Banner
import storeBanner from "../assets/images/storybanner2.jpg"; // ✅ 使用新 banner

// 接待櫃檯 (第一站)
import reception1 from "../assets/images/Store1.png";
import reception2 from "../assets/images/Store1a.png";
import reception3 from "../assets/images/Store1b.png";

// 美甲區 (第二站)
import nail1 from "../assets/images/Store2.png";
import nail2 from "../assets/images/Store2a.png";
import nail3 from "../assets/images/Store2b.png";

// 霧眉區 (第三站)
import brow1 from "../assets/images/Store3.png";
import brow2 from "../assets/images/Store3a.png";
import brow3 from "../assets/images/Store3b.png";

const StoreEnvironment = () => {
  // ✅ 所有圖片收集起來，方便燈箱切換
  const allImages = [
    reception1, reception2, reception3,
    nail1, nail2, nail3,
    brow1, brow2, brow3
  ];

  const [lightboxIndex, setLightboxIndex] = useState(null);

  // 開燈箱
  const openLightbox = (index) => setLightboxIndex(index);
  // 關閉燈箱
  const closeLightbox = () => setLightboxIndex(null);
  // 前一張
  const prevImage = (e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) =>
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };
  // 下一張
  const nextImage = (e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) =>
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  // ✅ 鍵盤事件 (ESC / ← / →)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex !== null) {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "ArrowRight") nextImage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  return (
    <div className="store-env">
      {/* ===== Banner ===== */}
      <div className="banner">
        <img src={storeBanner} alt="店內環境 Banner" />
        <div className="banner-title">店面環境</div> {/* ✅ 新增文字 */}
      </div>

      {/* ===== 接待櫃檯 ===== */}
      <section className="env-block reception">
        <div className="env-text">
          <h2>接待櫃檯</h2>
          <p>迎接你的第一站</p>
        </div>
        <div className="env-images collage">
          {[reception1, reception2, reception3].map((img, i) => (
            <div
              key={i}
              className="img-box"
              onClick={() => openLightbox(i)}
            >
              <img src={img} alt={`接待櫃檯 ${i + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* ===== 美甲區 ===== */}
      <section className="env-block nail">
        <div className="env-images collage">
          {[nail1, nail2, nail3].map((img, i) => (
            <div
              key={i}
              className="img-box"
              onClick={() => openLightbox(i + 3)} // 從第 4 張開始
            >
              <img src={img} alt={`美甲區 ${i + 1}`} />
            </div>
          ))}
        </div>
        <div className="env-text">
          <h2>美甲區</h2>
          <p>迎接你的第二站</p>
        </div>
      </section>

      {/* ===== 霧眉區 ===== */}
      <section className="env-block brow">
        <div className="env-text">
          <h2>霧眉區</h2>
          <p>迎接你的第三站</p>
        </div>
        <div className="env-images collage">
          {[brow1, brow2, brow3].map((img, i) => (
            <div
              key={i}
              className="img-box"
              onClick={() => openLightbox(i + 6)} // 從第 7 張開始
            >
              <img src={img} alt={`霧眉區 ${i + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* ===== 燈箱效果 ===== */}
      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close" onClick={closeLightbox}>
            &times;
          </span>
          <span className="prev" onClick={prevImage}>
            &#10094;
          </span>
          <img
            src={allImages[lightboxIndex]}
            alt="放大圖"
            className="lightbox-img"
          />
          <span className="next" onClick={nextImage}>
            &#10095;
          </span>
        </div>
      )}
    </div>
  );
};

export default StoreEnvironment;
