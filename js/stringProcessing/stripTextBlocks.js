var elementsToRemove = [ "blockquote", "pre", "code" ];

var elementsToRemoveRegex = new RegExp( "<(" + elementsToRemove.join( "|" ) + ")[^>]*?>(.*?)</\\1>", "ig" );

/**
 * Strips blockquotes, pre and code elements out of a text.
 *
 * @param {string} text The text to strip the elements from.
 * @returns {string} the text with elements removed.
 */
module.exports = function( text ) {
	text = text.replace( elementsToRemoveRegex, "" );
	return text;
};
