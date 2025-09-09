import React from "react";
import { Link } from "react-router-dom";
import "../scss/Homestyle.scss";

// ===== 匯入資源 =====
import homeBannerVideo from "../assets/images/Video/HomeBanner.mp4";

// Hero 區圖片
import Home1pictures from "../assets/images/Home1pictures.png";
import Vectorhome1 from "../assets/images/Vectorhome1.png";

// 服務項目圖片
import Service1 from "../assets/images/Service1.png";
import Service2 from "../assets/images/Service2.png";
import Service3 from "../assets/images/Service3.png";
import Service4 from "../assets/images/Service4.png";

// ✅ 改成色塊背景 (png)
import Bg1 from "../assets/images/Vector2.png";
import Bg2 from "../assets/images/Vector3.png";
import Bg3 from "../assets/images/Vector4.png";
import Bg4 from "../assets/images/Vector5.png";

const Home = () => {
  return (
    <div className="home">
      {/* ===== Banner 影片區塊 ===== */}
      <section className="banner">
        <video
          className="banner-video"
          src={homeBannerVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      </section>

      {/* ===== Hero 區塊 ===== */}
      <section className="hero">
        {/* 左側文字 */}
        <div className="hero-text">
          <h2>
            在四月開始，<br />
            我們用色彩與細節，<br />
            讓妳的日常溫柔發光。
          </h2>
          <p>這裡，是妳的美麗休憩站</p>
          <Link to="/NailTime" className="cta-btn">
            立即預約
          </Link>
        </div>

        {/* 右側圖片 + 托底色塊 */}
        <div className="hero-image">
          <img src={Vectorhome1} alt="背景色塊" className="bg-shape" />
          <img src={Home1pictures} alt="店內環境" className="main-img" />
        </div>
      </section>

      {/* ===== 服務卡片區 ===== */}
      <section className="services">
        <div className="service-card">
          <img src={Bg1} alt="背景" className="bg-shape" />
          <img src={Service1} alt="作品展示" className="service-img" />
          <h3>作品展示</h3>
          <Link to="/NailWorks" className="service-btn">
            快來了解
          </Link>
        </div>

        <div className="service-card">
          <img src={Bg2} alt="背景" className="bg-shape" />
          <img src={Service2} alt="服務項目" className="service-img" />
          <h3>服務項目</h3>
          <Link to="/Pricing" className="service-btn">
            快來了解
          </Link>
        </div>

        <div className="service-card">
          <img src={Bg3} alt="背景" className="bg-shape" />
          <img src={Service3} alt="店內環境" className="service-img" />
          <h3>店內環境</h3>
          <Link to="/StoreEnvironment" className="service-btn">
            快來了解
          </Link>
        </div>

        <div className="service-card">
          <img src={Bg4} alt="背景" className="bg-shape" />
          <img src={Service4} alt="埋伏保養" className="service-img" />
          <h3>霧眉專區</h3>
          <Link to="/FAQ" className="service-btn">
            快來了解
          </Link>
        </div>
      </section>
    </div>
  );
};






export default Home;
