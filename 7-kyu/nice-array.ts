export const isNice = (arr: number[]): boolean => {
  if (arr.length === 0) {
    return false;
  }

  return arr.every((n1, i1) =>
    arr.some((n2, i2) => i1 !== i2 && (n1 === n2 - 1 || n1 === n2 + 1))
  );
};
