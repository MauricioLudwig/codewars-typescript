import { assertIsDefined } from '../@@utils/assertions';

const scores: Record<string, number> = {
  wild: 10,
  star: 9,
  bell: 8,
  shell: 7,
  seven: 6,
  cherry: 5,
  bar: 4,
  king: 3,
  queen: 2,
  jack: 1
};

export const fruit = (reels: string[][], spins: number[]): number => {
  const draws = reels.map((reel, i) => {
    const spin = spins[i];
    assertIsDefined(spin);
    return reel[spin];
  });

  const count = new Set(draws).size;

  if (count === 3) {
    return 0;
  }

  if (count === 1) {
    const draw = draws[0]?.toLowerCase();
    assertIsDefined(draw);
    const el = scores[draw];
    assertIsDefined(el);
    return el * 10;
  }

  const [item] = draws.filter((d1, i1) =>
    draws.some((d2, i2) => d1 === d2 && i1 !== i2)
  );

  assertIsDefined(item);

  const baseScore = scores[item.toLowerCase()];

  assertIsDefined(baseScore);

  if (item === 'Wild') {
    return baseScore;
  }

  return baseScore * (draws.includes('Wild') ? 2 : 1);
};
