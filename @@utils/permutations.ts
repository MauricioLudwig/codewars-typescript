export const generatePermutations = (s: string): string[] => {
  if (s.length === 1) {
    return [s];
  }

  const set = new Set<string>();

  s.split('').forEach((_, i) => {
    const copy = [...s.split('')];
    const n = copy.splice(i, 1);
    generatePermutations(copy.join('')).forEach((o) => set.add(n + o));
  });

  return Array.from(set);
};
