

import * as Js_math from "bs-platform/lib/es6/js_math.js";

function rad2deg(rad) {
  return rad * 57.29577951308232;
}

function getClockValueByCoords(step, x, y) {
  var atan = Math.atan2(-130, 130) - Math.atan2(y, x);
  var deg = atan * 57.29577951308232;
  var roundedDeg = Math.round(deg / step) * step;
  var value = roundedDeg % 360;
  return Js_math.floor(value / step);
}

var cx = 130;

var cy = -130;

export {
  rad2deg ,
  cx ,
  cy ,
  getClockValueByCoords ,
  
}
/* No side effect */
