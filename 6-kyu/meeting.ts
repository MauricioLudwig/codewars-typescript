type TName = {
  format: string;
  firstName: string;
  lastName: string;
};

export const meeting = (s: string): string => {
  const names: Array<TName> = s
    .toUpperCase()
    .split(';')
    .map((name) => {
      const [firstName, lastName] = name.split(':');
      const format = `(${[lastName, firstName].join(', ')})`;
      return {
        format,
        firstName: firstName!,
        lastName: lastName!,
      };
    })
    .sort(sortByNames);

  return names.map((o) => o.format).join('');
};

const sortByNames = (a: TName, b: TName): number => {
  const { firstName: fnA, lastName: lnA } = a;
  const { firstName: fnB, lastName: lnB } = b;

  if (lnA > lnB) {
    return 1;
  } else if (lnA < lnB) {
    return -1;
  }

  if (fnA > fnB) {
    return 1;
  } else if (fnA < fnB) {
    return -1;
  }

  return 0;
};
