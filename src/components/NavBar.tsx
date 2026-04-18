import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColoerModeSwithc from "./ColoerModeSwithc";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} alt="Logo" boxSize="60px" />
      <Text>
        <ColoerModeSwithc />
      </Text>
    </HStack>
  );
};

export default NavBar;
