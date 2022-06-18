import { assertIsDefined } from '../@@utils/assertions';

export const findRoutes = (routes: string[][]): string => {
  const routesLs = routes.flat(1);
  const [startLocation] = routesLs.filter(
    (r1, i1) => !routesLs.some((r2, i2) => r1 === r2 && i1 !== i2)
  );

  assertIsDefined(startLocation);

  const journey: string[] = [];
  let currentLocation = startLocation;

  while (true) {
    journey.push(currentLocation);
    const [exists, , nextLocation] = findRoute(routes, currentLocation);
    if (exists) {
      currentLocation = nextLocation;
    } else {
      break;
    }
  }

  return journey.join(', ');
};

const findRoute = (
  routes: string[][],
  location: string
): [boolean, string, string] => {
  for (let i = 0; i < routes.length; i++) {
    const [a, b] = routes[i] ?? [];

    if (a === location) {
      assertIsDefined(b);
      return [true, a, b];
    }
  }

  return [false, '', ''];
};
