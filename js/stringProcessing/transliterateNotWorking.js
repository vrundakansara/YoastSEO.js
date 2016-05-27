
// This is a working version without inserting non-written o's. 

var transliterationsMap = require( "../config/transliterations2.js" );

var nonVowelLanguagesTransliteration = function( text, map ) {
	var vowels = [];
	for ( var i = 0; i < map.vowels.length; i++ ) {
		text = text.replace(
			map.vowels[ i ].letter,
			map.vowels[ i ].alternative
		);
		vowels.push( map.vowels[ i ].alternative );
		//		console.log(vowels)
	}
	for ( var j = 0; j < map.consonants.length; j++ ) {
		var consonants = [];
		text = text.replace(
			map.consonants[ j ].letter,
			map.consonants[ j ].alternative
		);
		consonants.push( map.consonants[ j ].alternative );
		console.log( consonants );
	}
	for ( var m = 0; m < map.miscellaneous.length; m++ ) {
		text = text.replace(
			map.miscellaneous[ m ].letter,
			map.miscellaneous[ m ].alternative
		);
	}
	return text;
};
/*
 for ( var l = 0; l < map.vowels.length; l++ ) {
 regex = new RegExp( map.vowels[ l ].letter, "g" );
 //		console.log( regex );
 text = text.replace(
 regex,
 map.vowels[ l ].alternative
 );
 console.log(text)
 }
 var vowelString = vowels.join("");
 for ( var j = 0; j < map.consonantsMultiple.length; j++ ) {
 var regex = new RegExp( "(" + map.consonantsMultiple[ j ].letter + ")[^" + vowelString + "\r\n\t\f]" );
 console.log(regex)
 var match = text.match( regex );
 //	console.log(match)
 while( match !== null ) {
 console.log("match", match)
 text = text.replace( match[ 1 ], map.consonantsMultiple [ j ].alternative + "o" );
 match = text.match( regex );
 console.log("match", match)
 }
 }
 for ( var j = 0; j < map.consonantsSingle.length; j++ ) {
 var regex = new RegExp( "([" + map.consonantsSingle[ j ].letter + "])[^" + vowelString + "]" );
 console.log(regex)
 var match = text.match( regex );
 //	console.log(match)
 while( match !== null ) {
 console.log("match", match)
 text = text.replace( match[ 1 ], map.consonantsSingle [ j ].alternative + "o" );
 match = text.match( regex );
 console.log("match", match)
 }
 }
 for ( var k = 0; k < map.consonantsMultiple.length; k++ ) {
 regex = new RegExp( map.consonantsMultiple[ k ].letter, "g" );
 //	console.log( regex );
 text = text.replace(
 regex,
 map.consonantsMultiple[ k ].alternative
 );
 }

 for ( var k = 0; k < map.consonantsSingle.length; k++ ) {
 regex = new RegExp( map.consonantsSingle[ k ].letter, "g" );
 //	console.log( regex );
 text = text.replace(
 regex,
 map.consonantsSingle[ k ].alternative
 );
 }



 */



/**
 * Replaces all special characters from the text based on the transliterations map.
 *
 * @param {string} text The text to remove special characters from.
 * @param {string} locale The locale.
 * @returns {string} The text with all special characters replaced.
 */
module.exports = function( text, locale ) {
	var map = transliterationsMap( locale );
	if ( locale === "bn_BD" ) {
		return nonVowelLanguagesTransliteration( text, map );
	}

	for ( var i = 0; i < map.length; i++ ) {
		text = text.replace(
			map[ i ].letter,
			map[ i ].alternative
		);
	}
	return text;


// Not-working transliteration of Benghali, including adding 'o'.
/*
 /!*
 var nonVowelLanguagesTransliteration = function( text, map ) {
 var vowels = [];
 for ( var i = 0; i < map.vowels.length; i++ ) {
 /!*	text = text.replace(
 map.vowels[ i ].letter,
 map.vowels[ i ].alternative
 );
 *!/
 vowels.push( map.vowels[ i ].alternative );
 //		console.log(vowels)

 }
 for ( var l = 0; l < map.vowels.length; l++ ) {
 regex = new RegExp( map.vowels[ l ].letter, "g" );
 //		console.log( regex );
 text = text.replace(
 regex,
 map.vowels[ l ].alternative
 );
 console.log(text)
 }
 var vowelString = vowels.join("");
 for ( var j = 0; j < map.consonantsMultiple.length; j++ ) {
 var regex = new RegExp( "(" + map.consonantsMultiple[ j ].letter + ")[^" + vowelString + "\r\n\t\f]" );
 console.log(regex)
 var match = text.match( regex );
 //	console.log(match)
 while( match !== null ) {
 console.log("match", match)
 text = text.replace( match[ 1 ], map.consonantsMultiple [ j ].alternative + "o" );
 match = text.match( regex );
 console.log("match", match)
 }
 }
 for ( var j = 0; j < map.consonantsSingle.length; j++ ) {
 var regex = new RegExp( "([" + map.consonantsSingle[ j ].letter + "])[^" + vowelString + "]" );
 console.log(regex)
 var match = text.match( regex );
 //	console.log(match)
 while( match !== null ) {
 console.log("match", match)
 text = text.replace( match[ 1 ], map.consonantsSingle [ j ].alternative + "o" );
 match = text.match( regex );
 console.log("match", match)
 }
 }
 for ( var k = 0; k < map.consonantsMultiple.length; k++ ) {
 regex = new RegExp( map.consonantsMultiple[ k ].letter, "g" );
 //	console.log( regex );
 text = text.replace(
 regex,
 map.consonantsMultiple[ k ].alternative
 );
 }

 for ( var k = 0; k < map.consonantsSingle.length; k++ ) {
 regex = new RegExp( map.consonantsSingle[ k ].letter, "g" );
 //	console.log( regex );
 text = text.replace(
 regex,
 map.consonantsSingle[ k ].alternative
 );
 }

 for ( var m = 0; m < map.miscellaneous.length; m++ ) {
 text = text.replace(
 map.miscellaneous[ m ].letter,
 map.miscellaneous[ m ].alternative
 );
 }


 /!* for ( var j = 0; j < map.consonants.length; j++ ) {
 text = text.replace(
 map.consonants[j].letter,
 map.consonants[j].alternative
 );
 consonants.push( map.consonants[j].alternative );
 console.log(consonants)
 }
 *!/
 return text;
 };
 */

// Not-working Avaric transliteration for character after vowel. 
var afterVowelLanguagesTransliteration = function( text, map ) {
	for ( var i = 0; i < map.vowels.length; i++ ) {
		text = text.replace(
			map.vowels[ i ].letter,
			map.vowels[ i ].alternative
		);
		console.log( text );
	}
	for ( var j = 0; j < map.lettersAfterVowel.length; j++ ) {
		var regex = new RegExp( "[aAeEoOiIuU](" + map.lettersAfterVowel[ j ].letter + ")", "g" );
		console.log( regex );
		var match = text.match( regex );
		console.log("match", match)
		console.log("match1", match[1])
		text = text.replace( match[ 1 ], map.lettersAfterVowel[ j ].alternative );
	}
	for ( var k = 0; k < map.consonants.length; k++ ) {
		text = text.replace(
			map.consonants[ k ].letter,
			map.consonants[ k ].alternative
		);
		console.log( text );
	}
	return text;
};


	/** @module stringProcessing/replaceDiacritics */

// This version uses 'x' as a placeholder on positions that possibly should get an 'o'. 
// It is not working properly: the for loop using 'm' as an iterator replaces the wrong x's. 
// Other problem: it inserts o's within consonant clusters like 'st'


	var transliterationsMap = require( "../config/transliterations3.js" );

	var nonVowelLanguagesTransliteration = function( text, map ) {
		var vowels = [];
		for ( var i = 0; i < map.vowels.length; i++ ) {
			text = text.replace(
				map.vowels[ i ].letter,
				map.vowels[ i ].alternative
			);
			vowels.push( map.vowels[ i ].alternative );
			//		console.log(vowels)
		}
		for ( var j = 0; j < map.consonants.length; j++ ) {
			var consonants = [];
			text = text.replace(
				map.consonants[ j ].letter,
				map.consonants[ j ].alternative
			);
			consonants.push( map.consonants[ j ].alternative );
			//console.log( consonants );
		}
		for ( var m = 0; m < map.miscellaneous.length; m++ ) {
			text = text.replace(
				map.miscellaneous[ m ].letter,
				map.miscellaneous[ m ].alternative
			);
		}
		//var vowelString = vowels.join("");
		for ( var k = 0; k < map.consonants.length; k++ ) {
			var regex = new RegExp("(" + "x\\s" + ")");
			var match = text.match(regex);
			while (match !== null) {
				text = text.replace(match[1], " ");
				match = text.match(regex);
			}

		}
		for ( var m = 0; m < map.consonants.length; m++ ) {
			regex = new RegExp("(" + "x" + ")[^" + "aeoiu]");
			match = text.match(regex);
			while (match !== null) {
				console.log("match", match)
				text = text.replace(match[1], "o");
				match = text.match(regex);
				//console.log("match", match)
			}

		}
		for ( var l = 0; l < map.consonants.length; l++ ) {
			regex = new RegExp("(" + "x" + ")","g");
			match = text.match(regex);
			text = text.replace(match, "");
		}
		/*
		 for ( var l = 0; l < map.consonants.length; l++ ) {
		 regex = new RegExp("(" + "x" + ")","g");
		 //console.log(regex)
		 match = text.match(regex);
		 //console.log(text)
		 console.log(match);
		 text = text.replace(match, "")
		 //console.log(text)
		 /*while (match !== null) {
		 console.log("match", match)
		 text = text.replace(match[1], map.consonantsMultiple [k].alternative + "o");
		 match = text.match(regex);
		 console.log("match", match)
		 }
		 */
		/*
		 }
		 */

		return text;
	};
	/*
	 for ( var l = 0; l < map.vowels.length; l++ ) {
	 regex = new RegExp( map.vowels[ l ].letter, "g" );
	 //		console.log( regex );
	 text = text.replace(
	 regex,
	 map.vowels[ l ].alternative
	 );
	 console.log(text)
	 }
	 var vowelString = vowels.join("");
	 for ( var j = 0; j < map.consonantsMultiple.length; j++ ) {
	 var regex = new RegExp( "(" + map.consonantsMultiple[ j ].letter + ")[^" + vowelString + "\r\n\t\f]" );
	 console.log(regex)
	 var match = text.match( regex );
	 //	console.log(match)
	 while( match !== null ) {
	 console.log("match", match)
	 text = text.replace( match[ 1 ], map.consonantsMultiple [ j ].alternative + "o" );
	 match = text.match( regex );
	 console.log("match", match)
	 }
	 }
	 for ( var j = 0; j < map.consonantsSingle.length; j++ ) {
	 var regex = new RegExp( "([" + map.consonantsSingle[ j ].letter + "])[^" + vowelString + "]" );
	 console.log(regex)
	 var match = text.match( regex );
	 //	console.log(match)
	 while( match !== null ) {
	 console.log("match", match)
	 text = text.replace( match[ 1 ], map.consonantsSingle [ j ].alternative + "o" );
	 match = text.match( regex );
	 console.log("match", match)
	 }
	 }
	 for ( var k = 0; k < map.consonantsMultiple.length; k++ ) {
	 regex = new RegExp( map.consonantsMultiple[ k ].letter, "g" );
	 //	console.log( regex );
	 text = text.replace(
	 regex,
	 map.consonantsMultiple[ k ].alternative
	 );
	 }

	 for ( var k = 0; k < map.consonantsSingle.length; k++ ) {
	 regex = new RegExp( map.consonantsSingle[ k ].letter, "g" );
	 //	console.log( regex );
	 text = text.replace(
	 regex,
	 map.consonantsSingle[ k ].alternative
	 );
	 }



	 */



	/**
	 * Replaces all special characters from the text based on the transliterations map.
	 *
	 * @param {string} text The text to remove special characters from.
	 * @param {string} locale The locale.
	 * @returns {string} The text with all special characters replaced.
	 */
	module.exports = function( text, locale ) {
		var map = transliterationsMap( locale );
		if ( locale === "bn_BD" ) {
			return nonVowelLanguagesTransliteration( text, map );
		}

		for ( var i = 0; i < map.length; i++ ) {
			text = text.replace(
				map[ i ].letter,
				map[ i ].alternative
			);
		}
		return text;
	};

	
	
	// Spec for Bengali
	var transliteration = require( "../../js/stringProcessing/transliterate3.js" );

	describe("a test removing special characters from text", function( ){
		it("returns a Bengali string without special characters.", function(  ){
			expect( transliteration( "র ধারাবাহিকতায় ১৯৪৭ সালের ভারত বিভাগের সময় পাকিস্তানের পূর্ব অংশ (পূর্ব পাকিস্তান) হিসেবে বাংলাদেশের সীমানা নির্ধারিত হয়। পূর্ব পাকিস্তানের প্রতি বৈষম্যের কারণে দীর্ঘ আন্দোলনের এক পর্যায়ে ১৯৭১ রক্তক্ষয়ী যুদ্ধের মাধ্যমে বাংলাদেশ স্বাধীন রাষ্ট্র হিসেবে আত্মপ্রকাশ করে। সংবিধান অনুসারে বাংলাদেশে সংসদীয় পদ্ধতিতে পরিচালিত সরকার প্রতিষ্ঠিত। বাংলাদেশ নাতিশীতোষ্ণ জলবায়ুর দেশ। বর্ষার সময়ম ", "bn_BD" ) ).toBe( "aaiiuureaioauksjnsrkkhgghngcchjjhntthdddhrhntthddhnpphbbhmyyrlshshsh" );
		});

		it("returns a Bengali string without special characters.", function(  ){
			expect( transliteration( "অ আ ই ঈ উ ঊ ঋ এ ঐ ও ঔ ক্ষ জ্ঞ শ্র ক খ গ ঘ ঙ চ ছ জ ঝ ঞ ট ঠ ড ড় ঢ ঢ় ণ ত থ দ ধ ন প ফ ব ভ ম য য় র ল শ ষ স হ", "bn_BD" ) ).toBe( "a a i i u u r e ai o au ks jn sr k kh g gh ng c ch j jh n t th d d dh rh n t th d dh n p ph b bh m y y r l sh sh s h" );
		});

		it("returns a Bengali string without special characters.", function(  ){
			expect( transliteration( "সমস্ত মানুষ স্বাধীনভাবে সমান মর্যাদা এবং অধিকার নিয়ে জন্মগ্রহণ করে তাঁদের বিবেক এবং বুদ্ধি আছে সুতরাং সকলেরই একে অপরের প্রতি ভ্রাতৃত্বসুলভ মনোভাব নিয়ে আচরণ করা উচিত্", "bn_BD" ) ).toBe( "Shomosto manush shadhinbhabe shoman morjada ebong odhikar niye jonmogrohon kore. Tader bibek ebong buddhi achhe; shutorang shokoleri ekey oporer proti bhratrittoshulobh monobhab niye achoron kora uchit." );
		});

		it("returns an Bengali string without special characters.", function(  ){
			expect( transliteration( "নিয়ে আচরণ করা উচিত্ |", "bn_BD" ) ).toBe( "niye achoron kora uchit" );
		});

		it("returns an Bengali string without special characters.", function(  ){
			expect( transliteration( "সমস্ত মানুষ স্বাধীনভাবে সমান মর্যাদা এবং অধিকার নিয়ে জন্মগ্রহণ করে তাঁদের বিবেক এবং বুদ্ধি আছে সুতরাং সকলেরই একে অপরের প্রতি ভ্রাতৃত্বসুলভ মনোভাব নিয়ে আচরণ করা উচিত্", "bn_BD" ) ).toBe( "kora" );
		});


		it("returns an Bengali string without special characters.", function(  ){
			expect( transliteration( "করা", "bn_BD" ) ).toBe( "kora" );
		});

		it("returns an Bengali string without special characters.", function(  ){
			expect( transliteration( "নিয়ে আচরণ করা উচিত্", "bn_BD" ) ).toBe( "niye achoron kora uchit" );
		});

	});

	
	
	// config for Bengali transliteration2
	var getLanguage = function ( locale ) {
		return locale.split( "_" )[ 0 ];
	};

	module.exports = function( locale ) {
		switch( getLanguage( locale ) ) {
			case "bn":
				// Source: বাংলা একাডেমী ব্যবহারিক বাংলা অভিধান Bangla Academy Byaboharik Bangla Abhidhan (Bangla Academy
				// Functional Bengali Dictionary) (16th reprint ed.). DHaka 1000, Bangladesh: Bangla Academy. Nov 2012.
				// p. আট্রিশ (তালিকা -৪). ISBN 984-07-5071-2. (BA from https://en.wikipedia.org/wiki/Romanisation_of_Bengali#Romanisation_reference)
				// and https://en.wikipedia.org/wiki/Bengali_alphabet#Vowels
				return {
					vowels: [
						{
							letter: /[\u0985]|[\u0986]/g,
							alternative: "a"
						},
						{
							letter: /[\u0987]|[\u0988]/g,
							alternative: "i"
						},
						{
							letter: /[\u0989]|[\u098a]/g,
							alternative: "u"
						},

						{ letter: /[\u098F]/g, alternative: "e" },
						{ letter: /[\u0990]/g, alternative: "ai" },
						{ letter: /[\u0993]/g, alternative: "o" },
						{ letter: /[\u0994]/g, alternative: "au" },
						{ letter: /[\u09BE]/g, alternative: "a" },
						{ letter: /[\u09BF]/g, alternative: "i" },
						// \u09C0 can also be "ee"
						{ letter: /[\u09C0]/g, alternative: "i" },
						{ letter: /[\u09C1]/g, alternative: "u" },
						// \u09C2 can also be "oo"
						{ letter: /[\u09C2]/g, alternative: "u" },
						{ letter: /[\u09C3]/g, alternative: "ri" },
						{ letter: /[\u09C7]/g, alternative: "e" },
						{ letter: /[\u09C8]/g, alternative: "oi" },
						// \u09CB can also be "u"
						{ letter: /[\u09CB]/g, alternative: "o" },
						{ letter: /[\u09CC]/g, alternative: "ou" }
					],
					consonants: [
						{ letter: /[\u0999]/g, alternative: "ng" },
						{ letter: /[\u0982]/g, alternative: "ng" },
						{ letter: /([\u099C][\u099E])/g, alternative: "jn" },
						{ letter: /([\u09B6][\u09cd][\u09B0])/g, alternative: "sr" },
						{ letter: /[\u09AF]/g, alternative: "y" },
						{ letter: /[\u09A1]/g, alternative: "d" },
						{ letter: /([\u09CD][\u09AC])/g, alternative: "v" },
						{ letter: /([\u0995][\u09cd][\u09B7])/g, alternative: "ks" },
						{ letter: /[\u0995]/g, alternative: "k" },
						{ letter: /[\u0996]/g, alternative: "kh" },
						{ letter: /[\u0997]/g, alternative: "g" },
						{ letter: /[\u0998]/g, alternative: "gh" },
						{ letter: /[\u099A]/g, alternative: "c" },
						{ letter: /[\u099B]/g, alternative: "ch" },
						{ letter: /[\u099C]/g, alternative: "j" },
						{ letter: /[\u099D]/g, alternative: "jh" },
						{ letter: /[\u09A1]/g, alternative: "d" },
						{
							letter: /[\u099F|\u09A4]/g,
							alternative: "t"
						},
						{ letter: /[\u09A0]/g, alternative: "th" },
						{
							letter: /[\u09A3|\u099E|\u09A8]/g,
							alternative: "n"
						},
						{ letter: /([\u09A2][\u09BC])/g, alternative: "rh" },
						{ letter: /[\u09A2]/g, alternative: "dh" },
						{ letter: /[\u09A5]/g, alternative: "th" },
						{ letter: /[\u09A6]/g, alternative: "d" },
						{ letter: /[\u09A7]/g, alternative: "dh" },
						{ letter: /[\u09AA]/g, alternative: "p" },
						{ letter: /[\u09AB]/g, alternative: "ph" },
						{ letter: /[\u09AC]/g, alternative: "b" },
						{ letter: /[\u09AD]/g, alternative: "bh" },
						{ letter: /[\u09AE]/g, alternative: "m" },

						{ letter: /[\u09AF]/g, alternative: "y" },
						{ letter: /[\u09B2]/g, alternative: "l" },
						{ letter: /[\u09B8]/g, alternative: "s" },
						{ letter: /[\u09B6]/g, alternative: "sh" },
						{ letter: /[\u09B7]/g, alternative: "sh" },
						{
							letter: /[\u098B|\u09B0]/g,
							alternative: "r"
						},
						{
							letter: /[\u0983\u09B9]/g,
							alternative: "h"
						},
						{ letter: /[\u0981|\u09BC|\u09CD]/g, alternative: "" }

					],
					miscellaneous: [
						{ letter: /[\u09E6]/g, alternative: "0" },
						{ letter: /[\u09E7]/g, alternative: "1" },
						{ letter: /[\u09E8]/g, alternative: "2" },
						{ letter: /[\u09E9]/g, alternative: "3" },
						{ letter: /[\u09EA]/g, alternative: "4" },
						{ letter: /[\u09EB]/g, alternative: "5" },
						{ letter: /[\u09EC]/g, alternative: "6" },
						{ letter: /[\u09ED]/g, alternative: "7" },
						{ letter: /[\u09EE]/g, alternative: "8" },
						{ letter: /[\u09EF]/g, alternative: "9" },
						{ letter: /[\u09CD]/g, alternative: "" }
					]
				};
				break;


		}
	};

//config for Bengali transliteration 3

	var getLanguage = function ( locale ) {
		return locale.split( "_" )[ 0 ];
	};

	module.exports = function( locale ) {
		switch( getLanguage( locale ) ) {
			case "bn":
				// Source: বাংলা একাডেমী ব্যবহারিক বাংলা অভিধান Bangla Academy Byaboharik Bangla Abhidhan (Bangla Academy
				// Functional Bengali Dictionary) (16th reprint ed.). DHaka 1000, Bangladesh: Bangla Academy. Nov 2012.
				// p. আট্রিশ (তালিকা -৪). ISBN 984-07-5071-2. (BA from https://en.wikipedia.org/wiki/Romanisation_of_Bengali#Romanisation_reference)
				// and https://en.wikipedia.org/wiki/Bengali_alphabet#Vowels
				return {
					vowels: [
						{
							letter: /[\u0985]|[\u0986]/g,
							alternative: "a"
						},
						{
							letter: /[\u0987]|[\u0988]/g,
							alternative: "i"
						},
						{
							letter: /[\u0989]|[\u098a]/g,
							alternative: "u"
						},

						{ letter: /[\u098F]/g, alternative: "e" },
						{ letter: /[\u0990]/g, alternative: "ai" },
						{ letter: /[\u0993]/g, alternative: "o" },
						{ letter: /[\u0994]/g, alternative: "au" },
						{ letter: /[\u09BE]/g, alternative: "a" },
						{ letter: /[\u09BF]/g, alternative: "i" },
						// \u09C0 can also be "ee"
						{ letter: /[\u09C0]/g, alternative: "i" },
						{ letter: /[\u09C1]/g, alternative: "u" },
						// \u09C2 can also be "oo"
						{ letter: /[\u09C2]/g, alternative: "u" },
						{ letter: /[\u09C3]/g, alternative: "ri" },
						{ letter: /[\u09C7]/g, alternative: "e" },
						{ letter: /[\u09C8]/g, alternative: "oi" },
						// \u09CB can also be "u"
						{ letter: /[\u09CB]/g, alternative: "o" },
						{ letter: /[\u09CC]/g, alternative: "ou" }
					],
					consonants: [
						{ letter: /[\u0999]/g, alternative: "ngx" },
						{ letter: /[\u0982]/g, alternative: "ngx" },
						{ letter: /([\u099C][\u099E])/g, alternative: "jnx" },
						{ letter: /([\u09B6][\u09cd][\u09B0])/g, alternative: "srx" },
						{ letter: /[\u09AF]/g, alternative: "yx" },
						{ letter: /[\u09A1]/g, alternative: "dx" },
						{ letter: /([\u09CD][\u09AC])/g, alternative: "vx" },
						{ letter: /([\u0995][\u09cd][\u09B7])/g, alternative: "ksx" },
						{ letter: /[\u0995]/g, alternative: "kx" },
						{ letter: /[\u0996]/g, alternative: "khx" },
						{ letter: /[\u0997]/g, alternative: "gx" },
						{ letter: /[\u0998]/g, alternative: "ghx" },
						{ letter: /[\u099A]/g, alternative: "cx" },
						{ letter: /[\u099B]/g, alternative: "chx" },
						{ letter: /[\u099C]/g, alternative: "jx" },
						{ letter: /[\u099D]/g, alternative: "jhx" },
						{ letter: /[\u09A1]/g, alternative: "dx" },
						{
							letter: /[\u099F|\u09A4]/g,
							alternative: "tx"
						},
						{ letter: /[\u09A0]/g, alternative: "thx" },
						{
							letter: /[\u09A3|\u099E|\u09A8]/g,
							alternative: "nx"
						},
						{ letter: /([\u09A2][\u09BC])/g, alternative: "rhx" },
						{ letter: /[\u09A2]/g, alternative: "dhx" },
						{ letter: /[\u09A5]/g, alternative: "thx" },
						{ letter: /[\u09A6]/g, alternative: "dx" },
						{ letter: /[\u09A7]/g, alternative: "dhx" },
						{ letter: /[\u09AA]/g, alternative: "px" },
						{ letter: /[\u09AB]/g, alternative: "phx" },
						{ letter: /[\u09AC]/g, alternative: "bx" },
						{ letter: /[\u09AD]/g, alternative: "bhx" },
						{ letter: /[\u09AE]/g, alternative: "mx" },

						{ letter: /[\u09AF]/g, alternative: "yx" },
						{ letter: /[\u09B2]/g, alternative: "lx" },
						{ letter: /[\u09B8]/g, alternative: "sx" },
						{ letter: /[\u09B6]/g, alternative: "shx" },
						{ letter: /[\u09B7]/g, alternative: "shx" },
						{
							letter: /[\u098B|\u09B0]/g,
							alternative: "rx"
						},
						{
							letter: /[\u0983\u09B9]/g,
							alternative: "hx"
						},
						{ letter: /[\u0981|\u09BC|\u09CD]/g, alternative: "" }

					],
					consonantsRegex: [
						{ letter: "[\u0999]", alternative: "ngx" },
						{ letter: "[\u0982]", alternative: "ngx" },
						{ letter: "([\u099C][\u099E])", alternative: "jnx" },
						{ letter: "([\u09B6][\u09cd][\u09B0])", alternative: "srx" },
						{ letter: "[\u09AF]", alternative: "yx" },
						{ letter: "[\u09A1]", alternative: "dx" },
						{ letter: "([\u09CD][\u09AC])", alternative: "vx" },
						{ letter: "([\u0995][\u09cd][\u09B7])", alternative: "ksx" },
						{ letter: "[\u0995]", alternative: "kx" },
						{ letter: "[\u0996]", alternative: "khx" },
						{ letter: "[\u0997]", alternative: "gx" },
						{ letter: "[\u0998]", alternative: "ghx" },
						{ letter: "[\u099A]", alternative: "cx" },
						{ letter: "[\u099B]", alternative: "chx" },
						{ letter: "[\u099C]", alternative: "jx" },
						{ letter: "[\u099D]", alternative: "jhx" },
						{ letter: "[\u09A1]", alternative: "dx" },
						{
							letter: "[\u099F|\u09A4]",
							alternative: "tx"
						},
						{ letter: "[\u09A0]", alternative: "thx" },
						{
							letter: "[\u09A3|\u099E|\u09A8]",
							alternative: "nx"
						},
						{ letter: "([\u09A2][\u09BC])", alternative: "rhx" },
						{ letter: "[\u09A2]", alternative: "dhx" },
						{ letter: "[\u09A5]", alternative: "thx" },
						{ letter: "[\u09A6]", alternative: "dx" },
						{ letter: "[\u09A7]", alternative: "dhx" },
						{ letter: "[\u09AA]", alternative: "px" },
						{ letter: "[\u09AB]", alternative: "phx" },
						{ letter: "[\u09AC]", alternative: "bx" },
						{ letter: "[\u09AD]", alternative: "bhx" },
						{ letter: "[\u09AE]", alternative: "mx" },

						{ letter: "[\u09AF]", alternative: "yx" },
						{ letter: "[\u09B2]", alternative: "lx" },
						{ letter: "[\u09B8]", alternative: "sx" },
						{ letter: "[\u09B6]", alternative: "shx" },
						{ letter: "[\u09B7]", alternative: "shx" },
						{
							letter: "[\u098B|\u09B0]",
							alternative: "rx"
						},
						{
							letter: "[\u0983\u09B9]",
							alternative: "hx"
						},
						{ letter: "[\u0981|\u09BC|\u09CD]", alternative: "" }

					],
					miscellaneous: [
						{ letter: /[\u09E6]/g, alternative: "0" },
						{ letter: /[\u09E7]/g, alternative: "1" },
						{ letter: /[\u09E8]/g, alternative: "2" },
						{ letter: /[\u09E9]/g, alternative: "3" },
						{ letter: /[\u09EA]/g, alternative: "4" },
						{ letter: /[\u09EB]/g, alternative: "5" },
						{ letter: /[\u09EC]/g, alternative: "6" },
						{ letter: /[\u09ED]/g, alternative: "7" },
						{ letter: /[\u09EE]/g, alternative: "8" },
						{ letter: /[\u09EF]/g, alternative: "9" },
						{ letter: /[\u09CD]/g, alternative: "" }
					]
				};
				break;


		}
	};

// Spec for avaric
	it("returns an Avaric string without special characters.", function(  ){
		expect( transliteration( "гъГЪгьГЬгӏГӀкъКЪкьКЬкӏКӀлъЛЪтӏТӀбБвВгГдДёЁжЖзЗиИйЙкКлЛмМнНпПpPсСтТуУфФхХхъХЪхьХЬхӏХӀцЦцӏЦӀчЧчӏЧӀшШщЩъЪыЫьЬэЭюЮяЯ", "av" ) ).toBe( "gGhHghGhqQlLkhKhlLthThbBwWgGdDeEzhZhzZiIjJkKlLmMnNpPrRsStTuUfFxXqQxXhHcCcCchChchhChhshShshchShchxXyYeEjuJujaJa" );
	});
	it("returns an Avaric string without special characters.", function(  ){
		expect( transliteration( "е ве ие е", "av" ) ).toBe( "je we ije je" );
	});

// Config for Avaric
	case "av":
	// Source: http://transliteration.eki.ee/pdf/Avar.pdf
	// ‘ь’ is the so-called soft sign, indicating a sound change (palatalization) of the preceding consonant.
	// In text it is transliterated to a character similar to an apostroph: ′.
	// Omittance in slugs is recommended (if not in one of the listed letter combinations).
	return {
		vowels: [
			{ letter: /[\u0451]/g, alternative: "e" },
			{ letter: /[\u0401]/g, alternative: "E" },
			{ letter: /[\u0443]/g, alternative: "u" },
			{ letter: /[\u0423]/g, alternative: "U" },
			{ letter: /[\u0438]/g, alternative: "i" },
			{ letter: /[\u0418]/g, alternative: "I" },
			{ letter: /[\u044D]/g, alternative: "e" },
			{ letter: /[\u042D]/g, alternative: "E" },
			{ letter: /[\u044E]/g, alternative: "ju" },
			{ letter: /[\u042E]/g, alternative: "Ju" },
			{ letter: /[\u044F]/g, alternative: "ja" },
			{ letter: /[\u042F]/g, alternative: "Ja" }
		],
		lettersAfterVowel: [
			{ letter: "\u0435", alternative: "je" }
		],
		consonants: [
			{ letter: /^[\u0435]/g, alternative: "je" },
			{ letter: /[\s][\u0435]/g, alternative: " je" },
			{ letter: /[\u0435]/g, alternative: "e" },
			{ letter: /([\u0433][\u044A])/g, alternative: "g" },
			{ letter: /([\u0413][\u042A])/g, alternative: "G" },
			{ letter: /([\u0433][\u044C])/g, alternative: "h" },
			{ letter: /([\u0413][\u042C])/g, alternative: "H" },
			{ letter: /([\u0433][\u04CF])/g, alternative: "gh" },
			{ letter: /([\u0413][\u04C0])/g, alternative: "Gh" },
			{ letter: /([\u043A][\u044A])/g, alternative: "q" },
			{ letter: /([\u041A][\u042A])/g, alternative: "Q" },
			{ letter: /([\u043A][\u044C])/g, alternative: "l" },
			{ letter: /([\u041A][\u042C])/g, alternative: "L" },
			{ letter: /([\u043A][\u04CF])/g, alternative: "kh" },
			{ letter: /([\u041A][\u04C0])/g, alternative: "Kh" },
			{ letter: /([\u043B][\u044A])/g, alternative: "l" },
			{ letter: /([\u041B][\u042A])/g, alternative: "L" },
			{ letter: /([\u0442][\u04CF])/g, alternative: "th" },
			{ letter: /([\u0422][\u04C0])/g, alternative: "Th" },
			{ letter: /([\u0445][\u044A])/g, alternative: "q" },
			{ letter: /([\u0425][\u042A])/g, alternative: "Q" },
			{ letter: /([\u0445][\u044C])/g, alternative: "x" },
			{ letter: /([\u0425][\u042C])/g, alternative: "X" },
			{ letter: /([\u0445][\u04CF])/g, alternative: "h" },
			{ letter: /([\u0425][\u04C0])/g, alternative: "H" },
			{ letter: /([\u0446][\u04CF])/g, alternative: "c" },
			{ letter: /([\u0426][\u04C0])/g, alternative: "C" },
			{ letter: /([\u0447][\u04CF])/g, alternative: "chh" },
			{ letter: /([\u0427][\u04C0])/g, alternative: "Chh" },
			{ letter: /[\u0431]/g, alternative: "b" },
			{ letter: /[\u0411]/g, alternative: "B" },
			{ letter: /[\u0432]/g, alternative: "w" },
			{ letter: /[\u0412]/g, alternative: "W" },
			{ letter: /[\u0433]/g, alternative: "g" },
			{ letter: /[\u0413]/g, alternative: "G" },
			{ letter: /[\u0434]/g, alternative: "d" },
			{ letter: /[\u0414]/g, alternative: "D" },
			{ letter: /[\u0436]/g, alternative: "zh" },
			{ letter: /[\u0416]/g, alternative: "Zh" },
			{ letter: /[\u0437]/g, alternative: "z" },
			{ letter: /[\u0417]/g, alternative: "Z" },
			{ letter: /[\u0439]/g, alternative: "j" },
			{ letter: /[\u0419]/g, alternative: "J" },
			{ letter: /[\u043A]/g, alternative: "k" },
			{ letter: /[\u041A]/g, alternative: "K" },
			{ letter: /[\u043B]/g, alternative: "l" },
			{ letter: /[\u041B]/g, alternative: "L" },
			{ letter: /[\u043C]/g, alternative: "m" },
			{ letter: /[\u041C]/g, alternative: "M" },
			{ letter: /[\u043D]/g, alternative: "n" },
			{ letter: /[\u041D]/g, alternative: "N" },
			{ letter: /[\u0070]/g, alternative: "r" },
			{ letter: /[\u0050]/g, alternative: "R" },
			{ letter: /[\u043F]/g, alternative: "p" },
			{ letter: /[\u041F]/g, alternative: "P" },
			{ letter: /[\u0441]/g, alternative: "s" },
			{ letter: /[\u0421]/g, alternative: "S" },
			{ letter: /[\u0442]/g, alternative: "t" },
			{ letter: /[\u0422]/g, alternative: "T" },
			{ letter: /[\u0444]/g, alternative: "f" },
			{ letter: /[\u0424]/g, alternative: "F" },
			{ letter: /[\u0445]/g, alternative: "x" },
			{ letter: /[\u0425]/g, alternative: "X" },
			{ letter: /[\u0446]/g, alternative: "c" },
			{ letter: /[\u0426]/g, alternative: "C" },
			{ letter: /[\u0447]/g, alternative: "ch" },
			{ letter: /[\u0427]/g, alternative: "Ch" },
			{ letter: /[\u0448]/g, alternative: "sh" },
			{ letter: /[\u0428]/g, alternative: "Sh" },
			{ letter: /[\u0449]/g, alternative: "shch" },
			{ letter: /[\u0429]/g, alternative: "Shch" },
			{
				letter: /[\u044C\u042C]/g,
				alternative: ""
			},
			{ letter: /[\u044A]/g, alternative: "x" },
			{ letter: /[\u042A]/g, alternative: "X" },
			{ letter: /[\u044B]/g, alternative: "y" },
			{ letter: /[\u042B]/g, alternative: "Y" }
		]
	};
	break;
	
//	Translitarations Bengali for transliterate1
	
	case "bn":
	// Source: বাংলা একাডেমী ব্যবহারিক বাংলা অভিধান Bangla Academy Byaboharik Bangla Abhidhan (Bangla Academy
	// Functional Bengali Dictionary) (16th reprint ed.). DHaka 1000, Bangladesh: Bangla Academy. Nov 2012.
	// p. আট্রিশ (তালিকা -৪). ISBN 984-07-5071-2. (BA from https://en.wikipedia.org/wiki/Romanisation_of_Bengali#Romanisation_reference)
	// and https://en.wikipedia.org/wiki/Bengali_alphabet#Vowels
	return {
		vowels: [
			{
				letter: "\u0985|\u0986",
				alternative: "a"
			},
			{
				letter: "\u0987|\u0988",
				alternative: "i"
			},
			{
				letter: "\u0989|\u098a",
				alternative: "u"
			},

			{ letter: "\u098F", alternative: "e" },
			{ letter: "\u0990", alternative: "ai" },
			{ letter: "\u0993", alternative: "o" },
			{ letter: "\u0994", alternative: "au" },
			{ letter: "\u09BE", alternative: "a" },
			{ letter: "\u09BF", alternative: "i" },
			// \u09C0 can also be "ee"
			{ letter: "\u09C0", alternative: "i" },
			{ letter: "\u09C1", alternative: "u" },
			// \u09C2 can also be "oo"
			{ letter: "\u09C2", alternative: "u" },
			{ letter: "\u09C3", alternative: "ri" },
			{ letter: "\u09C7", alternative: "e" },
			{ letter: "\u09C8", alternative: "oi" },
			// \u09CB can also be "u"
			{ letter: "\u09CB", alternative: "o" },
			{ letter: "\u09CC", alternative: "ou" }
		],
		consonantsMultiple:
			[
				{ letter: "(\u099C\u09CD\u099E)", alternative: "jn" },
				{ letter: "(\u09B6\u09CD\u09B0)", alternative: "sr" },
				{ letter: "(\u09AF\u09BC)", alternative: "y" },
				{ letter: "(\u09CD\u09AF)", alternative: "y" },
				{ letter: "(\u09A2\u09BC)", alternative: "rh" },
				{ letter: "(\u09A1\u09BC)", alternative: "d" },
				{ letter: "(\u09CD\u09AC)", alternative: "v" },
				{ letter: "(\u0995\u09CD\u09B7)", alternative: "ks" }
			],
		consonantsSingle: [

			{ letter: "\u0995", alternative: "k" },
			{ letter: "\u0996", alternative: "kh" },
			{ letter: "\u0997", alternative: "g" },
			{ letter: "\u0998", alternative: "gh" },
			{ letter: "\u0999", alternative: "ng" },
			{ letter: "\u099A", alternative: "c" },
			{ letter: "\u099B", alternative: "ch" },
			{ letter: "\u099C", alternative: "j" },
			{ letter: "\u099D", alternative: "jh" },
			{ letter: "\u09A1", alternative: "d" },
			{
				letter: "\u099F|\u09A4",
				alternative: "t"
			},
			{ letter: "\u09A0", alternative: "th" },
			{
				letter: "\u09A3|\u099E|\u09A8",
				alternative: "n"
			},

			{ letter: "\u09A2", alternative: "dh" },
			{ letter: "\u09A5", alternative: "th" },
			{ letter: "\u09A6", alternative: "d" },
			{ letter: "\u09A7", alternative: "dh" },
			{ letter: "\u09AA", alternative: "p" },
			{ letter: "\u09AB", alternative: "ph" },
			{ letter: "\u09AC", alternative: "b" },
			{ letter: "\u09AD", alternative: "bh" },
			{ letter: "\u09AE", alternative: "m" },

			{ letter: "\u09AF", alternative: "y" },
			{ letter: "\u09B2", alternative: "l" },
			{
				letter: "\u09B6|\u09B7",
				alternative: "sh"
			},
			{ letter: "\u09B8", alternative: "s" },
			{
				letter: "\u098B|\u09B0",
				alternative: "r"
			},
			{
				letter: "\u0983\u09B9",
				alternative: "h"
			},
			{ letter: "\u0981|\u09bc", alternative: "" }

		],
		miscellaneous: [
			{ letter: /[\u09E6]/g, alternative: "0" },
			{ letter: /[\u09E7]/g, alternative: "1" },
			{ letter: /[\u09E8]/g, alternative: "2" },
			{ letter: /[\u09E9]/g, alternative: "3" },
			{ letter: /[\u09EA]/g, alternative: "4" },
			{ letter: /[\u09EB]/g, alternative: "5" },
			{ letter: /[\u09EC]/g, alternative: "6" },
			{ letter: /[\u09ED]/g, alternative: "7" },
			{ letter: /[\u09EE]/g, alternative: "8" },
			{ letter: /[\u09EF]/g, alternative: "9" },
			{ letter: /[\u09CD]/g, alternative: "" }
		]
	};

	break;
