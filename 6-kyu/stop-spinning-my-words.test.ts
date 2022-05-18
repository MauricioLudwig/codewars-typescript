import { Kata } from './stop-spinning-my-words';

test('should correctly reverse words containing more than 4 letters', () => {
  const fixtures: [string, string][] = [
    ['Hey fellow warriors', 'Hey wollef sroirraw'],
    ['This is a test', 'This is a test'],
    ['This is another test', 'This is rehtona test'],
  ];

  fixtures.forEach(([s1, s2]) => {
    expect(Kata.spinWords(s1)).toEqual(s2);
  });
});
