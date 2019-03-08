import React, { useState } from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SpinningLogo from './Spinning-Logo.js';
import './css/App.css';
import './css/bg-colors.css';
//import Home from './Home.js';
=======
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SpinningLogo from './Spinning-Logo.js';
import './css/App.css';
import './css/bg-colors.css';
import Home from './Home.js';
>>>>>>> ffadd513b97ad9918440a024ebf5e27e3dba585c

import Statistics from './Statistics';
import Messages from './Messages';
import Profile from './Profile';
import Projects from './Home';
import NewAccountForm from './NewAccountForm';
<<<<<<< HEAD
import NewIdeaForm from './NewIdeaForm'
=======
>>>>>>> ffadd513b97ad9918440a024ebf5e27e3dba585c


const App = () => {
  const [loaded, setLoaded] = useState(false)
  setTimeout(()=>{
    setLoaded(true)
  }, 2500)

<<<<<<< HEAD
  var readingsDB = new window.PouchDB('http://68.183.43.182:5984/cotwodb/');
  var usersDB = new window.PouchDB('http://68.183.43.182:5984/usersdb/');
  var projectsDB = new window.PouchDB('http://68.183.43.182:5984/projectsdb');
  //var localUsersDB = window.PouchDB('usersdb')
  //localUsersDB.replicate.to(usersDB)

  return (
    <Router>
    <div className="App-header-logo bg-white">
=======
  var readingsDB = new window.PouchDB('68.183.43.182:5984/cotwodb/');
  var usersDB = new window.PouchDB('68.183.43.182:5984/usersdb/');

  console.log(readingsDB);

  return (
    <Router>
    <div className="App-header bg-white">
>>>>>>> ffadd513b97ad9918440a024ebf5e27e3dba585c

    {!loaded &&(
      <header>
      <SpinningLogo />
      </header>
    )}

    {loaded &&(
      <>
<<<<<<< HEAD
        <Route exact path="/" component={Projects}/>
        <Route exact path="/Statistics" component={Statistics}/>
        <Route exact path="/Projects" component={Projects}/>
        <Route exact path="/Messages" component={Messages}/>
        <Route exact path="/Profile" component={Profile}/>
        <Route exact path="/NewAccountForm" component={()=> (
          <NewAccountForm usersDB={usersDB} />
        )}/>
        <Route exact path="/NewIdeaForm" component={()=> (
          <NewIdeaForm projectsDB={projectsDB} />
        )}/>

=======
        <Route exact path="/" component={Home}/>
        <Route exact path="/Statistics" component={Statistics}/>
        <Route exact path="/Projects" component={Home}/>
        <Route exact path="/Messages" component={Messages}/>
        <Route exact path="/Profile" component={Profile}/>
        <Route exact path="/NewAccountForm" component={NewAccountForm}/>
>>>>>>> ffadd513b97ad9918440a024ebf5e27e3dba585c
      </>
    )}
    </div>
    </Router>
  );
}




export default App;
