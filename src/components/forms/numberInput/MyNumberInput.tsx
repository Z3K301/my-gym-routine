import { InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { MyNumberInputProps } from "../../../interfaces/NumberInput";
import InputField from "./InputField";

const MyNumberInput = ({
  min,
  defaultValue,
  value,
  onChange,
  placeholder,
  variant,
  size,
  labelName,
  isReadOnly,
}: MyNumberInputProps) => {
  return (
    <>
      {labelName ? (
        <>
          <InputGroup size={size ?? "md"} width={"100%"}>
            <InputLeftAddon children={labelName} maxW="55" minW="55" />
            <InputField
              defaultValue={defaultValue}
              min={min}
              value={value}
              onChange={(valueString) => onChange(Number(valueString))}
              placeholder={placeholder ?? ""}
              variant={variant ?? "outline"}
              size={size ?? "md"}
              isReadOnly={isReadOnly ?? false}
              marginLeft={"10px"}
            />
          </InputGroup>
        </>
      ) : (
        <>
          <InputField
            defaultValue={defaultValue}
            min={min}
            value={value}
            onChange={(valueString) => onChange(Number(valueString))}
            placeholder={placeholder ?? ""}
            variant={variant ?? "outline"}
            size={size ?? "md"}
            isReadOnly={isReadOnly ?? false}
          />
        </>
      )}
    </>
  );
};

export default MyNumberInput;
