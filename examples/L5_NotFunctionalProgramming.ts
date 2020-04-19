const rad2deg = (rad: number) => rad * 57.29577951308232;

const cx = 130;
const cy = -130;

const getClockValueByCoords = (step: number, x: number, y: number) => {
  const atan = Math.atan2(cx, cy) - Math.atan2(x, y);

  let deg = rad2deg(atan);
  deg = Math.round(deg / step) * step;
  deg %= 360;

  return Math.floor(deg / step);
};
