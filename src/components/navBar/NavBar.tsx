import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
  Image,
  Link,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MovileNav";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Link as RouterLink, useNavigate } from "react-router-dom";

export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token") ? true : false;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 2 }} justify={{ base: "left", md: "start" }}>
          <Link as={RouterLink} to="/home">
            <Image src="/logo192.png" boxSize="30px" alt="logo" />
          </Link>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            {isLoggedIn && <DesktopNav />}
          </Flex>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <ColorModeSwitcher justifySelf="flex-end" />

          {!localStorage.getItem("token") ? (
            <>
              <Button
                as={RouterLink}
                to="/login"
                fontSize={"sm"}
                fontWeight={400}
                variant={"link"}
              >
                Sign In
              </Button>
              <Button
                as={RouterLink}
                fontSize={"sm"}
                fontWeight={600}
                colorScheme="teal"
                to="/signup"
              >
                Sign Up
              </Button>{" "}
            </>
          ) : (
            <>
              <Button
                onClick={handleLogout}
                fontSize={"sm"}
                fontWeight={400}
                variant={"link"}
              >
                Sign Out
              </Button>
            </>
          )}
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}
