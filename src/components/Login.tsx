import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  Input,
  Spacer,
  useToast,
} from "@chakra-ui/react";
import { useAuthStore } from "../store/authStore";
import PasswordInput from "./forms/PasswordInput";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    user,
    password,
    showPassword,
    isError,
    login,
    setShowPassword,
    setPassword,
    setUser,
    changeIsError,
  } = useAuthStore((state) => state);
  const toast = useToast();

  useEffect(() => {
    if (isError) {
      toast({
        title: "Error",
        description: "Invalid credentials",
        status: "error",
        duration: 5000,
        isClosable: true,
        onCloseComplete() {
          changeIsError();
        },
      });
    }
  }, [isError]);
  const navigate = useNavigate();
  const handleLogin = async () => {
    const isLoggedIn = await login();
    if (isLoggedIn) {
      navigate("/home");
    }
  };

  return (
    <Center>
      <Box>
        <h1>Login</h1>
        <FormControl isInvalid={isError}>
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
            submit={login}
          />
        </FormControl>
        <Flex>
          <Spacer />
          <Button size="md" onClick={handleLogin} variant="outline">
            Login
          </Button>
        </Flex>
      </Box>
    </Center>
  );
};

export default Login;
