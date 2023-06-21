import { create } from "zustand";
import { Exercice } from "../interfaces/Exercice";
import { Routine } from "../interfaces/Routine";
import { Select } from "../interfaces/Select";
import axios from "axios";
import { apiURL } from "../utils/globals";
interface RoutineStore extends Routine {
  isStarted: boolean;
  fetchRoutine: (id: number) => Promise<void>;
  addExercice: () => void;
  editExercice: (
    position: number,
    property: string,
    value: string | number
  ) => void;
  editRoutine: (
    property: string,
    value: string | number | string[] | Select[]
  ) => void;
  deleteExercice: (position: number) => void;
  startRoutine: () => void;
}
const defaultExercice: Exercice = {
  id: 0,
  name: "",
  muscle: "",
  sets: 0,
  reps: 0,
  image: "",
  weight: 0,
};
export const useRoutineStore = create<RoutineStore>((set) => ({
  id: 0,
  exercices: [],
  title: "",
  time: 0,
  category: [],
  image: "",
  isStarted: false,
  fetchRoutine: async (id) => {
    const { data } = await axios.get(`${apiURL}routines/${id}`);
    set(() => data[0]);
  },
  addExercice: () => {
    set(({ exercices }) => ({
      exercices: [...exercices, { ...defaultExercice }],
    }));
  },
  editExercice: (
    position: number,
    property: string,
    value: string | number
  ) => {
    set(({ exercices }) => {
      exercices[position][property as keyof Exercice] = value as never;
      return {
        exercices: [...exercices],
      };
    });
  },
  editRoutine(property, value) {
    set((state) => ({
      ...state,
      [property]: value,
    }));
  },

  deleteExercice: (position: number) => {
    set(({ exercices, ...data }) => {
      exercices.splice(position, 1);
      return {
        ...data,
        exercices,
      };
    });
  },
  startRoutine: () => {
    set(({ isStarted, ...data }) => ({ ...data, isStarted: !isStarted }));
  },
}));
