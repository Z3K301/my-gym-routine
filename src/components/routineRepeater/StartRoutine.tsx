import { Button } from "@chakra-ui/react";
import { useRoutineStore } from "../../store/routineStore";
import { useNavigate } from "react-router-dom";

const StartRoutine = () => {
  const navigate = useNavigate();
  const { startRoutine, isStarted } = useRoutineStore((state) => state);
  const handleClick = () => {
    if (isStarted) {
      navigate("/home");
    }
    startRoutine();
  };
  return (
    <Button
      colorScheme={isStarted ? "red" : "teal"}
      style={{
        position: "absolute",
        right: 17,
        top: 75,
        zIndex: 9999,
      }}
      onClick={handleClick}
    >
      {isStarted ? "Finish Routine" : "Start Routine"}
    </Button>
  );
};

export default StartRoutine;
