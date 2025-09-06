import React, { useState, useRef } from "react";
import "../scss/Faqstyle.scss";
import MagnifierIcon from "../assets/images/FaqMagnifier.svg"; // ✅ 放大鏡 icon

const faqData = [
  { q: "來美甲前需要先修剪指甲嗎？", a: "不需要，美甲師會依據您的甲型做修整，但建議避免自行剪到過短，以保留完整甲面。" },
  { q: "要怎麼準備我的指甲呢？", a: "若您本身有擦透明指甲油，建議先告知甲師，方便安排時間卸甲服務。" },
  { q: "孕婦也能做光療指甲嗎？", a: "孕婦可以安心施作光療美甲，建議先告知甲師您懷孕週數，便於挑選的材料。" },
  { q: "美甲時間大約需要多久呢？", a: "根據需求不同（新做/卸甲/加厚），若有造型設計或款式變更，約 2–3 小時。" },
  { q: "可以幫忙卸甲嗎？", a: "若是本店施作的作品，基本不會傷害甲面，但如果不是本店施作可能有拆除難度，容易造成甲面受損。" },
  { q: "光療甲會不會很傷指甲，或是做完後會變薄？", a: "光療甲不會讓甲面變薄，厚度取決於個別指甲狀況，建議搭配居家保養（如指緣油）。" },
  { q: "我適合做什麼款式？", a: "可先提供參考圖片，甲師會依您的甲型、手型與生活需求，提供專業建議。" },
  { q: "卸甲後需要多久才能再做？", a: "一般來說可立即再次施作，但若指甲已經脆弱或薄弱，建議先讓甲面休息。" },
  { q: "做光療甲後要怎麼維護？", a: "避免接觸強酸強鹼清潔劑，使用護手霜及指緣油，定期補充保養。" },
  { q: "做光療甲需要多久補一次？", a: "依個人指甲生長速度，建議約 3–4 週回來維護。" },
  { q: "卸甲會很傷甲面嗎？", a: "如由專業甲師操作，會使用適當藥劑與器材，避免傷害甲面。" },
  { q: "如果我想臨時取消預約怎麼辦？", a: "請於 1–2 天前告知，若當天臨時取消或無故不到，可能影響後續預約安排。" },
  { q: "需要先支付訂金嗎？", a: "部分熱門時段，可能需先行支付訂金，以保留預約時段。" }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // 🔍 高亮文字
  const highlightText = (text) => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.split(regex).map((part, i) =>
      regex.test(part) ? <mark key={i}>{part}</mark> : part
    );
  };

  // 篩選 FAQ
  const filteredFaqs = faqData.filter(
    (item) =>
      item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="faq-page">
      {/* Header：標題 + 搜尋框 */}
      <div className="faq-header">
        <h2>常見問題 Q&amp;A</h2>
        <div className="faq-search">
          <img src={MagnifierIcon} alt="search" className="search-icon" />
          <input
            type="text"
            placeholder="請輸入文字"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button className="clear-btn" onClick={() => setSearchTerm("")}>
              ❌
            </button>
          )}
        </div>
      </div>

      {/* 📊 搜尋結果數 */}
      {searchTerm && (
        <p className="search-result">找到 {filteredFaqs.length} 筆相關問題</p>
      )}

      {/* FAQ 列表 */}
      <div className="faq-list">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                {highlightText(item.q)}
                <span className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              <div
                className="faq-answer"
                ref={(el) => (contentRefs.current[index] = el)}
              >
                <p>{highlightText(item.a)}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-result">找不到相關問題</p>
        )}
      </div>
    </div>
  );
};

export default FAQ;
