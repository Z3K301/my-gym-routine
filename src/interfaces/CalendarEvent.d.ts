export interface CalendarEvent {
  eventId?: number;
  title: string;
  borderColor: string;
  start: string;
  end: string;
  backgroundColor: string;
  className: string;
  routineId: number;
}

export interface CalendorForm {
  id?: number;
  start: string;
  routineId: number;
  routineName: string;
}
