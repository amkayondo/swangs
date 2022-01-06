import { Container } from "@chakra-ui/react";
import React from "react";
import BlogFeed from "../src/features/blog/BlogFeed";

const Blog = () => {
  return (
    <Container maxW="container.xl" mt={10}>
      <BlogFeed />
    </Container>
  );
};

export default Blog;
