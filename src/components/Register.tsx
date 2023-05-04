import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  Input,
  Spacer,
} from "@chakra-ui/react";
import { useRegisterStore } from "../store/registerStore";
import PasswordInput from "./forms/PasswordInput";
import { checkMail } from "../utils/checkMail";
import { useState } from "react";

const Register = () => {
  const {
    user,
    mail,
    password,
    showPassword,
    setUser,
    setMail,
    setPassword,
    setShowPassword,
    register,
  } = useRegisterStore((state) => state);
  const [errors, setErrors] = useState({
    user: false,
    mail: false,
    password: false,
  });
  const handleRegister = () => {
    //     if (checkMail(mail)) {
    //       register();
    //     } else {
    //     }
    setErrors({
      user: true,
      mail: true,
      password: true,
    });
  };
  return (
    <Center>
      <Box>
        <h1>Sign Up</h1>
        <FormControl isInvalid={errors.user}>
          <Input
            pr="4.5rem"
            placeholder="User"
            value={user}
            onChange={({ target }) => setUser(target.value)}
            marginBottom={"5px"}
          />
        </FormControl>
        <FormControl isInvalid={errors.mail}>
          <Input
            pr="4.5rem"
            placeholder="email"
            type="Email"
            value={mail}
            onChange={({ target }) => setMail(target.value)}
            marginBottom={"5px"}
          />
        </FormControl>
        <FormControl isInvalid={errors.password}>
          <PasswordInput
            password={password}
            setPassword={setPassword}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        </FormControl>
        <Flex>
          <Spacer />
          <Button size="md" onClick={handleRegister} variant="outline">
            Sign Up
          </Button>
        </Flex>
      </Box>
    </Center>
  );
};

export default Register;
