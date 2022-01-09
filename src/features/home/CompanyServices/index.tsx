import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Link as TextLink,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { companyService } from "../BriefDescription/data";
import { IoArrowForwardSharp } from "react-icons/io5";

const CompanyServices = () => {
  return (
    <Container maxW="container.xl" mt={10}>
      <Flex
        flexDirection={["column", "row"]}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Heading>Our Services</Heading>

        <Link href={"/services"}>
          <TextLink borderRadius={50}>See All</TextLink>
        </Link>
      </Flex>
      <Container maxW="container.xl" mt={5}>
        <Flex flexDirection={["column", "row"]}>
          {companyService.map((service, index) => (
            <Box key={index} ml={[0, 2]} mt={[7, 0]}>
              <Box
                backgroundColor={"gray.100"}
                height={[200, 300]}
                width={["100%", 280]}
                borderRadius={5}
                mr={1}
                backgroundImage={`url(${service.image})`}
                backgroundSize={"cover"}
                backgroundPosition={"center"}
                backgroundRepeat={"no-repeat"}
                borderColor={"gray.50"}
                borderWidth={1}
              ></Box>
              <Box mt={4}>
                <Heading fontSize={18}>{service.name}</Heading>
                <Box mt={3} height={109}>
                  <Text>{service.description}</Text>
                </Box>
                <Link href={service.link}>
                  <Button
                    mt={[6, 3]}
                    width={10}
                    borderRadius={50}
                    leftIcon={
                      <IoArrowForwardSharp
                        style={{
                          fontSize: "1rem",
                          marginLeft: "0.5rem",
                          color: "#000",
                        }}
                      />
                    }
                  />
                </Link>
              </Box>
            </Box>
          ))}
        </Flex>
      </Container>
    </Container>
  );
};

export default CompanyServices;
