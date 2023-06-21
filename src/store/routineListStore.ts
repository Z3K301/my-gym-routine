import { create } from "zustand";
import { RoutineList } from "../interfaces/RoutineList";
import axios from "axios";
import { apiURL } from "../utils/globals";
import { getUserId } from "../utils/auth/getUserId";

interface RoutineListStore {
  routineList: RoutineList[];
  fetchRoutineList: (isPublic: boolean) => Promise<void>;
  addRoutineElement: (routineElement: RoutineList) => void;
  clearList: () => void;
  editRoutine: (routineElement: RoutineList, position: number) => void;
  deleteRoutine: (id: number) => void;
}

const initialState: RoutineList[] = [];

export const useRoutineListStore = create<RoutineListStore>((set) => ({
  routineList: initialState,
  fetchRoutineList: async (isPublic) => {
    //TODO fetch with  isPublic
    const { data } = await axios.post(`${apiURL}routines/${getUserId()}`, {});
    set(() => ({ routineList: data }));
  },
  addRoutineElement: async (routineElement: RoutineList) => {
    const { data } = await axios.post(`${apiURL}routines`, {
      image: routineElement.image,
      time: routineElement.time,
      title: routineElement.title,
      category: routineElement.category,
      user: { id: getUserId() },
    });

    set((state) => ({
      routineList: [{ ...routineElement, id: data.id }, ...state.routineList],
    }));
  },
  clearList: () => {
    set(() => ({ routineList: initialState }));
  },
  editRoutine(routineElement, position) {
    set(({ routineList, ...state }) => {
      routineList[position] = routineElement;
      return { ...state, routineList };
    });
  },
  deleteRoutine: (id) => {
    console.log(id);
    axios.delete(`${apiURL}routines/${id}`);
    set((state) => ({
      routineList: state.routineList.filter((routine) => routine.id !== id),
    }));
  },
}));
