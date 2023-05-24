import { useEffect } from "react";
import { Container } from "@chakra-ui/react";
import { useCalendarStore } from "../store/calendarStore";

const MyCalendar = () => {
  const { events, fetchEvents } = useCalendarStore((state) => state);
  useEffect(() => {
    fetchEvents();
    console.log(events);
  }, []);
  console.log(events);
  return (
    //TODO change library
    <>
      <div>My Calendar</div>
      <Container maxW={"container.xl"}>
        {/* <ThemeProvider theme={() => calendarTheme(text)}>
          <Scheduler
            ref={calendarRef}
            // customEditor={(scheduler) => <CreateEvent scheduler={scheduler} />}
            // customViewer={}
            events={events}
          />
        </ThemeProvider> */}
      </Container>
    </>
  );
};

export default MyCalendar;
