// All data acquired from open-source Squad Game Wiki: https://squad.fandom.com/wiki/Squad_Wiki

const request = require('request');
const cheerio = require('cheerio');

let mapList = [];
let vehicleList = [];

const loadMap = function (mapName) {
  request(
    `https://squad.fandom.com/wiki/${mapName}`,
    (error, response, html) => {
      if (!error && response.statusCode === 200) {
        const $ = cheerio.load(html);
        const rawWikiInput = $('.mw-parser-output');
        let rawMapOutput = rawWikiInput
          .find('table')
          .next()
          .each((i, map) => {
            if ($(map).text().includes('v')) {
              mapList.push($(map).text());
            }
          });
        mapList.pop();
        
        let rawVehicleOutput = rawWikiInput.find('td').find('p').text();
      }
    }
  );
};

loadMap('Gorodok');
