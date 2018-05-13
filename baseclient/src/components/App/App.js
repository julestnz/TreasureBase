import React, { Component } from 'react';
import './App.css';

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
        <h1>Server Test</h1>
        {this.state.message}
      </div>
    )};
}

export default App;
