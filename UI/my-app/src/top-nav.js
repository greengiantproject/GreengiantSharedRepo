import React, { Component } from 'react';
import logo from './logo-white.png';
import './css/topNav.css';
import './css/bg-colors.css';
import './css/sizes.css';

class TopNav extends Component {
  render() {
    return (
      <div className="TopNav bg-blue">
        <img src={logo} className="TopNavlogo" alt="logo" />
      </div>
    );
  }
}

export default TopNav;
