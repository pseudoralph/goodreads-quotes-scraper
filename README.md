## Goodreads quote scraper

The Goodreads' API has several endpoints. An endpoint that delivers all quotes, however, is not one. This API fetches all quotes classified under a particular tag.

This API uses [cheerio](https://cheerio.js.org/) to recursively scrape quote results pages and delievers a JSON file containing quotes, authors, and an attribution link.

Making API calls this way is already **very slllllooooowwww**. So only the first 300 quotes (or less) are delivered per query. You may change this by adjusting the `limitFloor` value within the `getGoodreadsQuotes` module.

### Instructions

- clone this repo
- install dependencies using `npm install`
- start express server with `node index`
- access `/quotes` endpoint using `?tag=`

Example: `http://localhost:3000/quotes?tag=programming`

Only the first query is acknoledged. All others are ignored.
`/quotes?tag=programming` **not** `quotes?tag=programming&tag=humor`

### Response data

```
{
    "quotesReturned": 212,
    "responseTime": 14860,
    "queryTag": "programming",
    "data": [
        {
            "quote": "Talk is cheap. Show me the code.",
            "author": "Linus Torvalds",
            "url": "https://www.goodreads.com/quotes/437173-talk-is-cheap-show-me-the-code",
            "likes": 222,
            "tags": [
                "humor",
                "linux",
                "programming"
            ]
        },
        ...
}

```
