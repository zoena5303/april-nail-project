// src/pages/ColorExplorer.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../scss/ColorExplorerstyle.scss";

// 匯入圖片
import color1 from "../assets/images/color1.jpg";        // Step0 封面圖
import colorhand2 from "../assets/images/colorhand2.jpg"; // Step1 膚色手
import color3 from "../assets/images/color3.jpg";        // Step2 甲型圖
import Service2 from "../assets/images/Service2.png";    // Step3 預設背景
import Naill1 from "../assets/images/Naill-1.jpg";       // 貓眼
import Naill2 from "../assets/images/Naill-2.jpg";       // 特殊造型
import Naill3 from "../assets/images/Naill-3.jpg";       // 暈染
import Naill4 from "../assets/images/Naill-4.jpg";       // 法式

const ColorExplorer = () => {
  const [step, setStep] = useState(0);
  const [selectedTone, setSelectedTone] = useState("");
  const [selectedShape, setSelectedShape] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const navigate = useNavigate();

  const tones = ["白皙", "自然", "健康"];
  const shapes = ["方形指甲", "方圓形指甲", "圓形指甲", "橢圓形指甲", "杏仁形指甲"];

  // ✅ 款式與圖片對應
  const styleOptions = [
    { name: "貓眼", img: Naill1 },
    { name: "特殊造型", img: Naill2 },
    { name: "暈染", img: Naill3 },
    { name: "法式", img: Naill4 },
  ];

  return (
    <div className="color-explorer">
      <div className="card">
        {/* === Stepper === */}
        {step > 0 && (
          <div className="stepper" style={{ "--progress": step - 1 }}>
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className={`step ${
                  step === num ? "active" : step > num ? "completed" : ""
                }`}
              >
                {num}
              </div>
            ))}
          </div>
        )}

        {/* === Step 0: 封面 === */}
        {step === 0 && (
          <div className="card-cover">
            <img src={color1} alt="start" className="cover-img" />
            <div className="cover-glass">
              <h2 className="cover-title">指尖更衣室</h2>
              <button className="cover-btn" onClick={() => setStep(1)}>
                開始測試
              </button>
            </div>
          </div>
        )}

        {/* === Step 1: 膚色 === */}
        {step === 1 && (
          <div className="card-content">
            <div className="progress-bar">
              <div className="progress" style={{ width: "25%" }}></div>
            </div>
            <p className="progress-text">Step 1 / 4</p>
            <h3>選擇你的膚色</h3>
            <div className={`hand-preview ${selectedTone || ""}`}>
              <img src={colorhand2} alt="hand" className="hand-img" />
            </div>
            <div className="tone-options">
              {tones.map((tone) => (
                <button
                  key={tone}
                  className={`tone-btn ${selectedTone === tone ? "active" : ""}`}
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
                disabled={!selectedTone}
                onClick={() => setStep(2)}
              >
                下一步
              </button>
            </div>
          </div>
        )}

        {/* === Step 2: 甲型 === */}
        {step === 2 && (
          <div className="card-content">
            <div className="progress-bar">
              <div className="progress" style={{ width: "50%" }}></div>
            </div>
            <p className="progress-text">Step 2 / 4</p>
            <h3>選擇你的甲型</h3>
            <img src={color3} alt="nail-shape" className="nail-shape-img" />
            <p className="selected-label">
              {selectedShape ? `你選的是：${selectedShape}` : ""}
            </p>
            <div className="shape-options">
              {shapes.map((shape) => (
                <button
                  key={shape}
                  className={`shape-btn ${
                    selectedShape === shape ? "active" : ""
                  }`}
                  onClick={() => setSelectedShape(shape)}
                >
                  {shape}
                </button>
              ))}
            </div>
            <div className="btn-group">
              <button onClick={() => setStep(1)}>返回</button>
              <button
                className="btn-primary"
                disabled={!selectedShape}
                onClick={() => setStep(3)}
              >
                下一步
              </button>
            </div>
          </div>
        )}

        {/* === Step 3: 款式 === */}
        {step === 3 && (
          <div className="card-content style-preview">
            <div className="progress-bar">
              <div className="progress" style={{ width: "75%" }}></div>
            </div>
            <p className="progress-text">Step 3 / 4</p>

            {/* ✅ 預設 Service2，選了才換 Naill 圖 */}
            <img
              key={selectedStyle || "default"}
              src={
                styleOptions.find(opt => opt.name === selectedStyle)?.img ||
                Service2
              }
              alt="style"
              className="style-bg fade-in"
            />

            <div className="style-options-glass">
              {styleOptions.map((opt) => (
                <button
                  key={opt.name}
                  className={`style-btn ${
                    selectedStyle === opt.name ? "active" : ""
                  }`}
                  onClick={() => setSelectedStyle(opt.name)}
                >
                  {opt.name}
                </button>
              ))}
            </div>
            <div className="btn-group">
              <button onClick={() => setStep(2)}>返回</button>
              <button
                className="btn-primary"
                disabled={!selectedStyle}
                onClick={() => setStep(4)}
              >
                查看結果
              </button>
            </div>
          </div>
        )}

        {/* === Step 4: 結果 === */}
        {step === 4 && (
          <div className="card-content result-step">
            <div className="result-bg">
              <img
                key={selectedStyle}
                src={styleOptions.find(opt => opt.name === selectedStyle)?.img}
                alt="Result"
                className="result-img fade-in"
              />
              <div className="blur-overlay"></div>
              <div className="result-content">
                <h2>測試結果</h2>

                {/* ✅ 縮略圖預覽 */}
                <div className="style-preview-thumb">
                  <img
                    src={
                      styleOptions.find(opt => opt.name === selectedStyle)?.img
                    }
                    alt={selectedStyle}
                  />
                  <p>{selectedStyle}</p>
                </div>

                <p>膚色：{selectedTone}</p>
                <p>甲型：{selectedShape}</p>
                <p>款式：{selectedStyle}</p>
                <p className="recommend-text">
                  推薦你嘗試「{selectedTone} + {selectedShape} + {selectedStyle}」風格的美甲！
                </p>
              </div>
            </div>
            <div className="btn-group">
              <button onClick={() => setStep(0)}>重新開始</button>
              <button
                className="btn-primary"
                onClick={() => navigate("/nailtime")}
              >
                趕緊預約
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorExplorer;
