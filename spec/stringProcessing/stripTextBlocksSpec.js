var stripTextBlocks = require( "../../js/stringProcessing/stripTextBlocks.js" );

describe( "Removes certain blocks from the text that should not be analyzed", function(){
	it( "returns a text with the blocks removed", function(){
		var text = "a text with a <code>codesample</code> in it.";
		expect( stripTextBlocks( text ) ).toBe( "a text with a  in it." );
	} );

	it( "returns a text with the blocks removed in capitals.", function(){
		var text = "a text with a <CODE>codesample</CODE> in it.";
		expect( stripTextBlocks( text ) ).toBe( "a text with a  in it." );
	} );

	it( "returns a text that is the same as the input", function(){
		var text = "a simple text string.";
		expect( stripTextBlocks( text ) ).toBe( "a simple text string." );
	} );

	it( "returns a text with partial tags untouched", function(){
		var text = "a string with a partial <code>tag.";
		expect( stripTextBlocks( text ) ).toBe( "a string with a partial <code>tag." );
	} );

	it( "returns a text with partial tags untouched", function(){
		var text = "a string with a partial </code>tag.";
		expect( stripTextBlocks( text ) ).toBe( "a string with a partial </code>tag." );
	} );

	it( "returns a text with partial tags untouched", function(){
		var text = "a string with a partial <pre><code></pre></code>tag.";
		expect( stripTextBlocks( text ) ).toBe( "a string with a partial </code>tag." );
	} );
} );
