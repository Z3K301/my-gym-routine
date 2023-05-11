import {
  Card,
  CardBody,
  Center,
  Container,
  IconButton,
  Image,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useRoutineStore } from "../store/routineStore";
import { Fragment, useEffect } from "react";
import MyNumberInput from "./forms/MyNumberInput";
import { AddIcon } from "@chakra-ui/icons";
import SearchInput from "./forms/SearchInput";
import ImageSelector from "./ImageSelector";
import { useSearchStore } from "../store/searchStore";

const RoutineBreakdown = () => {
  const { id } = useParams();
  const { routine, fetchRoutine, addExercice, editExercice } = useRoutineStore(
    (state) => state
  );
  const { selected, setSelected } = useSearchStore((state) => state);
  useEffect(() => {
    //TODO handle errors
    fetchRoutine(Number(id));
  }, []);

  //TODO change in a future version for replacing any exercise
  useEffect(() => {
    if (selected.length > 0) {
      editExercice(routine.length - 1, "image", selected);
      setSelected("");
    }
  }, [selected]);
  return (
    <>
      <Center>
        <Container maxW="container.md" minW="container.sm" centerContent>
          {routine.map(({ id, name, image, muscle, sets, reps }, i) => (
            <Fragment key={`${id}-${i}`}>
              <Card
                direction={{ base: "row", sm: "row" }}
                overflow="hidden"
                variant="outline"
                maxW="container.md"
                minW="container.sm"
              >
                <Image objectFit="cover" boxSize="170px" src={image} />

                <Stack>
                  <CardBody>
                    {image.length === 0 && <SearchInput />}
                    <Input
                      id="name"
                      placeholder="Please enter a routine name"
                      value={name}
                      onChange={({ target }) =>
                        editExercice(i, "name", target.value)
                      }
                      fontWeight={"bold"}
                      size="sm"
                      variant="flushed"
                    />
                    <Input
                      id="muscle"
                      placeholder="Please a muscle group"
                      value={muscle}
                      onChange={({ target }) =>
                        editExercice(i, "muscle", target.value)
                      }
                      size="sm"
                      variant="flushed"
                    />
                    <MyNumberInput
                      min={0}
                      defaultValue={0}
                      placeholder="Sets"
                      value={sets}
                      onChange={(valueString) =>
                        editExercice(i, "sets", Number(valueString))
                      }
                      size="sm"
                      variant="flushed"
                    />
                    <MyNumberInput
                      min={0}
                      defaultValue={0}
                      placeholder="Reps"
                      value={reps}
                      onChange={(valueString) =>
                        editExercice(i, "reps", Number(valueString))
                      }
                      size="sm"
                      variant="flushed"
                    />
                  </CardBody>
                </Stack>
              </Card>
              {i === routine.length - 1 && (
                <IconButton
                  variant="outline"
                  colorScheme="teal"
                  aria-label="Send email"
                  icon={<AddIcon />}
                  maxW="container.md"
                  minW="container.sm"
                  onClick={addExercice}
                />
              )}
            </Fragment>
          ))}
        </Container>
      </Center>
      <ImageSelector />
    </>
  );
};

export default RoutineBreakdown;
