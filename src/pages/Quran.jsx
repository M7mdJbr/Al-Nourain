import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Quran = () => {
  const [reciters, setReciters] = useState([]);
  const [selectedReciter, setSelectedReciter] = useState(null);
  const [surahs, setSurahs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://mp3quran.net/api/v3/reciters?language=eng")
      .then((response) => response.json())
      .then((data) => {
        setReciters(data.reciters);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetch("https://api.alquran.cloud/v1/surah")
      .then((response) => response.json())
      .then((res) => {
        setSurahs(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="bg-amber-50 min-h-screen p-6 text-left" dir="ltr">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-sm">
        <label className="block font-bold text-amber-900 mb-2">
          Choose Reciter:
        </label>
        <select
          className="w-full max-w-xs p-2 border border-amber-200 rounded mb-6 block"
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
        >
          <option value="">Select a reciter...</option>
          {reciters.map((reciter) => (
            <option key={reciter.id} value={reciter.id}>
              {reciter.name}
            </option>
          ))}
        </select>

        <div className="p-4 rounded grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {surahs.map((surah) => (
            <button
              key={surah.number}
              className="bg-emerald-100 p-3 rounded shadow-sm text-sm font-medium hover:bg-amber-100 transition truncate text-center cursor-pointer"
              onClick={() => {
                if (
                  selectedReciter &&
                  selectedReciter.moshaf &&
                  selectedReciter.moshaf.length > 0
                ) {
                  const surahNumber = String(surah.number).padStart(3, "0");
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
              {surah.englishName}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quran;
