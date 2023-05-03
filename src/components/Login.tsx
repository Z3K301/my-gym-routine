import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
} from "@chakra-ui/react";
import { useAuthStore } from "../store/authStore";

const Login = () => {
  const {
    user,
    password,
    showPassword,
    login,
    setShowPassword,
    setPassword,
    setUser,
  } = useAuthStore((state) => state);
  return (
    <Center>
      <Box>
        <h1>Login</h1>
        <Input
          pr="4.5rem"
          placeholder="User"
          value={user}
          onChange={({ target }) => setUser(target.value)}
          marginBottom={"5px"}
        />
        <InputGroup size="md" marginBottom={"8px"}>
          <Input
            pr="4.5rem"
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={setShowPassword}>
              {showPassword ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Flex>
          <Spacer />
          <Button size="md" onClick={login} variant="outline">
            Login
          </Button>
        </Flex>
      </Box>
    </Center>
  );
};

export default Login;
