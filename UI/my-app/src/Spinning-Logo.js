import React, { Component } from 'react';
import logo from './logo-green.png';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div>
      <img src={logo} className="App-spinning-logo h40vm" alt="logo" />
      </div>
    );
  }
}

export default App;
