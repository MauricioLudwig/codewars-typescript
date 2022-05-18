export const findOdd = (xs: number[]): number => {
  for (let i = 0; i < xs.length; i++) {
    const item = xs[i]!;
    const occurences = xs.reduce((acc, curr) => {
      return acc + (curr === item ? 1 : 0);
    }, 0);

    if (occurences % 2 !== 0) {
      return item;
    }
  }

  throw new Error('No instances found.');
};
