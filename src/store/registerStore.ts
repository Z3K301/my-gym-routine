import { create } from "zustand";

interface IRegisterStore {
  user: string;
  mail: string;
  password: string;
  showPassword: boolean;
  setUser: (text: string) => void;
  setMail: (text: string) => void;
  setPassword: (text: string) => void;
  setShowPassword: () => void;
  register: () => void;
}
export const useRegisterStore = create<IRegisterStore>((set) => ({
  user: "",
  mail: "",
  password: "",
  showPassword: false,
  setUser: (text) => {
    set(() => ({ user: text }));
  },
  setMail: (text) => {
    set(() => ({ mail: text }));
  },
  setPassword: (text) => {
    set(() => ({ password: text }));
  },
  setShowPassword: () => {
    set((state) => ({ showPassword: !state.showPassword }));
  },
  register: async () => {
    //TODO login call and set logged in true
    set(() => ({ user: "", mail: "", password: "", password2: "" }));
    //TODO redirect
  },
}));
