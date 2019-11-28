const fs = require('fs');

function mdLinks (){
    const result = [];
    let regEx = (/\[(.*)\]\((http[s]?\:\/\/.+?)\)/gm);
    let regexUnit = /\[(.*)\]\((http[s]?\:\/\/.+?)\)/
    return new Promise((resolve, reject) => {
    
    fs.readFile('./README.md', 'utf8', function(err, data) {
        let linkPattern = data.match(regEx);
        linkPattern.map((link) => {
            let resultDate = link.match(regexUnit);
            result.push({text: resultDate[1], href: resultDate[2]})
         })

        resolve(result);
        })
    })
}
    
    // mdLinks()
    
    module.exports = mdLinks;