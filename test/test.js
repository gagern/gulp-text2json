"use strict";
/* globals describe, it */

var should = require("should");
var pkg = require("../package");
var text2json = require('../');
var es = require("event-stream");
var File = require("vinyl");

function setup(test)
{
	return function(done)
	{
		var contents = 'A buffer with some content.';
		var path = '/foo/bar.txt';

		var file = new File({
			contents: new Buffer(contents),
			path: path
		});

		var instance = text2json();

		instance.write(file);

		test(done, instance, {
			contents: contents,
			path: path,
			file: file
		});
	};
}

describe(pkg.name, function()
{
	describe('in buffer mode', function()
	{
		it('should json encode the file.contents buffer', setup(function(done, instance, data)
		{
			instance.once('data', function(file)
			{
				should(file.isBuffer()).be.exactly(true);
				should(file.contents.toString('utf8')).be.exactly(JSON.stringify(data.contents));
				done();
			});
		}));

		it('should append ".json" to the file.path', setup(function(done, instance, data)
		{
			instance.once('data', function(file)
			{
				should(file.path).be.exactly(data.path + '.json');
				done();
			});
		}));

		it('should return a new file instance', setup(function(done, instance, data)
		{
			instance.once('data', function(file)
			{
				should(file).not.equal(data.file);
				done();
			});
		}));
	});
});

