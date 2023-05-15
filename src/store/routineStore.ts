import { create } from "zustand";
import { Exercice } from "../interfaces/Exercice";
import { Routine } from "../interfaces/Routine";
interface RoutineStore extends Routine {
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
  weight: 0,
};
export const useRoutineStore = create<RoutineStore>((set) => ({
  id: 0,
  exerciceList: [],
  title: "",
  time: 0,
  category: [],
  imageUrl: "",
  fetchRoutine: async (id) => {
    set(() => ({
      title: "Leg Day",
      exerciceList: [
        {
          id: 1,
          name: "squad",
          image:
            "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
          muscle: "Quads",
          sets: 3,
          reps: 8,
          weight: 100,
        },
      ],
    }));
  },
  addExercice: () => {
    set(({ exerciceList }) => ({
      exerciceList: [...exerciceList, { ...defaultExercice }],
    }));
  },
  editExercice: (
    position: number,
    property: string,
    value: string | number
  ) => {
    set(({ exerciceList }) => {
      exerciceList[position][property as keyof Exercice] = value as never;
      return {
        exerciceList: [...exerciceList],
      };
    });
  },
  deleteExercice: (position: number) => {
    set(({ exerciceList }) => {
      delete exerciceList[position];
      return {
        exerciceList: [...exerciceList],
      };
    });
  },
}));
