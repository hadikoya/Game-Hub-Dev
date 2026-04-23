import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColoerModeSwithc from "./ColoerModeSwithc";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} alt="Logo" boxSize="60px" />
      <SearchInput />
      <Text>
        <ColoerModeSwithc />
      </Text>
    </HStack>
  );
};

export default NavBar;
