//Page Transition Settings



// Do on page load

Barba.Dispatcher.on('newPageReady', function(e) {
  var nav = document.getElementById('nav'),
      anchor = nav.getElementsByTagName('a'),
      current = window.location.pathname.split('/')[1];

  // remove active class from all
  for (var i = 0; i < anchor.length; i++) {
      anchor[i].className = "";
  }

  // search for url match to add active class
  for (var i = 0; i < anchor.length; i++) {
    var eval = anchor[i].href.split('/')[3];
    if(eval == current) {
      anchor[i].className = "active";
    }
  }

  // Load lazyload on pageload
  // window.lazySizesConfig = window.lazySizesConfig || {};
  // window.lazySizesConfig.expand = '400'; // preload imgs 400px outside viewport
  // window.lazySizes.init();

  lazysizes: (function(){
    window.lazySizesConfig = window.lazySizesConfig || {};
    //window.lazySizesConfig.init = false;

    return function() {
        window.lazySizesConfig.expand = 400;
        window.lazySizes.init();
    };
  })
})
