import React, { Component } from 'react'

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
    this.onClicks = this.onClicks.bind(this);
  };
  onClicks() {    
    this.setState({
      count: this.state.count + 1,
    })
  };
  render() {
    return (
      <div>
        <p>The count button was clicked: {this.state.count}</p>
        <button onClick={this.onClicks}>count</button>
      </div>
    )
  }
}
