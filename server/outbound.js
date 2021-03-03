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

const postQuestion = (obj) => {
  let localOptions = Object.assign(options);
  let stringyObj = JSON.stringify(obj);
  return axios.post(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions`,
    obj,
    localOptions
  );
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

const fetchRelated = (id, callback) => {
  axios
    .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/related`, options)
    .then((response) => {
      let relatedArray = [];
      response.data.map((id) => {
        relatedArray.push(
          axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}`, options)
        );
      });
      axios
        .all(relatedArray)
        .then(
          axios.spread((...responses) => {
            let results = [];
            responses.map((response) => {
              results.push(response.data);
            });
            callback(null, results);
          })
        )
        .catch((error) => {
          console.log('erroring out of axios.all request in fetchRelated call');
          callback(error);
        });
    })
    .catch((error) => {
      callback(error);
    });
};

module.exports = {
  fetchItemById,
  reviewInfoFetch,
  allReviewFetch,
  fetchStyles,
  fetchQuestions,
  fetchRelated,
  postQuestion,
};
