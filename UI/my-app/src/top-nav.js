import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import logo from './logo-white.png';
import './css/topNav.css';
import './css/bg-colors.css';
import './css/sizes.css';

class TopNav extends Component {
  render() {
    return (
      <div className="TopNav bg-blue">
        <NavLink to="/Projects"><img src={logo} className="TopNavlogo" alt="logo" /></NavLink>
      </div>
    );
  }
}

export default TopNav;
