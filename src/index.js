var util = require('util');

module.exports = require('./repl.js');

util._extend(module.exports, require('./magic.js'));
util._extend(module.exports, require('./require.js'));
module.exports.watchModule = require('./watch.js');