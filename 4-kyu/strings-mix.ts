import { assertIsDefined } from '../@@utils/assertions';

type TGroup = Record<string, number>;

type TFrequency = {
  key: string;
  symbol: string;
  occurrence: number;
};

export class G964 {
  public static mix = (s1: string, s2: string) => {
    const [s1Dict, s2Dict] = [s1, s2].map((s) => G964.getLetterOccurrences(s));
    assertIsDefined(s1Dict);
    assertIsDefined(s2Dict);
    G964.appendMissingLetters(s1Dict, s2Dict);
    const s = G964.getCombinedOccurrences(s1Dict, s2Dict);
    return G964.construct(G964.sort(s));
  };

  static getLetterOccurrences(s: string): TGroup {
    const parsedS = s
      .split('')
      .filter((o) => /[a-z]/.test(o))
      .join('');

    const attempted: string[] = [];
    const dict: TGroup = {};

    for (let i = 0; i < parsedS.length; i++) {
      const c = parsedS[i];
      assertIsDefined(c);

      if (this.includes(attempted, c)) {
        continue;
      }

      const occurrences = parsedS
        .split('')
        .reduce((acc, curr, index): number => {
          if (index === i) {
            return acc;
          }

          if (curr === c) {
            return acc + 1;
          }

          return acc;
        }, 1);

      attempted.push(c);

      dict[c] = occurrences;
    }

    return dict;
  }

  static appendMissingLetters(s1: TGroup, s2: TGroup) {
    const keys = Object.keys(s1);
    const missingKeys = Object.keys(s2).filter((o) => !this.includes(keys, o));
    missingKeys.forEach((o) => {
      s1[o] = 1;
    });
  }

  static getCombinedOccurrences(s1: TGroup, s2: TGroup): Array<TFrequency> {
    const frequencies: TFrequency[] = [];
    const keys = Object.keys(s1);

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      assertIsDefined(key);
      const n1 = s1[key];
      assertIsDefined(n1);
      const n2 = s2[key] ?? 0;

      if ([n1, n2].every((o) => o <= 1)) {
        continue;
      }

      let k = '';
      let v = 0;

      if (n1 > n2) {
        k = '1';
        v = n1;
      } else if (n2 > n1) {
        k = '2';
        v = n2;
      } else {
        k = '=';
        v = n1;
      }

      frequencies.push({
        key: k,
        symbol: key,
        occurrence: v
      });
    }

    return frequencies;
  }

  static sort(s: TFrequency[]): TFrequency[] {
    return s.sort((a, b) => {
      if (a.occurrence > b.occurrence) {
        return -1;
      } else if (b.occurrence > a.occurrence) {
        return 1;
      }

      const k1 = a.key === '=' ? '3' : a.key;
      const k2 = b.key === '=' ? '3' : b.key;

      if (k1 > k2) {
        return 1;
      } else if (k2 > k1) {
        return -1;
      }

      if (a.symbol > b.symbol) {
        return 1;
      } else if (b.symbol > a.symbol) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  static construct(s: TFrequency[]): string {
    return s
      .filter((o) => o.occurrence > 1)
      .map((o) => {
        const seq = Array.from(Array(o.occurrence))
          .map(() => o.symbol)
          .join('');
        return `${o.key}:${seq}`;
      })
      .join('/');
  }

  static includes<T>(s: Array<T>, value: T): boolean {
    return s.indexOf(value) !== -1;
  }
}
