==========================================tasks===========================================================================================import React, { useEffect } from 'react'

function Side_work() {
    useEffect(() => {
    
    
    
        
        console.log('side work component mounted');
    }, [])
    
  return (
    <div>
        <h1 className='text-danger'>
            wellcome to side work component
        </h1>
    </div>
  )
}

export default Side_work



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


import { useEffect, useState } from "react";
import Side_work from "./Side_work";

function App() {
  const [age, setage] = useState(0)
  const update = () => {
    setage(age + 1)
  }
  const [name, setname] = useState()
  const nameupdate=()=>{
    setname("prashant")
  }
// useEffect(() => {
//   console.log(
//     'heloo'
//   );
  

//   return () => {
    
//   }
// }, [age])

  return (
    <>
      {/* <h1 className="">{age}</h1>
       <h1 className="">{name}</h1>
      
      <button className="btn btn-danger m-5 "onClick={update}> click me</button>
      
      <button className="btn btn-danger "onClick={nameupdate}> click me</button> */}

<Side_work/>


    </>
  );
}

export default App;
        