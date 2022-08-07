import { mirror } from './framed-reflection';

describe('test suites for framed-reflection kata', () => {
  test('should mirror "Hello World"', () => {
    expect(mirror('Hello World')).toBe(
      '*********\n* olleH *\n* dlroW *\n*********'
    );
  });

  test('should mirror "Codewars"', () => {
    expect(mirror('Codewars')).toBe('************\n* srawedoC *\n************');
  });
});
