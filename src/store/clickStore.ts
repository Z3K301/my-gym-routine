import { create } from "zustand";
interface IClickStore {
  clicks: number;
  increment: () => void;
}
export const useClickStore = create<IClickStore>((set) => ({
  clicks: 0,
  increment: () => {
    set((state) => ({ clicks: state.clicks + 1 }));
  },
}));
