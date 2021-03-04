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
    count: count,
  };

  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/`, localOptions);
};

const fetchStyles = (id) => {
  return axios.get(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/styles`,
    options
  );
};

const fetchQuestions = (id, count) => {
  let localOptions = Object.create(options);
  // count = JSON.parse(count);
  localOptions.params = {
    product_id: id,
    count: 10,
    page: 1,
  };
  return axios.get(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions`,
    localOptions
  );
};

const postQuestion = (obj) => {
  let localOptions = Object.assign(options);
  return axios({
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions`,
    method: 'post',
    headers: localOptions.headers,
    data: obj,
  });
};

const postAnswer = (id, body, name, email, photos) => {
  let localOptions = Object.create(options);
  localOptions.params = {
    body: body,
    name: name,
    email: email,
    question_id: id,
    photos: photos,
  };
  return axios.post(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${id}/answers`,
    localOptions
  );
};

const fetchRelatedArray = (id, callback) => {
  return axios.get(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/related`,
    options
  );
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
