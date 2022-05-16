import { SnakesLadders } from './snakes-and-ladders';

describe('test suites for SnakesLadders kata', () => {
  test('should return the correct play position', () => {
    const fixtures: [number, number, string][] = [
      [1, 1, 'Player 1 is on square 38'],
      [1, 5, 'Player 1 is on square 44'],
      [6, 2, 'Player 2 is on square 31'],
      [1, 1, 'Player 1 is on square 25'],
    ];

    const game = new SnakesLadders();

    fixtures.forEach(([n1, n2, n3]) => {
      expect(game.play(n1, n2)).toBe(n3);
    });
  });
});
