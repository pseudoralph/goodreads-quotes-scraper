## Goodreads quote scraper

The Goodreads' API has several endpoints. An endpoint that delivers all quotes, however, is not one. This API fetches all quotes classified under a particular tag.

This API uses [cheerio](https://cheerio.js.org/) to recursively scrape quote results pages and delievers a JSON file containing quotes, authors, and an attribution link.

Making API calls this way is already **very slllllooooowwww**. So only the first 300 quotes (or less) are delivered per query. You may change this by adjusting the `limitFloor` value within the `getGoodreadsQuotes` module.

### Instructions

- clone this repo
- install dependencies using `npm install`
- start express server with `node index`
- access `/quotes` endpoint

Example: `https://localhost:3000/quotes?programming`

Only the first query is acknoledged. All others are ignored.
`/quotes?programming` **not** `quotes?programming&humor`
