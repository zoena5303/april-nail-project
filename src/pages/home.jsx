import React from "react";
import homeBannerVideo from "../assets/images/Video/HomeBanner.mp4"; // 影片路徑

import "../scss/Homestyle.scss"; // 樣式

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

      {/* ===== 後續首頁內容區塊 ===== */}
      <section className="intro">
        <h2>我們的服務</h2>
        <p>這裡放首頁的介紹內容...</p>
      </section>
    </div>
  );
};

export default Home;
