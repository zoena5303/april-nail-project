// Footer.jsx
import "../scss/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>關於我們</h4>
        <a href="#">隱私與政策</a>
      </div>

      <div className="footer-section">
        <h4>聯絡我們</h4>
        <p>公司名稱</p>
        <p>統一編號</p>
        <p>服務電話</p>
        <p>E-Mail</p>
        <p>官方LINE帳號</p>
      </div>

      <div className="footer-section">
        <h4>追蹤我們</h4>
        <div>IG | YT | 抖音</div>
      </div>

      <div className="footer-bottom">
        ©2025 AprilNAILSTUDIO.com
      </div>
    </footer>
  )
}

export default Footer;
