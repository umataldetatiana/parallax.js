import Parallax from "parallax-js";
var scene = document.getElementById("scene");

var parallaxInstance = new Parallax(scene, {
    relativeInput: true,
    scalarX: 10, // regular a velocidade e distancia do movimento
    scalarY: 10, // regular a velocidade e distancia do movimento
    //frictionX: 2, // regula a velocidade da fricção de seguir o mouse ou seja regula a velocidade que elas andam para suas futuras posições
    //frictionY: 2, // regula a velocidade da fricção de seguir o mouse ou seja regula a velocidade que elas andam para suas futuras posições
    //   originX: 0.0, // posição inicial
    //   originY: 0.0, // posição inicial
    //   limitX: false,
    //   limitY: false,
    //   scalar: 1,
    //   friction: 0.2,
    //   origin: { x: 0.5, y: 0.5 },
});