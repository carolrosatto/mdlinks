const fs = require('fs');

function mdLinks(path) {

  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', function (error, data) {
      if (error) {
        reject("Wrong path or archive");
      } else {
        let regEx = (/\[(.*)\]\((http[s]?\:\/\/.+?)\)/gm);
        let regexUnit = /\[(.*)\]\((http[s]?\:\/\/.+?)\)/;
        const result = [];
        let linkPattern = data.match(regEx);

        linkPattern.map((link) => {
          let resultData = link.match(regexUnit);
          result.push({ text: resultData[1], href: resultData[2] });
        });
        resolve(result);
      }
    });
  });
}

module.exports = mdLinks;