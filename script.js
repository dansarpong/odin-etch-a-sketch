"use strict";

const canvas = document.querySelector('div.canvas');
const button = document.querySelector('button#prompt');


function createCanvas(size=16) {

  for (let i = 0; i < size; i++) {
    let canvasRow = document.createElement('div');
    for (let j = 0; j < size; j++) {
      let canvasEntity = document.createElement('div');
      canvasRow.appendChild(canvasEntity);
      canvasEntity.setAttribute('id', `entity${i}x${j}`);
    }
    canvas.appendChild(canvasRow);
    canvasRow.setAttribute('class', 'canvasRow');
  }
}

function resetCanvas(size) {
  
  const canvasRows = document.querySelectorAll('.canvasRow');
  canvasRows.forEach((row) => {
    row.remove();
  });

  let userResponse = +prompt(
    "Input a valid integer between 1 and 100 for your canvas size: "
  );

  size = (typeof userResponse !== "number") ? 16 :
    (userResponse > 100) ? 100 :
    (userResponse < 1) ? 16 :
    isNaN(userResponse) ? 16 : userResponse;

  createCanvas(size);
}


function updateEntityOn(event) {
  if (event.target.id) {
    let entity = document.querySelector(`#${event.target.id}`);
    entity.setAttribute('class', 'entityOn');
  }
}


function updateEntityOff(event) {
  let allEntitiesOn = document.querySelectorAll(".entityOn");
  allEntitiesOn.forEach((entity) => {
    entity.removeAttribute("class");
  });
}

createCanvas();

canvas.addEventListener('pointerover', updateEntityOn);
canvas.addEventListener('pointerleave', updateEntityOff);
button.addEventListener('click', resetCanvas);
