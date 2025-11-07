export class SoundManager {
  constructor() {
    this.audioContext = null;
    this.initAudioContext();
  }

  initAudioContext() {
    if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  play(noteNumber) {
    if (!this.audioContext) return;

    const frequencies = {
      '1': 329.63,
      '2': 261.63,
      '3': 392.00,
      '4': 523.25
    };

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.frequency.value = frequencies[noteNumber] || 440;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + 0.3);
  }

  playError() {
    if (!this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.frequency.value = 100;
    oscillator.type = 'sawtooth';

    gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.5);

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + 0.5);
  }
}
