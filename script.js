
const inc = 0.01;
const resolution = 1
const color = [0, 0, 255, 255] //RGBA
const nOctaves = 8 // noiseDetail() first parameter
const nDetail = 0.5 // noiseDetail() second parameter
let xoff = 0;
let yoff = 0;
function setup() {
    createCanvas(windowWidth, windowHeight);
    pixelDensity(1);
    noiseDetail(nOctaves, nDetail)
    loadPixels()
    for (let y = 0; y < height; y += resolution) {
        xoff = 0
        for (let x = 0; x < width; x += resolution) {
            var i = (x + y * width) * 4;
            pixels[i + 0] = cos(y / (width * 2)) * color[0] // Red
            pixels[i + 1] = cos(y / (width * 2)) * color[1] // Green
            pixels[i + 2] = cos(y / (width * 2)) * color[2] // Blue
            pixels[i + 3] = noise(xoff, yoff) * color[3]; // Alpha
            xoff += inc;
        }
        yoff += inc;
    }
    updatePixels()
}

function draw() {
}