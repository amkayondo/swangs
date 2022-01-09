import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { ourPartnersList } from "./data";

const OurPartners = () => {
  return (
    <Container maxW="container.xl" mt={20} mb={["80", 40]}>
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
        <Flex
          justifyContent={"center"}
          flexDirection={["column", "row"]}
          alignItems={"center"}
        >
          {ourPartnersList.map((partner, index) => (
            <Box key={index} mr={20}>
              <a href={partner.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  title={partner.name}
                  width={90}
                  height={90}
                />
              </a>
            </Box>
          ))}
        </Flex>
      </Box>
    </Container>
  );
};

export default OurPartners;
