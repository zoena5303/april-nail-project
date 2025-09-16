// src/pages/Blog.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "../scss/Blogstyle.scss";

// 匯入圖片
import Blog1 from "../assets/images/Blog1.jpg";
import Blog2 from "../assets/images/Blog2.jpg";
import Blog3 from "../assets/images/Blog3.jpg";
import Blog4 from "../assets/images/Blog4.jpg";
import Blog5 from "../assets/images/Blog5.jpg";
import Blog6 from "../assets/images/Blog6.jpg";
import MagnifierIcon from "../assets/images/FaqMagnifier.svg";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("全部");

  // ✅ 文章列表（含分類）
  const posts = [
    { id: 1, title: "護手霜的選擇", date: "2025-09-01", image: Blog1, excerpt: "挑選合適的護手霜，能讓你的雙手時刻保持水嫩與光澤…", category: "指尖的保養" },
    { id: 2, title: "如何照護指甲", date: "2025-09-02", image: Blog2, excerpt: "健康的指甲來自日常保養，這些小技巧能幫助指尖更有光彩…", category: "指尖的保養" },
    { id: 3, title: "小工具的介紹", date: "2025-09-03", image: Blog3, excerpt: "修甲推棒、拋光條與修剪器，這些小工具怎麼用？一次告訴你…", category: "美甲設計" },
    { id: 4, title: "色彩選擇", date: "2025-09-04", image: Blog4, excerpt: "什麼樣的指甲顏色能襯托膚色？配色小技巧大公開…", category: "美甲設計" },
    { id: 5, title: "霧眉術前介紹", date: "2025-09-05", image: Blog5, excerpt: "霧眉前的準備與注意事項，讓效果更持久自然…", category: "霧眉保養" },
    { id: 6, title: "霧眉的術後保養方法", date: "2025-09-06", image: Blog6, excerpt: "術後的照護是關鍵，這樣做能讓霧眉顏色更均勻持久…", category: "霧眉保養" },
  ];

  // ✅ 文章排序（最新在前）
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // ✅ 搜尋 + 分類篩選
  const filteredPosts = sortedPosts.filter((post) => {
    const lowerSearch = searchTerm.toLowerCase();
    const matchSearch =
      post.title.toLowerCase().includes(lowerSearch) ||
      post.excerpt.toLowerCase().includes(lowerSearch);

    const matchCategory =
      selectedCategory === "全部" || post.category === selectedCategory;

    return matchSearch && matchCategory;
  });

  const categories = ["全部", "指尖的保養", "美甲設計", "霧眉保養"];

  return (
    <div className="blog-page">
      <h2 className="blog-title">指尖保健室</h2>
      <p className="blog-subtitle">～ 美甲・美眉・保養知識分享 ～</p>

      {/* 🔍 搜尋框 */}
      <div className="blog-search">
        <div className="search-bar">
          <img src={MagnifierIcon} alt="search" className="icon" />
          <input
            type="text"
            placeholder="請輸入文字"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* 🏷️ 分類按鈕 */}
      <div className="blog-categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 文章卡片 */}
      <div className="blog-grid">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div className="blog-card" key={post.id}>
              <div className="image-wrapper">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-content">
                {/* 標題 + 標籤 */}
                <div className="title-row">
                  <h3>{post.title}</h3>
                  <span className={`blog-tag ${post.category}`}>{post.category}</span>
                </div>
                <p className="date">{post.date}</p>
                <p className="excerpt">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="read-more">
                  閱讀更多
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="no-result">😢 沒有找到相關文章</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
