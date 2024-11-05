import { create } from "zustand";

const useFormValue = create((set) => ({
  name: "",
  email: "",
  message: "",
  setName: (name: string) => set({ name }),
  setEmail: (email: string) => set({ email }),
  setMessage: (message: string) => set({ message }),
}));

export default useFormValue;
