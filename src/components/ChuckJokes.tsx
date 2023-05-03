import { Box, Button, Text } from "@chakra-ui/react";
import { useChuckNorrisStore } from "../store/chuckNorrisStore";

const ChuckJokes = () => {
  const joke = useChuckNorrisStore((state) => state.joke);
  const handleClick = useChuckNorrisStore((state) => state.getJoke);
  return (
    <Box>
      <h1>Chuck Norris</h1>
      <Button onClick={handleClick}>Get a Joke</Button>
      <Text>{joke}</Text>
    </Box>
  );
};

export default ChuckJokes;
