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
  const count = req.query.count;
  outbound
    .fetchQuestions(id, count)
    .then((response) => {
      res.send(response.data.results);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.post('/qa/questions/', (req, res) => {
  outbound
    .postQuestion(req.body)
    .then((response) => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.post('qa/questions/:question_id/answers', (req, res) => {
  const id = req.body.question_id;
  const body = req.body.body;
  const email = req.body.email;
  const name = req.body.name;
  const photos = req.body.photos;
  outbound
    .postQuestion(id, body, name, email, photos)
    .then((response) => {
      res.send('received question post');
    })
    .catch((error) => {
      res.send(error);
    });
});

app.get('/products/:product_id/related', (req, res) => {
  let currentid = req.params.product_id;
  let relatedArray = [];
  let relatedLength = 0;
  outbound
    .fetchRelatedArray(currentid)
    .then((response) => {
      relatedLength = response.data.length;
      response.data.map((id) => {
        outbound
          .fetchItemById(id)
          .then((response) => {
            let item = {
              id: id,
              iteminfo: response.data,
            };
            outbound
              .reviewInfoFetch(id)
              .then((response) => {
                item.metaReview = response.data;
                outbound
                  .fetchStyles(id)
                  .then((response) => {
                    item.styles = response.data.results;
                    relatedArray.push(item);
                  })
                  .then(() => {
                    if (relatedArray.length === relatedLength) {
                      res.send(relatedArray);
                    }
                  })
                  .catch((err) => {
                    res.send(err);
                  });
              })
              .catch((err) => {
                res.send(err);
              });
          })
          .catch((err) => {
            res.send(err);
          });
      });
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(port, () => {
  console.log(`Server is live and happenin on port ${port}`);
});
