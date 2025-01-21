import {
  reduceByRules,
  type RuleFunction
} from './reducing-by-rules-to-get-the-result';

describe('test suites for reduceByRules kata', () => {
  const additionRule: RuleFunction = (a, b) => a + b;
  const subtractionRule: RuleFunction = (a, b) => a - b;
  const multiplicationRule: RuleFunction = (a, b) => a * b;
  const minRule: RuleFunction = (a, b) => Math.min(a, b);
  const maxRule: RuleFunction = (a, b) => Math.max(a, b);

  const additionFixtures: [number, Array<number>][] = [
    [6, [2, 2, 2]],
    [8, [2, 2, 2, 2]],
    [10, [2, 2, 2, 2, 2]],
    [12, [2, 2, 2, 2, 2, 2]]
  ];

  const multiplicationFixtures: [number, Array<number>][] = [
    [2, [2, 2, 2]],
    [4, [2, 2, 2, 2]],
    [6, [2, 2, 2, 2, 2]],
    [4, [2, 2, 2, 2, 2, 2]]
  ];

  const minMaxFixtures: [number, Array<number>][] = [
    [3.3, [1.3, 20, 3.3]],
    [2.2, [4.1, 2.2, 2.1, 2.5]],
    [8.0, [8.0, 8.1, 4.1, 12.0, 2.0]],
    [2.4, [2.9, 2.8, 2.7, 2.6, 2.5, 2.4]]
  ];

  test.each(additionFixtures)(
    'should return %s for addition rule',
    (res, arg) => {
      expect(reduceByRules(arg, [additionRule])).toBe(res);
    }
  );

  test.each(multiplicationFixtures)(
    'should return %s for add, sub, mul rules',
    (res, arg) => {
      expect(
        reduceByRules(arg, [additionRule, subtractionRule, multiplicationRule])
      ).toBe(res);
    }
  );

  test.each(minMaxFixtures)(
    'should return %s for min, max rules',
    (res, arg) => {
      expect(reduceByRules(arg, [minRule, maxRule])).toBe(res);
    }
  );
});
