import React, { useState } from "react";
import "../scss/ColorExplorerstyle.scss";

import startImg from "../assets/images/color1.jpg";
import handImg from "../assets/images/colorhand2.jpg";

const ColorExplorer = () => {
  const [step, setStep] = useState(0);
  const [selectedTone, setSelectedTone] = useState(null); // 記錄選擇的膚色

  return (
    <div className="color-explorer">
      <div className="card">
        {/* Step 0：封面 */}
        {step === 0 && (
          <div className="card-content">
            <img src={startImg} alt="Start" className="card-img" />
            <button className="btn-primary" onClick={() => setStep(1)}>
              開始測試
            </button>
          </div>
        )}

        {/* Step 1：膚色選擇 */}
        {step === 1 && (
          <div className="card-content">
            <h2>選擇你的膚色</h2>
            <img src={handImg} alt="Select Skin Tone" className="card-img" />

            <div className="tone-options">
              {["白皙", "自然", "健康"].map((tone) => (
                <button
                  key={tone}
                  className={`tone-btn ${
                    selectedTone === tone ? "active" : ""
                  }`}
                  onClick={() => setSelectedTone(tone)}
                >
                  {tone}
                </button>
              ))}
            </div>

            <div className="btn-group">
              <button onClick={() => setStep(0)}>返回</button>
              <button
                className="btn-primary"
                onClick={() => setStep(2)}
                disabled={!selectedTone} // 沒選膚色不能下一步
              >
                下一步
              </button>
            </div>
          </div>
        )}

        {/* Step 2：甲型選擇 (骨架) */}
        {step === 2 && (
          <div className="card-content">
            <h2>選擇你的甲型</h2>
            <p>（這裡之後放甲型圖片卡片）</p>
            <div className="btn-group">
              <button onClick={() => setStep(1)}>返回</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorExplorer;
