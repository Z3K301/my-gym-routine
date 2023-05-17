import { Badge, Box, Flex, Image, Spacer } from "@chakra-ui/react";
import { RoutineList } from "../interfaces/RoutineList";
import { useNavigate } from "react-router-dom";
import { EditIcon } from "@chakra-ui/icons";
import { useNewRoutineListStore } from "../store/newRoutineListStore";

interface RoutineCardProps extends RoutineList {
  setEdit: () => void;
}
const RoutineCard = ({
  imageUrl,
  exercices,
  time,
  title,
  category,
  id,
  setEdit,
}: RoutineCardProps) => {
  const navigate = useNavigate();
  const handleEdit = () => {
    setEdit();
    setEditData({ imageUrl, exercices, time, title, category, id });
  };
  const setEditData = useNewRoutineListStore((state) => state.setEditData);
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      marginBottom="2"
    >
      <Image
        src={imageUrl}
        onClick={() => {
          navigate(`/routine/${id}`);
        }}
        cursor="pointer"
      />
      <Box p="6">
        <Box display="flex" alignItems="baseline">
          {category.map((c) => (
            <Badge
              borderRadius="full"
              px="2"
              colorScheme="teal"
              key={`${id}-${c}`}
            >
              {c}
            </Badge>
          ))}
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            ml="2"
          >
            {exercices} EXERCICES &bull; {time}h
          </Box>
        </Box>
        <Flex>
          <Spacer />
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {title}
          </Box>
          <Spacer />

          <EditIcon
            cursor="pointer"
            onClick={handleEdit}
            _hover={{ bg: "teal.600" }}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default RoutineCard;
