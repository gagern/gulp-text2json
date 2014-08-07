"use strict";

var gulp = require("gulp");
var rename = require("gulp-rename");
var mocha = require("gulp-mocha");
var jshint = require("gulp-jshint");

gulp.task("default", ["test"], function()
{

});

gulp.task("hint", function()
{
	return gulp.src(["./gulpfile.js", "./index.js", "./src/**/*.js"])
		.pipe(jshint())
		.pipe(jshint.reporter("jshint-stylish"))
		.pipe(jshint.reporter("fail"));
});

gulp.task("test", ["hint"], function()
{
	return gulp.src(["./test/**/*.js"], { read: false })
		.pipe(mocha({ reporter: "spec" }));
});

