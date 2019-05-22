import React, { Component } from 'react'

export default class ValueUpdater extends Component {
  constructor () {
    super();
    this.state = {
      text: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    let value = e.target.value;
    this.setState({
      text: value,
    })
  }
  render() {
    return (
      <div>
        <p>You have typed: {this.state.text}</p>
        <input type='text' onChange = {this.handleChange} />
      </div>
    )
  }
}
