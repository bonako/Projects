// Tutorial followed:
// https://www.youtube.com/watch?v=KkzVFB3Ba_o&t=220s


'use strict';

$(function() {
    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    //cache DOM
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider(){

        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function()
            {
                if(++currentSlide === $slides.length){
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }

    function stopSlider() {
        clearInterval(interval);
    }

    $slideContainer.on('mouseenter', stopSlider).on('mouseleave', startSlider);

    startSlider();

    //listen for mouseenter and pause
    //resume on mouseleave
})