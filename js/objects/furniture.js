import {
  getCube,
  getPlane
} from '../helpers.js';

export const createTv = () => {
  getCube('#000000', 300, 5, 150, -520, 385, -300);
  getCube('url("textures/tv.jpg")', 292, 1, 142, -516, 385, -296);
};

export const createTvUnit = () => {
  getCube('url("textures/worktop.jpg")', 800, 50, 5, -510, 350, -75, 0, 0, 0, false);
  getCube('url("textures/tvunit.png")', 800, 50, 80, -510, 350, -70, 0, 0, 0, false);
};

export const createRug = () => {
  getPlane('url("textures/rug.jpeg")', 400, 413, -100, -200, 50, 0, 180, 0);
}