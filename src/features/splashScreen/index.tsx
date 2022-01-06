import { Box, Center, Container, Flex, Spinner } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const SplashScreen = () => {
  return (
    <Container maxW="container.xl" mt={10}>
      <Center mt={"15%"}>
        <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
          <Image
            src={"/images/logos/iconlogo.png"}
            alt="logo"
            width={150}
            height={150}
          />
          <Spinner
            speed="0.65s"
            color="#C2A22B"
            height={20}
            width={20}
            mt={90}
          />
        </Flex>
      </Center>
    </Container>
  );
};

export default SplashScreen;
