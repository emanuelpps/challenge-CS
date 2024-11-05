import { create } from "zustand";
import { IFormProgress } from "../Types/types";

const useFormProgress = create<IFormProgress>((set) => ({
  progress: 0,
  setProgress: (progress: number) => set({ progress }),
}));

export default useFormProgress;
