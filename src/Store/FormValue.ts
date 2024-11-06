import { create } from "zustand";
import { FormDataValues } from "../Types/types";

const useFormValue = create<FormDataValues>((set) => ({
  name: "",
  jobPosition: "",
  challenge: "",
  CRM: "",
  industry: "",
  setData: (key: keyof FormDataValues, value: string) => set({ [key]: value }),
}));

export default useFormValue;

