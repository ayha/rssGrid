/*!
 * rssGrid PACKAGED v0.1
 * Get RSS Feed and build a newsfeed grid with the help of Isotope for positioning
 * Dependency: JQuery Isotope http://isotope.metafizzy.co
 */
(function ( $ ) {
$.fn.rssGrid = function(options){
	
	var settings = $.extend({
		"sources": []
		
	}, options);
	
	function init(){
		console.log("settings" + settings.sources);	
	}
	
	
	return this.init();	
}

}(jQuery));
