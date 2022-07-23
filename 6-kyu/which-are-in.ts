export const inArray = (a1: string[], a2: string[]): string[] =>
  a1.filter((o) => a2.some((x) => x.includes(o))).sort();
