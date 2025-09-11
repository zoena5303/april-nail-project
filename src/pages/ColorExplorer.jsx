import React, { useState } from "react";
import "../scss/ColorExplorerstyle.scss";

const skinTones = ["淺膚色", "中膚色", "深膚色"];
const nailShapes = ["方形", "方圓形", "圓形", "橢圓形", "杏仁形"];
const nailStyles = ["純色", "漸層", "法式", "特殊造型"];

const ColorExplorer = () => {
  const [step, setStep] = useState(1);
  const [skin, setSkin] = useState("");
  const [shape, setShape] = useState("");
  const [style, setStyle] = useState("");

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleReset = () => {
    setStep(1);
    setSkin("");
    setShape("");
    setStyle("");
  };

  const progress = (step / 4) * 100;

  return (
    <div className="color-explorer">
      <h2 className="title">指尖更衣室</h2>

      {/* 卡片容器 */}
      <div className="card-container">
        {/* 進度條 */}
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}>
            {Math.round(progress)}%
          </div>
        </div>

        {/* 卡片切換 */}
        <div className="card-wrapper">
          {step === 1 && (
            <div className="card fade-in">
              <h3>選擇膚色</h3>
              <div className="options">
                {skinTones.map((tone) => (
                  <button
                    key={tone}
                    className={skin === tone ? "active" : ""}
                    onClick={() => setSkin(tone)}
                  >
                    {tone}
                  </button>
                ))}
              </div>
              <button className="next-btn" disabled={!skin} onClick={handleNext}>
                下一步
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="card fade-in">
              <h3>選擇指甲形狀</h3>
              <div className="options">
                {nailShapes.map((s) => (
                  <button
                    key={s}
                    className={shape === s ? "active" : ""}
                    onClick={() => setShape(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <button className="next-btn" disabled={!shape} onClick={handleNext}>
                下一步
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="card fade-in">
              <h3>選擇款式</h3>
              <div className="options">
                {nailStyles.map((st) => (
                  <button
                    key={st}
                    className={style === st ? "active" : ""}
                    onClick={() => setStyle(st)}
                  >
                    {st}
                  </button>
                ))}
              </div>
              <button className="next-btn" disabled={!style} onClick={handleNext}>
                查看結果
              </button>
            </div>
          )}

          {step === 4 && (
            <div className="card fade-in result-card">
              <h3>預覽結果</h3>
              <p>
                膚色：{skin} ｜ 形狀：{shape} ｜ 款式：{style}
              </p>
              <button className="reset-btn" onClick={handleReset}>
                重新選擇
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ColorExplorer;
