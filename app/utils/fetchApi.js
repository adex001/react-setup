var axios = require('axios');

module.exports = {
  fetchAPI: (url) => {
    return axios.get(window.encodeURI(url))
      .then((response) => {
        return response.data.items;
      })
  }
}
