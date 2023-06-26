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
  deleteAction: (id: number) => void;
}
const NewRoutitne = ({
  isOpen,
  closeAction,
  submitAction,
  deleteAction,
}: NewRoutitneProps) => {
  const firstField = useRef<HTMLInputElement>(null);
  const { form, setProperty, fetchCategoryList, categryList } =
    useNewRoutineListStore((state) => state);
  const selectedImage = useSearchStore((state) => state.selected);
  useEffect(() => {
    fetchCategoryList();
  }, []);
  useEffect(() => {
    if (selectedImage.length > 0) {
      setProperty("image", selectedImage);
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
                {form.image.length > 0 ? (
                  <Input
                    type="url"
                    id="url"
                    value={form.image}
                    onChange={({ target }) =>
                      setProperty("image", target.value)
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
                options={categryList}
                onChange={(value) => setProperty("category", value)}
                value={form.category}
                size="sm"
              />
            </Box>

            <Box>
              <FormLabel htmlFor="time">Duration</FormLabel>
              <MyNumberInput
                value={form.time}
                onChange={(a) => setProperty("time", a)}
                min={0}
                defaultValue={0}
              />
            </Box>
            {form.id && (
              <Box>
                <Button
                  colorScheme="red"
                  mr={3}
                  onClick={() => deleteAction(form.id)}
                >
                  Delete
                </Button>
              </Box>
            )}
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
