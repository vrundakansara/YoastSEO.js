let SnippetPreview = require("../js/snippetPreview.js");

require("../js/app.js");
let Factory = require( "./helpers/factory.js" );

describe("The snippet preview constructor", function() {
	it("accepts an App object as an opts property", function() {
		let mockApp = {
			rawData: {
				snippetTitle: "",
				snippetCite: "",
				snippetMeta: ""
			}
		};
		// Makes lodash think this is a valid HTML element
		let mockElement = [];
		mockElement.nodeType = 1;

		let snippetPreview = new SnippetPreview({
			analyzerApp: mockApp,
			targetElement: mockElement
		});

		expect(snippetPreview.refObj).toBe(mockApp);
	})
});

describe( "The SnippetPreview format functions", function(){
	it( "formats texts to use in the SnippetPreview", function(){
		// Makes lodash think this is a valid HTML element
		let mockElement = [];
		mockElement.nodeType = 1;

		let mockApp = {
			rawData: {
				snippetTitle: "<span>snippetTitle keyword</span>",
				snippetCite: "homeurl",
				snippetMeta: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies placerat nisl, in tempor ligula. Pellentesque in risus non quam maximus maximus sed a dui. In sed.",
				keyword: "keyword"
			},
			pluggable: {
				loaded: true,
				_applyModifications: function(name, text){return text}
			}
		};

		let snippetPreview = new SnippetPreview({
			analyzerApp: mockApp,
			targetElement: mockElement
		});

		expect( snippetPreview.formatTitle() ).toBe( "snippetTitle keyword" );
		expect( snippetPreview.formatMeta() ).toBe( "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies placerat nisl, in tempor ligula. Pellentesque in risus non quam maximus maximus sed " );
		expect( snippetPreview.formatCite() ).toBe( "homeurl/" );
		expect( snippetPreview.formatKeyword( "a string with keyword" ) ).toBe( "a string with<strong> keyword</strong>" );

		mockApp = {
			rawData: {
				snippetCite: "key-word",
				keyword: "key word"
			},
			pluggable: {
				loaded: true,
				_applyModifications: function(name, text){return text}
			}
		};

		snippetPreview = new SnippetPreview({
			analyzerApp: mockApp,
			targetElement: mockElement
		});
		expect( snippetPreview.formatCite() ).toBe ("<strong>key-word</strong>/" );
	});

	describe( "#formatKeywordUrl", function() {
		let snippetPreview, refObj, mockElement;

		beforeEach( function() {
			mockElement = Factory.buildMockElement();

			refObj = {
				rawData: { keyword: "key'word" }
			};

			snippetPreview = new SnippetPreview({
				analyzerApp: refObj,
				targetElement: mockElement
			});
		});

		it( "should highlight a keyword with an apostrophe", function() {
			//var keyword = "apo's";
			snippetPreview.data.urlPath = "keyword";

			expect( snippetPreview.formatCite() ).toBe( "<strong>keyword</strong>/")
		});
	});

	describe( "The snippet preview format functions with special characters like periods", function() {
		// Makes lodash think this is a valid HTML element
		let mockElement = [];
		mockElement.nodeType = 1;

		let mockApp = {
			rawData: {
				snippetMeta: "This is the Yoast SEO 3.9 release",
				keyword: "Yoast SEO 3.9"
			},
			pluggable: {
				loaded: true,
				_applyModifications: function(name, text){return text}
			}
		};

		let snippetPreview = new SnippetPreview({
			analyzerApp: mockApp,
			targetElement: mockElement
		});

		it( "should highlight the keywords", function(){
			expect( snippetPreview.formatMeta() ).toBe( "This is the<strong> Yoast SEO 3.9 </strong>release")
		});
	} );
	describe( "The snippet preview format functions with special characters like periods", function() {
		// Makes lodash think this is a valid HTML element
		let mockElement = [];
		mockElement.nodeType = 1;

		let mockApp = {
			rawData: {
				snippetMeta: "If you like Yoast SEO, please give a 5* rating",
				keyword: "5* rating"
			},
			pluggable: {
				loaded: true,
				_applyModifications: function(name, text){return text}
			}
		};

		let snippetPreview = new SnippetPreview({
			analyzerApp: mockApp,
			targetElement: mockElement
		});

		it( "should highlight the keywords", function(){
			expect( snippetPreview.formatMeta() ).toBe( "If you like Yoast SEO, please give a<strong> 5* rating</strong>" )
		});
	});
} );

describe( "Adds dashes to the keyword for highlighting in the snippet", function() {
	it( "returns a keyword with strong tags", function() {
		let mockApp = {
			rawData: {
				keyword: "keyword"
			}
		};
		let mockElement = [];
		mockElement.nodeType = 1;

		let snippetPreview = new SnippetPreview({
			analyzerApp: mockApp,
			targetElement: mockElement
		});

		expect(snippetPreview.formatKeyword( "this is a keyword" ) ).toBe( "this is a<strong> keyword</strong>" );
	});
});

describe( "Adds dashes to the keyword for highlighting in the snippet", function() {
	it( "returns a keyword with strong tags", function() {
		let mockApp = {
			rawData: {
				keyword: "key-word"
			}
		};
		let mockElement = [];
		mockElement.nodeType = 1;

		let snippetPreview = new SnippetPreview({
			analyzerApp: mockApp,
			targetElement: mockElement
		});
		expect(snippetPreview.formatKeyword( "this is a key-word with dash" ) ).toBe( "this is a<strong> key-word </strong>with dash" );
	});
});

describe( "Formats the keyword in the title with diacritics", function() {
	it( "returns a keyword with strong tags", function(){
		let mockApp = {
			rawData: {
				keyword: "Slovníček pojmû"
			}
		};
		let mockElement = [];
		mockElement.nodeType = 1;

		let snippetPreview = new SnippetPreview({
			analyzerApp: mockApp,
			targetElement: mockElement
		});
		expect(snippetPreview.formatKeyword( "this is a Slovníček pojmû with diacritic" ) ).toBe( "this is a<strong> Slovníček pojmû </strong>with diacritic" );
	});
});

describe( "Highlights individual keywords from a keyword combination", function() {
	it( "highlights individual keywords from a keyword combination in the same order as the keyword", function(){
		let mockApp = {
			rawData: {
				keyword: "individual keywords"
			}
		};
		let mockElement = [];
		mockElement.nodeType = 1;

		let snippetPreview = new SnippetPreview({
			analyzerApp: mockApp,
			targetElement: mockElement
		});
		expect(snippetPreview.formatKeyword( "this is an individual of keywords" ) ).toBe( "this is an<strong> individual </strong>of<strong> keywords </strong>" );
	});

	it( "highlights individual keywords from a keyword combination in reversed order", function(){
		let mockApp = {
			rawData: {
				keyword: "individual keywords"
			}
		};
		let mockElement = [];
		mockElement.nodeType = 1;

		let snippetPreview = new SnippetPreview({
			analyzerApp: mockApp,
			targetElement: mockElement
		});
		expect(snippetPreview.formatKeyword( "this is an individual of keywords" ) ).toBe( "this is a <strong> keyword </strong>of<strong> individual </strong>" );
	});
});
