import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';
import ValidationComponent from './components/ValidationComponent';

class App extends Component {

  state = {
    username: 'tmoney',
    textLength: null
  }

  usernameHandler = (event) => {
      this.setState({
        username: event.target.value
      })
  }

  createText = (event) => {
    this.setState({
      textLength: event.target.value.length
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>Udemy Assignment 2: Time to Practice</h1>
        <UserInput usernameHandler={this.usernameHandler.bind(this)} currentName={this.state.username} />
        <UserOutput username={this.state.username}  />
        <input onChange={this.createText} />
        <p>{this.state.textLength}</p>
        <ValidationComponent textLength={this.state.textLength} />
      </div>
    )
  }
}

export default App;
