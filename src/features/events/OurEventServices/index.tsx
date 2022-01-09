import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { OurEventServicesData } from "./data";

const OurEventServices = () => {
  return (
    <Container maxW="container.xl"  mt={10}>
      <Heading as="h2" size="xl">
        Our Event Services
      </Heading>
      <Box mt={[5, 10]}>
        <Flex justifyContent={[""]} flexDirection={["column", "row"]}>
          {OurEventServicesData.map((item, index) => (
            <Box key={index} ml={[0,2]} mt={[4, 0]}>
              <Box
                backgroundColor={"gray.100"}
                height={["250", 350]}
                width={["100%", 350]}
                borderRadius={5}
                mr={[0,1 ]}
                backgroundImage={`url(${item.image})`}
                backgroundSize={"cover"}
                backgroundPosition={"center"}
                backgroundRepeat={"no-repeat"}
                borderColor={"gray.50"}
                borderWidth={1}
              ></Box>
              <Box mt={4}>
                <Heading fontSize={18}>{item.name}</Heading>
                <Box mt={3} minH={109} maxW={350}>
                  <Text>{item.description}</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </Container>
  );
};

export default OurEventServices;
