export const isPangram = (phrase: string): boolean =>
  'abcdefghijklmnopqrstuvwxyz'.split('').every((o) => phrase.includes(o));
