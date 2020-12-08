import {
  getTranslate,
  getPlane,
  getCube
} from './helpers.js';
import {
  createWalls,
  createCeiling,
  createFloor
} from './objects/room.js';
import {
  createWallWoodStrips,
  createCeilingWoodStrips
} from './objects/woodStrips.js';

import {
  createTv,
  createTvUnit,
  createRug
} from './objects/furniture.js';

const position = { x: 0, y: 0, z: 0 };
const rotation = { x: 0, y: 0, z: 0 };
const acceleration = 0.6;
const maxSpeed = 7;
let speed = 0;
let outdoor = {
  camera: { position, rotation },
}
let keyState = {
  forward: false,
  backward: false,
};
let pointer = { x: 0, y: 0 };

const cameraUpdate = () => {
  const homeElement = document.querySelector('.home');
  if (homeElement) {
    homeElement.style.cssText =
      `transform-origin: ${-position.x}px ${-position.y}px ${-position.z}px;
      ${getTranslate(
      position.x,
      position.y,
      700,
      rotation.x,
      rotation.y,
      rotation.z
      )};`;
  }
}

window.onload = function () {
  createCeiling();
  createWalls();
  createFloor();
  createWallWoodStrips();
  createCeilingWoodStrips();

  createTv();
  createTvUnit();
  createRug();

  outdoor.camera.position.x = -300;
  outdoor.camera.position.y = 100;
  outdoor.camera.position.z = 150;
  outdoor.camera.rotation.x = 260;
  outdoor.camera.rotation.y = 0;
  outdoor.camera.rotation.z = -100;

  cameraUpdate();

  document.addEventListener('mouseover', (event) => {
    pointer.x = event.pageX;
    pointer.y = event.pageY;
  }, false);

  document.addEventListener('mousemove', (event) => {
    outdoor.camera.rotation.x -= (event.pageY - pointer.y) / 2;
    outdoor.camera.rotation.z += (event.pageX - pointer.x) / 2;
    pointer.x = event.pageX;
    pointer.y = event.pageY;
  }, false);

  document.addEventListener('keydown', (event) => {
    switch (event.code) {
      case 'KeyW':
      case 'ArrowUp':
        keyState.forward = true;
        break;
      case 'KeyS':
      case 'ArrowDown':
        keyState.backward = true;
        break;
    }
  }, false);

  document.addEventListener('keyup', (event) => {
    switch (event.code) {
      case 'KeyW':
      case 'ArrowUp':
        keyState.forward = false;
        break;
      case 'KeyS':
      case 'ArrowDown':
        keyState.backward = false;
        break;
    }
  }, false);

  const loopUpdate = () => {
    if (keyState.backward) {
      if (speed > -maxSpeed) speed -= acceleration;
    } else if (keyState.forward) {
      if (speed < maxSpeed) speed += acceleration;
    } else if (speed > 0) {
      speed = Math.max(speed - acceleration, 0);
    } else if (speed < 0) {
      speed = Math.max(speed + acceleration, 0);
    } else {
      speed = 0;
    }
    var xo = Math.sin(outdoor.camera.rotation.z * 0.0174532925);
    var yo = Math.cos(outdoor.camera.rotation.z * 0.0174532925);
    outdoor.camera.position.x -= xo * speed;
    outdoor.camera.position.y -= yo * speed;
    cameraUpdate();
  };
  setInterval(loopUpdate, 20);
};