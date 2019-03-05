import React, { Component } from 'react';
import logo from './logo-white.png';
import './css/App.css';
import './css/bg-colors.css';
import './css/sizes.css';

class topNav extends Component {
  render() {
    return (
      <div className=" h25vh bg-white">
        <img src={logo} className="App-logo h30vm" alt="logo" />
      </div>
    );
  }
}

export default topNav;
