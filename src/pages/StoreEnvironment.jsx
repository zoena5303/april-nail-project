// src/pages/StoreEnvironment.jsx
import React, { useState, useEffect } from "react";
import "../scss/StoreEnvironmentstyle.scss";

// Banner
import storeBanner from "../assets/images/storybanner2.jpg";

// 接待櫃檯
import reception1 from "../assets/images/STEP1.jpg";
import reception2 from "../assets/images/STEP2.jpg";
import reception3 from "../assets/images/STEP3.jpg";

// 美甲區
import nail1 from "../assets/images/STEP4.jpg";
import nail2 from "../assets/images/STEP5.jpg";
import nail3 from "../assets/images/STEP6.jpg";

// 霧眉區
import brow1 from "../assets/images/STEP7.jpg";
import brow2 from "../assets/images/STEP8.jpg";
import brow3 from "../assets/images/STEP9.jpg";

// 背景裝飾色塊
import vector1 from "../assets/images/StoreVector1.svg";
import vector2 from "../assets/images/StoreVector2.svg";
import vector3 from "../assets/images/StoreVector3.svg";

const StoreEnvironment = () => {
  const allImages = [
    reception1, reception2, reception3,
    nail1, nail2, nail3,
    brow1, brow2, brow3
  ];

  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = (e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) =>
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };
  const nextImage = (e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) =>
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  // ✅ 鍵盤控制 & Scroll Reveal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex !== null) {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "ArrowRight") nextImage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Scroll Reveal
    const revealEls = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    revealEls.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      observer.disconnect();
    };
  }, [lightboxIndex]);

  return (
    <div className="store-env">
      {/* ===== Banner ===== */}
      <div className="banner">
        <img src={storeBanner} alt="店內環境 Banner" />
        <div className="banner-title">店面環境</div>
      </div>

      {/* ===== 接待櫃檯 ===== */}
      <section className="env-block reception">
        <img src={vector1} alt="bg" className="bg-vector" />
        <div className="env-text">
          <h2>接待櫃檯</h2>
          <p>迎接你的第一站</p>
        </div>
        <div className="env-images collage">
          {[reception1, reception2, reception3].map((img, i) => (
            <div
              key={i}
              className="img-box reveal"
              onClick={() => openLightbox(i)}
            >
              <img src={img} alt={`接待櫃檯 ${i + 1}`} />
              <div className="img-overlay">接待櫃檯</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 美甲區 ===== */}
      <section className="env-block nail">
        <img src={vector2} alt="bg" className="bg-vector" />
        <div className="env-images collage">
          {[nail1, nail2, nail3].map((img, i) => (
            <div
              key={i}
              className="img-box reveal"
              onClick={() => openLightbox(i + 3)}
            >
              <img src={img} alt={`美甲區 ${i + 1}`} />
              <div className="img-overlay">美甲區</div>
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
        <img src={vector3} alt="bg" className="bg-vector" />
        <div className="env-text">
          <h2>霧眉區</h2>
          <p>迎接你的第三站</p>
        </div>
        <div className="env-images collage">
          {[brow1, brow2, brow3].map((img, i) => (
            <div
              key={i}
              className="img-box reveal"
              onClick={() => openLightbox(i + 6)}
            >
              <img src={img} alt={`霧眉區 ${i + 1}`} />
              <div className="img-overlay">霧眉區</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 燈箱效果 ===== */}
      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close" onClick={closeLightbox}>&times;</span>
          <span className="prev" onClick={prevImage}>&#10094;</span>
          <img
            src={allImages[lightboxIndex]}
            alt="放大圖"
            className="lightbox-img"
          />
          <span className="next" onClick={nextImage}>&#10095;</span>
        </div>
      )}
    </div>
  );
};

export default StoreEnvironment;
