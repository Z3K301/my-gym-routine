import { create } from "zustand";
import { RoutineList } from "../interfaces/RoutineList";

interface RoutineListStore {
  form: RoutineList;
  setProperty: (property: string, value: any) => void;
  clearForm: () => void;
}
const initialState: RoutineList = {
  imageUrl: "",
  exercices: 0,
  time: "0:00",
  title: "",
  category: [],
  reviewCount: 0,
  rating: 0,
  id: 0,
};
export const useNewRoutineListStore = create<RoutineListStore>((set) => ({
  form: initialState,
  setProperty(property, value) {
    set(({ form }) => ({ form: { ...form, [property]: value } }));
  },
  clearForm: () => {
    set(() => ({ form: initialState }));
  },
}));
