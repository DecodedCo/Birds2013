// ensure the web page (DOM) has loaded
document.addEventListener("DOMContentLoaded", function () {

   // Create a popcorn instance by calling the Youtube player plugin
 var birds = Popcorn.youtube(
   '#video-container',
   'http://www.youtube.com/watch?v=DBl7u8PIbUM' );

 // play the video right away
birds.play();

birds.on("pause",function(){
 
})

birds.code({
    start: 2,
    onStart: function() {
        displayTweet("330006945127886848");
    },
    onEnd: function() {
        
    }
});

birds.wikipedia({
  start: 0,
  end: 10,
  src: "http://en.wikipedia.org/wiki/Vannevar_Bush",
  title: "Vannevar Bush",
  target: "wikidiv"
});


birds.code({
    start: 10,
    onStart: function() {
        displayTweet("381130003653488640");
    },
    onEnd: function() {
        
    }
});


birds.lastfm({
      start: 5,
      end: 15,
      artist: "yacht",
      target: "lastfmdiv",
      apikey: "30ac38340e8be75f9268727cb4526b3d"
     });

 // add a footnote at 2 seconds, and remove it at 6 seconds
birds.footnote({
    start: 2,
    end: 6,
    text: "Pop!",
    target: "footnotediv"
 });


}, false);
