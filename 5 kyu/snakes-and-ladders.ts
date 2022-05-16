import { tunnels } from './snakes-and-ladders.data';

export class SnakesLadders {
  player1 = 0;
  player2 = 0;
  currentTurn = 0; // 0 (player 1), 1 (player 2)

  constructor() {}

  play(die1: number, die2: number): string {
    if (this.hasExistingWinner()) {
      return 'Game over!';
    }

    let newSquare = this.getNextSquare(die1, die2);

    if (newSquare > 100) {
      const remainder = newSquare - 100;
      newSquare = 100 - remainder;
    }

    const specialSquare = tunnels.find((o) => o.from === newSquare);

    if (specialSquare) {
      newSquare = specialSquare.to;
    }

    if (this.currentTurn === 0) {
      this.player1 = newSquare;
    } else {
      this.player2 = newSquare;
    }

    let msg;

    if (newSquare === 100) {
      msg = `Player ${this.currentTurn + 1} Wins!`;
    } else {
      msg = `Player ${this.currentTurn + 1} is on square ${newSquare}`;
    }

    this.togglePlayerTurn(die1, die2);

    return msg;
  }

  private hasExistingWinner(): boolean {
    return [this.player1, this.player2].some((o) => o === 100);
  }

  private getNextSquare(die1: number, die2: number): number {
    const current = [this.player1, this.player2][this.currentTurn]!;
    return current + die1 + die2;
  }

  private togglePlayerTurn(die1: number, die2: number): void {
    if (die1 !== die2) {
      this.currentTurn = 1 - this.currentTurn;
    }
  }
}
