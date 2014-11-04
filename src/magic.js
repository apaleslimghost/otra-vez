var requireFresh = require('./require.js').requireFresh,
    watchModule  = require('./watch.js');

exports.requireKey = function requireKey(key) {
	return function(session, module) {
		session.context[key] = requireFresh(module);
	};
};

exports.requireMagic = function requireMagic(session, module) {
	var obj = requireFresh(module);

	process.nextTick(function() {
		var key = Object.keys(session.context).filter(function(m) {
			return session.context[m] === obj;
		})[0];

		if(key) {
			watchModule(session, module, key, exports.requireKey(key));
		}
	});

	return obj;
};