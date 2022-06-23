import { evensAndOdds } from './evens-and-odds';

describe('test suites for evens-and-odds kata', () => {
  test('should return "10"', () => {
    expect(evensAndOdds(2)).toBe('10');
  });

  test('should return "0"', () => {
    expect(evensAndOdds(0)).toBe('0');
  });

  test('should return "d"', () => {
    expect(evensAndOdds(13)).toBe('d');
  });

  test('should return "2f"', () => {
    expect(evensAndOdds(47)).toBe('2f');
  });

  test('should return "11001000000000"', () => {
    expect(evensAndOdds(12800)).toBe('11001000000000');
  });

  test('should return "1e71ca61b"', () => {
    expect(evensAndOdds(8172381723)).toBe('1e71ca61b');
  });
});
