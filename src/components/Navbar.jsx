import React, { useState } from "react";
import "../scss/Navbar.scss";   // SCSS 樣式
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // 漢堡選單 + 關閉 icon

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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* 左側 LOGO：點擊回首頁 */}
      <div className="logo">
        <NavLink to="/" end>
          <img src={logo} alt="品牌 Logo" className="logo-img" />
        </NavLink>
      </div>

      {/* 右側選單 */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/aboutme" onClick={() => setMenuOpen(false)}>
            <img src={AboutIcon} alt="關於我們" />
            <span>關於我們</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/pricing" onClick={() => setMenuOpen(false)}>
            <img src={PriceIcon} alt="價目表" />
            <span>價目表</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/nailtime" onClick={() => setMenuOpen(false)}>
            <img src={TimeIcon} alt="美甲時光" />
            <span>美甲時光</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/storeenvironment" onClick={() => setMenuOpen(false)}>
            <img src={RoomIcon} alt="店面環境" />
            <span>店面環境</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/colorexplorer" onClick={() => setMenuOpen(false)}>
            <img src={ColorIcon} alt="指尖更衣室" />
            <span>指尖更衣室</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/faq" onClick={() => setMenuOpen(false)}>
            <img src={QaIcon} alt="Q&A" />
            <span>Q&A</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" onClick={() => setMenuOpen(false)}>
            <img src={BlogIcon} alt="指尖保健室" />
            <span>指尖保健室</span>
          </NavLink>
        </li>
      </ul>

      {/* 手機版漢堡選單按鈕 */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
