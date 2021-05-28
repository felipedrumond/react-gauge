import React, { useState, useEffect } from 'react';
import Gauge from './components/gauge/Gauge';
import './App.scss';
 
const App = () => {

  const generateRandomScore = () => {
    return parseInt(Math.random() * 101);
  }

  const generateNewScoresSet = () => Array(4).fill(1).map(() => generateRandomScore());

  const [gauges, setGauges] = useState(generateNewScoresSet);
  
  const randomizeScores = () => {
    const newState = generateNewScoresSet;
    setGauges(newState);
  }

  // change gauge values every n seconds
  const [time, setTime] = useState(Date.now());
  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 2000);

    return () => {
      randomizeScores();
      clearInterval(interval);
    };
  }, [time]);

  return (
    <div className="gauges-container">
      {
        gauges.map((gauge, i) =>
          <Gauge score={gauge} key={`Gauge-${i}}`}></Gauge>
        )
      }
    </div>
  );
};

export default App;