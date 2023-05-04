import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
interface PasswordInputProps {
  showPassword: boolean;
  password: string;
  setShowPassword: () => void;
  setPassword: (value: string) => void;
}
const PasswordInput = ({
  showPassword,
  password,
  setShowPassword,
  setPassword,
}: PasswordInputProps) => {
  return (
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
  );
};

export default PasswordInput;
