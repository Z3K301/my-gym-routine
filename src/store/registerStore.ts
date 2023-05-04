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

const initialState = {
  user: "",
  mail: "",
  password: "",
  showPassword: false,
};
export const useRegisterStore = create<IRegisterStore>((set) => ({
  ...initialState,
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
    set(() => ({ ...initialState }));
    //TODO redirect
  },
}));
