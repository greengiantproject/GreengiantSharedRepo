import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SpinningLogo from './Spinning-Logo.js';
import './css/App.css';
import './css/bg-colors.css';
import Home from './Home.js';

import Statistics from './Statistics';
import Messages from './Messages';
import Profile from './Profile';
import Projects from './Home';

const App = () => {
  const [loaded, setLoaded] = useState(false)
  setTimeout(()=>{
    setLoaded(true)
  }, 500)
  return (
    <Router>
    <div className="App-header bg-white">

    {!loaded &&(
      <header>
      <SpinningLogo />
      </header>
    )}

    {loaded &&(
      <>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Statistics" component={Statistics}/>
        <Route exact path="/Projects" component={Home}/>
        <Route exact path="/Messages" component={Messages}/>
        <Route exact path="/Profile" component={Profile}/>
      </>
    )}
    </div>
    </Router>
  );
}


export default App;
