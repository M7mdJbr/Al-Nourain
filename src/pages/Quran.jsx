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
    <div className="min-h-screen bg-gray-50 p-6 text-left" dir="ltr">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <label className="block font-bold text-indigo-900 mb-2">
          Choose Reciter:
        </label>
        <select
          className="w-full max-w-xs p-2 border border-gray-200 rounded-md mb-6 block focus:outline-none focus:border-indigo-600 text-gray-700"
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {surahs.map((surah) => (
            <button
              key={surah.number}
              className="bg-gray-100 p-3 rounded-md shadow-sm text-sm font-medium text-indigo-900 hover:bg-indigo-600 hover:text-white transition-colors duration-200 truncate text-center cursor-pointer border border-gray-200/50"
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
