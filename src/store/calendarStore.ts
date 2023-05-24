import { create } from "zustand";
import { CalendarEvent } from "../interfaces/CalendarEvent";

interface CalendarStore {
  events: CalendarEvent[];
  fetchEvents: () => void;
}
export const useCalendarStore = create<CalendarStore>((set) => ({
  events: [],
  fetchEvents: async () => {
    console.log("aaaaaaa");
    //TODO fetch
    set(() => ({
      events: [
        {
          event_id: 1,
          title: "Event 1",
          start: new Date("2023/5/23 09:30"),
          end: new Date("2023/5/23 10:30"),
        },
      ],
    }));
  },
}));
