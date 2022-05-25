import { alphabetMap } from '../@@utils/alphabet';

export const encode = (str: string, n: number): number[] => {
  const alphabet = alphabetMap(1);

  const numKeys = n.toString().split('').map(Number);
  const encoded = str.split('').map((o) => alphabet[o]!);

  return encoded.map((o, i) => o + numKeys[i % numKeys.length]!);
};
