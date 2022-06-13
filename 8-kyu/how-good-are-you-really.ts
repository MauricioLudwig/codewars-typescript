export const betterThanAverage = (
  classPoints: number[],
  yourPoints: number
): boolean => {
  const sumOfAllScores = [...classPoints, yourPoints].reduce(
    (acc, curr) => acc + curr,
    0
  );
  return yourPoints > sumOfAllScores / (classPoints.length + 1);
};
