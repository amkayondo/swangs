import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Link as TextLink,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { companyService } from "../BriefDescription/data";

const CompanyServices = () => {
  return (
    <Container maxW="container.xl" mt={10}>
      <Flex
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Heading>Our Services</Heading>
        
         
        
      </Flex>
      <Container maxW="container.xl" mt={5}>
        <Flex flexDirection={"row"}>
          {companyService.map((service, index) => (
            <Link href={service.link} key={index}>
              <Box
                backgroundColor={"gray.100"}
                height={300}
                width={220}
                borderRadius={5}
                mr={1}
              ></Box>
            </Link>
          ))}
          <Center width={"15%"}>
          <Link href={"/services"}>
            <Button borderRadius={50}>See All</Button></Link>
          </Center>
        </Flex>
      </Container>
    </Container>
  );
};

export default CompanyServices;
