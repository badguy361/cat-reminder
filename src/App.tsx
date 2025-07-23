import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [showCat, setShowCat] = useState(false);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const elapsed = now - startTime;

      if (elapsed > 1 * 1 * 1000) {
        setShowCat(true);
        clearInterval(interval); // 顯示一次就停止
      }
    }, 10 * 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  return (
    <div className="App">
      <h1>正在開發中...</h1>

      {showCat && (
        <div className="cat-reminder">
          <img src="/logo192.png" alt="Cat" className="cat-animation" />
          <p className="cat-text">喵～你已經工作一小時囉！休息一下吧！</p>
        </div>
      )}
    </div>
  );
}

export default App;
