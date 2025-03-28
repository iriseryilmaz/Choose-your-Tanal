let images = [];
let currentImage;
let button;
let buttonVisible = true;

function preload() {
  for (let i = 1; i <= 13; i++) {
    images.push(loadImage(`m${i}.jpg`));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  setGradientBackground();

  currentImage = null;

  // Buton oluştur
  button = createButton("Beni Şaşırt!");
  button.style("font-size", "24px");
  button.style("padding", "15px 30px");
  button.style("color", "#fff");
  button.style("background", "#ff00ff");
  button.style("border", "none");
  button.style("border-radius", "12px");
  button.style("box-shadow", "0 0 20px #ff00ff");
  button.style("cursor", "pointer");

  button.position(width / 2 - 100, height / 2 + 150);
  button.mousePressed(showRandomImage);
}

function draw() {
  if (currentImage) {
    imageMode(CENTER);

    let imgRatio = currentImage.width / currentImage.height;
    let canvasRatio = width / height;

    let displayWidth, displayHeight;

    if (imgRatio > canvasRatio) {
      displayWidth = width * 0.9;
      displayHeight = displayWidth / imgRatio;
    } else {
      displayHeight = height * 0.9;
      displayWidth = displayHeight * imgRatio;
    }

    image(currentImage, width / 2, height / 2 - 50, displayWidth, displayHeight);
  }
}

function showRandomImage() {
  setGradientBackground();
  currentImage = random(images);

  if (buttonVisible) {
    button.remove(); 
    buttonVisible = false;
  }
}

function setGradientBackground() {
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(color("#ff69b4"), color(0), inter);
    stroke(c);
    line(0, y, width, y);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setGradientBackground();
  if (buttonVisible) {
    button.position(width / 2 - 100, height / 2 + 150);
  }
}
