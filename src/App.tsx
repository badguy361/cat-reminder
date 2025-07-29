import React, { useState, useEffect, useRef } from 'react';
import './index.css';

function App() {
  const [showCat, setShowCat] = useState(false);
  const [progress, setProgress] = useState(50);
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    const REMINDER_INTERVAL_MS = 1 * 5 * 1000; // 5 秒
    const CAT_DISPLAY_DURATION_MS = 5 * 1000;
    const interval = setInterval(() => {
      let now = Date.now();
      let elapsed = now - startTimeRef.current;
      console.log(elapsed);
      if (elapsed > REMINDER_INTERVAL_MS) {
        setShowCat(true);
        setTimeout(() => setShowCat(false), CAT_DISPLAY_DURATION_MS);
        startTimeRef.current = now;
      }
    }, 5 * 1000);

    return () => clearInterval(interval);
  }, []);

  const handleProgressChange = () => {
    setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* 標題 */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-8 tracking-tight drop-shadow-md">
        工作提醒與進度追蹤
      </h1>

      {/* 工作進度卡片 */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">工作進度</h2>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4 overflow-hidden">
          <div
            className="bg-gradient-to-r from-green-400 to-blue-500 h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-gray-600 mb-4">目前進度：{progress}%</p>
        <button
          onClick={handleProgressChange}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
        >
          更新進度
        </button>
      </div>

      {/* 貓咪提醒 */}
      {showCat && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-gradient-to-r from-pink-300 to-purple-300 p-4 rounded-2xl shadow-xl flex items-center space-x-4 transform transition-all duration-500 ease-in-out animate-pulse">
          <img
            src="/logo192.png"
            alt="Cat"
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-white"
          />
          <p className="text-base sm:text-lg font-medium text-gray-800">
            喵～你已經工作一小時囉！休息一下吧！
          </p>
        </div>
      )}
    </div>
  );
}

export default App;