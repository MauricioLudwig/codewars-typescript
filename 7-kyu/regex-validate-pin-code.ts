export class Kata {
  static validatePin(pin: string): boolean {
    return /^[0-9]{4}([0-9]{2})?$/.test(pin);
  }
}
