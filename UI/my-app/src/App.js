import React, { Component } from 'react';
import logo from './Friends_of_the_Earth_(logo).png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to Green Community!<br></br>
            <b>Under Construction</b>
          </p>

          <a
            className="App-link"
            href="https://friendsoftheearth.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            In the meantime, visit our website!
          </a>
        </header>
      </div>
    );
  }
}

export default App;
