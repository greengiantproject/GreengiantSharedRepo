import React, { Component } from 'react';
import TopNav from './top-nav.js';
import BottomNav from './BottomNav.js';
import './css/App.css';
import uuid from 'uuid/v4'

class NewIdeaForm extends Component {

  state = {
    title: '',
    location: '',
    description: '',
    contact_details: ''
  }

  handleSubmit =(event) => {
    event.preventDefault()
    let dbObject = {
      _id: uuid(),
      ...this.state
    }
    console.log(dbObject)
    //this.setState(event)

    this.props.projectsDB.put(dbObject)

    // this.props.projectsDB.add()
  }

  handleChange = (event) => {

    this.setState({
      [event.target.getAttribute('name')]: event.target.value
    })

  }

  render = () => {
    const {title, location, description, contact_details} = this.state
    return (
      <div className="App w100">
      <TopNav />
      <header className="App-header white">
      <h1 className="h1"> Submit New Idea </h1>
      <form onSubmit={this.handleSubmit}>
      <p>Title:</p><input type="text" name="title" onChange={this.handleChange} value={this.state.title} />
      <p>Location:</p><input type="text" name="location" onChange={this.handleChange} value={this.state.location} />
      <p>Description:</p><input type="text" name="description" onChange={this.handleChange} value={this.state.description} />
      <p>Contact Details:</p><input type="text" name="contact_details" onChange={this.handleChange} value={this.state.contact_details} />
      <br />
      {title && location && description && contact_details && (
        <button> Submit </button>
      )}

      </form>
      </header>

      <BottomNav />
      </div>
    );
  }
}

export default NewIdeaForm;
