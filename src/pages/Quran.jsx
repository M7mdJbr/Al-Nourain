import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Quran = () => {
  const [reciters, setReciters] = useState([]);
  const [selectedReciter, setSelectedReciter] = useState(null);
  const [surahs, setSurahs] = useState([]);
  const [loading, setLoading] = useState({ reciters: true, surahs: true });
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://mp3quran.net/api/v3/reciters?language=eng")
      .then((response) => response.json())
      .then((data) => {
        setReciters(data.reciters);
        setLoading((prev) => ({ ...prev, reciters: false }));
      })
      .catch((error) => {
        console.log(error);
        setLoading((prev) => ({ ...prev, reciters: false }));
      });
  }, []);

  useEffect(() => {
    fetch("https://api.alquran.cloud/v1/surah")
      .then((response) => response.json())
      .then((res) => {
        setSurahs(res.data);
        setLoading((prev) => ({ ...prev, surahs: false }));
      })
      .catch((error) => {
        console.log(error);
        setLoading((prev) => ({ ...prev, surahs: false }));
      });
  }, []);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-100 p-6 text-left"
      dir="ltr"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 px-4">
          <span className="inline-block px-4 py-1.5 mb-4 bg-emerald-100/80 text-emerald-800 text-xs font-semibold rounded-full tracking-wide uppercase border border-emerald-200">
            Holy Qur'an
          </span>
          <h1 className="font-cairo text-4xl md:text-5xl font-bold text-emerald-900 mb-3">
            Choose Your Recitation
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto">
            Select a reciter and a Surah to start listening
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200/60">
          {/* Reciter Selection */}
          <div className="mb-8">
            <label className="block font-semibold text-emerald-900 mb-3 text-lg">
              <i className="fa-solid fa-microphone-lines me-2"></i>
              Choose Reciter:
            </label>
            <div className="relative max-w-xl">
              <select
                className="w-full p-3.5 pr-10 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 text-slate-700 appearance-none transition-all cursor-pointer hover:border-slate-300"
                onChange={(e) => {
                  if (!e.target.value) {
                    setSelectedReciter(null);
                    return;
                  }
                  const reciter = reciters.find(
                    (r) => r.id === Number(e.target.value),
                  );
                  setSelectedReciter(reciter);
                }}
                disabled={loading.reciters}
              >
                <option value="">Select a reciter...</option>
                {reciters.map((reciter) => (
                  <option key={reciter.id} value={reciter.id}>
                    {reciter.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-400">
                <i className="fa-solid fa-chevron-down text-xs"></i>
              </div>
            </div>

            {/* Selected Reciter Badge */}
            {selectedReciter && (
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-800 rounded-full text-sm font-medium border border-emerald-100 animate-fade-in">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                {selectedReciter.name}
              </div>
            )}
          </div>

          {/* Surahs Grid */}
          <div className="border-t border-slate-100 pt-6">
            <h3 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
              <i class="fa-solid fa-audio-description"></i>
              Select a Surah
            </h3>

            {loading.surahs ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-slate-100/80 p-4 rounded-xl animate-pulse h-14"
                  ></div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {surahs.map((surah) => (
                  <button
                    key={surah.number}
                    className="group relative bg-slate-50 p-4 rounded-xl shadow-sm text-sm font-medium text-slate-700 hover:bg-emerald-600 hover:text-white transition-all duration-200 truncate text-center cursor-pointer border border-slate-200/60 hover:border-emerald-500/50 hover:-translate-y-0.5 hover:shadow-md"
                    onClick={() => {
                      if (
                        selectedReciter &&
                        selectedReciter.moshaf &&
                        selectedReciter.moshaf.length > 0
                      ) {
                        const surahNumber = String(surah.number).padStart(
                          3,
                          "0",
                        );
                        const audioUrl = `${selectedReciter.moshaf[0].server}${surahNumber}.mp3`;

                        navigate("/player", {
                          state: {
                            audioUrl: audioUrl,
                            reciterName: selectedReciter.name,
                            surahName: surah.englishName,
                          },
                        });
                      } else {
                        alert("Please select a reciter first");
                      }
                    }}
                  >
                    <span className="absolute top-2 left-2 text-[10px] font-bold text-slate-400 group-hover:text-emerald-100 transition-colors">
                      {surah.number}
                    </span>
                    <span className="block mt-1">{surah.englishName}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quran;
