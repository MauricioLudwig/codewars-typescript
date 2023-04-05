export function manhattanDistance(
  pointA: [number, number],
  pointB: [number, number]
): number {
  const [xA, yA] = pointA;
  const [xB, yB] = pointB;
  return Math.abs(yB - yA) + Math.abs(xB - xA);
}
