const cheerio = require('cheerio');
const axios = require('axios');

module.exports = getGoodreadsQuotes = (url, sessionData) => {
  return new Promise(resolve => {
    axios.get(url).then(response => {
      if (response.status === 200) {
        const $ = cheerio.load(response.data);
        const quoteContainers = $('.quoteDetails');

        const baseUrl = 'https://www.goodreads.com';
        const limitFloor = 30 * 10; // about 30 quotes per page

        quoteContainers.each((__, element) => {
          sessionData.push({
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
          sessionData.length < limitFloor
        ) {
          return resolve(
            getGoodreadsQuotes(
              baseUrl + $('.next_page').attr('href'),
              sessionData
            )
          );
        } else {
          return resolve(sessionData);
        }
      }
    });
  });
};
