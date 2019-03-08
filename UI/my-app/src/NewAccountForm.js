import React, { Component } from 'react';
import TopNav from './top-nav.js';
import BottomNav from './BottomNav.js';
import './css/App.css';
<<<<<<< HEAD
import uuid from 'uuid/v4'

class NewAccountForm extends Component {

  state = {
    username: '',
    email: '',
    postcode: ''
  }

  handleSubmit =(event) => {
    event.preventDefault()
    let dbObject = {
      _id: uuid(),
      ...this.state
    }
    console.log(dbObject)
    //this.setState(event)

    this.props.usersDB.put(dbObject)

    // this.props.usersDB.add()
  }

  handleChange = (event) => {

    this.setState({
      [event.target.getAttribute('name')]: event.target.value
    })

  }

  render = () => {
    const {username, email, postcode} = this.state
=======

class NewAccountForm extends Component {
  render() {
>>>>>>> ffadd513b97ad9918440a024ebf5e27e3dba585c
    return (
      <div className="App w100">
      <TopNav />
      <header className="App-header white">
      <h1 className="h1"> Create New Account </h1>
<<<<<<< HEAD
      <form onSubmit={this.handleSubmit}>
      <p>Name:</p><input type="text" name="username" onChange={this.handleChange} value={this.state.username} />
      <p>Email Address:</p><input type="text" name="email" onChange={this.handleChange} value={this.state.email} />
      <p>Postcode:</p><input type="text" name="postcode" onChange={this.handleChange} value={this.state.postcode} />
      <br />
      {username && email && postcode && (
        <button> Submit </button>
      )}

=======
      <form>
      <p>Name:</p><input type="text" />
      <p>Email Address:</p><input type="text" />
      <p>Postcode:</p><input type="text" />
      <br />
      <button> Submit </button>
>>>>>>> ffadd513b97ad9918440a024ebf5e27e3dba585c
      </form>
      </header>

      <BottomNav />
      </div>
    );
  }
}

export default NewAccountForm;
