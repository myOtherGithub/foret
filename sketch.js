/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Put setup code here
}

function draw() {
  // Put drawings here
  fill(234, 31, 81);
  noStroke();
  rect(50, 50, 250, 250);
  fill(255);
  textStyle(BOLD);
  textSize(140);
  text("p5*", 60, 250);
  for(let i=0; i<windowWidth; i++){
    for(let j=0; j<windowHeight; j++){
      let lightness = noise(i/10,j/11)*1255;
      colorMode(HSB, 1255);
      fill(lightness, 1255, 1255);
      rect(i,j,1,1);
    }
  }
  
  
  for(let i=0; i<windowWidth; i++){
    for(let j=0; j<windowHeight; j++){
      noiseSeed(123)
      let lightness = noise(i/10,j/11)*1255;
      colorMode(HSBA, 1255);
      fill(lightness, 1255, 1255, .4);
      rect(i,j,1,1);
    }
  }
  
}

// This Redraws the Canvas when resized
windowResized = function() {
  resizeCanvas(windowWidth, windowHeight);
};
