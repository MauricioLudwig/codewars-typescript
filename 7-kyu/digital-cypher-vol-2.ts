import { alphabetArr } from '../@@utils/alphabet';
import { assertIsDefined } from '../@@utils/assertions';

export const decode = (code: number[], n: number): string => {
  const nArr = n.toString().split('').map(Number);
  const decoded = code.map((o, i) => {
    const el = nArr[i % nArr.length];
    assertIsDefined(el);
    return o - el;
  });
  return decoded.map((o) => alphabetArr[o - 1]).join('');
};
