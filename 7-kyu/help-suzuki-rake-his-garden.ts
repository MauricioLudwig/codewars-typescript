const validItems: ReadonlyArray<string> = ['gravel', 'rock'];

export function rakeGarden(garden: string): string {
  return garden
    .split(' ')
    .map((o) => {
      if (!validItems.includes(o)) {
        return 'gravel';
      }

      return o;
    })
    .join(' ');
}
