const goodStats = [1, 2, 3, 3, 4, 10];
const evilStats = [1, 2, 2, 2, 3, 5, 10];

const toNumArr = (str) => str.split(' ').map(Number);

export function goodVsEvil(good, evil) {
  const goodScore = toNumArr(good).reduce(
    (acc, curr, i) => acc + goodStats[i] * curr,
    0
  );
  const evilScore = toNumArr(evil).reduce(
    (acc, curr, i) => acc + evilStats[i] * curr,
    0
  );

  if (goodScore > evilScore) {
    return 'Battle Result: Good triumphs over Evil';
  } else if (evilScore > goodScore) {
    return 'Battle Result: Evil eradicates all trace of Good';
  } else {
    return 'Battle Result: No victor on this battle field';
  }
}
