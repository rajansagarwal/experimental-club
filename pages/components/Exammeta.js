import React from "react";
import { Container, Row, Col } from 'react-grid-system'

import {
  Box,
  Button,
  chakra,
  Flex,
  SimpleGrid,
  useColorModeValue,
  Grid
} from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools"

export default function Exammeta() {
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={20}
      pl={{ base: '10', sm: '10', md: '10', lg: '5%', xl: '5%', '2xl': '8%'}}
      pr={{ base: '10', sm: '10', md: '10', lg: '5', xl: '5%', '2xl': '8%'}}
      rounded="md"
      w="full"
      justifyContent="left"
      alignItems="left"
      pos="absolute"
      className="things"
    >
      <Box
        shadow="xl"
        bg={useColorModeValue("white", "gray.800")}
        px={8}
        pt={8}
        mx="auto"
      >
        
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, md: 2 }}
          flexDirection="column-reverse"
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{ base: "left", md: "left" }}
              color={useColorModeValue("gray.900", "gray.400")}
              lineHeight={{ md: "shorter" }}
            >
              The Change We Seek
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "left", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.400")}
              fontSize={{ md: "lg" }}
            >
              
            </chakra.p>
            <Button
              w={{ base: "full", sm: "auto" }}
              size="lg"
              bg={useColorModeValue("gray.900", "gray.700")}
              _hover={{ bg: useColorModeValue("gray.700", "gray.600") }}
              color={useColorModeValue("gray.100", "gray.200")}
              as="a"
              
            >
              Learn More
            </Button>
          </Box>
          <Box
            w="full"
            h="full"
            py={48}
            bg={useColorModeValue("gray.200", "gray.700")}
          ></Box>
        </SimpleGrid>
        
        
      </Box>
      
    </Flex>
  );
}


const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  })