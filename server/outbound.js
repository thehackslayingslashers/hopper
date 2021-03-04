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
const allReviewFetch = (id, count) => {
  let localOptions = Object.create(options);
  localOptions.params = {
    product_id: id,
    count: count
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

const postQuestion = (id, body, name, email) => {
  let localOptions = Object.create(options);
  localOptions.params = {
    body: body,
    name: name,
    email: email,
    product_id: id,
  };
  return axios.post(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions`,
    localOptions
  );
};

const fetchRelatedArray = (id, callback) => {
  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/related`, options)
};

// const fetchRelatedItems

module.exports = {
  fetchItemById,
  reviewInfoFetch,
  allReviewFetch,
  fetchStyles,
  fetchQuestions,
  fetchRelatedArray,
  postQuestion,
};
