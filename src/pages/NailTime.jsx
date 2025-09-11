import React, { useState, useRef } from "react";
import "../scss/NailTimestyle.scss"; // ✅ SCSS 檔案
import bannerImg from "../assets/images/NailTime.jpg";

const NailTime = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [showModal, setShowModal] = useState(false);

  const dateInputRef = useRef(null);

  const allTimes = [
    { label: "上午", times: ["10:00", "11:00", "12:00"] },
    { label: "下午", times: ["13:00", "14:00", "15:00", "16:00", "17:00"] },
    { label: "晚上", times: ["18:00", "19:00", "20:00", "21:00"] },
  ];

  const todayDate = new Date().toISOString().split("T")[0];

  // 日期選擇
  const handleDateChange = (e) => {
    const dateValue = e.target.value;
    setSelectedDate(dateValue);
    setSelectedTime("");

    if (!dateValue) return;

    const today = new Date();
    const chosenDate = new Date(dateValue);
    let updatedTimes = [];

    if (chosenDate.toDateString() === today.toDateString()) {
      const nowHour = today.getHours();
      updatedTimes = allTimes.map((group) => ({
        label: group.label,
        times: group.times.filter((time) => {
          const hour = parseInt(time.split(":")[0], 10);
          return hour > nowHour;
        }),
      }));
    } else {
      updatedTimes = allTimes;
    }

    setAvailableTimes(updatedTimes);
  };

  // 時段選擇
  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  // 表單送出
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  // 格式化日期
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
  };

  return (
    <div className="nailtime">
      {/* ===== Banner 區 ===== */}
      <div className="banner">
        <img src={bannerImg} alt="預約表單 Banner" />
        <h2 className="banner-title">預約表單</h2>
      </div>

      {/* ===== 表單區 ===== */}
      <div className="form-container">
        <form className="reservation-form" onSubmit={handleSubmit}>
          {/* 預約日期 */}
          <div className="form-group">
            <label>預約日期</label>
            <div className="date-wrapper">
              <input
                type="date"
                required
                min={todayDate}
                value={selectedDate}
                onChange={handleDateChange}
                ref={dateInputRef}
                className="date-input"
              />
              <span
                className="date-icon"
                onClick={() => dateInputRef.current.showPicker()}
              >
                📅
              </span>
            </div>
          </div>

          {/* 預約時段 */}
          <div className="form-group">
            <label>時段</label>
            <select required value={selectedTime} onChange={handleTimeChange}>
              <option value="">選擇時段</option>
              {availableTimes.map(
                (group, idx) =>
                  group.times.length > 0 && (
                    <optgroup key={idx} label={group.label}>
                      {group.times.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </optgroup>
                  )
              )}
            </select>
          </div>

          {/* 服務項目 */}
          <div className="form-group">
            <label>服務項目</label>
            <select required>
              <option value="">請選擇服務</option>
              <option value="美甲">美甲</option>
              <option value="霧眉">霧眉</option>
              <option value="保養">保養</option>
            </select>
          </div>

          {/* 姓名 */}
          <div className="form-group">
            <label>姓名</label>
            <input type="text" placeholder="請輸入姓名" required />
          </div>

          {/* 電話（必須 10 碼數字） */}
          <div className="form-group">
            <label>電話</label>
            <input
              type="tel"
              placeholder="請輸入電話"
              required
              pattern="[0-9]{10}"
              minLength={10}
              maxLength={10}
              title="請輸入正確的10位數字電話號碼"
            />
          </div>

          {/* 送出按鈕 */}
          <button
            type="submit"
            className="submit-btn"
            onMouseDown={(e) => {
              const btn = e.currentTarget;
              const rect = btn.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              btn.style.setProperty("--x", `${x}px`);
              btn.style.setProperty("--y", `${y}px`);
            }}
          >
            送出
          </button>

          {/* 注意事項 */}
          <div className="notice">
            <h4>【來店注意事項】</h4>
            <p>
              若會遲到請先告知，遲到一般保留15分鐘<br />
              如提早到可先按電鈴進來坐~沒有其他客人就可以先開始囉!<br />
              為了大家舒適，最多2位陪同者<br />
              店內可喝東西，可吃味道不重的食物<br />
              服務時間約2~3小時，請保留足夠時間來做美美指甲<br />
              可以傳圖詢價，因每家店品質與經驗差異，價格會有差哦<br />
              每個美甲師手法風格不同，無法保證做到與圖一模一樣<br />
              入店三步驟: 按電鈴，換拖鞋
            </p>
          </div>
        </form>

        {/* 即時提示 */}
        {selectedDate && selectedTime && (
          <div className="preview">
            您選擇的預約時間是：<br />
            <strong>
              {formatDate(selectedDate)} {selectedTime}
            </strong>
          </div>
        )}
      </div>

      {/* ===== 彈窗 Modal ===== */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-icon">📅</div>
            <p>已收到您的預約，Peggy 會再與你聯絡</p>
            <button className="close-btn" onClick={() => setShowModal(false)}>
              確認
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NailTime;
