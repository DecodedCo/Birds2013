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
})




})


