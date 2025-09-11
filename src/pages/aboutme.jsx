import React, { useEffect } from "react";
import "../scss/Aboutmestyle.scss";

// 匯入圖片
import aboutme4 from "../assets/images/aboutme4.jpg";
import aboutme5 from "../assets/images/aboutme5.jpg";
import aboutme6 from "../assets/images/aboutme6.jpg";

const Aboutme = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".circle, .aboutme-text");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="aboutme-page">
      <h2 className="aboutme-title">April NAIL STUDIO</h2>
      <p className="aboutme-subtitle">～關於我們～</p>

      {/* 品牌故事 */}
      <section className="aboutme-section light">
        <div className="circle">
          <img src={aboutme4} alt="品牌故事" />
        </div>
        <div className="aboutme-text">
          <h3>April NAIL STUDIO 品牌故事</h3>
          <p>
            April NAIL STUDIO 位於台北，源於對「美」的執著與對生活質感的追求。
            從最初的靈感到實踐，我們希望透過美甲與霧眉，陪伴每位顧客展現自信與獨特魅力。
          </p>
        </div>
      </section>

      {/* 名字由來 */}
      <section className="aboutme-section dark reverse">
        <div className="circle">
          <img src={aboutme5} alt="名字由來" />
        </div>
        <div className="aboutme-text">
          <h3>April NAIL STUDIO 名字由來</h3>
          <p>
            「April」代表新的開始、綻放與希望。正如春天的四月，我們希望為顧客帶來煥然一新的能量，
            讓每一次的美甲、霧眉都成為自我蛻變的過程。
          </p>
        </div>
      </section>

      {/* 品牌理念 */}
      <section className="aboutme-section light">
        <div className="circle">
          <img src={aboutme6} alt="品牌理念" />
        </div>
        <div className="aboutme-text">
          <h3>April NAIL STUDIO 品牌理念</h3>
          <p>
            我們相信美是一種生活態度，而非僅僅是外在的修飾。
            透過專業的技術、貼心的服務，我們致力於打造一個溫暖、自在的空間，
            讓每一位顧客都能安心地綻放最真實的自己。
          </p>
        </div>
      </section>
    </div>
  );
};

export default Aboutme;
