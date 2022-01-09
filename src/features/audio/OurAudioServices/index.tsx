import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { OurAudioServicesData } from "./data";

const OurAudioServices = () => {
  return (
    <Container maxW="container.xl" mx="auto" px={4} py={6} mt={10}>
      <Heading as="h2" size="xl">
        Our Audio Services
      </Heading>
      <Box mt={[7, 10]}>
        <Flex
          justifyContent={["", "space-between"]}
          flexDirection={["column", "row"]}
        >
          {OurAudioServicesData.map((item, index) => (
            <Box key={index} ml={[0, 2]} mt={[2, 0]}>
              <Box
                backgroundColor={"gray.100"}
                height={[250, 350]}
                width={["", 350]}
                borderRadius={5}
                mr={[0, 1]}
                backgroundImage={`url(${item.image})`}
                backgroundSize={"cover"}
                backgroundPosition={"center"}
                backgroundRepeat={"no-repeat"}
                borderColor={"gray.50"}
                borderWidth={1}
              ></Box>
              <Box mt={4}>
                <Heading fontSize={18}>{item.title}</Heading>
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

export default OurAudioServices;
