export const sumOfDifferences = (arr: number[]): number => {
  if (arr.length < 2) {
    return 0;
  }

  const seq = [...arr].sort((a, b) => b - a);

  return seq.reduce((acc, curr, index) => {
    const next = seq[index + 1];

    if (next === undefined) {
      return acc;
    }

    return acc + (curr - next);
  }, 0);
};
