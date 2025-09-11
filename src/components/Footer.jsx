import React from "react";
import "../scss/Footer.scss";
import { FaInstagram, FaTiktok } from "react-icons/fa"; // ✅ 修正
import { SiLine } from "react-icons/si";                // ✅ LINE 用 simple-icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* 左邊 */}
        <div className="footer-section">
          <ul>
            <li><a href="/aboutme">關於我們</a></li>
            <li><a href="/privacy">隱私保護政策</a></li>
          </ul>
        </div>

        {/* 中間 */}
        <div className="footer-section">
          <h4>聯絡我們</h4>
          <ul>
            <li>公司名稱 ｜</li>
            <li>統一編號 ｜</li>
            <li>服務專線 ｜</li>
            <li>E-Mail ｜</li>
            <li>客戶 LINE 帳號 ｜</li>
          </ul>
        </div>

        {/* 右邊 */}
        <div className="footer-section">
          <h4>追蹤我們</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com/april_nails._/"><FaInstagram /></a>
            <a href="#"><SiLine /></a>
            <a href="#"><FaTiktok /></a>
          </div>
        </div>
      </div>

      {/* 最底部版權 */}
      <div className="footer-bottom">
        <p>© 2025-April NAIL STUDIO.com</p>
      </div>
    </footer>
  );
};

export default Footer;
