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
                        scrollTop: target.offset().top - 56
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

$(document).ready(function() {
    $('.nav-list li a').on('click', function() {
        $('#bs-example-navbar-collapse-1').removeClass('in');
    });
});
