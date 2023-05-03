import { create } from "zustand";
import axios from "axios";
interface IChuckNorrisStore {
  joke: string;
  getJoke: () => void;
}
export const useChuckNorrisStore = create<IChuckNorrisStore>((set) => ({
  joke: "",
  getJoke: async () => {
    const { data } = await axios.get("https://api.chucknorris.io/jokes/random");
    set(() => ({ joke: data.value }));
  },
}));
