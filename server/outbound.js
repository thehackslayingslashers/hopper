const axios = require('axios');
const dotenv = require('dotenv').config();

let options = {
  headers: {
    Authorization: process.env.GITHUB_API_KEY,
  },
};

const fetchItemById = (id) => {
  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}`, options);
};

const reviewInfoFetch = (id) => {
  let localOptions = Object.create(options);
  localOptions.params = {
    product_id: id,
  };
  return axios.get(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta`,
    localOptions
  );
};
const allReviewFetch = (id) => {
  let localOptions = Object.create(options);
  localOptions.params = {
    product_id: id,
  };
  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/`, localOptions);
};

const fetchStyles = (id) => {
  return axios.get(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/styles`,
    options
  );
};

const fetchQuestions = (id) => {
  let localOptions = Object.create(options);
  localOptions.params = {
    product_id: id,
  };
  return axios.get(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions`,
    localOptions
  );
};

const fetchRelated = (id) => {
  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/related`, options)
}


module.exports = {
  fetchItemById,
  reviewInfoFetch,
  allReviewFetch,
  fetchStyles,
  fetchQuestions,
  fetchRelated
};
