const cheerio = require('cheerio');
const axios = require('axios');
const baseUrl = 'https://www.goodreads.com';
const query = 'programming';

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

        if (!$('.next_page').hasClass('disabled')) {
          return Promise.resolve(baseUrl + $('.next_page').attr('href'));
        } else {
          return new Promise.reject('done');
        }
      }
    })
    .then(url => {
      recursively(url);
    })
    .catch(() => {
      console.log(quotesDb.length + ' results delivered');
    });
};

recursively();
