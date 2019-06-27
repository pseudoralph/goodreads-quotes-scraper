const getGoodreadsQuotes = require('./getGoodreadsQuotes');

const express = require('express');
const app = express();

app.get('/quotes', (req, res) => {
  const query = req.query['tag'] || 'programming';
  const sessionData = [];

  getGoodreadsQuotes(
    `https://www.goodreads.com/quotes/tag/${query}`,
    sessionData
  ).then(response => {
    res.send(response);
  });
});

app.listen(3000);
