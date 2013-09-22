// ensure the web page (DOM) has loaded
document.addEventListener("DOMContentLoaded", function () {

   // Create a popcorn instance by calling the Youtube player plugin
 var birds = Popcorn.youtube(
   '#video-container',
   'http://www.youtube.com/watch?v=DBl7u8PIbUM' );

 // play the video right away
birds.play();
birds.trigger("mute");

birds.on("pause",function(){
 
})

birds.code({
    start: 5,
    end: 25,
    onStart: function() {
        displayTweet("20");
    },
    onEnd: function() { 
        removeTweet()
    }
});

birds.code({
    start: 2,
    end: 20,
    onStart: function() {
        addYoutube("En_2T7KH6RA");
    },
    onEnd: function() { 
        removeYoutube();
    }
});

birds.code({
    start: 140,
    end: 160,
    onStart: function() {
        addIframe("http://bbc.co.uk/programmes/p003c1d3","In our time: Comedy in Ancient Greek Theatre","inourtime");
    },
    onEnd: function() { 
        removeIframe("inourtime");
    }
});



birds.wikipedia({
  start:50,
  end: 60,
  src: "http://en.wikipedia.org/wiki/Vannevar_Bush",
  title: "Vannevar Bush",
  target: "wikidiv"
});

 // add a footnote at 2 seconds, and remove it at 6 seconds
birds.footnote({
    start: 2,
    end: 6,
    text: "Pop!",
    target: "footnotediv"
 });


}, false);
