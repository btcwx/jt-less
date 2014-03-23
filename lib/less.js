var through = require('through2');
var less = require('less');

module.exports = function(options, info) {
	return through(function(buffer, encoding, callback) {
		less.render(buffer.toString(), function (e, css) {
			if(e) throw e;

			callback(null, css);
		});
	});
};