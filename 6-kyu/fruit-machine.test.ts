import { fruit } from './fruit-machine';

describe('test suites for fruit kata', () => {
  test('should yield 100', () => {
    const reel = [
      'Wild',
      'Star',
      'Bell',
      'Shell',
      'Seven',
      'Cherry',
      'Bar',
      'King',
      'Queen',
      'Jack',
    ];
    const spin = [0, 0, 0];

    expect(fruit([reel, reel, reel], spin)).toBe(100);
  });

  test('should yield 0', () => {
    const reel1 = [
      'Wild',
      'Star',
      'Bell',
      'Shell',
      'Seven',
      'Cherry',
      'Bar',
      'King',
      'Queen',
      'Jack',
    ];
    const reel2 = [
      'Bar',
      'Wild',
      'Queen',
      'Bell',
      'King',
      'Seven',
      'Cherry',
      'Jack',
      'Star',
      'Shell',
    ];
    const reel3 = [
      'Bell',
      'King',
      'Wild',
      'Bar',
      'Seven',
      'Jack',
      'Shell',
      'Cherry',
      'Queen',
      'Star',
    ];
    const spin = [5, 4, 3];

    expect(fruit([reel1, reel2, reel3], spin)).toBe(0);
  });

  test('should yield 3', () => {
    const reel1 = [
      'King',
      'Cherry',
      'Bar',
      'Jack',
      'Seven',
      'Queen',
      'Star',
      'Shell',
      'Bell',
      'Wild',
    ];
    const reel2 = [
      'Bell',
      'Seven',
      'Jack',
      'Queen',
      'Bar',
      'Star',
      'Shell',
      'Wild',
      'Cherry',
      'King',
    ];
    const reel3 = [
      'Wild',
      'King',
      'Queen',
      'Seven',
      'Star',
      'Bar',
      'Shell',
      'Cherry',
      'Jack',
      'Bell',
    ];
    const spin = [0, 0, 1];

    expect(fruit([reel1, reel2, reel3], spin)).toBe(3);
  });

  test('should yield 6', () => {
    const reel1 = [
      'King',
      'Jack',
      'Wild',
      'Bell',
      'Star',
      'Seven',
      'Queen',
      'Cherry',
      'Shell',
      'Bar',
    ];
    const reel2 = [
      'Star',
      'Bar',
      'Jack',
      'Seven',
      'Queen',
      'Wild',
      'King',
      'Bell',
      'Cherry',
      'Shell',
    ];
    const reel3 = [
      'King',
      'Bell',
      'Jack',
      'Shell',
      'Star',
      'Cherry',
      'Queen',
      'Bar',
      'Wild',
      'Seven',
    ];
    const spin = [0, 5, 0];

    expect(fruit([reel1, reel2, reel3], spin)).toBe(6);
  });
});
