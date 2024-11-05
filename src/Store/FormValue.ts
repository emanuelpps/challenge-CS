import { create } from "zustand";
import { FormDataValues } from "../Types/types";

const useFormValue = create<FormDataValues>((set) => ({
  name: "",
  jobPosition: "",
  challenge: "",
  CRM: "",
  industy: "",
  setName: (name: string) => set({ name }),
  setJobPosition: (jobPosition: string) => set({ jobPosition }),
  setChallenge: (challenge: string) => set({ challenge }),
  setCRM: (CRM: string) => set({ CRM }),
  setIndusty: (industy: string) => set({ industy }),
}));

export default useFormValue;
