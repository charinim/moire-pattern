var dimensions = 400
var thickness = 3
var spacing = 8
function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES)
}

function draw() {
  background(255);
  
  fill(0)
  // rect(0,0,thickness, dimensions)
  // rect( thickness+spacing,0, thickness, dimensions)
  // rotate(5)
  rectMode(CENTER)
  for (var x = 293; x<width-293; x+=thickness+spacing){
    rect(x,height/2,thickness,dimensions)
  }
  
  for (var x = 293; x<width-293; x+=thickness+spacing){
    push()
    translate(x,height/2)
    rotate(5)
    rect(0,0,thickness,dimensions)
    pop()
  }
  

  
  
}
