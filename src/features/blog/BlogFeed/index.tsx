import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { blogFeedData } from "./data";
import { IoFish } from "react-icons/io5";
import Link from "next/link";

const BlogFeed = () => {
  return (
    <Container maxW="container.xl" mt={10}>
      <Heading size={"xl"} textAlign={"center"}>
        Our Blog
      </Heading>
      {blogFeedData.length === 0 ? (
        <Flex
        mt={20}
        mb={40}
          flexDirection={"column"}
          textAlign={"center"}
        >
          <Flex  justifyContent={"center"}>
            <Box backgroundColor={"gray.50"} padding={30} 
            borderRadius={100}
            >
              <IoFish size={100} />
            </Box>
          </Flex>
          <Box mt={10}>
            <Text>No blog posts yet.</Text>
            <Link href={"/"}>
              <Button borderRadius={50} mt={10}>Go to home page</Button>
            </Link>
          </Box>
        </Flex>
      ) : null}
    </Container>
  );
};

export default BlogFeed;
