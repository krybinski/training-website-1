// Smooth scrolling
var width = $(window).width();

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                if (width <= 767) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                } else {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                }
                return false;
            }
        }
    });
});
