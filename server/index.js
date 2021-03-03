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
  const id = req.params.id;
  let data = [];
  outbound
    .fetchItemById(id)
    .then((response) => {
      data.push(response.data);
    })
    .catch((error) => {
      data.push('failed to pull item data');
    })
    .then(() => {
      return outbound.reviewInfoFetch(id);
    })
    .then((response) => {
      data.push(response.data);
    })
    .catch((error) => {
      data.push('failed to pull reviews');
    })
    .then(() => {
      return outbound.fetchStyles(id);
    })
    .then((response) => {
      data.push(response.data);
    })
    .catch((error) => {
      data.push('failed to pull styles');
    })
    .then(() => {
      res.send(data);
    });
});

app.post('/reviewsList/', (req, res) => {
  const id = req.body.id;
  const count = req.body.count;

  outbound
    .allReviewFetch(id, count)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.get('/qa/questions/:id', (req, res) => {
  const id = req.params.id;
  outbound
    .fetchQuestions(id)
    .then((response) => {
      res.send(response.data.results);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.post('qa/questions/', (req, res) => {
  const id = req.params.id;
  outbound
    .postQuestion(id)
    .then((response) => {
      res.send('received');
    })
    .catch((error) => {
      res.send(error);
    });
});

app.get('/products/:product_id/related', (req, res) => {
  let id = req.params.product_id;
  outbound.fetchRelated(id, (err, relatedItems) => {
    if (err) {
      res.send(err);
    } else {
      res.send(relatedItems);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is live and happenin on port ${port}`);
});
