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
import NewAccountForm from './NewAccountForm';


const App = () => {
  const [loaded, setLoaded] = useState(false)
  setTimeout(()=>{
    setLoaded(true)
  }, 2500)

  var readingsDB = new window.PouchDB('68.183.43.182:5984/cotwodb/');
  var usersDB = new window.PouchDB('68.183.43.182:5984/usersdb/');

  console.log(readingsDB);

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
        <Route exact path="/NewAccountForm" component={NewAccountForm}/>
      </>
    )}
    </div>
    </Router>
  );
}




export default App;
