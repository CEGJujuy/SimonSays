import { Game } from './game.js';
import { SoundManager } from './sound.js';

const game = new Game();
const soundManager = new SoundManager();

const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
const gameButtons = document.querySelectorAll('.game-button');
const levelDisplay = document.getElementById('level');
const scoreDisplay = document.getElementById('score');
const messageDisplay = document.getElementById('message');

function updateDisplay() {
  levelDisplay.textContent = game.level;
  scoreDisplay.textContent = game.score;
}

function showMessage(text, duration = 2000) {
  messageDisplay.textContent = text;
  if (duration > 0) {
    setTimeout(() => {
      messageDisplay.textContent = '';
    }, duration);
  }
}

async function playSequence() {
  startButton.disabled = true;
  disableGameButtons();
  showMessage('¡Observa la secuencia!', 0);

  for (let i = 0; i < game.sequence.length; i++) {
    await new Promise(resolve => setTimeout(resolve, 500));
    const colorIndex = game.sequence[i];
    const button = gameButtons[colorIndex];
    await activateButton(button);
  }

  showMessage('¡Tu turno!', 0);
  enableGameButtons();
}

async function activateButton(button) {
  const sound = button.dataset.sound;
  button.classList.add('active');
  soundManager.play(sound);

  await new Promise(resolve => setTimeout(resolve, 400));
  button.classList.remove('active');
}

function disableGameButtons() {
  gameButtons.forEach(button => {
    button.disabled = true;
  });
}

function enableGameButtons() {
  gameButtons.forEach(button => {
    button.disabled = false;
  });
}

async function handleGameButtonClick(event) {
  const button = event.currentTarget;
  const colorIndex = Array.from(gameButtons).indexOf(button);

  disableGameButtons();
  await activateButton(button);

  const result = game.checkInput(colorIndex);

  if (result === 'correct') {
    if (game.playerIndex === game.sequence.length) {
      showMessage('¡Correcto! Preparando siguiente nivel...', 1500);
      await new Promise(resolve => setTimeout(resolve, 1500));
      game.nextLevel();
      updateDisplay();
      await playSequence();
    } else {
      enableGameButtons();
    }
  } else if (result === 'wrong') {
    showMessage(`¡Game Over! Puntuación final: ${game.score}`, 0);
    soundManager.playError();
    startButton.textContent = 'Reintentar';
    startButton.disabled = false;
  }
}

startButton.addEventListener('click', async () => {
  game.start();
  updateDisplay();
  startButton.textContent = 'Jugando...';
  showMessage('');
  await playSequence();
});

resetButton.addEventListener('click', () => {
  game.reset();
  updateDisplay();
  showMessage('');
  startButton.textContent = 'Iniciar';
  startButton.disabled = false;
  disableGameButtons();
});

gameButtons.forEach(button => {
  button.addEventListener('click', handleGameButtonClick);
});

disableGameButtons();
