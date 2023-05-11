import { Badge, Box, Image } from "@chakra-ui/react";
import { RoutineList } from "../interfaces/RoutineList";
import { useNavigate } from "react-router-dom";

const RoutineCard = ({
  imageUrl,
  exercices,
  time,
  title,
  category,
  id,
}: RoutineList) => {
  const navigate = useNavigate();
  return (
    <Box
      maxW="sm"
      minW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      marginBottom="2"
      cursor="pointer"
      onClick={() => {
        navigate(`/routine/${id}`);
      }}
    >
      <Image src={imageUrl} />

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

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {title}
        </Box>
      </Box>
    </Box>
  );
};

export default RoutineCard;
