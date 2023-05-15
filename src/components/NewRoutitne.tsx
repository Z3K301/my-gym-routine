import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
  InputGroup,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useNewRoutineListStore } from "../store/newRoutineListStore";
import { RoutineList } from "../interfaces/RoutineList";
import MyNumberInput from "./forms/numberInput/MyNumberInput";
import SearchInput from "./forms/SearchInput";
import { useSearchStore } from "../store/searchStore";
import ImageSelector from "./ImageSelector";
import MultiSelect from "./forms/MultiSelect";
interface NewRoutitneProps {
  isOpen: boolean;
  closeAction: () => void;
  submitAction: (data: RoutineList) => void;
}
const NewRoutitne = ({
  isOpen,
  closeAction,
  submitAction,
}: NewRoutitneProps) => {
  const firstField = useRef<HTMLInputElement>(null);
  const { form, setProperty } = useNewRoutineListStore((state) => state);
  const selectedImage = useSearchStore((state) => state.selected);
  useEffect(() => {
    if (selectedImage.length > 0) {
      setProperty("imageUrl", selectedImage);
    }
  }, [selectedImage]);
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={() => {}}
      initialFocusRef={firstField}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton onClick={closeAction} />
        <DrawerHeader borderBottomWidth="1px">
          Create a new routine
        </DrawerHeader>
        <DrawerBody>
          <Stack spacing="24px">
            <Box>
              <FormLabel htmlFor="title">Name</FormLabel>
              <Input
                id="title"
                placeholder="Please enter a routine name"
                value={form.title}
                onChange={({ target }) => setProperty("title", target.value)}
              />
            </Box>

            <Box>
              <FormLabel htmlFor="url">Image</FormLabel>
              <InputGroup>
                {form.imageUrl.length > 0 ? (
                  <Input
                    type="url"
                    id="url"
                    value={form.imageUrl}
                    onChange={({ target }) =>
                      setProperty("imageUrl", target.value)
                    }
                  />
                ) : (
                  <>
                    <SearchInput />
                    <ImageSelector />
                  </>
                )}
              </InputGroup>
            </Box>

            <Box>
              <FormLabel htmlFor="category">Select category</FormLabel>
              <MultiSelect
                label="Category"
                options={["Leg", "Chest"]}
                onChange={(value) => setProperty("category", value)}
                value={form.category}
              />
            </Box>

            <Box>
              <FormLabel htmlFor="exercices">Exercices</FormLabel>
              <MyNumberInput
                value={form.exercices}
                onChange={(a) => setProperty("exercices", a)}
                min={0}
                defaultValue={0}
              />
            </Box>

            <Box>
              <FormLabel htmlFor="time">Duration</FormLabel>
              <Input
                type="time"
                id="time"
                value={form.time}
                onChange={({ target }) => {
                  setProperty("time", target.value);
                }}
              />
            </Box>
          </Stack>
        </DrawerBody>

        <DrawerFooter borderTopWidth="1px">
          <Button variant="outline" mr={3} onClick={closeAction}>
            Cancel
          </Button>
          <Button colorScheme="teal" onClick={() => submitAction(form)}>
            Submit
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default NewRoutitne;
