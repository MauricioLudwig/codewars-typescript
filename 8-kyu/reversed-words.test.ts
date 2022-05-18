import { reverseWords } from './reversed-words';

describe('test suites for reversed-words kata', () => {
  test('should correctly reverse the strings provided', () => {
    const fixtures: [string, string][] = [
      ['hello world!', 'world! hello'],
      ["yoda doesn't speak like this", "this like speak doesn't yoda"],
      ['foobar', 'foobar'],
      ['kata editor', 'editor kata'],
      ['row row row your boat', 'boat your row row row'],
    ];

    fixtures.forEach(([n1, n2]) => {
      expect(reverseWords(n1)).toEqual(n2);
    });
  });
});
