import React, { useState, useEffect } from 'react';

function Stopwatch() {
    const [startTime, setStartTime] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let stopwatchInterval;

        if (running) {
            stopwatchInterval = setInterval(() => {
                setElapsedTime(Date.now() - startTime);
            }, 10);
        }

        return () => clearInterval(stopwatchInterval);
    }, [running, startTime]);

    const startStopwatch = () => {
        if (!running) {
            setStartTime(Date.now() - elapsedTime);
            setRunning(true);
        }
    };

    const stopStopwatch = () => {
        if (running) {
            setRunning(false);
        }
    };

    const resetStopwatch = () => {
        stopStopwatch();
        setElapsedTime(0);
    };

    const formatTime = (value) => {
        return value.toString().padStart(3, '0');
    };

    const formatMilliseconds = (value) => {
        return value.toString().padStart(3, '0');
    };

    const milliseconds = Math.floor(elapsedTime % 1000);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
  
    return (
      <div className='flex flex-col'>
        <div className='mx-auto text-black text-5xl p-5'>
          {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}.{formatMilliseconds(milliseconds)}
        </div>
        <div className='flex flex-row gap-5 mx-auto'>
            <button onClick={startStopwatch} className='border border-black rounded-s text-2xl mb-6 w-48 h-12 px-12 hover:bg-black hover:text-white'>Start</button>
            <button onClick={stopStopwatch} className='border border-black rounded-s text-2xl mb-6 w-48 h-12 px-12 hover:bg-black hover:text-white'>Stop</button>
            <button onClick={resetStopwatch} className='border border-black rounded-s text-2xl mb-6 w-48 h-12 px-12 hover:bg-black hover:text-white'>Reset</button>
        </div>
      </div>
    );
}

export default Stopwatch;