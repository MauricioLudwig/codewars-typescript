export const squareOrSquareRoot = (array: number[]): number[] =>
  array.map((o) => {
    const root = Math.sqrt(o);
    return root % 1 === 0 ? root : Math.pow(o, 2);
  });
