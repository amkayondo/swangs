import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const TopEventShowCase = () => {
  return (
    <Container  maxW={["full", "container.xl"]}>
      <Container
        maxW={["full", "container.xl"]}
        backgroundImage={`url("/images/events/gnlzamba.jfif")`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        borderRadius={10}
        height={440}
        p={1}
      >
        <Container
          maxW="container.xl"
          height={"440"}
          borderRadius={12}
          paddingTop={"17%"}
        >
          <Box
            maxW={260}
            borderRadius={12}
            borderColor={"gray.50"}
            backgroundColor={"rgba(0, 0, 0, 0.19)"}
            padding={2}
          >
            <Heading
              color={"white"}
              fontWeight={"bold"}
              as="h2"
              mt={11}
              size="2lg"
            >
              RECENT EVENTS
            </Heading>
            <Heading color={"white"} as="h1" size="4xl">
              Koi Koi
            </Heading>
            <Heading
              color={"white"}
              fontWeight={"light"}
              as="h2"
              mt={11}
              size="2lg"
            >
              GLN Zamba
            </Heading>
            <a
              href={"https://www.youtube.com/watch?v=4BkypJzSeS0"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button borderRadius={50} mt={5}>
                Watch Now
              </Button>
            </a>
          </Box>
        </Container>
      </Container>
      <Container maxW="container.xl" mt={10}>
        <Flex justifyContent={"space-between"} flexDirection={["column", "row"]}>
          <Box width={["100%", "70%"]}>
            <Text fontSize={22}>
              Ready to host an event or musical tour? Need some help planning
              and promoting it? You're in the right place. We offer Event
              Planning, Event Promotion and Event Production Services for Any
              Type of Affair.
            </Text>
          </Box>
          <Box width={["100%", "30%"]} mt={[6, 0]}>
            <Flex
              justifyContent={"center"}
              height={"100%"}
              alignItems={"center"}
            >
              <Link href={"/contact"}>
                <Button title="GET IN TOUCH" width={["100%", "50%"]} borderRadius="50">
                  GET IN TOUCH
                </Button>
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Container>
  );
};

export default TopEventShowCase;
