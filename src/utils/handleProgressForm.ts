export const handleProgressFoward = (
  setProgress: (progress: number) => void,
  progress: number
) => {
  setProgress(Math.min(progress + 1, 5));
};

export const handleProgressBackward = (
  setProgress: (progress: number) => void,
  currentProgress: number
) => {
  setProgress(currentProgress - 1);
};

