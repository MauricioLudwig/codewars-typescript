export const warnTheSheep = (queue: string[]): string => {
  const index = queue.reverse().indexOf('wolf');
  return index > 0
    ? `Oi! Sheep number ${index}! You are about to be eaten by a wolf!`
    : 'Pls go away and stop eating my sheep';
};
