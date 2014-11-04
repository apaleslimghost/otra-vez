var fs = require('fs');
var path = require('path');

module.exports = function watchModule(session, module, context, fn) {
	var resolved = require.resolve(path.resolve(module));
	fs.watch(resolved, function(event) {
		if(event === 'change') {
			console.log(
				'\r' +
				'reloaded ' + context +
				' from ' + resolved
			);
			fn(session, module);
			session.displayPrompt();
		}
	});
};