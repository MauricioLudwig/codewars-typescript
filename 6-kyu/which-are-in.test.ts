import { inArray } from './which-are-in';

describe('test suites for which-are-in kata', () => {
  const a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];

  test('should return ["arp", "live", "strong"]', () => {
    expect(inArray(['arp', 'live', 'strong'], a2)).toEqual([
      'arp',
      'live',
      'strong'
    ]);
  });

  test('should return ["live", "strong"]', () => {
    expect(inArray(['xyz', 'live', 'strong'], a2)).toEqual(['live', 'strong']);
  });

  test('should return ["arp", "live", "strong"]', () => {
    expect(inArray(['live', 'strong', 'arp'], a2)).toEqual([
      'arp',
      'live',
      'strong'
    ]);
  });

  test('should return ["arp", "live", "strong"]', () => {
    expect(inArray(['live', 'strong', 'lyal', 'lysh', 'arp'], a2)).toEqual([
      'arp',
      'live',
      'strong'
    ]);
  });

  test('should return empty array for no matches', () => {
    expect(inArray(['tarp', 'mice', 'bull'], a2)).toEqual([]);
  });

  test('should return empty array for providing empty array argument', () => {
    expect(inArray([], a2)).toEqual([]);
  });
});
