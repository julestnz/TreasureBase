import React, { Component } from 'react';
import './App.css';
import Hunt from '../Hunt/Hunt';
import Clue from '../Clue/Clue';

class App extends Component {
  state = {serverMessage: []}

  componentDidMount() {
    fetch('/ping')
      .then(res => res.text())
      .then(message => this.setState({ message }));
  }

  render() {
    return (
      <div>
        <h1>Treasure Client</h1>
        {this.state.message}
        <Hunt />
        <Clue />
      </div>
    )};
}

export default App;
