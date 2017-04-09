$(function() {
    // Time adjustment
    daylightInit();
});


function daylightInit() {

    // Time adjustment
    var header = $('.header-sky');
    var carousel = $('.carousel');
    var background = $('.item-portfolio.item-portfolio-new-items');
    var d = new Date();
    var n = d.getHours();
    if (n > 19 || n < 6) {
        // If time is after 7PM or before 6AM, apply night theme to carousel
        header.addClass("night-sky");
        carousel.addClass("night-gradient");
        background.addClass("night-ground");
    } else if ((n > 5 && n <= 8) || (n > 17 && n <= 20)) {
        // If time is between 5AM - 8AM or 5PM – 8PM sunrise/sunset theme to carousel
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
