

import * as Js_math from "bs-platform/lib/es6/js_math.js";

function add(a, b) {
  return a + b | 0;
}

function subtract(a, b) {
  return a - b | 0;
}

function addOne(param) {
  return 1 + param | 0;
}

var result = 1 + Js_math.random_int(1, 12) | 0;

console.log(6);

function getLocationByCoords(x, y) {
  console.log(x + y | 0);
  return /* () */0;
}

getLocationByCoords(1, 2);

function getLocationByCoordsNice(x, y) {
  console.log(x + y | 0);
  return /* () */0;
}

getLocationByCoordsNice(1, 2);

var resultPipe = 3;

var resultPipeFirst = 3;

export {
  add ,
  subtract ,
  addOne ,
  result ,
  resultPipe ,
  resultPipeFirst ,
  getLocationByCoords ,
  getLocationByCoordsNice ,
  
}
/* result Not a pure module */
