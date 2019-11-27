// Função exemplo oficina Rafa
// return new Promise((resolve, reject) => {
//     const lerOArquivo = 'banana [google](www.google.com.br)'
//     const result = [{href:'www.google.com.br',text:'google'}];
//         if('deuErro'){
//             reject('Deu um erro')}
//             resolve(resultado)}
        
function mdLinks (){
let regEx = (/(\[.*\]\(http[s]?\:\/\/.+?\))|(\[.*\]\(.+?\))/gm);


const fs = require('fs');
fs.readFile('./README.md', 'utf8', function(err, data) {
    let linkPattern = data.match(regEx);
    console.log(linkPattern);

})
}

mdLinks()

module.exports = mdLinks;