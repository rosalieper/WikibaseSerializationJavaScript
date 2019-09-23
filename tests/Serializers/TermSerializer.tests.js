/**
 * @license GPL-2.0+
 * @author H. Snater < mediawiki@snater.com >
 */
( function( wb, QUnit ) {
'use strict';
	var TermSerializer = require( './../../src/Serializers/TermSerializer.js' );

QUnit.module( 'wikibase.serialization.TermSerializer' );

var testSets = [
	[
		new wb.datamodel.Term( 'en', 'test' ),
		{ language: 'en', value: 'test' }
	]
];

QUnit.test( 'serialize()', function( assert ) {
	assert.expect( 1 );
	var termSerializer = new TermSerializer();

	for( var i = 0; i < testSets.length; i++ ) {
		assert.deepEqual(
			termSerializer.serialize( testSets[i][0] ),
			testSets[i][1],
			'Test set #' + i + ': Serializing successful.'
		);
	}
} );

}( wikibase, QUnit ) );
