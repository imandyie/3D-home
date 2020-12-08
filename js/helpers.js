export const getTranslate = (x, y, z, rx, ry, rz) => {
  return (
    `transform: translate3d(${x}px, ${y}px, ${z}px)
      rotateX(${rx}deg)
      rotateY(${ry}deg)
      rotateZ(${rz}deg);`
  );
};

export const getPlane = (colour, width, height, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) => {
  const planeElement = document.createElement('div');
  planeElement.classList.add('plane');
  planeElement.style.cssText += `background: ${colour}; width: ${width}px; height: ${height}px;
  ${getTranslate(x, y, z, rx, ry, rz)};`
  
  document.querySelector('.home').appendChild(planeElement);
}

export const getCube = (colour, w, h, d, x, y, z) => {
  getPlane(colour, h, w, x, y, z, 0, 180, 90);
  getPlane(colour, w, d, x, y, z, 90, 0, 0);
  getPlane(colour, d, h, x, y, z, 0, 270, 0);
  getPlane(colour, d, h, x + w, y, z + d, 0, 90, 0);
  getPlane(colour, w, d, x + w, y + h, z, 90, 180, 0);
  getPlane(colour, w, h, x, y, z + d, 0, 0, 0);
}