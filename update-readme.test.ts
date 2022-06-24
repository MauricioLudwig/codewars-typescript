import fs from 'fs';
import fsAsync from 'fs/promises';
import { filePattern, getVars, getKatasByKyu, TGroup } from './update-readme';

jest.mock('fs');
jest.mock('fs/promises');

const mockedFs = jest.mocked(fs);
const mockedPromisesFs = jest.mocked(fsAsync);

describe('test suites for update-readme', () => {
  describe('test suites for filePattern', () => {
    test('should return true for a valid file name', () => {
      expect(filePattern.test('hello-world.ts')).toBe(true);
    });

    test('should return true for a valid file name containing digits', () => {
      expect(filePattern.test('hello-world-123.ts')).toBe(true);
    });

    test('should return false for a file name containing a test extension', () => {
      expect(filePattern.test('hello-world-123.test.ts')).toBe(false);
    });

    test('should return false for a file name containing a data extension', () => {
      expect(filePattern.test('hello-world-123.data.ts')).toBe(false);
    });
  });

  describe('test suites for getKatasByKyu', () => {
    test('should return the length of 2 for the valid file names', async () => {
      const kyu = 5;
      const directory = `${kyu}-kyu`;
      const fileNames = [
        'hello-world.ts',
        'hello-world.data.ts',
        'hello-world.test.ts',
        'hello-world-123.ts',
        'hello-world-123.test.ts',
        'x_y.ts',
        'x_y.test.ts'
      ];

      mockedFs.existsSync.mockReturnValueOnce(true);
      mockedPromisesFs.readdir.mockReturnValueOnce(
        new Promise((res) => res(fileNames as unknown as Array<fs.Dirent>))
      );

      const response = await getKatasByKyu(kyu);

      expect(fs.existsSync).toHaveBeenCalledTimes(1);
      expect(fs.existsSync).toHaveBeenCalledWith(directory);
      expect(fsAsync.readdir).toHaveBeenCalledTimes(1);
      expect(fsAsync.readdir).toHaveBeenCalledWith(directory);
      expect(response).toBe(2);
    });
  });

  describe('test suites for getVars', () => {
    test('should return true', () => {
      const prerequisite: Array<TGroup> = [
        {
          kyu: 6,
          count: 10
        },
        {
          kyu: 7,
          count: 8
        }
      ];
      const expectation = ['|6|10|\n|7|8|', '\t"Kyu 6": 10\n\t"Kyu 7": 8', 18];
      expect(getVars(prerequisite)).toEqual(expectation);
    });
  });
});
