// src/App.jsx
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

// Pages
import Home from "./pages/Home";
import Aboutme from "./pages/Aboutme";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import BrowWorks from "./pages/BrowWorks";
import ColorExplorer from "./pages/ColorExplorer";
import FAQ from "./pages/FAQ";
import NailTime from "./pages/NailTime";
import NailWorks from "./pages/NailWorks";
import Pricing from "./pages/Pricing";
import StoreEnvironment from "./pages/StoreEnvironment";

// ✅ Layout：除了首頁，其他頁面都用 page-container 包裹
function PageLayout() {
  return (
    <main className="page-container">
      <Outlet />
    </main>
  );
}

function App() {
  return (
    // ✅ basename 要跟 vite.config.js 的 base 一樣
    <BrowserRouter basename="/april-nail-project">
      <Navbar />

      <Routes>
        {/* 首頁不包 page-container */}
        <Route path="/" element={<Home />} />

        {/* 其他頁面統一用 PageLayout */}
        <Route element={<PageLayout />}>
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/browworks" element={<BrowWorks />} />
          <Route path="/colorexplorer" element={<ColorExplorer />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/nailtime" element={<NailTime />} />
          <Route path="/nailworks" element={<NailWorks />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/storeenvironment" element={<StoreEnvironment />} />
        </Route>
      </Routes>

      <BackToTop />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
