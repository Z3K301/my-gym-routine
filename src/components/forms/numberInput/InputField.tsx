import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { MyNumberInputProps } from "../../../interfaces/NumberInput";

const InputField = ({
  defaultValue,
  min,
  value,
  placeholder,
  variant,
  size,
  isReadOnly,
  onChange,
  marginLeft,
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
      isReadOnly={isReadOnly ?? false}
      marginLeft={marginLeft ?? "0"}
    >
      <NumberInputField />
      {!isReadOnly && (
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      )}
    </NumberInput>
  );
};

export default InputField;
