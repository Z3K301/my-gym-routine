import { create } from "zustand";
interface IAuthStore {
  user: string;
  password: string;
  showPassword: boolean;
  isError: boolean;
  setUser: (text: string) => void;
  setPassword: (text: string) => void;
  login: () => void;
  setShowPassword: () => void;
  changeIsError: () => void;
}
const initialState = {
  user: "",
  password: "",
  showPassword: false,
  isError: false,
};
export const useAuthStore = create<IAuthStore>((set) => ({
  ...initialState,
  setUser: (text) => {
    set(() => ({ user: text }));
  },
  setPassword: (text) => {
    set(() => ({ password: text }));
  },
  login: async () => {
    //TODO login call and set logged in true
    //if login fails, set isError to true
    set((state) => ({ ...state, isError: true }));
    // set(() => ({ ...initialState }));
    //TODO redirect
  },
  setShowPassword: () => {
    set((state) => ({ showPassword: !state.showPassword }));
  },
  changeIsError: () => {
    set((state) => ({ isError: !state.isError }));
  },
}));
