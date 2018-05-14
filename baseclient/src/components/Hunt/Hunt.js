import React, { Component } from 'react';
import './Hunt.css';

class Hunt extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hunts: []
    }
  }

  componentDidMount() {
        let self = this;
        fetch('/hunts/get', {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            self.setState({hunts: data});
        }).catch(err => {
        console.log('caught it!',err);
        })
    }

  render() {
    return (
      <div>
        <h3>Hunts go here</h3>
        <p/>
        {this.state.hunts.map(record =>
          <div key={record.id}>
            <form method="post">
              <label> Name: </label> <input type="text" value={record.name}/>
              <p/>
              <label> Description: </label> <input type="text" value={record.description}/>
              <p/>
              <input type="submit" value="OK"/>
            </form>
        </div>

        )}
      </div>
    )};
}

export default Hunt;
