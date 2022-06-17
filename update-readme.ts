import fs from 'fs';
import Mustache from 'mustache';

type TGroup = {
  kyu: number;
  count: number;
};

const getKatasByKyu = async (kyu: number): Promise<number> => {
  const directory = `${kyu}-kyu`;

  if (!fs.existsSync(directory)) {
    return 0;
  }

  const files = await fs.promises.readdir(directory);
  return files.filter((file) => /^([a-z0-9\-])+\.(t|j)s$/.test(file)).length;
};

const getVars = (katas: Array<TGroup>): [string, string, number] => {
  let KATAS_TABLE: string[] = [];
  let KATAS_PIE: string[] = [];
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

(async () => {
  try {
    const kyus = Array(8)
      .fill(0)
      .map((_, i) => i + 1);

    const katas: Array<TGroup> = await Promise.all(
      kyus.map(async (kyu) => ({
        kyu,
        count: await getKatasByKyu(kyu),
      }))
    );

    const [KATAS_TABLE, KATAS_PIE, TOTAL] = getVars(katas);

    const data = await fs.promises.readFile('./@@template/readme.mustache');

    const output = Mustache.render(data.toString(), {
      KATAS_TABLE,
      KATAS_PIE,
      TOTAL,
    });

    await fs.promises.writeFile('README.md', output);
  } catch (err) {
    console.error(err);
    throw new Error(`Unable to update readme.`);
  }
})();
