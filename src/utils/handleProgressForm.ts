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
  setProgress(Math.max(currentProgress - 1, 0));
};
