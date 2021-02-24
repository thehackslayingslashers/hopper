const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('nice');
});

app.listen(port, () => {
  console.log(`Server is live and happenin on ${port}`);
})