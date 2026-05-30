import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route } from "react-router-dom";
import Quran from "./pages/Quran.jsx";
import Sunnah from "./pages/Sunnah.jsx"
import Home from './pages/Home.jsx';
import AudioPlayerPage from './pages/AudioPlayerPage.jsx';
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quran" element={<Quran />} />
        <Route path="/player" element={<AudioPlayerPage />} />
        <Route path="/sunnah" element={<Sunnah />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App