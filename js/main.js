$(function(){
	"use strict";

	$('#tweet1').click(function(){
		console.log('clicked');
		$('.video-stream').css({
			'top': 'auto',
			'left': 'auto'
		}).animate({
			'width': 864,
			'height': 512,
			'bottom': '0px',
			'right': '0px'
		})
	})
	
	var fullScreenVideo = function(element){
		$(element).animate({
			'width': '100%',
			'height': '100%'
		})
	}

	$('#video').click(function(){
		fullScreenVideo('.video-stream');
	});

	resizeLayout();
})

$(window).resize(function(){
	resizeLayout();
})


function resizeLayout() {
	var windowWidth = $('body').innerWidth();
	//var remainingWidth = windowWidth - $('#meta-container').outerWidth();
	//$('#video-container').css('width',remainingWidth);
}

function displayTweet(tweetID) {
	$.ajax({
	    url: "https://api.twitter.com/1/statuses/oembed.json?id="+tweetID,
	            dataType: "jsonp",
	            success: function(data){
	            	console.log(data)
	                $('#content-stream').prepend(data.html);
	                resizeLayout();
	            }
	        });						
}