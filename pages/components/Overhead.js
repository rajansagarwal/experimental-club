import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

const Overhead = () => {
  return (
    <Flex
      bg={"black"}
      p={1}
      w="full"
      alignItems="center"
      justifyContent="center"
      className="hiring"
    >
     <Flex color={"gray.400"} bgGradient="linear(to-l, blue,lightblue)" bgClip="text" >Apply To Be A General Member!</Flex>
    </Flex>
  );
};

export default Overhead;