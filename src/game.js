export class Game {
  constructor() {
    this.sequence = [];
    this.playerIndex = 0;
    this.level = 1;
    this.score = 0;
    this.isPlaying = false;
  }

  start() {
    this.reset();
    this.addToSequence();
    this.isPlaying = true;
  }

  reset() {
    this.sequence = [];
    this.playerIndex = 0;
    this.level = 1;
    this.score = 0;
    this.isPlaying = false;
  }

  addToSequence() {
    const randomColor = Math.floor(Math.random() * 4);
    this.sequence.push(randomColor);
  }

  checkInput(colorIndex) {
    if (!this.isPlaying) return 'not_playing';

    if (colorIndex === this.sequence[this.playerIndex]) {
      this.playerIndex++;

      if (this.playerIndex === this.sequence.length) {
        return 'correct';
      }
      return 'continue';
    } else {
      this.isPlaying = false;
      return 'wrong';
    }
  }

  nextLevel() {
    this.level++;
    this.score += this.level * 10;
    this.playerIndex = 0;
    this.addToSequence();
  }
}
