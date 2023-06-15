export interface CalendarEvent {
  title: string;
  borderColor: string;
  start: string;
  end: string;
  backgroundColor: string;
  className: string;
  routineId: number;
}

export interface CalendorForm {
  start: string;
  routineId: number;
  routineName: string;
}
