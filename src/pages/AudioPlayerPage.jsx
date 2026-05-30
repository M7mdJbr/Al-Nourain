import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AudioPlayerPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { audioUrl, reciterName, surahName } = location.state || {};

  if (!audioUrl)
    return <div className="text-center p-6">No surah selected.</div>;

  return (
    <div className="bg-amber-50 min-h-screen p-6 text-left" dir="ltr">
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-sm text-center">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 text-sm text-amber-700 block text-left cursor-pointer"
        >
          ← Back
        </button>

        <h1 className="text-2xl font-bold text-amber-900 mb-2">{surahName}</h1>
        <p className="text-gray-600 mb-6">
          Recited by:{" "}
          <span className="font-semibold text-amber-800">{reciterName}</span>
        </p>

        <audio controls className="w-full mt-4" autoPlay>
          <source src={audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default AudioPlayerPage;
