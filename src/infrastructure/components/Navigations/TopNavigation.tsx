import {
  Box,
  Button,
  Center,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link as TextLink,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoLogoTwitter } from "react-icons/io";
import { FiAlignRight, FiX } from "react-icons/fi";

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
    // {
    //   name: "Publishing",
    //   path: "/publishing",
    //   isActive: pageTitle.name === "Publishing",
    // },
    {
      name: "Contact",
      path: "/contact",
      isActive: pageTitle.name === "Contact",
    },
    // {
    //   name: "Careers",
    //   path: "/careers",
    //   isActive: pageTitle.name === "Careers",
    // },
    // {
    //   name: "Shop",
    //   path: "/shop",
    //   isActive: pageTitle.name === "Shop",
    // },
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleDrawer = () => {
    onOpen();
  };
  return (
    <>
      <Head>
        <title>Swangs Avenue {`| ${pageTitle.name}`}</title>
        <meta
          name="description"
          content="Swangs Avenue website - built by https://looplystudio.com"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="container.xl" display={["none", "block"]}>
        <Box marginTop={22}>
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
          <Flex mt={5}>
            <Box cursor="pointer" flexShrink={0}>
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
      <Container maxW="container.xl" display={["block", "none"]} marginTop={22}>
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
        <Container maxW={"full"}>
          <Flex justifyContent={"space-between"}>
            <Box cursor="pointer" flexShrink={0}>
              <Link href={"/"}>
                <Image
                  src="/images/logos/iconlogo.png"
                  alt="logo"
                  width="50"
                  height="50"
                  title="Swangs Avenue Logo"
                />
              </Link>
            </Box>
            <Center>
            <Button
              onClick={handleDrawer}
              rightIcon={<FiAlignRight />}
              title="GET IN TOUCH"
              borderRadius="50"
            >
              MENU
            </Button>
            </Center>
          </Flex>
        </Container>
      </Container>
      <Drawer onClose={onClose} isOpen={isOpen} size={"full"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Button
              onClick={onClose}
              leftIcon={<FiX />}
              title="GET IN TOUCH"
              borderRadius="50"
            >
              CLOSE
            </Button>
          </DrawerHeader>
          <DrawerBody>
            <Flex flexDirection={"column"}>
              {pages.map((page: any, index: number) => (
                <Link key={index} href={page.path}>
                  <TextLink
                    onClick={onClose}
                    title={page.name}
                    fontWeight={page.isActive === true ? "bold" : "normal"}
                    textTransform="capitalize"
                    marginLeft={5}
                  >
                    {page.name}
                  </TextLink>
                </Link>
              ))}
              <a
                href={"https://twitter.com/Swangz_Avenue"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  onClick={onClose}
                  leftIcon={<IoLogoTwitter />}
                  title="GET IN TOUCH"
                  borderRadius="50"
                  width={"100%"}
                  mt={10}
                >
                  GET IN TOUCH
                </Button>
              </a>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default TopNavigation;
