import { getPlane } from "../helpers.js";

export const createWalls = () => {
  getPlane("url(textures/back-wall.png)", 1000, 500, 400, -400, -447, 270, 0, 180);
  getPlane("url(textures/left-wall.png)", 800, 500, -600, -400, -447, 270, 90, 180);
  getPlane("url(textures/front-wall.png)", 1000, 500, -600, 400, -447, 90, 0, 0, 0);
  getPlane("url(textures/right-wall.png)", 800, 500, 400, 400, -447, 90, 270, 0);
};

export const createCeiling = () => {
  getPlane("url(textures/ceiling.png)", 1000, 800, -600, -400, -447, 0, 0, 0);
}

export const createFloor = () => {
  getPlane("url(textures/floor.png)", 1000, 800, -600, 400, 53, 180, 0, 0);
}