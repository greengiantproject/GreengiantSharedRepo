import React, { Component } from 'react';
import TopNav from './top-nav.js';
import BottomNav from './BottomNav.js';
import './css/App.css';

class NewAccountForm extends Component {
  render() {
    return (
      <div className="App w100">
      <TopNav />
      <header className="App-header white">
      <h1 className="h1"> Create New Account </h1>
      <form>
      <p>Name:</p><input type="text" />
      <p>Email Address:</p><input type="text" />
      <p>Postcode:</p><input type="text" />
      <br />
      <button> Submit </button>
      </form>
      </header>

      <BottomNav />
      </div>
    );
  }
}

export default NewAccountForm;
