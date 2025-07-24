import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [showCat, setShowCat] = useState(false);
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
