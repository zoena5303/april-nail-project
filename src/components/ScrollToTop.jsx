// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 每次路由變更時，立即回到頁面頂端
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
