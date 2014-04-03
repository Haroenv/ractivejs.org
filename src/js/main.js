require([
	'ractive',
	'rvc!components/helloworld',

	'shared/utils/nav'
], function ( Ractive, HelloWorld ) {

	'use strict';

	window.Ractive = Ractive;

	new HelloWorld({ el: '[data-component="hello-world"]' });
});
