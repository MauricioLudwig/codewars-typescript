export const divisors = (n: number): number =>
  Array(n)
    .fill(0)
    .reduce((acc, _, index) => {
      const isDivisor = n % (index + 1) === 0;
      return acc + (isDivisor ? 1 : 0);
    }, 0);
