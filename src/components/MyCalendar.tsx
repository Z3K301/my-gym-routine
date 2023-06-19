import { useEffect } from "react";
import { Container } from "@chakra-ui/react";
import { useCalendarStore } from "../store/calendarStore";
import CalendarComponent from "./calendar/CalendarComponent";
import FloatButton from "./forms/FloatButton";
import { AddIcon } from "@chakra-ui/icons";
import CalendarForm from "./calendar/CalendarForm";
const MyCalendar = () => {
  const {
    events,
    fetchEvents,
    isFormOpen,
    setIsFormOpen,
    form,
    setFormProperty,
    submitForm,
    removeEvent,
  } = useCalendarStore((state) => state);

  useEffect(() => {
    fetchEvents();
  }, []);

  const onDayClick = (e: any) => {
    //TODO change any
    setIsFormOpen();
    setFormProperty("start", e.dateStr);
    setFormProperty("end", e.dateStr);
  };
  return (
    <>
      <div>My Week</div>
      <Container maxW={"container.xl"}>
        <CalendarComponent
          events={events}
          onDateClick={onDayClick}
          onEventRemove={removeEvent}
        />
      </Container>
      <FloatButton icon={<AddIcon />} onClick={setIsFormOpen} />
      <CalendarForm
        isOpen={isFormOpen}
        onClose={setIsFormOpen}
        onSubmit={submitForm}
        form={form}
        setFormProperty={setFormProperty}
      />
    </>
  );
};

export default MyCalendar;
