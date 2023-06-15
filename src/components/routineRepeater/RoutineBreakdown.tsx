import {
  Badge,
  Center,
  Container,
  Flex,
  IconButton,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useRoutineStore } from "../../store/routineStore";
import { useEffect, useRef, useState } from "react";
import MyNumberInput from "../forms/numberInput/MyNumberInput";
import { AddIcon, CheckIcon, EditIcon } from "@chakra-ui/icons";

import ImageSelector from "../ImageSelector";
import { useSearchStore } from "../../store/searchStore";
import MultiSelect from "../forms/MultiSelect";
import ExerciceCard from "./ExerciceCard";
import StartRoutine from "./StartRoutine";
import NavigationButton from "../NavigationButton";
import FloatButton from "../forms/FloatButton";

const RoutineBreakdown = () => {
  const { id } = useParams();
  const {
    exerciceList,
    title,
    time,
    category,
    fetchRoutine,
    addExercice,
    editRoutine,
    editExercice,
    isStarted,
  } = useRoutineStore((state) => state);
  const { selected, setSelected } = useSearchStore((state) => state);
  const [searchIndex, setSearchIndex] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  const [isReadOnly, setIsReadOnly] = useState(true);
  //TODO implement public in back
  useEffect(() => {
    //TODO handle errors
    fetchRoutine(Number(id));
  }, []);

  useEffect(() => {
    if (selected.length > 0) {
      editExercice(searchIndex, "image", selected);
      setSelected("");
    }
  }, [selected]);

  //TODO repeater generico
  return (
    <>
      <NavigationButton />

      {isReadOnly ? (
        <>
          <StartRoutine />
          <h1>{title}</h1>
        </>
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
          {exerciceList.map((data, i) => (
            <ExerciceCard
              key={`${data.id}-${i}`}
              exercice={data}
              i={i}
              isReadOnly={isReadOnly}
              onSearch={setSearchIndex}
              refe={i === exerciceList.length - 1 ? ref : null}
              isStarted={isStarted}
            />
          ))}

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
      {!isStarted && (
        <FloatButton
          icon={isReadOnly ? <EditIcon /> : <CheckIcon />}
          onClick={() => setIsReadOnly(!isReadOnly)}
        />
      )}
    </>
  );
};
export default RoutineBreakdown;
