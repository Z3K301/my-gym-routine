import {
  Card,
  CardBody,
  Center,
  Container,
  Flex,
  IconButton,
  Image,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useRoutineStore } from "../../store/routineStore";
import { Fragment, useEffect, useRef, useState } from "react";
import MyNumberInput from "../forms/numberInput/MyNumberInput";
import { AddIcon, CheckIcon, EditIcon } from "@chakra-ui/icons";
import SearchInput from "../forms/SearchInput";
import ImageSelector from "../ImageSelector";
import { useSearchStore } from "../../store/searchStore";
import MultiSelect from "../forms/MultiSelect";

const RoutineBreakdown = () => {
  const { id } = useParams();
  const {
    exerciceList,
    title,
    time,
    category,
    fetchRoutine,
    addExercice,
    editExercice,
    editRoutine,
  } = useRoutineStore((state) => state);
  const { selected, setSelected } = useSearchStore((state) => state);
  const ref = useRef<HTMLDivElement>(null);
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
  //TODO separar estructura de repeater del card
  return (
    <>
      <h1>{title}</h1>
      <Center>
        <Container maxW="container.sm" centerContent>
          {exerciceList.map(
            ({ id, name, image, muscle, sets, reps, weight }, i) => (
              <Fragment key={`${id}-${i}`}>
                <Card
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  variant="outline"
                  ref={i === exerciceList.length - 1 ? ref : null}
                >
                  <Image
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    src={image}
                  />

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
                          editExercice(i, "reps", Number(valueString))
                        }
                        size="sm"
                        variant="flushed"
                        isReadOnly={isReadOnly}
                      />
                    </CardBody>
                  </Stack>
                </Card>
                {i === exerciceList.length - 1 && !isReadOnly && (
                  <IconButton
                    variant="outline"
                    colorScheme="teal"
                    aria-label="Send email"
                    icon={<AddIcon />}
                    width={ref.current?.offsetWidth}
                    onClick={addExercice}
                  />
                )}
              </Fragment>
            )
          )}

          <Card
            // direction={{ base: "column", sm: "column" }}
            marginTop={"20px"}
            overflow="hidden"
            variant="outline"
            width={ref.current?.offsetWidth}
          >
            <CardBody>
              <Flex>
                <MultiSelect
                  label="Category"
                  options={["Leg", "Chest"]}
                  onChange={(value) => editRoutine("category", value)}
                  value={category}
                  size="sm"
                />
                <MyNumberInput
                  labelName="Mnt"
                  min={0}
                  defaultValue={0}
                  placeholder="Duration"
                  value={time}
                  onChange={(valueString) =>
                    editRoutine("time", Number(valueString))
                  }
                  size="sm"
                  variant="flushed"
                  isReadOnly={isReadOnly}
                />
              </Flex>
            </CardBody>
          </Card>
        </Container>
      </Center>
      <ImageSelector />
      <IconButton
        size="lg"
        aria-label="Add exerciceList"
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
