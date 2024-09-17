import { alphabet } from '../@@utils/alphabet';

export function playPass(s: string, n: number): string {
  return s
    .toLowerCase()
    .split('')
    .map((o, i) => {
      if (!/[a-z0-9]/i.test(o)) {
        return o;
      }

      if (/\d/.test(o)) {
        return 9 - +o;
      }

      const nextI = alphabet.indexOf(o) + n;
      const nextS = alphabet[nextI % alphabet.length] ?? '';

      if (i % 2 === 0) {
        return nextS.toUpperCase();
      }

      return nextS;
    })
    .reverse()
    .join('');
}
