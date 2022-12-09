import Parallax from "parallax-js";
var scene = document.getElementById("scene");

var parallaxInstance = new Parallax(scene, {
  relativeInput: true,
  scalarX: 40, // velocidade do movimento
  scalarY: 40, // velocidade do movimento
  frictionX: 0.1, // velocidade do movimento
  frictionY: 0.1, // velocidade do movimento
  originX: 0.0, // posição inicial
  originY: 0.0, // posição inicial
  limitX: false,
  limitY: false,
  scalar: 1,
  friction: 0.2,
  origin: { x: 0.5, y: 0.5 },
});
