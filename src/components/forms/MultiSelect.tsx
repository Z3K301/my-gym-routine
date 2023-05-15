import {
  Button,
  Menu,
  MenuButton,
  MenuButtonProps,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
export type MultiSelectMenuProps = {
  label: string;
  options: string[];
  onChange: (selectedValues: string[]) => void;
  value: string[];
  buttonProps?: MenuButtonProps;
  size?: string;
};
const MultiSelect = ({
  label,
  options,
  onChange,
  value,
  size,
}: MultiSelectMenuProps) => {
  return (
    <Menu closeOnSelect={false} size={size ?? "md"}>
      <MenuButton
        size={size ?? "md"}
        as={Button}
        backgroundColor={value.length ? "teal.200" : "white"}
        color={value.length ? "teal.500" : "gray.600"}
        borderColor={value.length ? "teal.200" : "gray.300"}
      >
        {`${label}${value.length > 0 ? ` (${value.length})` : ""}`}
      </MenuButton>

      <MenuList>
        <MenuOptionGroup
          value={value}
          type="checkbox"
          onChange={(values: string[] | string) => {
            onChange(values as string[]);
          }}
        >
          {options.map((option) => {
            return (
              <MenuItemOption key={`multiselect-menu-${option}`} value={option}>
                {option}
              </MenuItemOption>
            );
          })}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

MultiSelect.displayName = "MultiSelectMenu";

export default MultiSelect;
