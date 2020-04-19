let cx = 130.;
let cy = (-130.);

let modulo = (a, b) => a mod b;
let rad2deg = rad => rad *. 57.29577951308232;

let getCircleArctangnetAngle = (~center as (cx, cy), (x, y)) =>
  Js.Math.atan2(~x=cx, ~y=cy, ()) -. Js.Math.atan2(~x, ~y, ());

let roundDegreeAccordingToStep = (step, deg) =>
  Js.Math.unsafe_round(deg /. float_of_int(step)) * step;

let getClockValueByCoords = (~step, ~x, ~y) =>
  (x, y)
  |> getCircleArctangnetAngle(~center=(cx, cy))
  |> rad2deg
  |> roundDegreeAccordingToStep(step)
  |> modulo(360)
  |> (clockValue => clockValue / step);