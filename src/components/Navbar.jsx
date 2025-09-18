// src/components/Navbar.jsx
import React, { useState } from "react";
import "../scss/Navbar.scss";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

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

  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* 左側 LOGO：點擊回首頁 */}
      <div className="logo">
        <NavLink to="/" end onClick={handleCloseMenu}>
          <img src={logo} alt="品牌 Logo" className="logo-img" />
        </NavLink>
      </div>

      {/* 右側選單 */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/aboutme" onClick={handleCloseMenu}>
            <img src={AboutIcon} alt="關於我們" />
            <span>關於我們</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/pricing" onClick={handleCloseMenu}>
            <img src={PriceIcon} alt="價目表" />
            <span>價目表</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/nailtime" onClick={handleCloseMenu}>
            <img src={TimeIcon} alt="美甲時光" />
            <span>美甲時光</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/storeenvironment" onClick={handleCloseMenu}>
            <img src={RoomIcon} alt="店面環境" />
            <span>店面環境</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/colorexplorer" onClick={handleCloseMenu}>
            <img src={ColorIcon} alt="指尖更衣室" />
            <span>指尖更衣室</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/faq" onClick={handleCloseMenu}>
            <img src={QaIcon} alt="Q&A" />
            <span>Q&A</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" onClick={handleCloseMenu}>
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
