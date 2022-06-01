export const beeramid = (bonus: number, price: number): number => {
  let currentSum = 0;
  let currentLevel = 0;

  while (true) {
    currentSum += Math.pow(currentLevel + 1, 2) * price;

    if (currentSum > bonus) {
      break;
    }

    currentLevel++;
  }

  return currentLevel;
};
