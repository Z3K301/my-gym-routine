import { Box, Button, Center, Flex, Input, Spacer } from "@chakra-ui/react";
import { useAuthStore } from "../store/authStore";
import PasswordInput from "./forms/PasswordInput";

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
        <PasswordInput
          password={password}
          setPassword={setPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
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
