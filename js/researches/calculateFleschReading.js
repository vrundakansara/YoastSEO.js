/** @module analyses/calculateFleschReading */

var cleanText = require( "../stringProcessing/cleanText.js" );
var stripNumbers = require( "../stringProcessing/stripNumbers.js" );
var stripHTMLTags = require( "../stringProcessing/stripHTMLTags.js" );
var countSentences = require( "../stringProcessing/countSentences.js" );
var countWords = require( "../stringProcessing/countWords.js" );
var getSentences = require( "../stringProcessing/getSentences.js" );
var countSyllables = require( "../stringProcessing/countSyllables.js" );

var forEach = require( "lodash/forEach" );

/**
 * This calculates the fleschreadingscore for a given text
 * The formula used:
 * 206.835 - 1.015 (total words / total sentences) - 84.6 ( total syllables / total words);
 *
 * @param {object} paper The paper containing the text
 * @returns {number} the score of the fleschreading test
 */
module.exports = function( paper ) {
	var text = paper.getText();
	if ( text === "" ) {
		return 0;
	}

	text = cleanText( text );
	text = stripHTMLTags( text );
	var wordCount = countWords( text );

	text = stripNumbers( text );
	var sentenceCount = countSentences( text );
	var syllableCount = 0;

	forEach( getSentences( text ), function( word ) {
		syllableCount += countSyllables( word );
	} );

	var score = 206.835 - ( 1.015 * ( wordCount / sentenceCount ) ) - ( 84.6 * ( syllableCount / wordCount ) );

	return score.toFixed( 1 );
};
