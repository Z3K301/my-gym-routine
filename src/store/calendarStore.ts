import { create } from "zustand";
import { CalendarEvent, CalendorForm } from "../interfaces/CalendarEvent";

interface CalendarStore {
  events: CalendarEvent[];
  form: CalendorForm;
  fetchEvents: () => void;
  isFormOpen: boolean;
  setIsFormOpen: () => void;
  setFormProperty: (property: string, value: any) => void;
  submitForm: () => void;
  removeEvent: (id: number) => void;
}
export const useCalendarStore = create<CalendarStore>((set) => ({
  events: [],
  isFormOpen: false,
  form: {
    start: "",
    routineId: 0,
    routineName: "",
  },
  setIsFormOpen: () => set((state) => ({ isFormOpen: !state.isFormOpen })),
  fetchEvents: async () => {
    //TODO fetch
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
  setFormProperty: (property: string, value: any) => {
    set((state) => ({
      form: {
        ...state.form,
        [property]: value,
      },
    }));
  },
  submitForm() {
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
          title: state.form.routineName,
          borderColor: "transparent",
          start: state.form.start,
          end: state.form.start,
          backgroundColor: "#68D391", //TODO Get random color
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
