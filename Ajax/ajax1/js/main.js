var trigger = $('#trigger');
var card = $('#card');


var loaded = false;

// trigger.on('click',
//   function() {
//     // if(card.is(':visible'))
//     //   card.hide();
//     card.toggle();
//   })


// ajax
trigger.on('click',
  function() {
    if(card.is(':visible')) {
      card.slideUp();
    } else {
      if (!loaded) {
        card.load('card.html')
        loaded = true;
      }
      card.slideDown();
    }
  })
