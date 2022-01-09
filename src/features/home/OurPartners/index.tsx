import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { ourPartnersList } from "./data";

const OurPartners = () => {
  return (
    <Container maxW="container.xl" mt={20} mb={["20", 40]}>
      <Box width={"100%"} textAlign={"center"}>
        <Text fontSize="2xl">
          Trusted by over
          <span
            style={{
              fontWeight: "bold",
            }}
          >
            12,000
          </span>{" "}
          Companies
        </Text>
      </Box>
      <Box height={57} mt={8} width={"100%"}>
      <Grid
          display={[ "none", "block"]}
          templateColumns="repeat(5, 1fr)"
          gap={ourPartnersList.length}
        >
          <Flex justifyContent={"space-between"}>
          {ourPartnersList.map((partner, index) => (
            <GridItem w="100%" h="10" key={index}>
              <a href={partner.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  title={partner.name}
                  width={90}
                  height={90}
                />
              </a>
            </GridItem>
          ))}
          </Flex>
        </Grid>
        <Grid
          display={["block", "none"]}
          templateColumns="repeat(5, 1fr)"
          gap={ourPartnersList.length}
        >
          <Flex>
          {ourPartnersList.map((partner, index) => (
            <GridItem w="100%" h="10" key={index}>
              <a href={partner.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  title={partner.name}
                  width={90}
                  height={90}
                />
              </a>
            </GridItem>
          ))}
          </Flex>
        </Grid>
      </Box>
    </Container>
  );
};

export default OurPartners;
