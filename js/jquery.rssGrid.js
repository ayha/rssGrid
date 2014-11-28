/*!
 * rssGrid PACKAGED v0.1
 * Get RSS Feed and build a newsfeed grid with the help of Isotope for positioning
 * Dependency: JQuery Isotope http://isotope.metafizzy.co
 */
(function ( $ ) {
$.fn.rssGrid = function(options){
	
	var settings = $.extend({
		"sources": [],
		"newsCount": 10,
		"boxWidth" : 300,
		"containerWidth":"100%"
	}, options);
	
	function init(){
		for(var i=0; i<settings.sources.length; i++){
			parseRSS(settings.sources[i].url);
		}
	}
	
	function parseRSS(feed_url){
		console.log(feed_url);
	}
	
	
	init();
	
	return this;	
}

}(jQuery));
