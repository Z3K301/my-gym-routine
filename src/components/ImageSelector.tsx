import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useSearchStore } from "../store/searchStore";

const ImageSelector = () => {
  const { results, setSelected, setResults } = useSearchStore((state) => state);
  const handleClose = () => {
    setSelected("");
    setResults([]);
  };
  return (
    <Modal isOpen={results.length > 0} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Wrap spacing="30px" justify="center">
            {results.map((img, i) => (
              <WrapItem key={`${i}-wrap`}>
                <Image
                  key={i}
                  src={img}
                  boxSize="150px"
                  objectFit={"cover"}
                  onClick={() => setSelected(img)}
                  cursor={"pointer"}
                />
              </WrapItem>
            ))}
          </Wrap>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ImageSelector;
