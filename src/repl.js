var repl = require('repl');
var requireMagic = require('./magic.js').requireMagic,
    requireAndInject = require('./require.js').requireAndInject,
    watchModule = require('./watch.js');

module.exports = function otraVez(module, options) {
	var session = repl.start(options || '> ');
	session.on('exit', process.exit);

	session.context.require = function(module) {
		return requireMagic(session, module);
	};

	if(module) {
		requireAndInject(session, module);
		watchModule(session, module, 'content', requireAndInject);
	}
};