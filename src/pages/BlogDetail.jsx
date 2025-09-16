// src/pages/Blog.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../scss/Blogstyle.scss";

// 匯入圖片（請確認路徑正確）
import Blog1 from "../assets/images/Blog1.jpg";
import Blog2 from "../assets/images/Blog2.jpg";
import Blog3 from "../assets/images/Blog3.jpg";

const posts = [
  {
    id: 1,
    title: "霧眉的術後保養方法",
    date: "2025-09-06",
    excerpt: "術後的照護是關鍵，這樣做能讓霧眉顏色更均勻持久…",
    img: Blog1,
    categories: ["霧眉保養"], // ✅ 陣列
  },
  {
    id: 2,
    title: "霧眉術前介紹",
    date: "2025-09-05",
    excerpt: "霧眉前的準備與注意事項，讓效果更持久自然…",
    img: Blog2,
    categories: ["霧眉保養"], // ✅ 陣列
  },
  {
    id: 3,
    title: "色彩選擇",
    date: "2025-09-04",
    excerpt: "什麼樣的指甲顏色能襯托膚色？配色小技巧大公開…",
    img: Blog3,
    categories: ["美甲設計"], // ✅ 陣列
  },
];

const Blog = () => {
  return (
    <div className="blog-page">
      <h2 className="page-title">部落格文章</h2>
      <div className="blog-grid">
        {posts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.img} alt={post.title} className="blog-img" />
            <div className="blog-content">
              
              {/* 標題 + 分類小標籤 */}
              <h3 className="blog-title">
                {post.title}
                {console.log("這篇文章分類：", post.categories)}
                {Array.isArray(post.categories) ? (
                  post.categories.map((cat, index) => (
                    <span key={index} className="tag">
                      {cat}
                    </span>
                  ))
                ) : (
                  post.categories && <span className="tag">{post.categories}</span>
                )}
              </h3>

              <p className="date">{post.date}</p>
              <p className="excerpt">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="read-more">
                閱讀更多
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
