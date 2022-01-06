import { Container, Box, Text, Badge, Heading, Button } from "@chakra-ui/react";
import React from "react";
import { movieShowCaseData } from "./data";

const MovieShowCase = () => {
  return (
    <>
      {movieShowCaseData.map((movie, index) => (
        <Container
          maxW="container.xl"
          key={index}
          backgroundImage={`url("${movie.image}")`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          borderRadius={10}
          height={600}
          p={1}
        >
          <Box
            w="100%"
            h="100%"
            borderRadius={10}
            bgGradient="linear(to-r, #0000007a, #d53f3f00)"
          >
            <Box 
                padding={4}
                paddingTop={"80px"}
            >
            <Box color="#fff">
              <Badge>{movie.genre}</Badge>
              <Badge ml={2}>{movie.releaseDate}</Badge>
            </Box>
            <Box>
              <Heading as="h2" size="3xl" fontWeight="bold" color="#fff">
                {movie.title}
              </Heading>
              <Heading
                as="h3"
                size="lg"
                fontWeight="light"
                color="#fff"
                mt={4}
                maxW={390}
              >
                {movie.comment}
              </Heading>
              <Text fontSize="xl" color="#fff" maxW={420} mt={4}>
                {movie.description}
              </Text>
            </Box>
            <Box mt={10}>
              <a href={movie.link} 
              target="_blank"
              rel="noopener noreferrer"
              >
              <Button borderRadius="50">Watch Movie</Button>
              </a>
            </Box>
            </Box>
          </Box>
        </Container>
      ))}
    </>
  );
};

export default MovieShowCase;
