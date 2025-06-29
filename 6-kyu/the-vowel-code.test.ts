import { encode, decode } from './the-vowel-code';

describe('test suites for encode fn', () => {
  const fixtures: [string, string][] = [
    ['h2ll4', 'hello'],
    ['H4w 1r2 y45 t4d1y?', 'How are you today?'],
    ['Th3s 3s 1n 2nc4d3ng t2st.', 'This is an encoding test.']
  ];

  test.each(fixtures)('should return %s', (res, arg) => {
    expect(encode(arg)).toBe(res);
  });
});

describe('test suites for decode fn', () => {
  const fixtures: [string, string][] = [
    ['hello', 'h2ll4'],
    ['How are you today?', 'H4w 1r2 y45 t4d1y?'],
    ['This is an encoding test.', 'Th3s 3s 1n 2nc4d3ng t2st.']
  ];

  test.each(fixtures)('should return %s', (res, arg) => {
    expect(decode(arg)).toBe(res);
  });
});
