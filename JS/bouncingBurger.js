var canvas = document.getElementById('burgerCanvas');
var context = canvas.getContext('2d');

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

var cHeight = canvas.width;
var cHeight = canvas.height;

var x = 0, y = 0, r=50;

function bounceAnim(){
    context.save();

    context.clearRect(0,0,cWidth,cHeight);

    context.beginPath();
    context.strokeStyle = "blue";
    context.arc(x+r,y+r,r,0,Math.PI*2);
    context.stroke();


    x++;
    y++;
    context.restore();
}

setInterval(bounceAnim, 10);