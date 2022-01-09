import { Box, Container, Flex, Heading, Text, Center } from "@chakra-ui/react";
import React from "react";
import { ContactDetailsData } from "./data";

const ContactDetails = () => {
  return (
    <Container maxW="container.xl">
      <Flex flexDirection={"column"} justifyContent={"center"} textAlign={"center"}>
        <Heading>Get in touch</Heading>
        <Text mt={5} pl={["0","20%"]} pr={["0","20%"]}>
          To request a quote for your next project or discuss how we can help
          you with your event, music or video production needs, please fill out
          the form below or call the numbers below.
        </Text>
      </Flex>
      <Flex justifyContent={["", "space-around"]} mt={[2, 12]} flexDirection={["column", "row"]}>
        {ContactDetailsData.map((contact, index) => (
          <Box mt={[10, 0]} key={index}>
            <a href={contact.link} target="_blank" rel="noopener noreferrer">
              <Box>
                <Center>
                  {
                    <contact.icon
                      style={{
                        fontSize: "40px",
                        backgroundColor: "#edf2f7",
                        borderRadius: "50%",
                        padding: "10px",
                        height: "50px",
                        width: "50px",
                      }}
                    />
                  }
                </Center>
              </Box>
              <Box
                mt={[4, 2]}
                textAlign={"center"}
                maxW={300}
              >
                <Text fontweight={"bold"}>{contact.text}</Text>
              </Box>
            </a>
          </Box>
        ))}
      </Flex>
    </Container>
  );
};

export default ContactDetails;
