const vegetables: ReadonlyArray<string> = [
  'cabbage',
  'carrot',
  'celery',
  'cucumber',
  'mushroom',
  'onion',
  'pepper',
  'potato',
  'tofu',
  'turnip'
];

export function countVegetables(s: string): [number, string][] {
  const occurrences = s
    .split(' ')
    .filter((o) => vegetables.includes(o))
    .reduce(
      (acc, curr) => ({
        ...acc,
        [curr]: (acc[curr] ?? 0) + 1
      }),
      {} as Record<string, number>
    );

  const sorted = Object.entries(occurrences).sort((a, b) => {
    const [aK, aV] = a;
    const [bK, bV] = b;

    if (aV === bV) {
      return bK.localeCompare(aK);
    }

    return bV > aV ? 1 : -1;
  });

  return sorted.map(([k, v]) => [v, k]);
}
