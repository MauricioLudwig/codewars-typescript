export const mazeRunner = (maze: number[][], directions: string[]): string => {
  let [y, x] = getStartingLocation(maze);

  for (let i = 0; i < directions.length; i++) {
    const direction = directions[i]!;

    switch (direction) {
      case 'N':
        y--;
        break;
      case 'E':
        x++;
        break;
      case 'S':
        y++;
        break;
      case 'W':
        x--;
        break;
      default:
        throw new Error(`${direction} did not match any cases.`);
    }

    const nextLocation = maze[y]?.[x];

    switch (nextLocation) {
      case undefined:
      case 1:
        return 'Dead';
      case 0:
      case 2:
        continue;
      case 3:
        return 'Finish';
      default:
        throw new Error(`${nextLocation} did not match any cases.`);
    }
  }

  return 'Lost';
};

const getStartingLocation = (maze: number[][]): [number, number] => {
  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y]!.length; x++) {
      if (maze[y]![x]! === 2) {
        return [y, x];
      }
    }
  }

  throw new Error('No starting location found.');
};
