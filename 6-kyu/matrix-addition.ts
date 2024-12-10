type Matrix = number[][];

export function matrixAddition(a: Matrix, b: Matrix): Matrix {
  return a.map((y, yi) => y.map((x, xi) => x + (b[yi]?.[xi] ?? 0)));
}
