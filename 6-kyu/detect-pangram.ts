export const isPangram = (phrase: string): boolean => {
  const phraseLower = phrase.toLowerCase();
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((o) => phraseLower.includes(o));
};
