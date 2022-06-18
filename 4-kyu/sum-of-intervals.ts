export const sumOfIntervals = (intervals: [number, number][]): number => {
  const overlappingIntervals: [number, number][] = [];
  const sortedIntervals = intervals.sort((a, b) => {
    const [a1, a2] = a;
    const [b1, b2] = b;

    if (a1 > b1) {
      return 1;
    } else if (b1 > a1) {
      return -1;
    } else {
      if (a2 > b2) {
        return 1;
      } else if (b2 > a2) {
        return -1;
      }
      return 0;
    }
  });

  while (true) {
    const interval = sortedIntervals.shift();

    if (!interval) {
      break;
    }

    const [i1, i2] = interval;
    const low = i1;
    let high = i2;
    const copy = [...sortedIntervals];

    while (true) {
      const next = copy.shift();

      if (!next) {
        break;
      }

      if (next[0] < high) {
        sortedIntervals.shift();
        if (high < next[1]) {
          high = next[1];
        }
      } else {
        break;
      }
    }

    overlappingIntervals.push([low, high]);
  }

  return overlappingIntervals.reduce((acc, [a, b]) => acc + (b - a), 0);
};
