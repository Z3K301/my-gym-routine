import {
  Card,
  CardBody,
  Center,
  Container,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useRoutineStore } from "../store/routineStore";
import { Fragment, useEffect, useState } from "react";
import MyNumberInput from "./forms/MyNumberInput";
import { AddIcon, CheckIcon, EditIcon } from "@chakra-ui/icons";
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

  const [searchIndex, setSearchIndex] = useState(0);
  const [isReadOnly, setIsReadOnly] = useState(true);

  useEffect(() => {
    if (selected.length > 0) {
      editExercice(searchIndex, "image", selected);
      setSelected("");
    }
  }, [selected]);

  return (
    <>
      <Center>
        <Container maxW="container.md" minW="container.sm" centerContent>
          {routine.map(({ id, name, image, muscle, sets, reps, weight }, i) => (
            <Fragment key={`${id}-${i}`}>
              <Card
                direction={{ base: "row", sm: "row" }}
                overflow="hidden"
                variant="outline"
                maxW="container.md"
                minW="container.sm"
              >
                <Image objectFit="cover" boxSize="203px" src={image} />

                <Stack>
                  <CardBody>
                    {image.length === 0 && (
                      // TODO change component for multiple search
                      <SearchInput
                        customAction={() => setSearchIndex(i)}
                        size="sm"
                      />
                    )}
                    <Input
                      id={`name-${i}`}
                      placeholder="Please enter a exercice name"
                      value={name}
                      onChange={({ target }) =>
                        editExercice(i, "name", target.value)
                      }
                      fontWeight={"bold"}
                      size="sm"
                      variant="flushed"
                      isReadOnly={isReadOnly}
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
                      isReadOnly={isReadOnly}
                    />
                    {isReadOnly ? (
                      <>
                        <InputGroup size="sm">
                          <InputLeftAddon children="Sets" maxW="55" minW="55" />
                          <Input
                            value={sets}
                            size="sm"
                            variant="flushed"
                            isReadOnly
                            marginLeft={"10px"}
                          />
                        </InputGroup>

                        <InputGroup size="sm">
                          <InputLeftAddon children="Reps" maxW="55" minW="55" />
                          <Input
                            value={reps}
                            size="sm"
                            variant="flushed"
                            isReadOnly
                            marginLeft={"10px"}
                          />
                        </InputGroup>
                        <InputGroup size="sm">
                          <InputLeftAddon children="KG" maxW="55" minW="55" />
                          <Input
                            value={weight}
                            size="sm"
                            variant="flushed"
                            isReadOnly
                            marginLeft={"10px"}
                          />
                        </InputGroup>
                      </>
                    ) : (
                      <>
                        <InputGroup size="sm">
                          <InputLeftAddon
                            children="Sets"
                            maxW="55"
                            minW="55"
                            marginRight={"10px"}
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
                        </InputGroup>
                        <InputGroup size="sm">
                          <InputLeftAddon
                            children="Reps"
                            maxW="55"
                            minW="55"
                            marginRight={"10px"}
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
                        </InputGroup>
                        <InputGroup size="sm">
                          <InputLeftAddon
                            children="KG"
                            maxW="55"
                            minW="55"
                            marginRight={"10px"}
                          />
                          <MyNumberInput
                            min={0}
                            defaultValue={0}
                            placeholder="Weight (KG)"
                            value={weight}
                            onChange={(valueString) =>
                              editExercice(i, "reps", Number(valueString))
                            }
                            size="sm"
                            variant="flushed"
                          />
                        </InputGroup>
                      </>
                    )}
                  </CardBody>
                </Stack>
              </Card>
              {i === routine.length - 1 && !isReadOnly && (
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
      <IconButton
        size="lg"
        aria-label="Add routine"
        icon={isReadOnly ? <EditIcon /> : <CheckIcon />}
        colorScheme="teal"
        style={{
          position: "fixed",
          right: 35,
          bottom: 35,
          borderRadius: "50%",
        }}
        onClick={() => setIsReadOnly(!isReadOnly)}
      />
    </>
  );
};

export default RoutineBreakdown;
