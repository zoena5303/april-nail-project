// src/App.jsx
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// 共用元件
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// 各頁面
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Blog from './pages/Blog'
import BrowWorks from './pages/BrowWorks'
import ColorExplorer from './pages/ColorExplorer'
import FAQ from './pages/FAQ'
import NailTime from './pages/NailTime'
import NailWorks from './pages/NailWorks'
import Pricing from './pages/Pricing'
import StoreEnvironment from './pages/StoreEnvironment'

import './scss/App.scss'   // 全域樣式

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/browworks" element={<BrowWorks />} />
            <Route path="/colorexplorer" element={<ColorExplorer />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/nailtime" element={<NailTime />} />
            <Route path="/nailworks" element={<NailWorks />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/store" element={<StoreEnvironment />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
