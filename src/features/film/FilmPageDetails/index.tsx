import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { filmServicesData } from "./data";

const FilmPageDetails = () => {
  return (
    <Container maxW="container.xl" mt={10}>
      <Heading size={"xl"}>Our Film Services</Heading>
      <Flex mt={10}>
        {filmServicesData.map((service, index) => (
          <Box key={index} padding={5}>
            {<service.icon size={30} />}
            <Heading size={"lg"} mt={5}>
              {service.name}
            </Heading>
            <Text mt={5}>{service.description}</Text>
            <Link href={service.link} >
              <Button mt={5} borderRadius={50}>Learn More</Button>
            </Link>
          </Box>
        ))}
      </Flex>
    </Container>
  );
};

export default FilmPageDetails;
