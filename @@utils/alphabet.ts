export const alphabet = 'abcdefghijklmnopqrstuvwxyz';

export const alphabetMap = (offset = 0): Record<string, number> =>
  alphabet.split('').reduce(
    (acc, curr, index) => ({
      ...acc,
      [curr]: index + offset,
    }),
    {} as Record<string, number>
  );
