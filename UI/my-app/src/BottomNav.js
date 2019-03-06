import React, { Component } from 'react';
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
          <li className="nav-bar-item"><a href="https://friendsoftheearth.uk/"><img src={Projects} className="nav-bar-icon" alt="Projects" /> </a></li>
          <li className="nav-bar-item"><a href="/Statistics.js"><img src={Statistics} className="nav-bar-icon" alt="Statistics" /> </a> </li>
          <li className="nav-bar-item"><a href="https://friendsoftheearth.uk/"><img src={Messages} className="nav-bar-icon" alt="News" /> </a> </li>
          <li className="nav-bar-item"><a href="https://friendsoftheearth.uk/"><img src={Profile} className="nav-bar-icon" alt="Profile" /></a> </li>
        </ul>
      </div>

    );

  }

}

export default BottomNav;
