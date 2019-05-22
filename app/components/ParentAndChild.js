import React, { Component } from 'react'

export default class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 'initial data',
    }
    this.updateProp = this.updateProp.bind(this);
  }
  updateProp (e) {
    this.setState({
      data: e.target.value,
    })
  }
  render() {
    return (
      <div>
        <Child myDataProp = {this.state.data} updateStateProp = {this.updateProp} />
      </div>
    )
  }
}

class Child extends Component {
  render() {
    return (
      <div>
        <input type = 'text' value = {this.props.myDataProp} onChange = {this.props.updateStateProp} />
        <h3>{this.props.myDataProp} </h3>
      </div>
    );
  }
}
