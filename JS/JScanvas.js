

//consts
var canvas_w = 490;
var canvas_h = 220; 


canvas = document.getElementById("canvas");
canvas.setattribute("width", canvas_w);
canvas.setattribute("height", canvas_h);
canvas.setattribute("id", "canvas");


context = canvas.getContext("2d");

canvas.onmousedown = function(e){
  var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;
		
  paint = true;
  addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  redraw();
};

