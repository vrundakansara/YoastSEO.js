var getSubheadingsContents = require( "../stringProcessing/getSubheadings.js" ).getSubheadingContents;
var stripTextBlocks = require( "../stringProcessing/stripTextBlocks.js" );

/**
 * Checks if there is a subheading present in the text
 * @param {Paper} paper The Paper object to get the text from.
 * @returns {number} Number of headings found.
 */
module.exports = function( paper ) {
	var text = stripTextBlocks( paper.getText() );
	var headings = getSubheadingsContents( text ) || [];
	return headings.length;
};
