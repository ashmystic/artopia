$(function() {
    // Time adjustment
    daylightInit();
});


function daylightInit() {

    // Time adjustment
    var header = $('.header-sky');
    var carousel = $('.carousel');
    var background = $('.item-portfolio');
    var d = new Date();
    var n = d.getHours();
    console.log(n);
    if (n > 19 || n < 6) {
        // If time is after 7PM or before 6AM, apply night theme to carousel
        header.addClass("night-sky");
        carousel.addClass("night-gradient");
        background.addClass("night-ground");
    } else if (n > 16 && n <= 19) {
        // If time is between 4PM – 7PM sunset theme to carousel
        header.addClass("sunset-sky");
        carousel.addClass("sunset-gradient");
        background.addClass("sunset-ground");
    } else {
        // Else use ‘day’ theme
        header.addClass("day-sky");
        carousel.addClass("day-gradient");
        background.addClass("day-ground");
    }
};
