import React, { useState } from 'react';
import SpinningLogo from './Spinning-Logo.js';
import './css/App.css';
import './css/bg-colors.css';
import Home from './Home.js';

const App = () => {
  const [loaded, setLoaded] = useState(false)
  setTimeout(()=>{
    setLoaded(true)
  }, 500)
  return (
    <div className="App-header bg-white">
    {!loaded &&(
      <header>
      <SpinningLogo />
      </header>
    )}

    {loaded &&(
      <Home />
    )}
    </div>
  );
}


export default App;
