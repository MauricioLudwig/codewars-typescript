import { warnTheSheep } from './a-wolf-in-sheeps-clothing';

describe('test suites for a-wolf-in-sheeps-clothing kata', () => {
  test('should return warning for sheep 2', () => {
    expect(
      warnTheSheep([
        'sheep',
        'sheep',
        'sheep',
        'sheep',
        'sheep',
        'wolf',
        'sheep',
        'sheep'
      ])
    ).toBe('Oi! Sheep number 2! You are about to be eaten by a wolf!');
  });

  test('should return warning for sheep 5', () => {
    expect(
      warnTheSheep([
        'sheep',
        'wolf',
        'sheep',
        'sheep',
        'sheep',
        'sheep',
        'sheep'
      ])
    ).toBe('Oi! Sheep number 5! You are about to be eaten by a wolf!');
  });

  test('should return warning for sheep 6', () => {
    expect(
      warnTheSheep([
        'wolf',
        'sheep',
        'sheep',
        'sheep',
        'sheep',
        'sheep',
        'sheep'
      ])
    ).toBe('Oi! Sheep number 6! You are about to be eaten by a wolf!');
  });

  test('should return warning for sheep 1', () => {
    expect(warnTheSheep(['sheep', 'wolf', 'sheep'])).toBe(
      'Oi! Sheep number 1! You are about to be eaten by a wolf!'
    );
  });

  test('should return warning to wolf', () => {
    expect(warnTheSheep(['sheep', 'sheep', 'wolf'])).toBe(
      'Pls go away and stop eating my sheep'
    );
  });
});
