import React from 'react';
import Stopwatch from './Stopwatch';


function App() {
  return (
    <div className='flex flex-col bg-yellow-500 h-screen'>
      <h1 className='flex mx-auto font-bold text-black text-5xl mt-12'>Stopwatch</h1>
      <Stopwatch />
    </div>
  );
}

export default App;
