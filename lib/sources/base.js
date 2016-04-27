/**
 * @fileoverview Provide zz.ui.mdl.radio base object.
 * @license Apache-2.0
 * @author popkov.aleksander@gmail.com (Popkov Alexander)
 */

goog.provide( 'zz.ui.mdl.radio' );

goog.require( 'zz.ui.mdl.radio.tpl' );
/**
 * Base namespace for zz.ui.mdl.radio module.
 * @const
 */
zz.ui.mdl.radio = zz.ui.mdl.radio || { };

/**
 * Bootstrap module method.
 */
zz.ui.mdl.radio.bootstrap = function( ){

    soy.renderElement( goog.dom.getElement( 'root' ), zz.ui.mdl.radio.tpl.default );

	var radio1 = goog.ui.decorate( goog.dom.getElement( 'a1' ) );
	var radio2 = goog.ui.decorate( goog.dom.getElement( 'b1' ) );
};

goog.exportSymbol( 'zz.ui.mdl.radio.bootstrap', zz.ui.mdl.radio.bootstrap );