import { create } from "zustand";
import { RoutineList } from "../interfaces/RoutineList";

interface RoutineListStore {
  routineList: RoutineList[];
  fetchRoutineList: () => Promise<void>;
  addRoutineElement: (routineElement: RoutineList) => void;
}

const initialState: RoutineList[] = [];

export const useRoutineListStore = create<RoutineListStore>((set, get) => ({
  routineList: initialState,
  fetchRoutineList: async () => {
    //TODO fetch
    set(() => ({
      routineList: [
        {
          imageUrl: "https://bit.ly/2Z4KKcF",
          exercices: 3,
          time: 2,
          title: "Leg Routine to build muscle",
          category: "Leg",
          reviewCount: 34,
          rating: 4,
          id: 1,
        },
        {
          imageUrl: "https://bit.ly/2Z4KKcF",
          exercices: 3,
          time: 2,
          title: "Leg Routine to build muscle",
          category: "Leg",
          reviewCount: 34,
          rating: 4,
          id: 2,
        },
        {
          imageUrl: "https://bit.ly/2Z4KKcF",
          exercices: 3,
          time: 2,
          title: "Leg Routine to build muscle",
          category: "Leg",
          reviewCount: 34,
          rating: 4,
          id: 3,
        },
      ],
    }));
  },
  addRoutineElement: (routineElement: RoutineList) => {
    set((state) => ({
      routineList: [routineElement, ...state.routineList],
    }));
  },
}));
