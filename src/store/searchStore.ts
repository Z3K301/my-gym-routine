import { create } from "zustand";
interface ISearchStore {
  search: string;
  results: string[];
  selected: string;
  setSearch: (text: string) => void;
  setResults: (results: string[]) => void;
  setSelected: (selected: string) => void;
}
export const useSearchStore = create<ISearchStore>((set) => ({
  search: "",
  results: [],
  selected: "",
  setSearch: (text: string) => {
    set(() => ({ search: text }));
  },
  setResults: (results: string[]) => {
    set(() => ({ results }));
  },
  setSelected: (selected: string) => {
    set(() => ({ selected, search: "", results: [] }));
  },
}));
