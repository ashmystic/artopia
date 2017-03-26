$(function() {
    // Gallery functionality
    galleryInit('.image-preview');
});


function galleryInit(item) {

  // When thumbnail is clicked on replace image link with full-sized image
    $(item).click(function(evt) {
      var id = $(this).attr('href');
      var image = $(id).find('img');
      image.attr('src', image.data('full-image'));
   });

};
