let rad2deg = rad => rad *. 57.29577951308232;

let cx = 130.;
let cy = (-130.);

let getClockValueByCoords = (step, x, y) => {
  let atan = Js.Math.atan2(~x=cx, ~y=cy, ()) -. Js.Math.atan2(~x, ~y, ());

  let deg = rad2deg(atan);
  let roundedDeg = Js.Math.round(deg /. step) *. step;
  let value = mod_float(roundedDeg, 360.);

  Js.Math.floor(value /. step)
};