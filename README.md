## Goodreads quote scraper

The Goodreads' API has several endpoints. An endpoint that delivers all quotes, however, is not one. This API fetches all quotes classified under a particular tag.

This API uses [cheerio](https://cheerio.js.org/) to recursively scrape quotes results and deliever a JSON file containing quotes, authors, and an attribution link.
