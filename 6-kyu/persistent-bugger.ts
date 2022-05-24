export const persistence = (num: number): number => {
  let next = num;
  let iterations = 0;

  while (next >= 10) {
    iterations++;

    next = next
      .toString()
      .split('')
      .map(Number)
      .reduce((acc, curr) => acc * curr, 1);
  }

  return iterations;
};
