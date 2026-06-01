import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AudioPlayerPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { audioUrl, reciterName, surahName } = location.state || {};

  if (!audioUrl)
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-100 flex items-center justify-center text-center p-6">
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-200/60 max-w-sm w-full">
          <div className="w-16 h-16 mx-auto mb-4 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500">
            <i className="fa-solid fa-triangle-exclamation text-2xl"></i>
          </div>
          <h2 className="font-cairo text-xl font-bold text-slate-800 mb-2">
            No Surah Selected
          </h2>
          <p className="text-slate-500 text-sm mb-6">
            Please select a Surah from the Quran page to start listening.
          </p>
          <button
            onClick={() => navigate("/quran")}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Go to Quran
          </button>
        </div>
      </div>
    );

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-100 p-6 flex flex-col justify-center items-center"
      dir="ltr"
    >
      <div className="w-full max-w-md bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-slate-200/60 relative overflow-hidden">
        {/* Decorative Gradient Accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-500"></div>

        {/* Optional: Decorative Background Pattern */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-amber-100/40 rounded-full blur-3xl pointer-events-none"></div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-emerald-700 transition-colors cursor-pointer group"
        >
          <i className="fa-solid fa-arrow-right text-xs transition-transform group-hover:-translate-x-0.5"></i>
          Back to Surahs
        </button>

        {/* Vinyl/Disc Visual with Animation */}
        <div className="relative w-40 h-40 mx-auto mb-8">
          {/* Spinning Disc */}
          <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center border-4 border-white shadow-lg animate-[spin_20s_linear_infinite]">
            <div className="w-28 h-28 bg-gradient-to-br from-emerald-200 to-emerald-300 rounded-full flex items-center justify-center border-2 border-white/60">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-300 to-emerald-400 rounded-full flex items-center justify-center border-2 border-white/60">
                <div className="w-12 h-12 bg-white rounded-full shadow-inner flex items-center justify-center">
                  <i className="fa-solid fa-audio-description text-emerald-600 text-xl"></i>
                </div>
              </div>
            </div>
          </div>
          {/* Center Pulse Effect */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Text Info */}
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 mb-3 bg-emerald-100/80 text-emerald-700 text-xs font-semibold rounded-full uppercase tracking-wide border border-emerald-200">
            Now Playing
          </span>
          <h1 className="font-cairo text-2xl md:text-3xl font-bold text-emerald-900 mb-2 truncate px-2">
            {surahName}
          </h1>
          <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
            <i className="fa-solid fa-microphone-lines text-emerald-400"></i>
            <span className="font-medium text-slate-700">{reciterName}</span>
          </div>
        </div>

        {/* Custom Audio Player Wrapper */}
        <div className="bg-gradient-to-r from-slate-50 to-emerald-50/50 p-5 rounded-2xl border border-slate-200/60 shadow-inner">
          <audio
            controls
            className="w-full accent-emerald-600 [&::-webkit-media-controls-panel]:bg-slate-100 [&::-webkit-media-controls-current-time-display]:text-slate-700 [&::-webkit-media-controls-time-remaining-display]:text-slate-700"
            autoPlay
          >
            <source src={audioUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

        {/* Optional: Download/Share Actions */}
        <div className="mt-6 flex justify-center gap-3">
          <a
            href={audioUrl}
            download
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-xl hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-all duration-200"
          >
            <i className="fa-solid fa-download text-xs"></i>
            Download
          </a>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: surahName,
                  text: `Listening to ${surahName} recited by ${reciterName}`,
                  url: window.location.href,
                });
              }
            }}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-xl hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-all duration-200"
          >
            <i className="fa-solid fa-share-nodes text-xs"></i>
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayerPage;
