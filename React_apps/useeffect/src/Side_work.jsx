import React, { useEffect, useState } from 'react';

function Timer() {

  const [time, setTime] = useState(0);
  const [min, setMin] = useState(0);

  // Start timer ONCE
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Watch time and show message at 60 seconds
  useEffect(() => {
    if (time === 60) {
        setTime(0); // reset time
     setMin(prev=> prev+1)
    }
  }, [time]);

  const resetTimer = () => {
    setTime(0);
    setMin(0); // clear message on reset
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Time: {time} seconds</h1>

      {min && (
        <h2 style={{ color: "green" }}>{`${min} minutes competed`}</h2>
      )}

      <button className="btn btn-primary" onClick={resetTimer}>
        Reset Timer
      </button>
    </div>
  );
}

export default Timer;
