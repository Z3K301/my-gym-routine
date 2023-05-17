import { create } from "zustand";
import { RoutineList } from "../interfaces/RoutineList";

interface RoutineListStore {
  form: RoutineList;
  setProperty: (property: string, value: any) => void;
  clearForm: () => void;
  setEditData: (editData: RoutineList) => void;
}
const initialState: RoutineList = {
  imageUrl: "",
  exercices: 0,
  time: 0,
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
  setEditData(editData) {
    set((state) => ({ ...state, form: { ...editData } }));
  },
}));
