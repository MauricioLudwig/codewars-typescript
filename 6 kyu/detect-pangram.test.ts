import { isPangram } from './detect-pangram';

test('should ascertain correct & incorrect pangrams', () => {
  const fixtures: [string, boolean][] = [
    ['The quick brown fox jumps over the lazy dog.', true],
    ['This is not a pangram.', false],
    ['AbcdefghijklmnopqrstuvwxyZ', true],
  ];

  fixtures.forEach(([n1, n2]) => {
    expect(isPangram(n1)).toEqual(n2);
  });
});
