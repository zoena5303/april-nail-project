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

// 色塊背景
import Bg1 from "../assets/images/Vector2.png";
import Bg2 from "../assets/images/Vector3.png";
import Bg3 from "../assets/images/Vector4.png";
import Bg4 from "../assets/images/Vector5.png";

// 聯絡區背景 & 店門口照
import Vector6 from "../assets/images/Vector6.png";
import StoreImg from "../assets/images/Service5.jpg";

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

        <div className="hero-image">
          <img src={Vectorhome1} alt="背景色塊" className="bg-shape" />
          <img src={Home1pictures} alt="店內環境" className="main-img" />
        </div>
      </section>

      {/* ===== 服務卡片區 ===== */}
      <section className="services">
        {/* 卡片 1 */}
        <div className="service-card">
          <img src={Bg1} alt="背景" className="bg-shape" />
          <div className="card-box">
            <img src={Service1} alt="作品展示" className="service-img" />
            <h3>作品展示</h3>
            <Link to="/NailWorks" className="service-btn">
              快來了解
            </Link>
          </div>
        </div>

        {/* 卡片 2 */}
        <div className="service-card">
          <img src={Bg2} alt="背景" className="bg-shape" />
          <div className="card-box">
            <img src={Service2} alt="服務項目" className="service-img" />
            <h3>服務項目</h3>
            <Link to="/Pricing" className="service-btn">
              快來了解
            </Link>
          </div>
        </div>

        {/* 卡片 3 */}
        <div className="service-card">
          <img src={Bg3} alt="背景" className="bg-shape" />
          <div className="card-box">
            <img src={Service3} alt="店內環境" className="service-img" />
            <h3>店內環境</h3>
            <Link to="/StoreEnvironment" className="service-btn">
              快來了解
            </Link>
          </div>
        </div>

        {/* 卡片 4 */}
        <div className="service-card">
          <img src={Bg4} alt="背景" className="bg-shape" />
          <div className="card-box">
            <img src={Service4} alt="霧眉專區" className="service-img" />
            <h3>霧眉專區</h3>
            <Link to="/FAQ" className="service-btn">
              快來了解
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 聯絡資訊區 ===== */}
      <section className="contact">
        <div className="contact-info">
          <img src={Vector6} alt="背景" className="info-bg" />
          <div className="info-text">
            <p>地址：新北市〇〇區三樹路XXX號</p>
            <p>營業時間：週一～週日 11:00 – 20:00</p>
            <p>電話：0912-345-678</p>
            <p>LINE：@aprilnail</p>
            <p>IG：@aprilnail</p>
          </div>
        </div>

        <div className="contact-map">
          <div className="map-container">
            <iframe
              title="google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.28886564096!2d121.463!3d25.0135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a8dcdaf12345%3A0x1234567890abcdef!2z5paw5YyX5biC!5e0!3m2!1szh-TW!2stw!4v1700000000000!5m2!1szh-TW!2stw"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <img src={StoreImg} alt="店門口" className="store-img" />
        </div>
      </section>
    </div>
  );
};

export default Home;
