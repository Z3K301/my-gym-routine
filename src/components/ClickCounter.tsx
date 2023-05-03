import { Box, Button, Text } from "@chakra-ui/react";
import { useClickStore } from "../store/clickStore";

const ClickCounter = () => {
  const handleClick = useClickStore((state) => state.increment);
  const clicks = useClickStore((state) => state.clicks);
  return (
    <Box>
      <Button onClick={handleClick}>Click me</Button>
      <Text>{clicks}</Text>
    </Box>
  );
};

export default ClickCounter;
