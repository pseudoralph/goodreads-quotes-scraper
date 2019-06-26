// https://www.digitalocean.com/community/tutorials/how-to-use-node-js-request-and-cheerio-to-set-up-simple-web-scraping

const cheerio = require('cheerio');
const request = require('request');
const baseUrl = 'https://www.goodreads.com';
const query = 'programming';
const url = `${baseUrl}/quotes/tag/${query}`;

const quotesDb = [];

request(url, (err, response, html) => {
  if (!err && response.statusCode === 200) {
    const $ = cheerio.load(html);
    const quoteContainers = $('.quoteDetails');

    quoteContainers.each((i, element) => {
      quotesDb.push({
        quote: $(element)
          .find('.quoteText')
          .text()
          .replace(/\n\s*/gm, '')
          .replace(/“|”|\n\s*|―.*$/g, '')
          .replace(/\n/g, ' '),
        author: $(element)
          .find('.authorOrTitle')
          .text()
          .replace(/\n\s*/gm, ''),
        url:
          baseUrl +
          $(element)
            .find('a.smallText')
            .attr('href')
      });
    });
  }
  console.log(quotesDb);
});
