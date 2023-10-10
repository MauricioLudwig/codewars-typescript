export function cookingTime(eggs: number): number {
  const pots = Math.floor(eggs / 8) * 5;
  const hasRest = eggs % 8 > 0;
  return pots + (hasRest ? 5 : 0);
}
