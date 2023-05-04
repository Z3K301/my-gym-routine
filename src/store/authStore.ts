import { create } from "zustand";
import { handleLogin } from "../utils/auth/login";

interface IAuthStore {
  user: string;
  password: string;
  showPassword: boolean;
  isError: boolean;
  setUser: (text: string) => void;
  setPassword: (text: string) => void;
  login: () => Promise<boolean>;
  setShowPassword: () => void;
  changeIsError: () => void;
}
const initialState = {
  user: "",
  password: "",
  showPassword: false,
  isError: false,
};
export const useAuthStore = create<IAuthStore>((set, get) => ({
  ...initialState,
  setUser: (text) => {
    set(() => ({ user: text }));
  },
  setPassword: (text) => {
    set(() => ({ password: text }));
  },
  login: async () => {
    const { user, password } = get();
    const isLoggedIn = await handleLogin(user, password);
    if (isLoggedIn) {
      set(() => initialState);
    } else {
      set((state) => ({ ...state, isError: !isLoggedIn }));
    }
    return isLoggedIn;
  },
  setShowPassword: () => {
    set((state) => ({ showPassword: !state.showPassword }));
  },
  changeIsError: () => {
    set((state) => ({ isError: !state.isError }));
  },
}));
