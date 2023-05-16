import {
  Badge,
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
import { AddIcon, CheckIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
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
    deleteExercice,
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
      {isReadOnly ? (
        <h1>{title}</h1>
      ) : (
        <Center>
          <Input
            id={`title`}
            placeholder="Please enter a Workout tittle"
            value={title}
            onChange={({ target }) => editRoutine("title", target.value)}
            fontWeight={"bold"}
            size="lg"
            variant="flushed"
            isReadOnly={isReadOnly}
            textAlign={"center"}
            width="sm"
          />
        </Center>
      )}
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
                  <Flex>
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
              </Fragment>
            )
          )}
          {!isReadOnly && (
            <IconButton
              variant="outline"
              colorScheme="teal"
              aria-label="Add exercice"
              icon={<AddIcon />}
              width={ref.current?.offsetWidth}
              onClick={addExercice}
            />
          )}

          <Flex marginTop={"10px"}>
            <div style={{ marginLeft: "10px" }}>
              {isReadOnly ? (
                <Stack direction="row" margin={"10px"}>
                  {category.map((cat, i) => (
                    <Badge
                      borderRadius="full"
                      px="2"
                      colorScheme="teal"
                      key={`cat-${i}`}
                    >
                      {cat}
                    </Badge>
                  ))}
                </Stack>
              ) : (
                <MultiSelect
                  label="Category"
                  options={["Leg", "Chest"]}
                  onChange={(value) => editRoutine("category", value)}
                  value={category}
                  size="sm"
                />
              )}
            </div>

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
