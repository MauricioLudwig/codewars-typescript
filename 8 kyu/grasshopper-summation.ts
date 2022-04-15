export const summation = (num: number): number =>
  Array(num)
    .fill(0)
    .reduce((acc, _, index) => {
      return acc + index + 1;
    }, 0);
