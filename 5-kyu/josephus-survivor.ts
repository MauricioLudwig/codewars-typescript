import { assertIsDefined } from '../@@utils/assertions';
import { josephus } from './josephus-permutation';

export const josephusSurvivor = (n: number, k: number): number => {
  const sequence = Array(n)
    .fill(0)
    .map((_, i) => i + 1);
  const permutation = josephus(sequence, k);
  const el = permutation.pop();
  assertIsDefined(el);
  return el;
};
