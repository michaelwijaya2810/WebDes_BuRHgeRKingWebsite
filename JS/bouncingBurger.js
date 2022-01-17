var canvas = document.getElementById('burgerCanvas');
var context = canvas.getContext('2d');

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

var cHeight = canvas.width;
var cHeight = canvas.height;
var img = document.getElementById('burgerCanvasimg');
var x = 0, y = 0, r=50;
var speedx =3;
var speedy =3;

img.style.width = "100px";
console.log(canvas.height -100);
function bounceAnim(){


    

    window.requestAnimationFrame(draw)
}

function draw()
{
    context.drawImage(img, x, y,100,100);

    
    x+=speedx;
    y+=speedy;

    if(x >= canvas.width - 100)
    {
        speedx *= -1;
    }
    if(x == 0)
    {
        speedx*= -1;
    }
    if(y==0)
    {
        speedy *= -1;
    }
    if(y >= canvas.height -100)
    {
        speedy *=-1
    }
    
    // context.moveTo(100,100);
    // context.lineTo(200,100);
    // context.strokeStyle = '#f0000'
    // context.stroke();
    window.requestAnimationFrame(draw)

}

// setInterval(bounceAnim, 10);

bounceAnim();