/* eslint-disable no-console */
const express = require('express');
const outbound = require('./outbound');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('nice');
});

app.get('/product/:id', (req, res) => {
  let id = req.params.id;
  let basicInfo;
  outbound.currentItemInfoFetch(id)
    .then((response) => {
      basicInfo = response.data;
      outbound.reviewInfoFetch(id)
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
