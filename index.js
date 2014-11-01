var clearRequire = require('clear-require');
var repl = require('repl');
var fs = require('fs');
var path = require('path');
var util = require('util');

function requireFresh(module) {
	var resolved = path.resolve(module);
	clearRequire(resolved);
	return require(resolved);
}

function otraVez(module, options) {
	var session = repl.start(options || '> ');
	session.on('exit', process.exit);

	function requireAndInject(module) {
		var obj = requireFresh(module);
		util._extend(session.context, obj);
	}

	requireAndInject(module);
	fs.watch(path.resolve(module), function() {
		console.log('\rreloaded ' + module);
		requireAndInject(module);
		session.displayPrompt();
	});
}

module.exports = otraVez;