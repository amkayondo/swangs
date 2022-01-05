import { Container } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import BriefDescription from "../src/features/home/BriefDescription";
import FeedShowCase from "../src/features/home/FeedShowCase";
import CompanyServices from '../src/features/home/CompanyServices'

const Home = () => {
  return (
    <Container maxW="container.xl">
      <FeedShowCase />
      <BriefDescription />
      <CompanyServices />
    </Container>
  );
};

export default Home;
