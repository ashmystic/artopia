$(function() {
    flickeryInit('.carousel');
});

function flickeryInit(carousel) {
  $(carousel).flickity({
      "wrapAround": true,
      cellSelector: '.carousel-cell',
      arrowShape: 'M 0,50 L 60,00 L 50,30 L 80,30 L 80,70 L 50,70 L 60,100 Z'
  });
  $('.carousel').focus();
};
