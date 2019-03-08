import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './css/BottomNav.css';
import Profile from './126486.svg';
import Projects from './861157.svg';
import Messages from './263093.svg';
import Statistics from './478544.svg';

class BottomNav extends Component {
  render() {
    return(
      <div className="bottomNav">
        <ul className="nav-bar">
          <li className="nav-bar-item"><NavLink to="/Projects"><img src={Projects} className="nav-bar-icon" alt="Projects" /> </NavLink></li>
          <li className="nav-bar-item"><NavLink to="/Statistics"><img src={Statistics} className="nav-bar-icon" alt="Statistics" /> </NavLink> </li>
          <li className="nav-bar-item"><NavLink to="/Messages"><img src={Messages} className="nav-bar-icon" alt="News" /> </NavLink> </li>
          <li className="nav-bar-item"><NavLink to="/Profile"><img src={Profile} className="nav-bar-icon" alt="Profile" /></NavLink> </li>
        </ul>
      </div>

    );

  }

}

export default BottomNav;
