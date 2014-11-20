# gulp-text2json [![Build Status](https://travis-ci.org/ChrisAckerman/gulp-text2json.svg?branch=master)](https://travis-ci.org/ChrisAckerman/gulp-text2json)

A Gulp plugin for compiling text files into adjacent JSON files that contain the contents of the
source files as a JSON encoded strings.

Since Node.js and browserify can use the `require()` to include JSON data, this makes it easy
to "require" a large block of text.

## Usage

```js
var text2json = require("gulp-text2json");

// JSON encode a single html file.
gulp.src("./src/foo.html")
	.pipe(text2json())
	.pipe(gulp.dest("./")); // ./src/foo.html.json

// JSON encode all the html files in your source tree.
gulp.src("./src/**/*.html")
	.pipe(text2json())
	.pipe(gulp.dest("./")); // ./src/**/*.html.json

// JSON encode all the files and move them into the "json" directory.
gulp.src("./src/**/*.html")
	.pipe(text2json())
	.pipe(gulp.dest("./json")); // ./json/**/*.html.json
```

## License

The MIT License (MIT)

Copyright (c) 2014 Chris Ackerman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
