import { create } from "zustand";
interface IAuthStore {
  user: string;
  password: string;
  showPassword: boolean;
  setUser: (text: string) => void;
  setPassword: (text: string) => void;
  login: () => void;
  setShowPassword: () => void;
}
export const useAuthStore = create<IAuthStore>((set) => ({
  user: "",
  password: "",
  showPassword: false,
  setUser: (text) => {
    set(() => ({ user: text }));
  },
  setPassword: (text) => {
    set(() => ({ password: text }));
  },
  login: async () => {},
  setShowPassword: () => {
    set((state) => ({ showPassword: !state.showPassword }));
  },
}));
