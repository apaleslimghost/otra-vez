#!/usr/bin/env node

var otraVez = require('./repl.js');
var argv = require('subarg')(process.argv.slice(2));

otraVez(argv._[0], argv);