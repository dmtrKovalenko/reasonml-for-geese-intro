import * as Caml_int32 from "bs-platform/lib/es6/caml_int32.js";

var modulo = Caml_int32.mod_;

function rad2deg(rad) {
  return rad * 57.29577951308232;
}

function getCircleArctangnetAngle(param, param$1) {
  return Math.atan2(param[1], param[0]) - Math.atan2(param$1[1], param$1[0]);
}

function roundDegreeAccordingToStep(step, deg) {
  return Caml_int32.imul(Math.round(deg / step), step);
}

function getClockValueByCoords(step, x, y) {
  return Caml_int32.div(
    Caml_int32.mod_(
      360,
      roundDegreeAccordingToStep(
        step,
        getCircleArctangnetAngle(/* tuple */ [130, -130], /* tuple */ [x, y]) *
          57.29577951308232
      )
    ),
    step
  );
}

var cx = 130;

var cy = -130;

export {
  cx,
  cy,
  modulo,
  rad2deg,
  getCircleArctangnetAngle,
  roundDegreeAccordingToStep,
  getClockValueByCoords,
};
/* No side effect */
