// https://www.digitalocean.com/community/tutorials/how-to-use-node-js-request-and-cheerio-to-set-up-simple-web-scraping

const cheerio = require('cheerio');
const request = require('request');
const url = 'https://www.goodreads.com/quotes/tag/programming';

request(url, (err, response, html) => {
  if (!err && response.statusCode === 200) {
    console.log(html);
  }
});
