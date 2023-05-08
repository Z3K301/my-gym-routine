import { Center, Container } from "@chakra-ui/react";
import RoutineCard from "./RoutineCard";
import { useRoutineListStore } from "../store/routineListStore";
import { useEffect } from "react";

const HomeScreen = () => {
  const { routineList, fetchRoutineList } = useRoutineListStore(
    (state) => state
  );
  useEffect(() => {
    fetchRoutineList();
  }, []);

  return (
    <>
      <h1>Home Screen</h1>
      <Center>
        <Container maxW="container.sm" centerContent>
          {routineList.map((routine) => (
            <RoutineCard key={routine.id} {...routine} />
          ))}
        </Container>
      </Center>
    </>
  );
};

export default HomeScreen;
