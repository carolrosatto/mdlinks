#! /usr/bin/env node

const mdLinks = require('./lib/index.js');
const path = process.argv[2];

mdLinks(path)
  .then((result) => {
    result.map ((item) => console.log(`text:${item.text}\nhref:${item.href}`));
  })
  .catch((error) => console.log(error));
