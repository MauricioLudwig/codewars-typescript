const outcomes: Record<string, boolean> = {
  'scissors,paper': true,
  'scissors,rock': false,
  'paper,scissors': false,
  'paper,rock': true,
  'rock,scissors': true,
  'rock,paper': false
} as const;

export function rps(p1: string, p2: string): string {
  if (p1 === p2) {
    return 'Draw!';
  }

  return `Player ${outcomes[[p1, p2].join(',')] ? '1' : '2'} won!`;
}
