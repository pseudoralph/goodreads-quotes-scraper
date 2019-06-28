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
              .replace(/―.*|\n\s*|“|”/gms, ''),
            author: $(element)
              .find('.authorOrTitle')
              .text()
              .replace(/\n\s*|(,)\s*.*/gm, ''),
            url:
              baseUrl +
              $(element)
                .find('a.smallText')
                .attr('href'),
            likes: parseInt(
              $(element)
                .find('a.smallText')
                .text()
                .replace(/\D/g, '')
            ),
            tags: $(element)
              .find('div.greyText, smallText')
              .text()
              .replace(/.*(tags):|\s*/gm, '')
              .split(',')
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
