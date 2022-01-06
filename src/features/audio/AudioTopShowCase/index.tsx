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
          height={"600"}
          borderRadius={12}
          backgroundImage={`url("${audio.image}")`}
          backgroundSize="cover"
          backgroundPosition="center"
          paddingTop={4}
          paddingBottom={4}
        >
          <Container
            maxW="container.xl"
            backgroundColor={"rgba(0, 0, 0, 0.19)"}
            height={"570"}
            width={"100%"}
            pt={"35%"}
            borderRadius={12}
          >
            <Heading color={"white"} as="h1" size="4xl">
              {audio.title}
            </Heading>
            <Text fontSize="lg" color={"white"}>
              {audio.description}
            </Text>
          </Container>
        </Container>
      ))}
    </>
  );
};

export default AudioTopShowCase;
