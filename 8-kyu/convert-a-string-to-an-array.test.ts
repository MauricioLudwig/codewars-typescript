import { stringToArray } from './convert-a-string-to-an-array';

describe('test suites for string-to-array kata', () => {
  test('should split string to an array', () => {
    expect(stringToArray('Robin Singh')).toEqual(['Robin', 'Singh']);
  });

  test('should split string to an array', () => {
    expect(stringToArray('I love arrays they are my favorite')).toEqual([
      'I',
      'love',
      'arrays',
      'they',
      'are',
      'my',
      'favorite',
    ]);
  });
});
