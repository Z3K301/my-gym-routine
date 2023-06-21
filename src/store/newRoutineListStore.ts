import { create } from "zustand";
import { RoutineList } from "../interfaces/RoutineList";
import { Select } from "../interfaces/Select";
import axios from "axios";
import { apiURL } from "../utils/globals";

interface RoutineListStore {
  form: RoutineList;
  categryList: Select[];
  fetchCategoryList: () => void;
  setProperty: (property: string, value: any) => void;
  clearForm: () => void;
  setEditData: (editData: RoutineList) => void;
}
const initialState: RoutineList = {
  image: "",
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
  categryList: [],
  fetchCategoryList: async () => {
    const { data } = await axios.get(`${apiURL}categories`);
    set(() => ({ categryList: data }));
  },
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
