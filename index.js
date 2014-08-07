"use strict";

var pkg = require('./package');
var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

exports = module.exports = function gulpTextToJson()
{
	var stream = through.obj(function(file, enc, callback)
	{
		if (file.isBuffer()) {
			file = file.clone();
			file.contents = new Buffer(JSON.stringify(file.contents.toString()), 'utf8');
			file.path += '.json';
		} else if (file.isStream()) {
			this.emit('error', new PluginError(pkg.name, "Streams are not supported!"));
		}

		this.push(file);
		return callback();
	});

	return stream;
};
