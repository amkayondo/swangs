import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const BriefDescription = () => {
  return (
    <Container
      maxW={["full", "container.xl"]}
      mt={4}
      //   height={"232"}
      paddingTop={4}
      paddingBottom={4}
    >
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Heading textAlign={"center"}>This is Swangz Avenue</Heading>
        <Text width={["100%", "50%"]} textAlign={"center"} mt={4}>
          With years of experience, Swangz Avenue is one of the leading Audio
          and Film Production Companies in Kampala, Uganda, and East Africa,
          also specializing in video production, TV Commercial (TVC) production,
          Events Promotion and Talent Management. With an impressive team led by
          our experienced directors and producers, boasting both local and
          international experience and an extensive array of services for both
          Audio and Film, Swangz Avenue offers the complete package for any
          production needs.
        </Text>
        <Button
          paddingLeft={30}
          paddingRight={30}
          pt={-5}
          borderRadius={50}
          mt={6}
        >
          Our Story
        </Button>
      </Flex>
    </Container>
  );
};

export default BriefDescription;
