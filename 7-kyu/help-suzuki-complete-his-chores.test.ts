import { choreAssignment } from './help-suzuki-complete-his-chores';

describe('test suites for help-suzuki-complete-his-chores kata', () => {
  test('should return [7, 7, 8]', () => {
    expect(choreAssignment([5, 2, 1, 6, 4, 4])).toEqual([7, 7, 8]);
  });

  test('should return [7, 8, 8, 10, 10, 11]', () => {
    expect(choreAssignment([1, 5, 2, 8, 4, 9, 6, 4, 2, 2, 2, 9])).toEqual([
      7, 8, 8, 10, 10, 11
    ]);
  });

  test('should return [10, 11, 11, 11, 11, 12, 12, 13]', () => {
    expect(
      choreAssignment([5, 8, 3, 5, 3, 10, 5, 3, 10, 2, 4, 8, 7, 3, 9, 6])
    ).toEqual([10, 11, 11, 11, 11, 12, 12, 13]);
  });

  test('should return [11, 11, 11, 12, 12, 12, 12, 12, 12]', () => {
    expect(
      choreAssignment([9, 2, 10, 10, 5, 5, 8, 7, 4, 2, 8, 3, 6, 8, 7, 3, 6, 2])
    ).toEqual([11, 11, 11, 12, 12, 12, 12, 12, 12]);
  });

  test('should return [10, 10, 11, 11, 11, 11, 11, 11, 12, 12]', () => {
    expect(
      choreAssignment([
        1, 6, 5, 5, 1, 10, 10, 9, 2, 10, 3, 9, 5, 4, 5, 6, 1, 9, 1, 8
      ])
    ).toEqual([10, 10, 11, 11, 11, 11, 11, 11, 12, 12]);
  });
});
