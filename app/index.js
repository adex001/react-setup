import React from 'react';
import { render as _render } from 'react-dom';
import {BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Counter from './components/Counter';
import ValueUpdater from './components/ValueUpdater';
import  Parent from "./components/ParentAndChild";
import './index.css';

// State
// Lifecycle events or methods
// UI


class Main extends React.Component {
  render() {
    return (
      <Router >
        <Route path="/" exact component={Counter} />
        <Route path="/val/" component={ValueUpdater} />
        <Route path="/parent/" component={Parent} />
      </Router>
    )
  }
}

_render(
  <Main />, document.getElementById('app')
)