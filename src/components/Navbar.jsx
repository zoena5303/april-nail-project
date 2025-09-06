import React from "react";
import "../scss/Navbar.scss";   // SCSS 樣式
import { Link } from "react-router-dom";
import logo from "../assets/images/AP-LOGO.svg";

// 引入 icons
import AboutIcon from "../assets/images/Aboutme.svg";
import PriceIcon from "../assets/images/Price.svg";
import TimeIcon from "../assets/images/Time.svg";
import RoomIcon from "../assets/images/Room.svg";
import ColorIcon from "../assets/images/Color.svg";
import QaIcon from "../assets/images/Qa.svg";
import BlogIcon from "../assets/images/Blog.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* 左側 LOGO：點擊回首頁 */}
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="品牌 Logo" className="logo-img" />
        </Link>
      </div>

      {/* 右側選單 */}
      <ul className="nav-links">
        <li>
          <Link to="/aboutme">
            <img src={AboutIcon} alt="關於我們" />
            <span>關於我們</span>
          </Link>
        </li>
        <li>
          <Link to="/pricing">
            <img src={PriceIcon} alt="價目表" />
            <span>價目表</span>
          </Link>
        </li>
        <li>
          <Link to="/nailtime">
            <img src={TimeIcon} alt="美甲時光" />
            <span>美甲時光</span>
          </Link>
        </li>
        <li>
          <Link to="/storeenvironment">
            <img src={RoomIcon} alt="店面環境" />
            <span>店面環境</span>
          </Link>
        </li>
        <li>
          <Link to="/colorexplorer">
            <img src={ColorIcon} alt="指尖更衣室" />
            <span>指尖更衣室</span>
          </Link>
        </li>
        <li>
          <Link to="/faq">
            <img src={QaIcon} alt="Q&A" />
            <span>Q&A</span>
          </Link>
        </li>
        <li>
          <Link to="/blog">
            <img src={BlogIcon} alt="指尖保健室" />
            <span>指尖保健室</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
