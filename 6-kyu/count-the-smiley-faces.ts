export const countSmileys = (arr: string[]): number => {
  const match = arr.join('').match(/([:;][-~]?[)D])/g) || [];
  return match.length ?? 0;
};
