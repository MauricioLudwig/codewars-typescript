export const lovefunc = (flower1: number, flower2: number): boolean => {
  const [even1, even2] = [flower1, flower2].map((o) => o % 2 === 0);
  return even1 !== even2;
};
