const cheerio = require('cheerio');
const axios = require('axios');
const query = 'truth';

const url = `https://www.goodreads.com/quotes/tag/${query}`;

const sessionData = [];

axios.get(url).then(response => {
  if (response.status === 200) {
    const $ = cheerio.load(response.data);
    const quoteContainers = $('.quoteDetails');

    const baseUrl = 'https://www.goodreads.com';
    // const limitFloor = 30 * 10; // about 30 quotes per page

    // console.log(
    //   quoteContainers
    //     .first()
    //     .find('.quoteText')
    //     .text()
    //   // .replace(/\n\s*|“|”/gm, '')
    // );

    quoteContainers.each((__, element) => {
      console.log(
        $(element)
          .find('.authorOrTitle')
          .text()
          .replace(/\n\s*|(,)\s*.*/gm, '')
      );
    });

    // .replace(/\n\s*|“|”/gm, '')

    // quoteContainers.each((__, element) => {
    //   sessionData.push({
    //     quote: $(element)
    //       .find('.quoteText')
    //       .text()
    //       .replace(/\n\s*/gm, '')
    //       .replace(/“|”|\n\s*|―.*$/g, '')
    //       .replace(/\n/g, ' '),
    //     author: $(element)
    //       .find('.authorOrTitle')
    //       .text()
    //       .replace(/\n\s*/gm, ''),
    //     url:
    //       baseUrl +
    //       $(element)
    //         .find('a.smallText')
    //         .attr('href')
    //   });
    // });
    // console.log(sessionData);
  }
});
