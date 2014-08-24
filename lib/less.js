var through = require('through2');
var less = require('less');

module.exports = function(options, info) {
	return through(function(buffer, encoding, callback) {
		less.render(buffer.toString(), function (e, css) {
			if(e) {
				console.log(e.message);
				callback(null, buffer);
			} else {
				callback(null, css);
			}
		});
	});
};