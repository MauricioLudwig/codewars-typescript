import { stringTransformer } from './string-transformer';

test('should correctly transform strings', () => {
  const fixtures: [string, string][] = [
    ['Example Input', 'iNPUT eXAMPLE'],
    ['', ''],
    [
      'To be OR not to be That is the Question',
      'qUESTION THE IS tHAT BE TO NOT or BE tO',
    ],
    [
      'You Know When  THAT  Hotline Bling',
      'bLING hOTLINE  that  wHEN kNOW yOU',
    ],
    [' A b C d E f G ', ' g F e D c B a '],
  ];

  fixtures.forEach(([s1, s2]) => {
    expect(stringTransformer(s1)).toEqual(s2);
  });
});
