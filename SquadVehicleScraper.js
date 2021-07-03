// All data acquired from open-source Squad Game Wiki: https://squad.fandom.com/wiki/Squad_Wiki

const request = require('request');
const cheerio = require('cheerio');

request('https://squad.fandom.com/wiki/Yehorivka', (error, response, html) => {
  if (!error && response.statusCode === 200) {
    const $ = cheerio.load(html);
    let mapList = [];
    const rawWikiInput = $('.mw-parser-output');
    const rawWikiOutput = rawWikiInput
      .find('table')
      .next()
      .each((i, map) => {
        if ($(map).text().includes('v')) {
          mapList.push($(map).text());
        }
      });
    mapList.pop();
    console.log(mapList);
  }
});
