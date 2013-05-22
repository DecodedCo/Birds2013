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

    $.getJSON('/Birds2013/nodejs/datafinal.json', function(data) {
        $.each(data, function(index) {
            //alert(data[index].TEST1);
            //alert(data[index].TEST2);
        });
    });
/*
$('#tweet-list .tweet').css('opacity',0);
$('#tweet-list .tweet').each(function(i){
    var $twt = $(this);
    setTimeout(function () { 
    	iterateTweets($twt); 
    }, 5000 * (i + 1));	
    $('#tweet-list').append($twt);
})

function iterateTweets($container) {
	$container.animate({
		'opacity':1
	},1000).delay(5000).animate({
		'opacity': 0
	})	
}*/


})


