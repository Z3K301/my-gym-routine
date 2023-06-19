import { create } from "zustand";
import { handleRegister } from "../utils/auth/register";

interface IRegisterStore {
  user: string;
  mail: string;
  password: string;
  showPassword: boolean;
  setUser: (text: string) => void;
  setMail: (text: string) => void;
  setPassword: (text: string) => void;
  setShowPassword: () => void;
  register: () => Promise<boolean>;
}

const initialState = {
  user: "",
  mail: "",
  password: "",
  showPassword: false,
};
export const useRegisterStore = create<IRegisterStore>((set, get) => ({
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
    const { user, mail, password } = get();
    const isRegistered = await handleRegister(user, mail, password);
    if (isRegistered) {
      set(() => ({ ...initialState }));
    } else {
      //TODO error
    }
    return isRegistered;
  },
}));
