$(function() {
    // Gallery functionality
    galleryInit('.image-preview');
});


function galleryInit(item) {

  // When thumbnail is clicked on replace image link with full-sized image
    $(item).click(function(evt) {
      var id = $(this).attr('href');
      var image = $(id).find('img');
      var fullImageURL = image.data('full-image');

      var loadedImage = new Image();
      loadedImage.src = fullImageURL;

      loadedImage.onload = function(){
          image.replaceWith(loadedImage);
      }
   });

};
