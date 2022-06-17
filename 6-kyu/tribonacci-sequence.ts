type TribonacciFn = (arr: [number, number, number], n: number) => number[];

export const tribonacci: TribonacciFn = (arr, n) => {
  const numbers = [...arr].reverse();
  const len = n - numbers.length;

  for (let i = 0; i < len; i++) {
    const num = numbers.slice(0, 3).reduce((acc, curr) => acc + curr, 0);
    numbers.unshift(num);
  }

  return [...numbers].reverse().slice(0, n);
};
