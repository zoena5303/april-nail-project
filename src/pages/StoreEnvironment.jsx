import React from "react";
import "../scss/StoreEnvironmentstyle.scss";

// Banner
import storeBanner from "../assets/images/StoreBanner.png";

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
  return (
    <div className="store-env">
      {/* ===== Banner ===== */}
      <div className="banner">
        <img src={storeBanner} alt="店內環境 Banner" />
      </div>

      {/* ===== 接待櫃檯 ===== */}
      <section className="env-block reception">
        <div className="env-text">
          <h2>接待櫃檯</h2>
          <p>迎接你的第一站</p>
        </div>
        <div className="env-images collage">
          <div className="img-box large"><img src={reception1} alt="接待櫃檯1" /></div>
          <div className="img-box small"><img src={reception2} alt="接待櫃檯2" /></div>
          <div className="img-box medium"><img src={reception3} alt="接待櫃檯3" /></div>
        </div>
      </section>

      {/* ===== 美甲區 ===== */}
      <section className="env-block nail">
        <div className="env-images collage">
          <div className="img-box medium"><img src={nail1} alt="美甲區1" /></div>
          <div className="img-box large"><img src={nail2} alt="美甲區2" /></div>
          <div className="img-box small"><img src={nail3} alt="美甲區3" /></div>
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
          <div className="img-box small"><img src={brow1} alt="霧眉區1" /></div>
          <div className="img-box medium"><img src={brow2} alt="霧眉區2" /></div>
          <div className="img-box large"><img src={brow3} alt="霧眉區3" /></div>
        </div>
      </section>
    </div>
  );
};

export default StoreEnvironment;
