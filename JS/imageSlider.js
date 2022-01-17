$(document).ready(function(){
    var width = 720;
    var animationSpeed = 1000;
    var pause = 1000;
    var currSlide = 1;

    var $sliderOuter = $('.sliderOuter');
    var $slideInner = $('.sliderInner', $sliderOuter);
    var $slides = $('.slide', $sliderOuter);

    var interval;

    function startSlider(){
        interval = setInterval(function(){
            $slideInner.animate({
                'margin-left': '-='+width }, animationSpeed, function(){
                if(++currSlide === $slides.length){
                    currSlide = 1;
                    $slideInner.css('margin-left', 0);
                }
            });
        }, pause);
    }
    startSlider();
});