import { alphabet, alphabetMap } from './alphabet';

describe('test suites for alphabet helper functions and constants', () => {
  test('should return the alphabet as plain string', () => {
    expect(alphabet).toBe('abcdefghijklmnopqrstuvwxyz');
  });

  test('should return alphabet as record with values corresponding to its index location', () => {
    expect(alphabetMap()).toEqual({
      a: 0,
      b: 1,
      c: 2,
      d: 3,
      e: 4,
      f: 5,
      g: 6,
      h: 7,
      i: 8,
      j: 9,
      k: 10,
      l: 11,
      m: 12,
      n: 13,
      o: 14,
      p: 15,
      q: 16,
      r: 17,
      s: 18,
      t: 19,
      u: 20,
      v: 21,
      w: 22,
      x: 23,
      y: 24,
      z: 25,
    });
  });

  test('should return alphabet as record with values corresponding to its index location + the given offset of 5', () => {
    expect(alphabetMap(5)).toEqual({
      a: 5,
      b: 6,
      c: 7,
      d: 8,
      e: 9,
      f: 10,
      g: 11,
      h: 12,
      i: 13,
      j: 14,
      k: 15,
      l: 16,
      m: 17,
      n: 18,
      o: 19,
      p: 20,
      q: 21,
      r: 22,
      s: 23,
      t: 24,
      u: 25,
      v: 26,
      w: 27,
      x: 28,
      y: 29,
      z: 30,
    });
  });
});
