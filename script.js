"use strict";

const canvas = document.querySelector('div.canvas');
const button = document.querySelector('button#prompt');

function createCanvas(size=16) {

  for (let i = 0; i < size; i++) {
    let canvasRow = document.createElement('div');
    for (let j = 0; j < size; j++) {
      let canvasEntity = document.createElement('div');
      canvasRow.appendChild(canvasEntity);
      // add styles and classes
      canvasEntity.setAttribute('class', 'canvasEntity');
    }
    canvas.appendChild(canvasRow);
    // add styles and classes
    canvasRow.setAttribute('class', 'canvasRow');
  }
}

createCanvas();