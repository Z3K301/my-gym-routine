import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Image } from "@chakra-ui/react";
import { RoutineList } from "../interfaces/RoutineList";

const RoutineCard = ({
  imageUrl,
  exercices,
  time,
  title,
  category,
  reviewCount,
  rating,
}: RoutineList) => {
  return (
    <Box
      maxW="sm"
      minW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      marginBottom="2"
    >
      <Image src={imageUrl} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
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

        <Box>{category}</Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon key={i} color={i < rating ? "teal.500" : "gray.300"} />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RoutineCard;
