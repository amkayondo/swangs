import { Container, Flex, Text, Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const AudioDetails = () => {
  return (
    <Container maxW="container.xl" mt={10}>
      <Flex justifyContent={"space-between"}>
        <Box width={"70%"}>
          <Text fontSize={22}>
            Swangz Avenue is a one stop company for your audio and music
            production needs in Kampala, Uganda and East Africa. No
            matter what your project is, you are always welcome here with
            respect and appreciation.
          </Text>
        </Box>
        <Box width={"30%"}>
          <Flex justifyContent={"center"} height={"100%"} alignItems={"center"}>
            <Link href={"/contact"}>
              <Button title="MAKE BOOKING" borderRadius="50">
                MAKE BOOKING
              </Button>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default AudioDetails;
