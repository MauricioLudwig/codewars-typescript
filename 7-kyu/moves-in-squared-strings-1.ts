type TFn = (s: string) => string;

export const vertMirror: TFn = (s) =>
  s
    .split('\n')
    .map((o) => o.split('').reverse().join(''))
    .join('\n');

export const horMirror: TFn = (s) => s.split('\n').reverse().join('\n');

export const oper = (fn: TFn, s: string): string => fn(s);
