const lights: ReadonlyArray<string> = ['green', 'yellow', 'red'];

export function updateLight(current: string): string {
  const next = lights.indexOf(current) + 1;
  return lights[next % lights.length]!;
}
