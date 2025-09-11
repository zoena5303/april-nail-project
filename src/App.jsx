// src/App.jsx
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Aboutme from "./pages/Aboutme";
import Blog from "./pages/Blog";
import BrowWorks from "./pages/BrowWorks";
import ColorExplorer from "./pages/ColorExplorer";
import FAQ from "./pages/FAQ";
import NailTime from "./pages/NailTime";
import NailWorks from "./pages/NailWorks";
import Pricing from "./pages/Pricing";
import StoreEnvironment from "./pages/StoreEnvironment";

// ✅ Layout：其他頁面才需要 page-container 包裹
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
        {/* 首頁 */}
        <Route path="/" element={<Home />} />

        {/* 其他頁面 */}
        <Route element={<PageLayout />}>
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/browworks" element={<BrowWorks />} />
          <Route path="/colorexplorer" element={<ColorExplorer />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/nailtime" element={<NailTime />} />
          <Route path="/nailworks" element={<NailWorks />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/storeenvironment" element={<StoreEnvironment />} />
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
