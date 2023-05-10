import {
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
};
const MultiSelect = ({
  label,
  options,
  onChange,
  value,
  buttonProps,
}: MultiSelectMenuProps) => {
  return (
    <Menu closeOnSelect={false}>
      <>
        <MenuButton
          type="button"
          backgroundColor={value.length ? "teal.200" : "white"}
          color={value.length ? "teal.500" : "gray.600"}
          borderColor={value.length ? "teal.200" : "gray.300"}
          borderWidth={1}
          p={2}
          px={4}
          borderRadius="25px"
          _focus={{
            outline: "none",
          }}
          {...buttonProps}
        >
          {`${label}${value.length > 0 ? ` (${value.length})` : ""}`}
        </MenuButton>

        <MenuList>
          <MenuOptionGroup
            title={undefined}
            defaultValue={value}
            type="checkbox"
            onChange={(values: string[] | string) => {
              onChange(values as string[]);
            }}
          >
            {options.map((option) => {
              return (
                <MenuItemOption
                  key={`multiselect-menu-${option}`}
                  value={option}
                >
                  {option}
                </MenuItemOption>
              );
            })}
          </MenuOptionGroup>
        </MenuList>
      </>
    </Menu>
  );
};

MultiSelect.displayName = "MultiSelectMenu";

export default MultiSelect;
