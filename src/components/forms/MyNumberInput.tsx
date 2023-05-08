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
  onChange: (value: number) => void;
}

const MyNumberInput = ({
  min,
  defaultValue,
  value,
  onChange,
}: MyNumberInputProps) => {
  return (
    <NumberInput
      defaultValue={defaultValue}
      min={min}
      value={value}
      onChange={(valueString) => onChange(Number(valueString))}
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
