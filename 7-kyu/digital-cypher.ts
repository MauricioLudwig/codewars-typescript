import { alphabetMap } from '../@@utils/alphabet';
import { assertIsDefined } from '../@@utils/assertions';

export const encode = (str: string, n: number): number[] => {
  const alphabet = alphabetMap(1);

  const numKeys = n.toString().split('').map(Number);
  const encoded = str.split('').map((o) => {
    const el = alphabet[o];
    assertIsDefined(el);
    return el;
  });

  return encoded.map((o, i) => {
    const el = numKeys[i % numKeys.length];
    assertIsDefined(el);
    return o + el;
  });
};
