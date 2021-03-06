const axios = require('axios');
require('dotenv').config();

const options = {
  headers: {
    Authorization: process.env.GITHUB_API_KEY,
  },
};

const fetchItemById = (id) => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}`, options);

const reviewInfoFetch = (id) => {
  const localOptions = Object.create(options);
  localOptions.params = {
    product_id: id,
  };
  return axios.get(
    'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta',
    localOptions,
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

const incrementHelpfulness = (id) => {
  const localOptions = Object.create(options);
  return axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${id}/helpful`, {}, localOptions);
};

const addReview = (obj) => {
  const localOptions = Object.create(options);
  return axios({
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews',
    method: 'post',
    headers: localOptions.headers,
    data: obj,
  });
};

const fetchStyles = (id) => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/styles`, options);

const postCart = (sku, quantity) => {
  const arrayToAdd = [];
  for (let i = 0; i < quantity; i++) {
    arrayToAdd.push(axios({
      method: 'post',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart',
      data: {
        sku_id: sku,
      },
      headers: options.headers,
    }));
  }
  return axios.all(arrayToAdd);
};

const fetchQuestions = (id) => {
  const localOptions = Object.create(options);
  localOptions.params = {
    product_id: id,
    count: 40,
    page: 1,
  };
  return axios.get(
    'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions',
    localOptions,
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
  return axios({
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${id}/answers`,
    method: 'post',
    headers: localOptions.headers,
    data: obj,
  });
};

const upvoteQuestion = (id) => {
  const localOptions = Object.create(options);
  return axios.put(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${id}/helpful`,
    {},
    localOptions,
  );
};

const reportQuestion = (id) => {
  const localOptions = Object.create(options);
  return axios.put(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${id}/report`,
    {},
    localOptions,
  );
};

const upvoteAnswer = (id) => {
  const localOptions = Object.create(options);
  return axios.put(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${id}/helpful`,
    {},
    localOptions,
  );
};

const reportAnswer = (id) => {
  const localOptions = Object.create(options);
  return axios.put(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${id}/report`,
    {},
    localOptions,
  );
};

const fetchRelatedArray = (id, callback) => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/related`, options);

// const fetchRelatedItems

const postInteractions = (data) => axios({
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/interactions',
  method: 'post',
  data,
  headers: options.headers,
});

module.exports = {
  fetchItemById,
  reviewInfoFetch,
  fetchStyles,
  postCart,
  allReviewFetch,
  incrementHelpfulness,
  addReview,
  fetchQuestions,
  fetchRelatedArray,
  postQuestion,
  postAnswer,
  upvoteQuestion,
  upvoteAnswer,
  reportQuestion,
  reportAnswer,
  postInteractions,
};
