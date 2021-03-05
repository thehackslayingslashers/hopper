const axios = require('axios');
const dotenv = require('dotenv').config();

const options = {
  headers: {
    Authorization: process.env.GITHUB_API_KEY,
  },
};

const fetchItemById = (id) =>
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}`, options);

const reviewInfoFetch = (id) => {
  const localOptions = Object.create(options);
  localOptions.params = {
    product_id: id,
  };
  return axios.get(
    'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta',
    localOptions
  );
};
const allReviewFetch = (id, count, sort) => {
  const localOptions = Object.create(options);
  localOptions.params = {
    product_id: id,
    count,
    sort,
  };

  return axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/', localOptions);
};

const fetchStyles = (id) =>
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/styles`, options);

const fetchQuestions = (id) => {
  const localOptions = Object.create(options);
  localOptions.params = {
    product_id: id,
    count: 40,
    page: 1,
  };
  return axios.get(
    'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions',
    localOptions
  );
};

const postQuestion = (obj) => {
  const localOptions = Object.assign(options);
  return axios({
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions',
    method: 'post',
    headers: localOptions.headers,
    data: obj,
  });
};

const postAnswer = (obj, id) => {
  const localOptions = Object.create(options);
  debugger;
  return axios({
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${id}/answers`,
    method: 'post',
    headers: localOptions.headers,
    data: obj,
  });
};

const fetchRelatedArray = (id, callback) =>
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/related`, options);

// const fetchRelatedItems

module.exports = {
  fetchItemById,
  reviewInfoFetch,
  allReviewFetch,
  fetchStyles,
  fetchQuestions,
  fetchRelatedArray,
  postQuestion,
  postAnswer,
};
