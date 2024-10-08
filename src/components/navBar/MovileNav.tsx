import { Stack, useColorModeValue } from "@chakra-ui/react";
import { NAV_ITEMS } from "./navItems";
import { MobileNavItem } from "./MobileNavItem";

export const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};
