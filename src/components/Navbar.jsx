import React from "react";
import "../scss/Navbar.scss";   // ✅ 修改這裡

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">🌸</div>
      <ul className="nav-links">
        <li><a href="/">首頁</a></li>
        <li><a href="/aboutme">關於我們</a></li>
        <li><a href="/blog">部落格</a></li>
        <li><a href="/nailworks">美甲作品</a></li>
        <li><a href="/browworks">霧眉作品</a></li>
        <li><a href="/colorexplorer">指尖更衣室</a></li>
        <li><a href="/faq">FAQ</a></li>
        <li><a href="/pricing">價目表</a></li>
        <li><a href="/storeenvironment">店內環境</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
