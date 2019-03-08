import React, { Component } from 'react';
import TopNav from './top-nav.js';
import BottomNav from './BottomNav.js';
import './css/App.css';

class Home extends Component {
  render() {
    return (
      <div className="App w100">
        <TopNav />
        <header className="App-header white">

        <h2> Projects </h2>
          <a
            className="App-link"
            href="https://friendsoftheearth.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit our website
          </a>
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

export default Home;
