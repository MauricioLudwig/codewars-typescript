export type RuleFunction = (a: number, b: number) => number;

export function reduceByRules(
  numbers: number[],
  rules: RuleFunction[]
): number {
  let arr = [...numbers];
  let i = 0;

  while (arr.length > 1) {
    const [a = 0, b = 0, ...rest] = arr;
    const n = rules[i % rules.length]?.(a, b) ?? 0;
    arr = [n, ...rest];
    i++;
  }

  return arr.at(0) ?? 0;
}
