import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css"; // ✅ 用 CSS 就好

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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

function App() {
  return (
    <BrowserRouter>
      {/* Navbar 全寬 */}
      <Navbar />

      {/* 中間內容區：置中 + 限寬 */}
      <main className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutme" element={<Aboutme />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Browworks" element={<BrowWorks />} />
          <Route path="/Colorexplorer" element={<ColorExplorer />} />
          <Route path="/Faq" element={<FAQ />} />
          <Route path="/Nailtime" element={<NailTime />} />
          <Route path="/Nailworks" element={<NailWorks />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Storeenvironment" element={<StoreEnvironment />} />
        </Routes>
      </main>

      {/* Footer 全寬 */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
