import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import { CalendarEvent } from "../../interfaces/CalendarEvent";
interface CalendarProps {
  events: CalendarEvent[];
  onDateClick: (e: any) => void;
  onEventRemove: (id: number) => void;
}
const CalendarComponent = ({
  events,
  onDateClick,
  onEventRemove,
}: CalendarProps) => {
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        dateClick={(e) => {
          onDateClick(e);
        }}
        eventDragStop={({ event }) => {
          console.log(event.toJSON().extendedProps.eventId);
          event.remove();
          onEventRemove(event.toJSON().extendedProps.eventId);
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
