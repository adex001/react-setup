var React = require('react');
var ReactDom = require('react-dom');
import Popular from './components/Popular';
require('./index.css');

// State
// Lifecycle events or methods
// UI


class App extends React.Component {
  render() {
    return (
      <Popular />
    )
  }
}

ReactDom.render(
  <App />, document.getElementById('app')
)