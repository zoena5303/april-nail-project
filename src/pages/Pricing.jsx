import React from "react";
import "../scss/Pricingstyle.scss";

// 引用價目表底圖
import priceBg from "../assets/images/price2.jpg";

const Pricing = () => {
  return (
    <div className="pricing" style={{ backgroundImage: `url(${priceBg})` }}>
      <h2 className="pricing-title">價目表</h2>

      {/* 毛玻璃卡片 */}
      <div className="pricing-card">
        <div className="pricing-container">
          {/* 左邊 - 凝膠系列 */}
          <div className="pricing-column">
            <h3>凝膠系列</h3>
            <ul>
              <li><span>單色凝膠</span><span>$699</span></li>
              <li><span>跳色 / 貓眼</span><span>$800</span></li>
              <li><span>法式造型</span><span>$900</span></li>
              <li><span>基礎暈染漸層</span><span>$1000</span></li>
              <li><span>進階暈染漸層</span><span>$1200</span></li>
              <li><span>藝術款造型</span><span>$1500 ↑</span></li>
              <li><span>基礎修型</span><span>$200</span></li>
              <li><span>加強修型</span><span>$300</span></li>
              <li><span>卸甲(本店回來)</span><span>$200</span></li>
              <li><span>卸甲(他店)</span><span>$300</span></li>
              <li><span>延甲基礎</span><span>$50 / 指</span></li>
              <li><span>單指加厚卡士</span><span>$100 ↑</span></li>
              <li><span>單指加厚卡士(2mm以上)</span><span>$200 ↑</span></li>
              <li><span>單指甲雕</span><span>$150 ↑</span></li>
              <li><span>卸甲保養(無再做)</span><span>$400</span></li>
              <li><span>可卸甲片基礎型</span><span>$200</span></li>
              <li><span>可卸甲片進階型</span><span>$250</span></li>
              <li><span>不可卸甲片造型款</span><span>$300</span></li>
              <li><span>他店卸甲需另收費</span><span>$300</span></li>
            </ul>
          </div>

          {/* 右邊 - 手部保養 */}
          <div className="pricing-column">
            <h3>手部保養</h3>
            <ul>
              <li><span>基礎保養</span><span>$299 / $599</span></li>
              <li><span>深層保養(單次)</span><span>$399 / $699</span></li>
              <li><span>深層保養(課程)</span><span>$3599</span></li>
              <li><span>頂級深層保養</span><span>$599 / $1399</span></li>
              <li><span>高效修護保養</span><span>$699</span></li>
              <li><span>去角質護理(單次)</span><span>$299 / $599</span></li>
              <li><span>去角質護理(課程)</span><span>$2399</span></li>
              <li><span>手膜 / 精油護理</span><span>$399</span></li>
              <li><span>熱石按摩</span><span>$499</span></li>
              <li><span>上甲油</span><span>$199 / $399</span></li>
            </ul>
          </div>
        </div>

        <p className="note">※ 凝膠項目皆含基礎硬甲加厚</p>
      </div>
    </div>
  );
};

export default Pricing;
