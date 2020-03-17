const body = document.querySelector("body");
const addDiv = document.createElement("div");
addDiv.className = "image-control";

const IMG_NUMBER = 10;


function printImage(imgNumber){
  const image = new Image();
  // const image = document.createElement("img");         // functionally equivalent code.
  image.src = `images/${imgNumber + 1}.jpg`
  image.classList.add("bgImage");
  body.appendChild(addDiv);
  addDiv.appendChild(image);
}

function genRandom(){
  const number = Math.floor(Math.random()*IMG_NUMBER);
  return number;
}

function init(){
  const randomNumber = genRandom();
  printImage(randomNumber);
}

init();
