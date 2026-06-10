import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const AudioPlayerPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const surahId = searchParams.get("surah");
  const reciterId = searchParams.get("reciter");
  const stateData = location.state;

  const [audioInfo, setAudioInfo] = useState(stateData || null);
  const [loading, setLoading] = useState(!stateData && !!surahId);

  useEffect(() => {
    if (!audioInfo && surahId && reciterId) {
      const fetchAudioData = async () => {
        try {
          const response = await fetch(
            `https://api.example.com/audio/${surahId}/${reciterId}`,
          );
          const data = await response.json();
          setAudioInfo(data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
      fetchAudioData();
    }
  }, [surahId, reciterId, audioInfo]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center transition-colors duration-300">
        <div className="text-emerald-600 dark:text-emerald-400 font-cairo text-lg animate-pulse">
          جاري تحميل السورة...
        </div>
      </div>
    );
  }

  if (!audioInfo?.audioUrl)
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center text-center p-6 transition-colors duration-300">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-200/60 dark:border-gray-700 max-w-sm w-full">
          <div className="w-16 h-16 mx-auto mb-4 bg-rose-50 dark:bg-rose-900/20 rounded-2xl flex items-center justify-center text-rose-500 dark:text-rose-400">
            <i className="fa-solid fa-triangle-exclamation text-2xl"></i>
          </div>
          <h2 className="font-cairo text-xl font-bold text-slate-800 dark:text-gray-100 mb-2">
            No Surah Selected
          </h2>
          <p className="text-slate-500 dark:text-gray-400 text-sm mb-6">
            Please select a Surah from the Quran page to start listening.
          </p>
          <button
            onClick={() => navigate("/quran")}
            className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white font-medium py-2.5 px-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Go to Quran
          </button>
        </div>
      </div>
    );

  const { audioUrl, reciterName, surahName } = audioInfo;

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6 flex flex-col justify-center items-center transition-colors duration-300"
      dir="ltr"
    >
      <div className="w-full max-w-md bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-slate-200/60 dark:border-gray-700 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-500"></div>

        <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-100/40 dark:bg-emerald-900/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-amber-100/40 dark:bg-amber-900/20 rounded-full blur-3xl pointer-events-none"></div>

        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-gray-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors cursor-pointer group"
        >
          <i className="fa-solid fa-arrow-right text-xs transition-transform group-hover:-translate-x-0.5"></i>
          Back to Surahs
        </button>

        <div className="relative w-40 h-40 mx-auto mb-8">
          <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/40 dark:to-emerald-800/60 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-700 shadow-lg animate-[spin_20s_linear_infinite]">
            <div className="w-28 h-28 bg-gradient-to-br from-emerald-200 to-emerald-300 dark:from-emerald-800/60 dark:to-emerald-700/80 rounded-full flex items-center justify-center border-2 border-white/60 dark:border-gray-600/50">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-300 to-emerald-400 dark:from-emerald-700/80 dark:to-emerald-600 rounded-full flex items-center justify-center border-2 border-white/60 dark:border-gray-500/50">
                <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-inner flex items-center justify-center">
                  <i className="fa-solid fa-audio-description text-emerald-600 dark:text-emerald-400 text-xl"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 bg-emerald-500/10 dark:bg-emerald-400/20 rounded-full animate-ping"></div>
          </div>
        </div>

        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 mb-3 bg-emerald-100/80 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold rounded-full uppercase tracking-wide border border-emerald-200 dark:border-emerald-700/50">
            Now Playing
          </span>
          <h1 className="font-cairo text-2xl md:text-3xl font-bold text-emerald-900 dark:text-emerald-400 mb-2 truncate px-2">
            {surahName}
          </h1>
          <div className="flex items-center justify-center gap-2 text-slate-500 dark:text-gray-400 text-sm">
            <i className="fa-solid fa-microphone-lines text-emerald-400 dark:text-emerald-500"></i>
            <span className="font-medium text-slate-700 dark:text-gray-200">
              {reciterName}
            </span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-50 to-emerald-50/50 dark:from-gray-700/50 dark:to-gray-800/50 p-5 rounded-2xl border border-slate-200/60 dark:border-gray-600 shadow-inner">
          <audio
            controls
            className="w-full accent-emerald-600 dark:accent-emerald-500 [&::-webkit-media-controls-panel]:bg-slate-100 dark:[&::-webkit-media-controls-panel]:bg-gray-700 [&::-webkit-media-controls-current-time-display]:text-slate-700 dark:[&::-webkit-media-controls-current-time-display]:text-gray-200 [&::-webkit-media-controls-time-remaining-display]:text-slate-700 dark:[&::-webkit-media-controls-time-remaining-display]:text-gray-200"
            autoPlay
          >
            <source src={audioUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

        <div className="mt-6 flex justify-center gap-3">
          <a
            href={audioUrl}
            download
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 dark:text-gray-300 bg-white dark:bg-gray-700 border border-slate-200 dark:border-gray-600 rounded-xl hover:bg-emerald-50 dark:hover:bg-gray-600 hover:text-emerald-700 dark:hover:text-emerald-300 hover:border-emerald-200 dark:hover:border-emerald-700 transition-all duration-200"
          >
            <i className="fa-solid fa-download text-xs"></i>
            Download
          </a>
          <button
            onClick={() => {
              const shareUrl = window.location.href;
              if (navigator.share) {
                navigator
                  .share({
                    title: surahName,
                    text: `Listening to ${surahName} recited by ${reciterName}`,
                    url: shareUrl,
                  })
                  .catch(() => {});
              } else {
                navigator.clipboard.writeText(shareUrl);
              }
            }}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 dark:text-gray-300 bg-white dark:bg-gray-700 border border-slate-200 dark:border-gray-600 rounded-xl hover:bg-emerald-50 dark:hover:bg-gray-600 hover:text-emerald-700 dark:hover:text-emerald-300 hover:border-emerald-200 dark:hover:border-emerald-700 transition-all duration-200"
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
