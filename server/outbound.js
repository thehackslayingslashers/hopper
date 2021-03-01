const axios = require('axios');
const dotenv = require('dotenv').config();

let options = {
  headers: {
    Authorization: process.env.GITHUB_API_KEY,
  },
};

const fetchItemById = (id) => {
  debugger;
  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}`, options);
};

const reviewInfoFetch = (id) => {
  let localOptions = Object.create(options);
  localOptions.params = {
<<<<<<< HEAD
    product_id: id,
  };
  return axios.get(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta`,
    localOptions
  );
};
=======
    product_id: id
  }
  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta`, localOptions)
}
const allReviewFetch = (id) => {
  let localOptions = Object.create(options);
  localOptions.params = {
    product_id: id
  };
  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/`, localOptions)
}
>>>>>>> 9d04e6ddb679b44407e846d42b49957c1151824d

const fetchStyles = (id) => {
  return axios.get(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/styles`,
    options
  );
};

module.exports = {
  fetchItemById,
  reviewInfoFetch,
<<<<<<< HEAD
  fetchStyles,
};
=======
  allReviewFetch,
  fetchStyles
}
>>>>>>> 9d04e6ddb679b44407e846d42b49957c1151824d
