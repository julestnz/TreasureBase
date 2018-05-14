import React, { Component } from 'react';
import './Clue.css';

class Clue extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clues: []
    }
  }

  componentDidMount() {
        let self = this;
        fetch('/clues/get', {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            self.setState({clues: data});
        }).catch(err => {
        console.log('caught it!',err);
        })
    }

  render() {
    return (
      <div>
        <h3>Clues go here</h3>
        <p/>
        {this.state.clues.map(record =>
          <div key={record.id}>
            <form method="post">
              <label> Question: </label> <input type="text" value={record.question}/>
              <p/>
              <label> Answer: </label> <input type="text" value={record.answer}/>
              <p/>
              <input type="submit" value="OK"/>
            </form>
        </div>

        )}
      </div>
    )};
}

export default Clue;
