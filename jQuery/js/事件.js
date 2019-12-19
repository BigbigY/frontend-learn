var card = $('#card');
var cardTrigger = $('#card-trigger');

cardTrigger.on('click',
  function() {
    if(card.is(':visible')) {
          // card.hide();
          card.slideUp();
    } else {
          // card.show();
          card.slideDown();
    }

  })

card.on('mouseenter',function() {
  card.addClass('active');
})

card.on('mouseleave',function() {
  card.removeClass('active');
})
