export const playSound = (type: 'correct' | 'wrong') => {
  const audio = new Audio(type === 'correct' ? '/sounds/correct.wav' : '/sounds/wrong.mp3');
  audio.volume = 0.4;
  audio.play().catch(err => console.error("Error playing sound:", err));
};