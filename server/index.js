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
  let data = []
  outbound.fetchItemById(id)
    .then((response) => {
      data.push(response.data);
    })
    .catch((error) => {
      data.push('failed to pull item data')
    })
    .then(outbound.reviewInfoFetch(id))
    .then(response => {
      data.push(response.data)
    })
    .catch(error => {

    })
});


        .then(response => {
          outbound.fetchStyles(id)
            .then(response => {
              res.send([basicInfo, response.data])
            })
            .catch((error) => {
              res.status(500).send([basicInfo, 'failed to fetch review data'])
            })
        })
        .catch((error) => {
          res.status(500).send([basicInfo, 'failed to fetch review data', ''])
        })

app.listen(port, () => {
  console.log(`Server is live and happenin on ${port}`);
});
