'user strict';

$(function() {

    var width = 720;
    var animationSpeed = 1000;
    var pause = 1000;
    var currSlide = 1;

    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function(){
            $slideContainer.animate({'margin-left': '-='+width }, animationSpeed, function(){
                currSlide++;
                if(currSlide == $slides.length){
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }

    function stopSlider(){
        clearInterval(interval);
    }
    

    $slideContainer.on('mouseenter', pauseSlider).on('mouseleave', startSlider);

    startSlider();
});