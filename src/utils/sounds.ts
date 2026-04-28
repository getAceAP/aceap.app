let isMuted = typeof window !== 'undefined' ? localStorage.getItem('sound-muted') === 'true' : false;

export const playSound = (type: 'correct' | 'wrong') => {
  if (isMuted) return;
  const audio = new Audio(type === 'correct' ? '/sounds/correct.wav' : '/sounds/wrong.mp3');
  audio.volume = 0.4;
  audio.play().catch(err => console.error("Error playing sound:", err));
};

export const toggleMute = () => {
  isMuted = !isMuted;
  localStorage.setItem('sound-muted', String(isMuted));
  return isMuted;
};

export const getIsMuted = () => isMuted;