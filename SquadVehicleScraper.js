const request = require('request');
const cheerio = require('cheerio');

request('https://squad.fandom.com/wiki/Yehorivka', (error, response, html) => {
  if (!error && response.statusCode === 200) {
    const $ = cheerio.load(html);

    const rawWikiInput = $('.mw-parser-output');
    const rawWikiOutput = rawWikiInput
      .find('table')
      .next()
      .each((i, map) => {
        console.log($(map).text());
      });
  }
});
