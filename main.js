
var last_x,last_y;
canvas=document.getElementById("MyCanvas");
cts=canvas.getContext("2d");
var color="pink";
var lineWidth=14;
var width=screen.width;
var newWidth=screen.width-50;
var height=screen.height;
var newHeight=screen.height-50;

if (width<992){
document.getElementById("MyCanvas").width=newWidth;
document.getElementById.Id("MyCanvas").height=newHeight;
}
canvas.addEventListener("touchstart",mytouchstart);
function mytouchstart(e){
color=document.getElementById("Color").value;
lineWidth=document.getElementById("Width").value;
console.log("touchstart");
last_x=e.touches[0].clientX-canvas.offSetLeft;
last_y=e.touches[0].clientY-canvas.offSetTop;
}
canvas.addEventListener("touchmove",mytouchmove);
function mytouchmove(){
current_x=e.touches[0].clientX-canvas.offSetLeft;
current_y=e.touches[0].clientY-canvas.offSetTop;
cts.beginPath()
cts.strokeStyle=color;
cts.lineWidth=lineWidth;
cts.lineTo(current_x,current_y);
cts.stroke();
last_x=current_x;
last_y=current_y;
}
