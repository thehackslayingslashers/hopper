/* eslint-disable no-console */
const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('nice');
});

app.get('/product/:id', (req, res) => {
  let id = req.params.id;
  let options = {
    headers: {
      Authorization: process.env.GITHUB_API_KEY
    }
  }
  let basicInfo;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}`, options)
    .then((response) => {
      basicInfo = response.data;
      options.params = {
        product_id: basicInfo.id
      }
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta`, options)
        .then(response => {
          res.send([basicInfo, response.data])
        })
        .catch((error) => {
          res.status(500).send([basicInfo, 'failed to fetch review data'])
        })
    })
    .catch((error) => {
      res.status(500).send(error)
    })
});

app.listen(port, () => {
  console.log(`Server is live and happenin on ${port}`);
});
