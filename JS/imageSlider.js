$(document).ready(function(){
    setInterval(() =>{
        let contWidth = $('.sliderOuter').width()
        let left = $('.sliderInner').css('left').split('px')[0]

        let imgCount = 3
        if(left == contWidth*-1*(imgCount-1)){
            $('.sliderInner').animate({
                left: 0
            })
        }else{
            $('.sliderInner').animate({
                left: left-contWidth
            })
        }
    },5000)
});