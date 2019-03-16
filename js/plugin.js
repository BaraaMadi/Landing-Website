/* global $, jQuery, alert */
$(document).ready(function () {
    "use strict";

    // Nice Scroll

    $("html").niceScroll({
        cursorcolor:"#888",
        zindex:999999,
        cursorwidth:"7px"
    });

    $('.carousel').carousel({
        interval: 6000  /* 6 min bettwen one slide to another*/
    });  

    //Show Color Option Div When Click On The Gear 
    $(".gear-check").click(function () {

        $(".color-option").fadeToggle(); 

    });

    //Change Theme Color On Click
    var colorLi = $(".color-option ul li"),
        scrollButton = $("#scroll-top");

    colorLi
        .eq(0).css("backgroundColor", "#296F42").end() 
        .eq(1).css("backgroundColor", "#66c2a5").end()
        .eq(2).css("backgroundColor", "#fdae6b").end()
        .eq(3).css("backgroundColor", "#8da0cb");

    colorLi.click(function () {

        $("link[href*='theme']").attr("href", $(this).attr("data-value"));

    }); 
    // Caching The Scroll Top Element

    $(window).on("scroll", function () {

        if ($(this).scrollTop() >= 700) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
        // show button     // hidden button
    });
    // click on to scroll top
    scrollButton.click(function () {
        $("html,body").stop().animate({scrollTop: 0}, 600);

    });
});

// Loading Screen
$(window).on('load', function () {
    "use strict";
    // Loading Element
    $(".loading-overlay .spinner").fadeOut(2000, function () {  
        // Show The Scroll
        $("body").css("overflow", "auto");
        $(this).parent().fadeOut(2000, function () {   $(this).remove();

                                                   });
    });


});

