/**
 * @fileoverview Provide zz.ui.mdl.radio base object.
 * @license Apache-2.0
 * @author popkov.aleksander@gmail.com (Popkov Alexander)
 */

goog.provide( 'zz.ui.mdl.radio' );

goog.require( 'goog.ui.decorate' );
goog.require( 'goog.ui.registry' );

goog.require( 'zz.ui.mdl.radio.tpl' );
goog.require( 'zz.ui.mdl.Radio' );
goog.require( 'zz.tests.models.SimplestDataset' );

/**
 * Base namespace for zz.ui.mdl.radio module.
 * @const
 */
zz.ui.mdl.radio = zz.ui.mdl.radio || { };

/**
 * Bootstrap module method.
 */
zz.ui.mdl.radio.bootstrap = function( ){

	goog.ui.registry.setDecoratorByClassName( zz.ui.mdl.RadioRenderer.CSS_CLASS, function( ){

		return new zz.ui.mdl.Radio( );
	} );

	var simpleModelDataset = goog.global.simpleModelDataset = new zz.tests.models.SimplestDataset( );
	var simpleModelDatarow = goog.global.simpleModelDatarow = simpleModelDataset.createFirst( );

    soy.renderElement( goog.dom.getElement( 'root' ), zz.ui.mdl.radio.tpl.default );

	var radio1 = goog.ui.decorate( goog.dom.getElement( 'a1' ) );
	var radio2 = goog.ui.decorate( goog.dom.getElement( 'b1' ) );

	radio1.setModel( simpleModelDataset, simpleModelDatarow, simpleModelDataset.datafield.str );
	radio2.setModel( simpleModelDataset, simpleModelDatarow, simpleModelDataset.datafield.str );

};

goog.exportSymbol( 'zz.ui.mdl.radio.bootstrap', zz.ui.mdl.radio.bootstrap );