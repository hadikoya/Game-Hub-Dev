import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { data } from "framer-motion/dist/m";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort By
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release Date</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
