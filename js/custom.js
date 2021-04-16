$(function () {
    // Padding Top On Navbar Fixed Height
    $("body").css("paddingTop", $(".navbar").innerHeight());
    // Hide Form Search Reload On Website
    $('.navbar .search .show-hide').hide();
    // Show Search Box
    $('.navbar .search .icon i').click(function () {
        $('.navbar .search .show-hide').show();
    });
    // Hide Search Box
    $('.navbar .search .show-hide').click(function () {
        $(this).hide();
    });
    //Caching The Scroll Top Element
    $(window).scroll(function () {
        $(this).scrollTop() >= 3000 ? $("#scroll-top").show() : $("#scroll-top").hide();
    });
    //Click On Button To Scroll Top
    $("#scroll-top").click(function () {
        $("html , body").animate({
            scrollTop: 0
        }, 2000);
    });
});

// NumberTop Count In JavaScript

var num1 = document.getElementById("count1");
var num2 = document.getElementById("count2");
var num3 = document.getElementById("count3");
var num4 = document.getElementById("count4");

function animatedCounter(element, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = 0;
    if (end > start) {
        increment = 1
    } else {
        increment = -1;
    }

    var timer = setInterval(function () {
        current += increment;
        element.textContent = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, duration);

}

animatedCounter(num1, 1, 2100, 5);
animatedCounter(num2, 1, 971, 10);
animatedCounter(num3, 1, 3600, 5);
animatedCounter(num4, 1, 36, 10);
