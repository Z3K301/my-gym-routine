import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import { CalendarEvent } from "../../interfaces/CalendarEvent";
interface CalendarProps {
  events: CalendarEvent[];
  onDateClick: (e: any) => void;
}
const CalendarComponent = ({ events, onDateClick }: CalendarProps) => {
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        dateClick={(e) => {
          onDateClick(e);
        }}
        eventClick={(e) => {
          console.log(e);
        }}
        initialView="dayGridMonth"
        contentHeight="600"
        events={events}
        editable={true}
        height="400px"
      />
    </>
  );
};

export default CalendarComponent;
