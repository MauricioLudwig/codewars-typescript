const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

export const solve = (arr: string[]): number[] =>
  arr.map((s) =>
    s
      .split('')
      .reduce(
        (acc, curr, index) => acc + +(curr.toLowerCase() === alphabet[index]!),
        0
      )
  );
