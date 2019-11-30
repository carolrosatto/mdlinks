#! /usr/bin/env node

const mdLinks = require('./lib/index');

mdLinks()
.then((result) => console.log(result))
.catch((err) => console.log(err))