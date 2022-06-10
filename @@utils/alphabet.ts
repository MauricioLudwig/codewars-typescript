export const alphabet = 'abcdefghijklmnopqrstuvwxyz';

export const alphabetArr = alphabet.split('');

export const alphabetMap = (offset = 0): Record<string, number> =>
  alphabetArr.reduce(
    (acc, curr, index) => ({
      ...acc,
      [curr]: index + offset,
    }),
    {} as Record<string, number>
  );
