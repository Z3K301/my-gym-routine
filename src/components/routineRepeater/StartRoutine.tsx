import { Button } from "@chakra-ui/react";
import { useRoutineStore } from "../../store/routineStore";

const StartRoutine = () => {
  const { startRoutine, isStarted } = useRoutineStore((state) => state);
  return (
    <Button
      colorScheme={isStarted ? "red" : "teal"}
      style={{
        position: "absolute",
        right: 35,
        top: 75,
      }}
      onClick={startRoutine}
    >
      {isStarted ? "Finish Routine" : "Start Routine"}
    </Button>
  );
};

export default StartRoutine;
