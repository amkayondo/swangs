import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Text,
  Link as TextLink,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillPhone } from "react-icons/ai";
import companyRoutes, { companySocialMedia } from "./data/companyRoutes";
import siteMapRoutes from "./data/siteMapRoutes";

const FooterNavigation = () => {
  return (
    <Container
      paddingTop={22}
      paddingBottom={51}
      backgroundColor={"gray.50"}
      // height={400}
      mt={39}
      borderRadius={12}
      mb={11}
      maxW={["full", "container.xl"]}
    >
      <Container maxW={"container.lg"} mt={10}>
        <Flex
          justifyContent={"space-between"}
          flexDirection={["column", "row"]}
        >
          <Heading as="h2" size="xl" maxW={500}>
            Let's work together on your next project.
          </Heading>
          <Link href={"/contact"}>
            <Button
              mt={["10", "0"]}
              leftIcon={<AiFillPhone />}
              title="GET IN TOUCH"
              borderRadius="50"
              textTransform={"uppercase"}
              backgroundColor={"#fff"}
            >
              schedule a call
            </Button>
          </Link>
        </Flex>
      </Container>
      <Container maxW="container.lg" mt={-10}>
        <Divider
          colorScheme={"black"}
          size={"11"}
          mt={20}
          variant={"solid"}
          style={{
            backgroundColor: "black",
            height: "1px",
          }}
        />
      </Container>
      <Container maxW="container.lg" mt={10}>
        <Flex flexDirection={["column", "row"]}>
          <Flex flexDirection={"column"}>
            <Box width={200}>
              <Image
                src={"/images/logos/logowithwords.png"}
                height={70}
                width={200}
              />
            </Box>
            <Box>
              <Text>
                Swangz Avenue is one of the leading Audio and Film Production
                Companies in Kampala, Uganda, and East Africa, specializing in
                Video Production, TV Commercial (TVC) production, Events
                Promotion, and Talent Management.
              </Text>
            </Box>
          </Flex>
          <Flex ml={[0, 10]} mt={[4, 0]} flexDirection={"column"}>
            <Box>
              <Text fontWeight={"bold"}>Site Map </Text>
            </Box>
            <Box>
              <Flex flexDirection={"column"}>
                {siteMapRoutes.map((route: any, index: number) => (
                  <Link key={index} href={route.path}>
                    <TextLink mt={2} title={route.name}>
                      {route.name}
                    </TextLink>
                  </Link>
                ))}
              </Flex>
            </Box>
          </Flex>
          <Flex  ml={[0, 10]} mt={[4, 0]}  flexDirection={"column"}>
            <Box>
              <Text fontWeight={"bold"}>Company</Text>
            </Box>
            <Box>
              <Flex flexDirection={"column"}>
                {companyRoutes.map((route: any, index: number) => (
                  <Link key={index} href={route.path}>
                    <TextLink mt={2} title={route.name}>
                      {route.name}
                    </TextLink>
                  </Link>
                ))}
              </Flex>
            </Box>
          </Flex>
          <Flex  ml={[0, 10]} mt={[4, 0]}  flexDirection={"column"}>
            <Box>
              <Text fontWeight={"bold"}>Swangs Avenue</Text>
            </Box>
            <Box>
              <Flex flexDirection={"column"}>
                <Text>3rd Street, The Square, 2nd Floor. Kampala, Uganda</Text>
                <Text>+256 (0) 417 892 000</Text>
                <Text>swangzavenue@gmail.com</Text>
              </Flex>
            </Box>
          </Flex>
        </Flex>
        <Box mt={8} ml={[-2, 0]}>
          <Flex flexDirection={["column", "row"]}>
            {companySocialMedia.map((socialMedia: any, index: number) => (
              <a
                key={index}
                href={socialMedia.path}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginLeft: 5,
                }}
              >
                <Text fontWeight={"bold"}>{socialMedia.name}</Text>
              </a>
            ))}
          </Flex>
        </Box>
      </Container>
      <Container maxW="container.lg" mt={-14}>
        <Divider
          colorScheme={"black"}
          size={"11"}
          mt={20}
          variant={"solid"}
          style={{
            backgroundColor: "black",
            height: "1px",
          }}
        />
      </Container>

      <Container maxW="container.lg" mt={1}>
        <Flex flexDirection={["column", "row"]} mt={17} justifyContent={"space-between"}>
          <Box>
            <Text fontSize="sm" fontWeight={"bold"}>
              © Swangz Avenue 2022
            </Text>
          </Box>
          <Box mt={[2, 0]}>
            <Flex>
              <Text fontSize="sm">Crafted with ❤ by </Text>
              <a
                href="https://twitter.com/kayondoedward"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text fontSize="sm" fontWeight="bold">
                  &nbsp;Kayondo Edward
                </Text>
              </a>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Container>
  );
};

export default FooterNavigation;
