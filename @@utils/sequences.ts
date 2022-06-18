import { assertIsDefined } from './assertions';

export const fibonacci = (n: number): number[] => {
  const numbers: number[] = [0, 1];

  for (let i = 0; i < n - 2; i++) {
    const [n1, n2] = numbers.slice(-2);
    assertIsDefined(n1);
    assertIsDefined(n2);
    numbers.push(n1 + n2);
  }

  return numbers;
};
