const getGoodreadsQuotes = require('./getGoodreadsQuotes');
const express = require('express');
const app = express();

app.get('/db', (req, res) => {
  res.send('ok');
});

app.get('/quotes', (req, res) => {
  const query = req.query['tag'] || 'programming';
  const sessionData = [];
  const start = Date.now();

  getGoodreadsQuotes(
    `https://www.goodreads.com/quotes/tag/${query}`,
    sessionData
  ).then(response => {
    res.send({
      quotesReturned: response.length,
      responseTime: Math.floor(Date.now() - start),
      queryTag: query,
      data: response
    });
  });
});

app.listen(3000);
