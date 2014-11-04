var clearRequire = require('clear-require');
var path = require('path');
var util = require('util');

exports.requireFresh = function requireFresh(module) {
	var resolved = path.resolve(module);
	clearRequire(resolved);
	return require(resolved);
};

exports.requireAndInject = function requireAndInject(session, module) {
	var obj = exports.requireFresh(module);
	util._extend(session.context, obj);
};







