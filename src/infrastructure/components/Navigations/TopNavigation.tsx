import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Link as TextLink,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoLogoTwitter } from "react-icons/io";

const TopNavigation = () => {
  const [pageTitle, setPageTitle] = useState({
    name: "",
  });
  const router = useRouter();
  const pages = [
    {
      name: "Home",
      path: "/",
      isActive: pageTitle.name === "Home",
    },
    {
      name: "Events",
      path: "/events",
      isActive: pageTitle.name === "Events",
    },
    {
      name: "Film",
      path: "/film",
      isActive: pageTitle.name === "Film",
    },
    {
      name: "Blog",
      path: "/blog",
      isActive: pageTitle.name === "Blog",
    },
    {
      name: "Audio",
      path: "/audio",
      isActive: pageTitle.name === "Audio",
    },
    {
      name: "Publishing",
      path: "/publishing",
      isActive: pageTitle.name === "Publishing",
    },
    {
      name: "Contact",
      path: "/contact",
      isActive: pageTitle.name === "Contact",
    },
    {
      name: "Careers",
      path: "/careers",
      isActive: pageTitle.name === "Careers",
    },
    {
      name: "Shop",
      path: "/shop",
      isActive: pageTitle.name === "Shop",
    },
  ];
  const page:
    | {
        name: any;
        path: any;
      }
    | undefined = pages.find((page) => page.path === router.pathname);
  useEffect(() => {
    setPageTitle({
      name: page?.name,
    });
  }, [router.pathname]);
  return (
    <Container maxW="container.xl">
      <Box marginTop={22}>
        <Head>
          <title>Swangs Avenue {`| ${pageTitle.name}`}</title>
          <meta
            name="description"
            content="Swangs Avenue website - built by https://looplystudio.com"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Container
          maxW="container.xl"
          backgroundColor={"#00FFB2"}
          mb={4}
          pt={1}
          pb={1}
          borderRadius={3}
        >
          <Center>
            <Flex flexDirection="row">
              <a
                href="https://www.youtube.com/watch?v=fDS2Me1nErk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text fontSize="sm" fontWeight={"bold"}>
                  Watch our latest short film 'ROLEX'
                </Text>
              </a>
            </Flex>
          </Center>
        </Container>

        <Flex>
          <Box cursor="pointer">
            <Link href={"/"}>
              <Image
                src="/images/logos/iconlogo.png"
                alt="logo"
                width="70"
                height="70"
                title="Swangs Avenue Logo"
              />
            </Link>
          </Box>
          <Spacer />
          <Center width={"100%"} justifyContent={"center"}>
            {pages.map((page: any, index: number) => (
              <Link key={index} href={page.path}>
                <TextLink
                  title={page.name}
                  fontWeight={page.isActive === true ? "bold" : "normal"}
                  textTransform="capitalize"
                  marginLeft={5}
                >
                  {page.name}
                </TextLink>
              </Link>
            ))}
          </Center>
          <Spacer />
          <Center>
            <a
              href={"https://twitter.com/Swangz_Avenue"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                leftIcon={<IoLogoTwitter />}
                title="GET IN TOUCH"
                borderRadius="50"
              >
                GET IN TOUCH
              </Button>
            </a>
          </Center>
        </Flex>
      </Box>
    </Container>
  );
};

export default TopNavigation;
