const fs = require('fs');

function mdLinks (path){

    let regEx = (/\[(.*)\]\((http[s]?\:\/\/.+?)\)/gm);
    let regexUnit = /\[(.*)\]\((http[s]?\:\/\/.+?)\)/


    return new Promise((resolve, reject) => {
      fs.readFile('./texto.md', 'utf8', function(error, data) {
        if(error){
            reject("Deu erro")
        } else {
        const result = [];
        let linkPattern = data.match(regEx);
        linkPattern.map((link) => {
            let resultData = link.match(regexUnit);
            result.push({text: resultData[1], href: resultData[2]})
            resolve(result);
        })
    }})
    })
}
    
    // mdLinks()
    
    module.exports = mdLinks;