import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AudioPlayerPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { audioUrl, reciterName, surahName } = location.state || {};

  if (!audioUrl)
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center text-center p-6 text-indigo-900 font-bold text-lg">
        No surah selected.
      </div>
    );

  return (
    <div
      className="min-h-screen bg-gray-50 p-6 flex flex-col justify-center items-center"
      dir="ltr"
    >
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
        {/* Decorative Top Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-indigo-600"></div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-1 cursor-pointer"
        >
          ← Back to Surahs
        </button>

        {/* Vinyl/Disc Visual Placeholder */}
        <div className="w-32 h-32 bg-indigo-50 rounded-full mx-auto mb-6 flex items-center justify-center border border-indigo-100 shadow-inner animate-pulse">
          <svg
            className="w-16 h-16 text-indigo-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
            />
          </svg>
        </div>

        {/* Text Info */}
        <h1 className="text-2xl font-bold text-indigo-900 mb-2 truncate px-2">
          {surahName}
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          Recited by:{" "}
          <span className="font-semibold text-gray-700 block text-base mt-1">
            {reciterName}
          </span>
        </p>

        {/* Native Audio Player Tweak */}
        <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
          <audio controls className="w-full" autoPlay>
            <source src={audioUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayerPage;
