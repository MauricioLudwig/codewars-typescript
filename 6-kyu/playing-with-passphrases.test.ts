import { playPass } from './playing-with-passphrases';

describe('test suites for playPass kata', () => {
  const fixtures: [string, string, number][] = [
    ['!!!vPz fWpM J', 'I LOVE YOU!!!', 1],
    [
      '4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO',
      'MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015',
      2
    ]
  ];

  test.each(fixtures)('should return %s', (res, s, n) => {
    expect(playPass(s, n)).toBe(res);
  });
});
