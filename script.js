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
  
  canvas.addEventListener('pointerover', updateEntityOn);
  canvas.addEventListener('pointerleave', updateEntityOff);
}

createCanvas();
