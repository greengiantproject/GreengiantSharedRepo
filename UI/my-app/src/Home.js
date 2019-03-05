import React, { Component } from 'react';
import Logo from './Logo.js';
import topNav from './top-nav.js';
import './css/App.css';

class Home extends Component {
  render() {
    return (
      <div className="App w100">
      <topNav />
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default Home;
