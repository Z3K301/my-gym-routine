import {
  Card,
  CardBody,
  Flex,
  IconButton,
  Image,
  Input,
} from "@chakra-ui/react";

import SearchInput from "../forms/SearchInput";
import MyNumberInput from "../forms/numberInput/MyNumberInput";
import { ArrowBackIcon, ArrowForwardIcon, DeleteIcon } from "@chakra-ui/icons";
import { Exercice } from "../../interfaces/Exercice";
import { useRoutineStore } from "../../store/routineStore";
import { useState } from "react";

interface exerciceProps {
  exercice: Exercice;
  i: number;
  isReadOnly: boolean;
  onSearch: (index: number) => void;
  refe?: React.RefObject<HTMLDivElement> | null;
  isStarted: boolean;
}

const ExerciceCard = ({
  exercice,
  i,
  isReadOnly,
  onSearch,
  refe,
  isStarted,
}: exerciceProps) => {
  const { name, image, muscle, sets, reps, weight } = exercice;
  const { editExercice, deleteExercice } = useRoutineStore((state) => state);
  const [initialSets] = useState(sets);
  const handleNext = () => {
    editExercice(i, "sets", sets - 1);
  };

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      ref={refe}
      backgroundColor={sets === 0 && isStarted ? "grey" : undefined}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={image}
      />
      <Flex>
        <CardBody>
          {image?.length === 0 && !isReadOnly && (
            // TODO change component for multiple search
            <SearchInput
              size="sm"
              customAction={() => {
                onSearch(i);
              }}
            />
          )}
          <Input
            id={`name-${i}`}
            placeholder="Please enter a exercice name"
            value={name}
            onChange={({ target }) => editExercice(i, "name", target.value)}
            fontWeight={"bold"}
            size="sm"
            variant="flushed"
            isReadOnly={isReadOnly}
          />
          <Input
            id="muscle"
            placeholder="Please a muscle group"
            value={muscle}
            onChange={({ target }) => editExercice(i, "muscle", target.value)}
            size="sm"
            variant="flushed"
            isReadOnly={isReadOnly}
          />
          <MyNumberInput
            labelName="Sets"
            min={0}
            defaultValue={0}
            placeholder="Sets"
            value={sets}
            onChange={(valueString) =>
              editExercice(i, "sets", Number(valueString))
            }
            size="sm"
            variant="flushed"
            isReadOnly={isReadOnly}
          />
          <MyNumberInput
            labelName="Reps"
            min={0}
            defaultValue={0}
            placeholder="Reps"
            value={reps}
            onChange={(valueString) =>
              editExercice(i, "reps", Number(valueString))
            }
            size="sm"
            variant="flushed"
            isReadOnly={isReadOnly}
          />
          <MyNumberInput
            labelName="Kg"
            min={0}
            defaultValue={0}
            placeholder="Weight (KG)"
            value={weight}
            onChange={(valueString) =>
              editExercice(i, "weight", Number(valueString))
            }
            size="sm"
            variant="flushed"
            isReadOnly={isReadOnly}
          />
          {isStarted && (
            <>
              <IconButton
                icon={<ArrowBackIcon />}
                variant="outline"
                colorScheme="teal"
                aria-label="Step-back"
                size={"sm"}
                marginTop={"5px"}
                marginRight={"5px"}
                onClick={() => editExercice(i, "sets", sets + 1)}
                isDisabled={sets === initialSets}
              />
              <IconButton
                icon={<ArrowForwardIcon />}
                variant="outline"
                colorScheme="teal"
                aria-label="Step-forward"
                size={"sm"}
                marginTop={"5px"}
                onClick={handleNext}
                isDisabled={sets === 0}
              />
            </>
          )}
        </CardBody>
        {/* Replantear si ocultar no */}
        {!isReadOnly && (
          <IconButton
            icon={<DeleteIcon />}
            variant="outline"
            colorScheme="red"
            aria-label="delete-exercice"
            size={"sm"}
            margin={"5px"}
            onClick={() => deleteExercice(i)}
          />
        )}
      </Flex>
    </Card>
  );
};

export default ExerciceCard;
