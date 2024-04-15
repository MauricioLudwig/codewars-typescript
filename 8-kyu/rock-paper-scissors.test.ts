import { rps } from './rock-paper-scissors';

const fixtures: [string, string, string][] = [
  ['scissors', 'paper', 'Player 1 won!'],
  ['scissors', 'rock', 'Player 2 won!'],
  ['scissors', 'scissors', 'Draw!'],
  ['paper', 'scissors', 'Player 2 won!'],
  ['paper', 'rock', 'Player 1 won!'],
  ['paper', 'paper', 'Draw!'],
  ['rock', 'scissors', 'Player 1 won!'],
  ['rock', 'paper', 'Player 2 won!'],
  ['rock', 'rock', 'Draw!']
];

test.each(fixtures)('should return, for %s & %s, %s', (p1, p2, r) => {
  expect(rps(p1, p2)).toBe(r);
});
