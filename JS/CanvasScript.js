// Variables
var _draw = false;
var b1 = document.getElementById("button1");
var c = document.getElementById("myCanvas");
var cstyle = window.getComputedStyle(c, null);
var ctx = c.getContext("2d");
var rect = c.getBoundingClientRect();
var color = document.getElementById("color");
var size = document.getElementById("size");
var brush_type = document.getElementById("brush");
var chatbox = document.getElementById("chatbox");
var chatInput = document.getElementById("chat-input");


// Canvas Size
c.setAttribute("width", cstyle["width"]);
c.setAttribute("height", cstyle["height"]);

// Event Listener
c.addEventListener("mousemove", draw);
c.addEventListener("mousedown", function () {_draw = true; draw();});
c.addEventListener("mouseup", function () {_draw = false;});
c.onmouseout = function () {_draw = false;};
b1.addEventListener("click", clr);
chatInput.addEventListener ("keypress", textbox)


// Functions
function clr() {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, rect.right, rect.bottom);
    console.log("Canvas Cleared");
    ctx.fillStyle = "#000000";
}
function draw() {
    if (_draw === true) {
         //c.setAttribute("width", cstyle["width"]);
         //c.setAttribute("height", cstyle["height"]);
         //ctx.drawImage(can_);
        rect = c.getBoundingClientRect();
        ctx.fillStyle = color.value;
        ctx.strokeStyle = color.value;
        ctx.beginPath();
        ctx.arc(event.clientX - rect.left, event.clientY - rect.top, size.value, 0, brush_type.value * Math.PI);
        ctx.stroke();
        ctx.fill();


    } else {
        //var oldImg = ctx.getImageData(0, 0, rect.right - rect.left, rect.top - rect.bottom);
        //ctx.putImageData(oldImg, 0, 0);
    }
}
function test() {
	console.log("testing");
}
