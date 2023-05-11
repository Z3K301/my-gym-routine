import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
interface MyNumberInputProps {
  min: number;
  defaultValue: number;
  value: number;
  placeholder?: string;
  onChange: (value: number) => void;
  variant?: string;
  size?: "sm" | "md" | "lg";
}
const MyNumberInput = ({
  min,
  defaultValue,
  value,
  onChange,
  placeholder,
  variant,
  size,
}: MyNumberInputProps) => {
  return (
    <NumberInput
      defaultValue={defaultValue}
      min={min}
      value={value}
      onChange={(valueString) => onChange(Number(valueString))}
      placeholder={placeholder ?? ""}
      variant={variant ?? "outline"}
      size={size ?? "md"}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};

export default MyNumberInput;
