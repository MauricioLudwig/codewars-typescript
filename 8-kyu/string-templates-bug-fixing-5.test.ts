import { buildString } from './string-templates-bug-fixing-5';

describe('test suites for string-templates-bug-fixing-5 kata', () => {
  test('should work for 3 items', () => {
    expect(buildString('Cheese', 'Milk', 'Chocolate')).toBe(
      'I like Cheese, Milk, Chocolate!'
    );
  });

  test('should work for 2 items', () => {
    expect(buildString('Cheese', 'Milk')).toBe('I like Cheese, Milk!');
  });

  test('should work for 1 item', () => {
    expect(buildString('Chocolate')).toBe('I like Chocolate!');
  });
});
