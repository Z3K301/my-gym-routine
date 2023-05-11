import { create } from "zustand";
import { Exercice } from "../interfaces/Exercice";
interface RoutineStore {
  routine: Exercice[];
  fetchRoutine: (id: number) => Promise<void>;
  addExercice: () => void;
  editExercice: (
    position: number,
    property: string,
    value: string | number
  ) => void;
}
const defaultExercice: Exercice = {
  id: 0,
  name: "",
  muscle: "",
  sets: 0,
  reps: 0,
  image: "",
};
export const useRoutineStore = create<RoutineStore>((set) => ({
  routine: [],
  fetchRoutine: async (id) => {
    set(() => ({
      routine: [
        {
          id: 1,
          name: "squad",
          image:
            "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
          muscle: "Quads",
          sets: 3,
          reps: 8,
        },
      ],
    }));
  },
  addExercice: () => {
    set(({ routine }) => ({
      routine: [...routine, { ...defaultExercice }],
    }));
  },
  editExercice: (
    position: number,
    property: string,
    value: string | number
  ) => {
    console.log(position, property, value);
    set(({ routine }) => {
      routine[position][property as keyof Exercice] = value as never;
      return {
        routine: [...routine],
      };
    });
  },
  deleteExercice: (position: number) => {
    set(({ routine }) => {
      delete routine[position];
      return {
        routine: [...routine],
      };
    });
  },
}));
