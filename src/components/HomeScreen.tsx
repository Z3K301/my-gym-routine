import { Center, Container, IconButton } from "@chakra-ui/react";
import RoutineCard from "./RoutineCard";
import { useRoutineListStore } from "../store/routineListStore";
import { useEffect, useState } from "react";
import NewRoutitne from "./NewRoutitne";

import { AddIcon } from "@chakra-ui/icons";
import { RoutineList } from "../interfaces/RoutineList";
import { useNewRoutineListStore } from "../store/newRoutineListStore";
interface homeProps {
  isPublic: boolean;
}
const HomeScreen = ({ isPublic }: homeProps) => {
  const { routineList, fetchRoutineList, addRoutineElement, editRoutine } =
    useRoutineListStore((state) => state);
  const clearForm = useNewRoutineListStore((state) => state.clearForm);

  useEffect(() => {
    fetchRoutineList(isPublic);
  }, []);

  const handleSubmit = (data: RoutineList) => {
    editPos !== null ? editRoutine(data, editPos) : addRoutineElement(data);
    setIsOpened(false);
    clearForm();
  };

  const [editPos, setEditPos] = useState<number | null>(null);
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <h1>{isPublic ? "Popular Workouts" : "My Workouts"}</h1>
      <Center>
        <Container maxW="container.sm" centerContent>
          {routineList.map((routine, i) => (
            <RoutineCard
              isPublic={isPublic}
              key={routine.id}
              {...routine}
              setEdit={() => {
                setEditPos(i);
                setIsOpened(!isOpened);
              }}
            />
          ))}
        </Container>
      </Center>

      {!isPublic && (
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
          onClick={() => {
            clearForm();
            setIsOpened(true);
          }}
        />
      )}

      <NewRoutitne
        isOpen={isOpened}
        closeAction={() => setIsOpened(false)}
        submitAction={handleSubmit}
      />
    </>
  );
};

export default HomeScreen;
