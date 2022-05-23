export const fish = (shoal: string): number => {
  const allFish = shoal
    .split('')
    .map(Number)
    .filter((o) => o !== 0)
    .sort((a, b) => a - b);

  let currentSize = 1;
  let currentFood = 0;

  while (true) {
    const fish = allFish.shift();

    if (!fish) {
      break;
    }

    if (currentSize >= fish) {
      currentFood += fish;
    } else {
      break;
    }

    const nextSizeRequirement = currentSize * 4;

    if (currentFood >= nextSizeRequirement) {
      currentSize++;
      currentFood %= nextSizeRequirement;
    }
  }

  return currentSize;
};
