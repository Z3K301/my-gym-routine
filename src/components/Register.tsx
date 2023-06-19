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
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const handleRegister = async () => {
    console.log("handleRegister");
    const newErrors = {
      user: user.length === 0,
      mail: !checkMail(mail),
      password: password.length === 0,
    };
    setErrors(newErrors);
    console.log(newErrors);
    if (!newErrors.user && !newErrors.mail && !newErrors.password) {
      const isRegistered = await register();
      if (isRegistered) {
        navigate("/home");
      }
      //TODO handle error
    }
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
            submit={handleRegister}
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
