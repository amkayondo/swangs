import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { audioShowCaseData } from "./data";

const AudioTopShowCase = () => {
  return (
    <>
      {audioShowCaseData.map((audio, index) => (
        <Container
          maxW="container.xl"
          backgroundColor={"gray.100"}
          height={["200", "600"]}
          borderRadius={12}
          backgroundImage={`url("${audio.image}")`}
          backgroundSize="cover"
          backgroundPosition="center"
          paddingTop={[0, 4]}
          paddingBottom={[0, 4]}
        >
          <Container
            maxW="container.xl"
            backgroundColor={["", "rgba(0, 0, 0, 0.19)"]}
            height={[200,"570"]}
            width={"100%"}
            pt={["50%", "35%"]}
            borderRadius={[0, 12]}
          >
            <Heading 
            display={["none", "block"]}
            color={"white"} as="h1" size="4xl">
              {audio.title}
            </Heading>
            <Heading 
            display={["block", "none"]}
            color={"white"} as='h3' size='lg'>
              {audio.title}
            </Heading>
            <Text 
            display={["none", "block"]}
            fontSize="lg" color={"white"}>
              {audio.description}
            </Text>
            <Text 
            display={["block", "none"]}
            as='h4' color={"white"}>
              {audio.description}
            </Text>
          </Container>
        </Container>
      ))}
    </>
  );
};

export default AudioTopShowCase;
