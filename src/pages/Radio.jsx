import React from "react";
import { useEffect } from "react";
import {useState} from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css'; 
const Radio = () => {

  const [activeRadioId, setActiveRadioId] = useState(null);
  const [radioList, setRadioList] = useState(null);
  const [url, seturl] = useState(null);

  useEffect(()=>{
    fetch("https://data-rosy.vercel.app/radio.json")
    .then((response) => response.json())
    .then((data) => {
      setRadioList(data.radios);
      seturl(data.url);
    })
    .catch((error) => {
      console.error("Error fetching radio data:", error);
    });
  },[])

  const handlePlayToggle = (id)=>{
    if (activeRadioId === id) {
      setActiveRadioId(null);
    } else {
      setActiveRadioId(id);
    }
  };
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-slate-900 dark:text-gray-100 p-6 transition-colors duration-300 mt-16"
    >
      <div className="max-w-6xl mx-auto mt-16">
        <div className="text-center px-4 pb-10">
          <span className="inline-block px-4 mb-8 py-1.5 mb-4 bg-emerald-100/80 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-xs font-semibold rounded-full uppercase tracking-wide border border-emerald-200 dark:border-emerald-700/50">
            الإذاعة
          </span>
          <h1 className="font-cairo text-4xl md:text-5xl font-bold text-emerald-900 dark:text-emerald-400 mb-4">
           اختر إذاعة للاستماع
          </h1>
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4 justify-center">
          {radioList?.map((reciter) => (
            <div
              key={reciter.id}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-3xl shadow-sm border border-slate-200/60 dark:border-gray-700 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="font-cairo text-xl font-semibold text-slate-900 dark:text-gray-100 mb-2">
                    {reciter.name}
                  </h2>
                </div>
              </div>
              <button
                onClick={() => {
                  handlePlayToggle(reciter.id);
                }}
                className="mt-6 w-full bg-emerald-800 hover:bg-emerald-700 text-white font-medium py-3 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                {activeRadioId === reciter.id ? "إيقاف" : "تشغيل"}
              </button>

              {activeRadioId === reciter.id && (
                <div className="mt-4">
                  <AudioPlayer
                    src={reciter.url}
                    autoPlay
                    showJumpControls={false} // لإخفاء أزرار قفز 10 ثواني لو مش عايزها
                    customAdditionalControls={[]} // لتخصيص الأزرار
                    className="rounded-2xl dark:bg-gray-700"
                  />
                </div>
              )}
            </div>
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default Radio;
