import { create } from "zustand";
import { CalendarEvent, CalendorForm } from "../interfaces/CalendarEvent";
import { getRandomColor } from "../utils/randomColor";
import axios from "axios";
import { apiURL } from "../utils/globals";
import { getUserId } from "../utils/auth/getUserId";
import { Select } from "../interfaces/Select";
import { RoutineList } from "../interfaces/RoutineList";

interface CalendarStore {
  events: CalendarEvent[];
  form: CalendorForm;
  isFormOpen: boolean;
  routineSelect: Select[];
  fetchEvents: () => void;
  fetchRoutines: () => void;
  setIsFormOpen: () => void;
  setFormProperty: (property: string, value: any) => void;
  submitForm: () => void;
  removeEvent: (id: number) => void;
}
export const useCalendarStore = create<CalendarStore>((set, get) => ({
  events: [],
  routineSelect: [],
  isFormOpen: false,
  form: {
    start: "",
    routineId: 0,
    routineName: "",
  },
  setIsFormOpen: () => set((state) => ({ isFormOpen: !state.isFormOpen })),
  fetchEvents: async () => {
    //TODO fetch by month
    set(() => ({
      events: [
        {
          title: "All day conference",
          borderColor: "transparent",
          start: "2023-06-01",
          end: "2023-06-01",
          backgroundColor: "#68D391",
          className: "success",
          routineId: 1,
        },
      ],
    }));
  },
  fetchRoutines: async () => {
    const { data } = await axios.post(`${apiURL}routines/${getUserId()}`, {});
    set(() => ({
      routineSelect: data.map((routine: RoutineList) => ({
        name: routine.title,
        id: routine.id,
      })),
    }));
  },
  setFormProperty: (property: string, value: any) => {
    set((state) => ({
      form: {
        ...state.form,
        [property]: value,
      },
    }));
  },
  submitForm: async () => {
    const { form } = get();
    const newEvent = {
      start: form.start,
      end: form.start,
      backgroundColor: getRandomColor(),
      routine: { id: form.routineId },
    };
    await axios.post(`${apiURL}event`, newEvent);
    set((state) => ({
      isFormOpen: false,
      form: {
        start: "",
        routineId: 0,
        routineName: "",
      },
      events: [
        ...state.events,
        {
          ...newEvent,
          title: state.form.routineName,
          borderColor: "transparent",
          className: "success",
          routineId: state.form.routineId,
        },
      ],
    }));
  },
  removeEvent(id) {
    set((state) => ({
      events: state.events.filter((event) => event.routineId !== id),
    }));
  },
}));
