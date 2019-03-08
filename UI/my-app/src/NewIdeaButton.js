import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import logo from './logo-white.png';
import './css/NewIdeaButton.css'

class NewIdeaButton extends Component {
  render() {
    return (
      <div className="SubmitIdeaBox bg-grey">
        <NavLink to="/NewIdeaForm" className="NavLink"> Submit New Idea </NavLink>
      </div>
    );
  }
}

export default NewIdeaButton;
