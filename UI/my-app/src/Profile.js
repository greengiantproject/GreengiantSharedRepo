import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import TopNav from './top-nav.js';
import BottomNav from './BottomNav.js';
import './css/App.css';

class Profile extends Component {

  render() {
    return (
      <div className="App w100">
        <TopNav />
        <header className="App-header white">
        <h1 className="h1"> Welcome to the Friends of the Earth App </h1>
        <h2> This is the <b>Profile</b> Page </h2>
          <NavLink to="/NewAccountForm">
            Create New Account
          </NavLink>
        </header>
        <p> More Text </p>
        <p> More Text </p>
        <p> More Text </p>
        <p> More Text </p>
        <p> More Text </p>
        <p> More Text </p>
        <p> More Text </p>

        <BottomNav />
      </div>
    );
  }
}

export default Profile;
