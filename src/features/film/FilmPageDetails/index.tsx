import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { filmServicesData } from "./data";

const FilmPageDetails = () => {
  return (
    <Container maxW={["full", "container.xl"]} mt={[5, 10]}>
      <Heading  size={"xl"}>
        Our Film Services
      </Heading>
      <Flex mt={[-3, 10]} flexDirection={["column", "row"]}>
        {filmServicesData.map((service, index) => (
          <Box key={index} padding={[1, 5]} mt={[7, 0]}>
            {<service.icon size={30} />}
            <Heading size={"lg"} mt={5}>
              {service.name}
            </Heading>
            <Text mt={5}>{service.description}</Text>
            <Link href={service.link}>
              <Button width={["100%", "150px"]} mt={5} borderRadius={50}>
                Learn More
              </Button>
            </Link>
          </Box>
        ))}
      </Flex>
    </Container>
  );
};

export default FilmPageDetails;
