import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColoerModeSwithc = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Text whiteSpace="nowrap">
        {colorMode === "light" ? "Light Mode" : "Dark Mode"}
      </Text>
      <Switch
        colorScheme="teal"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
    </HStack>
  );
};

export default ColoerModeSwithc;
