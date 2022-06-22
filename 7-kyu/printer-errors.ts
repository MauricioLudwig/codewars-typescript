export class G964 {
  public static printerError(s: string): string {
    const errors = s.split('').filter((o) => !/[a-m]/.test(o)).length;
    return `${errors}/${s.length}`;
  }
}
