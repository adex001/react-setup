import React, { Component } from 'react'
import api from '../utils/api';
import propTypes from 'prop-types';

export default class Popular extends Component {
  constructor(props) {
    super();
    this.state = {
      selectedLanguage: 'All',
      repos: null
    };
  }
  componentDidMount() {
    api.fetchPopularRepos(this.state.selectedLanguage)
      .then(response => console.log(response)
      );
  }

  render() {
    return (
      <div>
        <p>I am from the popular component</p>
      </div>
    )
  }
}
Popular.propTypes = {
  selectedLanguage: propTypes.string.isRequired,
}