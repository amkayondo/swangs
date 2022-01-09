import { Container, Flex, Text, Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const AudioDetails = () => {
  return (
    <Container maxW={["full", "container.xl"]} mt={10}>
      <Flex justifyContent={["", "space-between"]} flexDirection={["column", "row"]}>
        <Box width={["100%", "70%"]}>
          <Text 
          display={["none", "block"]}
          fontSize={22}>
            Swangz Avenue is a one stop company for your audio and music
            production needs in Kampala, Uganda and East Africa. No
            matter what your project is, you are always welcome here with
            respect and appreciation.
          </Text>
          <Text
          display={["block", "none"]}
          fontSize={["xl", 22]} >
            Swangz Avenue is a one stop company for your audio and music
            production needs in Kampala, Uganda and East Africa. No
            matter what your project is, you are always welcome here with
            respect and appreciation.
          </Text>
        </Box>
        <Box width={["100%", "30%"]} mt={[10, 0]}>
          <Flex justifyContent={"center"} height={"100%"} alignItems={"center"}>
            <Link href={"/contact"}>
              <Button width={["100%", "59%"]} title="MAKE BOOKING" borderRadius="50">
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
