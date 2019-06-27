const cheerio = require('cheerio');
const axios = require('axios');
const baseUrl = 'https://www.goodreads.com';
const query = 'philosophy';
const limitFloor = 30 * 10; // about 30 quotes per page

const quotesDb = [];

const recursively = (url = `${baseUrl}/quotes/tag/${query}`) => {
  axios
    .get(url)
    .then(response => {
      if (response.status === 200) {
        console.log('currently scraping: ' + url);
        const $ = cheerio.load(response.data);
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

        if (
          !$('.next_page').hasClass('disabled') &&
          quotesDb.length < limitFloor
        ) {
          return Promise.resolve({
            continue: true,
            payload: baseUrl + $('.next_page').attr('href')
          });
        } else {
          return Promise.resolve({ continue: false, payload: quotesDb });
        }
      }
    })
    .then(response => {
      if (response.continue) {
        recursively(response.payload);
      } else {
        console.log(response.payload.length + ' quotes scraped');
      }
    })
    .catch(() => {
      console.log('error');
    });
};

recursively();
