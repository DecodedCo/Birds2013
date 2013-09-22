// ensure the web page (DOM) has loaded
document.addEventListener("DOMContentLoaded", function () {

   // Create a popcorn instance by calling the Youtube player plugin
birds = Popcorn.youtube(
   '#video-container',
   'http://www.youtube.com/watch?v=DBl7u8PIbUM' );

 // play the video right away
birds.play();
birds.trigger("mute");

birds.on("pause",function(){
 
})

/*

Start editing here:

(although do feel free to play with the above, and all of it!)

*/

// This adds a tweet
birds.code({
    start: 2131,
    end: 2141,
    onStart: function() {
        displayTweet("20");
    },
    onEnd: function() {
        removeTweet()
    }
});

// Adds a YouTube video for the amount of time specified. 
// http://www.youtube.com/watch?v=En_2T7KH6RA
// The argument the addYoutube fn takes is the ID from the YouTube video

birds.code({
    start: 706,
    end: 1165,
    onStart: function() {
        addYoutube("En_2T7KH6RA");
    },
    onEnd: function() { 
        removeYoutube();
    }
});

// Adds a website in an iframe
// addIframe accepts three parameters: URL of site, title to display on page, and:
// third parameter is an ID that you make up so the removeIframe function knows which one to remove

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

// Wikipedia article
// Link and Title of article.

birds.wikipedia({
  start:50,
  end: 60,
  src: "http://en.wikipedia.org/wiki/Vannevar_Bush",
  title: "Vannevar Bush",
  target: "wikidiv" // this corresponds to the <div id="wikidiv"></div> in the HTML page
});



birds.code({
    start: 3332,
    end: 3342,
    onStart: function() {
        displayTweet("281255240811036673");
    },
    onEnd: function() {
        removeTweet()
    }
});
birds.code({
    start: 3394,
    end: 3404,
    onStart: function() {
        displayTweet("291236153296826368");
    },
    onEnd: function() {
        removeTweet()
    }
});
birds.code({
    start: 3399,
    end: 3409,
    onStart: function() {
        displayTweet("291252755975266304");
    },
    onEnd: function() {
        removeTweet()
    }
});
birds.code({
    start: 3416,
    end: 3426,
    onStart: function() {
        displayTweet("292684156859736064");
    },
    onEnd: function() {
        removeTweet()
    }
});
birds.code({
    start: 3575,
    end: 3585,
    onStart: function() {
        displayTweet("303957471012192256");
    },
    onEnd: function() {
        removeTweet()
    }
});
birds.code({
    start: 3590,
    end: 3600,
    onStart: function() {
        displayTweet("291937593887690753");
    },
    onEnd: function() {
        removeTweet()
    }
});
birds.code({
    start: 3610,
    end: 3620,
    onStart: function() {
        displayTweet("291955740011294720");
    },
    onEnd: function() {
        removeTweet()
    }
});
birds.code({
    start: 3720,
    end: 3730,
    onStart: function() {
        displayTweet("281306097783037954");
    },
    onEnd: function() {
        removeTweet()
    }
});
birds.code({
    start: 3737,
    end: 3747,
    onStart: function() {
        displayTweet("292252247654555652");
    },
    onEnd: function() {
        removeTweet()
    }
});
birds.code({
    start: 3926,
    end: 3936,
    onStart: function() {
        displayTweet("172388344246960128");
    },
    onEnd: function() {
        removeTweet()
    }
});
birds.code({
    start: 3941,
    end: 3951,
    onStart: function() {
        displayTweet("172391120364511232");
    },
    onEnd: function() {
        removeTweet()
    }
});
birds.code({
    start: 4077,
    end: 4087,
    onStart: function() {
        displayTweet("172395124016422912");
    },
    onEnd: function() {
        removeTweet()
    }
});
birds.code({
    start: 4117,
    end: 4127,
    onStart: function() {
        displayTweet("172399359059705856");
    },
    onEnd: function() {
        removeTweet()
    }
});
birds.code({
    start: 4223,
    end: 4233,
    onStart: function() {
        displayTweet("172424184717262848");
    },
    onEnd: function() {
        removeTweet()
    }
});
birds.code({
    start: 4380,
    end: 4390,
    onStart: function() {
        displayTweet("172417962597289985");
    },
    onEnd: function() {
        removeTweet()
    }
});
birds.code({
    start: 4541,
    end: 4551,
    onStart: function() {
        displayTweet("172590341390733312");
    },
    onEnd: function() {
        removeTweet()
    }
});
birds.code({
    start: 4608,
    end: 4618,
    onStart: function() {
        displayTweet("172650315210952704");
    },
    onEnd: function() {
        removeTweet()
    }
});
birds.code({
    start: 4630,
    end: 4640,
    onStart: function() {
        displayTweet("172660419880681472");
    },
    onEnd: function() {
        removeTweet()
    }
});
birds.code({
    start: 4635,
    end: 4647,
    onStart: function() {
        displayTweet("172663783360172032");
    },
    onEnd: function() {
        removeTweet()
    }
});
birds.code({
    start: 4786,
    end: 4796,
    onStart: function() {
        displayTweet("172731501820116992");
    },
    onEnd: function() {
        removeTweet()
    }
});
birds.code({
    start: 4891,
    end: 4901,
    onStart: function() {
        displayTweet("172951746421858305");
    },
    onEnd: function() {
        removeTweet()
    }
});
birds.code({
    start: 5030,
    end: 5040,
    onStart: function() {
        displayTweet("172996751001796608");
    },
    onEnd: function() {
        removeTweet()
    }
});

birds.code({
    start: 5102,
    end: 5112,
    onStart: function() {
        displayTweet("174455928333144064");
    },
    onEnd: function() {
        removeTweet()
    }
}); 




}, false);
