// src/pages/BlogDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import "../scss/BlogDetailstyle.scss";

// 匯入圖片
import Blog1 from "../assets/images/Blog1.jpg";
import Blog2 from "../assets/images/Blog2.jpg";
import Blog3 from "../assets/images/Blog3.jpg";
import Blog4 from "../assets/images/Blog4.jpg";
import Blog5 from "../assets/images/Blog5.jpg";
import Blog6 from "../assets/images/Blog6.jpg";

// 假文章資料庫
const posts = [
  {
    id: 1,
    title: "護手霜的選擇",
    date: "2025-09-01",
    image: Blog1,
    content:
      "護手霜不只是香味好聞，更要注意成分！像是含有乳木果油、玻尿酸、維他命E 的護手霜，對保濕與修護特別有效…",
  },
  {
    id: 2,
    title: "如何照護指甲",
    date: "2025-09-02",
    image: Blog2,
    content:
      "保持指甲健康要避免過度修剪，定期保養甲面，補充足夠的營養素，如鋅與蛋白質，可以讓指甲更堅韌…",
  },
  {
    id: 3,
    title: "小工具的介紹",
    date: "2025-09-03",
    image: Blog3,
    content:
      "修甲推棒、拋光條、指緣油等工具在日常保養中非常實用，正確使用能避免甲面受損…",
  },
  {
    id: 4,
    title: "色彩選擇",
    date: "2025-09-04",
    image: Blog4,
    content:
      "選擇指甲顏色時，可以依照膚色冷暖調去搭配，膚色偏冷適合紫調、藍調；膚色偏暖則適合橘調、紅調…",
  },
  {
    id: 5,
    title: "霧眉術前介紹",
    date: "2025-09-05",
    image: Blog5,
    content:
      "霧眉前建議一週避免使用去角質與美白產品，並且與設計師充分溝通眉型，才能達到理想效果…",
  },
  {
    id: 6,
    title: "霧眉的術後保養方法",
    date: "2025-09-06",
    image: Blog6,
    content:
      "術後一週內避免大力搓洗，保持乾爽，避免曝曬與游泳，能幫助顏色更持久…",
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <p>找不到這篇文章。</p>;
  }

  return (
    <div className="blog-detail">
      <img src={post.image} alt={post.title} className="detail-img" />
      <h2 className="detail-title">{post.title}</h2>
      <p className="detail-date">{post.date}</p>
      <p className="detail-content">{post.content}</p>
      <Link to="/blog" className="back-btn">
        ← 返回部落格
      </Link>
    </div>
  );
};

export default BlogDetail;
