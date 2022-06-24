import fs from 'fs';
import fsAsync from 'fs/promises';
import Mustache from 'mustache';

export type TGroup = {
  kyu: number;
  count: number;
};

export const filePattern = /^([a-z0-9-])+\.(t|j)s$/;

export const getKatasByKyu = async (kyu: number): Promise<number> => {
  const directory = `${kyu}-kyu`;

  if (!fs.existsSync(directory)) {
    return 0;
  }

  const files = await fsAsync.readdir(directory);
  return files.filter((file) => filePattern.test(file)).length;
};

export const getVars = (katas: Array<TGroup>): [string, string, number] => {
  const KATAS_TABLE: string[] = [];
  const KATAS_PIE: string[] = [];
  let TOTAL = 0;

  katas.forEach(({ kyu, count }) => {
    KATAS_TABLE.push(`|${kyu}|${count}|`);
    TOTAL += count;

    if (count > 0) {
      KATAS_PIE.push(`\t"Kyu ${kyu}": ${count}`);
    }
  });

  return [KATAS_TABLE.join('\n'), KATAS_PIE.join('\n'), TOTAL];
};

export const updateReadme = async (): Promise<void> => {
  try {
    const kyus = Array(8)
      .fill(0)
      .map((_, i) => i + 1);

    const katas: Array<TGroup> = await Promise.all(
      kyus.map(async (kyu) => ({
        kyu,
        count: await getKatasByKyu(kyu)
      }))
    );

    const [KATAS_TABLE, KATAS_PIE, TOTAL] = getVars(katas);

    const data = await fsAsync.readFile('./@@template/readme.mustache');

    const output = Mustache.render(data.toString(), {
      KATAS_TABLE,
      KATAS_PIE,
      TOTAL
    });

    await fsAsync.writeFile('README.md', output);
  } catch (err) {
    console.error(err);
    throw new Error(`Unable to update readme.`);
  }
};

if (process.argv[2] === 'run') {
  updateReadme();
}
