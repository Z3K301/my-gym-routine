import { Center, Container, IconButton } from "@chakra-ui/react";
import RoutineCard from "./RoutineCard";
import { useRoutineListStore } from "../store/routineListStore";
import { useEffect, useState } from "react";
import NewRoutitne from "./NewRoutitne";

import { AddIcon } from "@chakra-ui/icons";
import { RoutineList } from "../interfaces/RoutineList";
import { useNewRoutineListStore } from "../store/newRoutineListStore";

const HomeScreen = () => {
  const { routineList, fetchRoutineList, addRoutineElement } =
    useRoutineListStore((state) => state);
  const clearForm = useNewRoutineListStore((state) => state.clearForm);
  useEffect(() => {
    fetchRoutineList();
  }, []);

  const handleSubmit = (data: RoutineList) => {
    addRoutineElement(data);
    setIsOpened(false);
    clearForm();
  };

  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <h1>My Workouts</h1>
      <Center>
        <Container maxW="container.sm" centerContent>
          {routineList.map((routine) => (
            <RoutineCard key={routine.id} {...routine} />
          ))}
        </Container>
      </Center>

      <IconButton
        size="lg"
        aria-label="Add routine"
        icon={<AddIcon />}
        colorScheme="teal"
        style={{
          position: "fixed",
          right: 35,
          bottom: 35,
          borderRadius: "50%",
        }}
        onClick={() => setIsOpened(true)}
      />

      <NewRoutitne
        isOpen={isOpened}
        closeAction={() => setIsOpened(false)}
        submitAction={handleSubmit}
      />
    </>
  );
};

export default HomeScreen;
