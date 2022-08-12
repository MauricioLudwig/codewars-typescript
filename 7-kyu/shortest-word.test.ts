import { findShort } from './shortest-word';

describe('test suites for shortest-word kata', () => {
  test('should return 3', () => {
    expect(
      findShort('bitcoin take over the world maybe who knows perhaps')
    ).toBe(3);
  });

  test('should return 3', () => {
    expect(
      findShort(
        'turns out random test cases are easier than writing out basic ones'
      )
    ).toBe(3);
  });

  test('should return 3', () => {
    expect(findShort('lets talk about javascript the best language')).toBe(3);
  });

  test('should return 1', () => {
    expect(findShort('i want to travel the world writing code one day')).toBe(
      1
    );
  });

  test('should return 2', () => {
    expect(findShort('Lets all go on holiday somewhere very cold')).toBe(2);
  });

  test('should return 2', () => {
    expect(findShort("Let's travel abroad shall we")).toBe(2);
  });
});
