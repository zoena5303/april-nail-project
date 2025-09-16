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

// 假資料：完整文章
const posts = [
  { 
    id: 1,
    title: "護手霜的選擇",
    category: "指尖的保養",
    date: "2025-09-01",
    image: Blog1,
    content: `
      護手霜的挑選是日常保養中非常重要的一環。  
      1. 成分建議選擇含有乳木果油、玻尿酸等保濕成分。  
      2. 使用時機：每天早晚，以及洗手後都應補擦。  
      3. 搭配按摩：塗抹時可輕輕按摩指關節與手背，加強吸收。  
    `
  },
  { 
    id: 2,
    title: "如何照護指甲",
    category: "指尖的保養",
    date: "2025-09-02",
    image: Blog2,
    content: `
      健康的指甲來自於日常的細心呵護。  
      避免過度修剪指甲邊緣，適度補充維生素B群，  
      並定期滋潤指緣油，讓指甲更有光澤與彈性。  
    `
  },
  { 
    id: 3,
    title: "小工具的介紹",
    category: "美甲設計",
    date: "2025-09-03",
    image: Blog3,
    content: `
      美甲的小工具包含：修甲棒、拋光條與修剪器。  
      這些工具看似簡單，但卻能讓美甲師更精準地  
      修飾甲型，打造出乾淨俐落的基礎。  
    `
  },
  { 
    id: 4,
    title: "色彩選擇",
    category: "美甲設計",
    date: "2025-09-04",
    image: Blog4,
    content: `
      色彩學在美甲設計中扮演重要角色。  
      冷色調可呈現優雅知性，暖色調則帶來活潑氣息。  
      搭配膚色選擇適合的色彩，能讓整體效果更和諧。  
    `
  },
  { 
    id: 5,
    title: "霧眉術前介紹",
    category: "霧眉保養",
    date: "2025-09-05",
    image: Blog5,
    content: `
      在霧眉前需要了解術前準備：  
      1. 避免熬夜，保持肌膚穩定。  
      2. 術前不要進行去角質與刷酸保養。  
      3. 確認眉型與顏色，與設計師溝通到位。  
    `
  },
  { 
    id: 6,
    title: "霧眉的術後保養方法",
    category: "霧眉保養",
    date: "2025-09-06",
    image: Blog6,
    content: `
      霧眉後的保養非常關鍵：  
      1. 保持眉毛部位乾燥，避免碰水。  
      2. 不要摳結痂，讓眉色自然定型。  
      3. 避免曝曬與使用含酒精成分的保養品。  
    `
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) return <p>找不到這篇文章</p>;

  return (
    <div className="blog-detail">
      {/* 標題區 */}
      <div className="blog-header">
        <h1>{post.title}</h1>
        <div className="meta">
          <span className="category">{post.category}</span>
          <span className="date">{post.date}</span>
        </div>
      </div>

      {/* 封面圖 */}
      <div className="blog-image">
        <img src={post.image} alt={post.title} />
      </div>

      {/* 文章內文 */}
      <div className="blog-content">
        {post.content.split("\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {/* 返回按鈕 */}
      <div className="back-button">
        <Link to="/blog">← 回到部落格</Link>
      </div>
    </div>
  );
};

export default BlogDetail;
