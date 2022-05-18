import { wave } from './mexican-wave';

type TFixture = [string, Array<string>][];

describe('test suites for wave kata', () => {
  test('should pass for single words', () => {
    const fixtures: TFixture = [
      ['hello', ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']],
      [
        'codewars',
        [
          'Codewars',
          'cOdewars',
          'coDewars',
          'codEwars',
          'codeWars',
          'codewArs',
          'codewaRs',
          'codewarS',
        ],
      ],
    ];

    fixtures.forEach(([n1, n2]) => {
      expect(wave(n1)).toEqual(n2);
    });
  });

  test('should pass for empty strings', () => {
    const fixtures: TFixture = [['', []]];

    fixtures.forEach(([n1, n2]) => {
      expect(wave(n1)).toEqual(n2);
    });
  });

  test('should pass for multiple words', () => {
    const fixtures: TFixture = [
      [
        'two words',
        [
          'Two words',
          'tWo words',
          'twO words',
          'two Words',
          'two wOrds',
          'two woRds',
          'two worDs',
          'two wordS',
        ],
      ],
    ];

    fixtures.forEach(([n1, n2]) => {
      expect(wave(n1)).toEqual(n2);
    });
  });

  test('should pass for words with spaces', () => {
    const fixtures: TFixture = [[' gap ', [' Gap ', ' gAp ', ' gaP ']]];

    fixtures.forEach(([n1, n2]) => {
      expect(wave(n1)).toEqual(n2);
    });
  });
});
