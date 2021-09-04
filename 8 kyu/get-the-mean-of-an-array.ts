export const getAverage = (marks: number[]): number => {
  const sum = marks.reduce((acc, curr) => acc + curr, 0);
  return Math.floor(sum / marks.length);
};
