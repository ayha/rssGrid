/*!
 * rssGrid PACKAGED v0.1
 * Get RSS Feed and build a newsfeed grid with the help of Isotope for positioning
 * Dependency: JQuery Isotope http://isotope.metafizzy.co
 */
(function ( $ ) {
$.fn.rssGrid = function(options){
	var feed_data =[];
	var entries = [];
	var feed_count = 0;
	var settings = $.extend({
		"sources": [],
		"newsCount": 5,
		"boxWidth" : 300,
		"containerWidth":"100%",
		"showSource": false
	}, options);
	
	function init(){
		feed_count = settings.sources.length;
		for(var i=0; i<feed_count; i++){
			parseRSS(settings.sources[i].url);
		}
	}
	
	function parseRSS(feed_title, feed_image, feed_url){
		$.ajax({
	  		url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num='+settings.newsCount+'&callback=?&q=' + encodeURIComponent(feed_url),
		    dataType: 'json',
		    success: function(data) {
		      //console.log(data.responseData.feed);
		      feed_data.push(data.responseData.feed);
		    
		    }
	  });
	}
	
	
	
	function debugOutput(msg){
		$("#debug_console").html($("#debug_console").html()+"\n\n&gt;&gt; "+msg);
	}
	
	init();
	
	return this;	
}

}(jQuery));
