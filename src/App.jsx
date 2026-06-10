import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Quran from "./pages/Quran.jsx";
import Sunnah from "./pages/Sunnah.jsx";
import Home from "./pages/Home.jsx";
import SurahDetails from "./components/SurahDetails.jsx";
import QuranText from "./pages/QuranText.jsx";
import AudioPlayerPage from "./pages/AudioPlayerPage.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
const App = () => {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quran" element={<Quran />} />
          <Route path="/player" element={<AudioPlayerPage />} />
          <Route path="/sunnah" element={<Sunnah />} />
          <Route path="/qurantext" element={<QuranText />} />
          <Route path="/qurantext/:surahNumber" element={<SurahDetails />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
