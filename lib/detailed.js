/**
 * @fileoverview Calls the template generator with the flag for generating multiple files set to false.
 * @author Marcelo S. Portugal <marceloquarion@gmail.com>
 */
'use strict';

const templateGenerator = require('./template-generator');
const minify = require('html-minifier').minify;

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = function(results) {
	return minify(templateGenerator.generateTemplate(results, false), {
		collapseWhitespace: true,
		minifyCSS: true,
		minifyURLs: true,
	});
};
