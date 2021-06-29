import { fibonacci } from '../@@utils/sequences';

export class G964 {
  public static perimeter = (n: number): number =>
    fibonacci(n + 2).reduce((acc, curr) => acc + 4 * curr, 0);
}
