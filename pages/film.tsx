import { Container } from "@chakra-ui/react";
import React from "react";
import FilmPageDetails from "../src/features/film/FilmPageDetails";
import MovieShowCase from "../src/features/film/MovieShowCase";

const Film = () => {
  return (
    <Container maxW={"container.xl"}>
      <MovieShowCase />
      <FilmPageDetails />
    </Container>
  );
};

export default Film;
