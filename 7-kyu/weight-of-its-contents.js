export const contentWeight = (bottleWeight, scale) => {
  const [, multiplier, inc] = scale.match(/(\d+) times (larger|smaller)/);
  const unit = bottleWeight / (+multiplier + 1);
  return unit * (inc === 'larger' ? +multiplier : 1);
};
