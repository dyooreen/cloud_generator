var xoff = 0;
var yoff = 0;
// var start = 0;
var inc = 0.01;
let resolution = 1
let red, green, blue
function setup() {


    red = 0
    green = 0
    blue = 255

    createCanvas(windowWidth, windowHeight);
    background(255)
    noiseDetail(8)
    loadPixels()
    for (var y = 0; y < height; y += resolution) {
        xoff = 0
        for (var x = 0; x < width; x += resolution) {

            var i = (x+y*width)*4;
			pixels[i+0] = cos(y/(width*2))*red
			pixels[i+1] = cos(y/(width*2))*green;
			pixels[i+2] = cos(y/(width*2))*blue;
  			pixels[i+3] = noise(xoff, yoff)*255;
            xoff += inc;
        }
        yoff += inc;
    }
    updatePixels()
}

function draw() {
}