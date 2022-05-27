export class G964 {
  public static digPow = (n: number, p: number): number => {
    const digits = n.toString().split('').map(Number);
    const composite = digits.reduce(
      (acc, curr, index) => acc + Math.pow(curr, p + index),
      0
    );

    if (composite % n === 0) {
      return composite / n;
    } else {
      return -1;
    }
  };
}
