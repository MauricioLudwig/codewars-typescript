import { goodVsEvil } from './good-vs-evil';

const fixtures = [
  [
    'Battle Result: Evil eradicates all trace of Good',
    '1 1 1 1 1 1',
    '1 1 1 1 1 1 1'
  ],
  ['Battle Result: Good triumphs over Evil', '0 0 0 0 0 10', '0 1 1 1 1 0 0'],
  [
    'Battle Result: No victor on this battle field',
    '1 0 0 0 0 0',
    '1 0 0 0 0 0 0'
  ]
];

test.each(fixtures)('should return %s', (res, arg1, arg2) => {
  expect(goodVsEvil(arg1, arg2)).toBe(res);
});
