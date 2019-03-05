import React, { Component } from 'react';
import TopNav from './top-nav.js';
import './css/App.css';

class Home extends Component {
  render() {
    return (
      <div className="App w100">
        <TopNav />
        <header className="App-header white">
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
