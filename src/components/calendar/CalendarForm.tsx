import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
} from "@chakra-ui/react";
import { CalendorForm } from "../../interfaces/CalendarEvent";
interface FormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  form: CalendorForm;
  setFormProperty: (property: string, value: any) => void;
}
const CalendarForm = ({
  isOpen,
  onClose,
  onSubmit,
  setFormProperty,
  form,
}: FormProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Select your routine</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Date</FormLabel>
            <Input
              placeholder="Date"
              type="date"
              value={form.start}
              onChange={({ target }) => {
                setFormProperty("start", target.value.toString());
                setFormProperty("end", target.value.toString());
              }}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Routine</FormLabel>
            <Select
              placeholder="Select a routine"
              onChange={({ target }) => {
                setFormProperty("routine", target.value);
                setFormProperty(
                  "routineName",
                  target[target.selectedIndex].outerText
                );
              }}
            >
              <option value="1">Leg</option>
              <option value="2">Chest</option>
              <option value="3">Back</option>
            </Select>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onSubmit}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CalendarForm;
