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
  const { id } = req.params;
  const data = [];
  outbound
    .fetchItemById(id)
    .then((response) => {
      data.push(response.data);
    })
    .catch((error) => {
      data.push(error);
    })
    .then(() => outbound.reviewInfoFetch(id))
    .then((response) => {
      data.push(response.data);
    })
    .catch((error) => {
      data.push(error);
    })
    .then(() => outbound.fetchStyles(id))
    .then((response) => {
      data.push(response.data);
    })
    .catch((error) => {
      data.push(error);
    })
    .then(() => {
      res.send(data);
    });
});

app.post('/cart', (req, res) => {
  const { sku, quantity } = req.body.body;

  outbound
    .postCart(sku, quantity)
    .then(() => {
      res.status(201).send('created');
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post('/reviewsList/', (req, res) => {
  const { id, count, sort } = req.body;
  outbound
    .allReviewFetch(id, count, sort)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.post('/helpful', (req, res) => {
  const { id } = req.body;
  outbound
    .incrementHelpfulness(id)
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send('error');
    });
});

app.post('/reviews/add/', (req, res) => {
  outbound
    .addReview(req.body)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.get('/qa/questions/:id', (req, res) => {
  const { id } = req.params;

  outbound
    .fetchQuestions(id)
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

app.post('/qa/questions/:question_id/answers/', (req, res) => {
  const id = req.params.question_id;
  const postAnswerObj = {
    body: req.body.body,
    name: req.body.name,
    email: req.body.email,
    photos: req.body.photos,
  };
  debugger;
  outbound
    .postAnswer(postAnswerObj, id)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.put('/qa/questions/:question_id/helpful', (req, res) => {
  const questionId = req.params.question_id;
  outbound
    .upvoteQuestion(questionId)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.put('/qa/questions/:question_id/report', (req, res) => {
  const questionId = req.params.question_id;
  outbound
    .reportQuestion(questionId)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.put('/qa/answers/:answer_id/helpful', (req, res) => {
  const answerId = req.params.answer_id;
  outbound
    .upvoteAnswer(answerId)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.put('/qa/answers/:answer_id/report', (req, res) => {
  const answerId = req.params.answer_id;
  outbound
    .reportAnswer(answerId)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.get('/products/:product_id/related', (req, res) => {
  const currentid = req.params.product_id;
  const relatedArray = [];
  let relatedLength = 0;
  outbound
    .fetchRelatedArray(currentid)
    .then((response) => {
      const relatedIds = [...new Set(response.data)];
      for (let i = 0; i < relatedIds.length; i++) {
        if (relatedIds[i] === Number(currentid)) {
          relatedIds.splice(i, 1);
        }
      }
      relatedLength = relatedIds.length;
      relatedIds.map((id) => {
        outbound
          .fetchItemById(id)
          .then((response) => {
            const item = {
              id,
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

app.post('/interactions', (req, res) => {
  outbound.postInteractions(req.body)
    .then((response) => {
      res.status(201).send(response.data);
    })
    .catch((error) => {
      res.status(501).send(error);
    });
});

app.listen(port, () => {
  console.log(`Server is live and happenin on port ${port}`);
});
