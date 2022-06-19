import { assertIsDefined } from './assertions';

describe('test suites for assertions utility methods', () => {
  test('should not throw error for a value which is neither null nor undefined', () => {
    const mockFn = () => {
      const arrange: number | undefined = 10;
      assertIsDefined(arrange);
    };
    expect(mockFn).not.toThrow();
  });

  test('should throw error for a value which is undefined', () => {
    const mockFn = () => {
      const arrange: number | undefined = undefined;
      assertIsDefined(arrange);
    };
    expect(mockFn).toThrowError(
      `Expected 'value' to be defined, but received undefined`
    );
  });

  test('should throw error for a value which is null', () => {
    const mockFn = () => {
      const arrange: number | null = null;
      assertIsDefined(arrange);
    };
    expect(mockFn).toThrowError(
      `Expected 'value' to be defined, but received null`
    );
  });
});
